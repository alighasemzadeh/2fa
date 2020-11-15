<?php

namespace Litstack\TwoFA;

use Ignite\Crud\CrudShow;
use Ignite\Routing\Router;
use Ignite\Support\Facades\Lit;
use Ignite\Translation\Translator;
use Illuminate\Support\ServiceProvider;

class TwoFAServiceProvider extends ServiceProvider
{
    /**
     * Register application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('lit.2fa', function () {
            return new Google2FA;
        });

        $this->callAfterResolving('lit.page', function ($page) {
            $page->extend([
                \Lit\Config\User\ProfileSettingsConfig::class,
                'security',
            ], function (CrudShow $page) {
                return $page->card(function (CrudShow $page) {
                    $page->component('lit-two-fa');
                })->title(ucwords(__lit('2fa.2fa')));
            });
        });
    }

    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/../views', 'litstack-2fa');

        Lit::script(__DIR__.'/../dist/2fa.js');
        Lit::loginScript(__DIR__.'/../dist/2fa-login.js');

        $this->callAfterResolving('lit.translator', function (Translator $translator) {
            $translator->addPath(__DIR__.'/../lang');
        });

        $this->callAfterResolving('lit.router', function (Router $router) {
            $router->post('2fa/request', [TwoFAController::class, 'request'])->name('2fa.request');
            $router->post('2fa/activate', [TwoFAController::class, 'activate'])->name('2fa.activate');
        });

        $this->callAfterResolving('lit.auth', function ($auth) {
            $auth->attempting(function ($user, $params) {
                if (! $user instanceof Authenticable) {
                    return true;
                }

                if (! $user->is2FAEnabled()) {
                    return true;
                }

                validator($params, [
                    'code' => ['required', 'string', new TwoFARule($user)],
                ])->validate();

                return true;
            });
        });
    }
}
