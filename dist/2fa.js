(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return F()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={};function _(){}function m(){}function y(){}var g={};g[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==r&&n.call(w,a)&&(g=w);var x=y.prototype=_.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),c(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(757),e=r.n(t);function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}function a(t,e,r,n,o,a,i,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}const i=a({name:"LitTwoFA",props:{model:{type:Object,required:!0}},data:function(){return{qr:null,secret:null,form:{password:null,code:null},state:{password:[],code:[]}}},methods:{request2FA:function(){var t=this;return o(e().mark((function r(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("2fa/request");case 3:n=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 10:t.qr=n.data.qr,t.secret=n.data.secret,t.$bvModal.show("2fa-modal");case 13:case"end":return e.stop()}}),r,null,[[0,6]])})))()},activate:function(t){var r=this;return o(e().mark((function n(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,axios.post("2fa/activate",r.form);case 4:e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),r.handleActivationFailure(e.t0),e.abrupt("return");case 11:r.state.password=[],r.state.code=[],window.location.reload();case 14:case"end":return e.stop()}}),n,null,[[1,7]])})))()},handleActivationFailure:function(t){this.state.password=t.response.data.errors.password||[],this.state.code=t.response.data.errors.code||[]}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("lit-col",{staticClass:"mb-2"},[t.model.two_fa_enabled?[r("div",{staticClass:"mb-3"},[r("span",[r("i",{staticClass:"fas fa-check text-success mr-2"}),t._v("\n\t\t\t\t"+t._s(t.__("2fa.messages.protected"))+"\n\t\t\t")])])]:[r("div",{staticClass:"d-flex justify-content-between"},[r("div",{staticStyle:{"line-height":"100px"}},[r("i",{staticClass:"fas fa-shield-alt text-secondary",staticStyle:{"font-size":"3em"}})]),t._v(" "),r("span",{staticClass:"ml-3",domProps:{innerHTML:t._s(t.__("2fa.messages.info"))}})]),t._v(" "),r("h6",{staticClass:"mb-3"},[t._v("\n\t\t\t"+t._s(t.__("2fa.messages.how-it-works"))+"\n\t\t")]),t._v(" "),r("p",[t._v(t._s(t.__("2fa.messages.when-logging-in")))]),t._v(" "),r("ol",[r("li",[t._v(t._s(t.__("2fa.messages.step-1")))]),t._v(" "),r("li",[t._v(t._s(t.__("2fa.messages.step-2")))])]),t._v(" "),r("b-button",{staticClass:"mt-3 mb-3",attrs:{variant:"primary"},on:{click:function(e){return t.request2FA()}}},[t._v("\n\t\t\t"+t._s(t.__("2fa.activate").capitalizeAll())+"\n\t\t")]),t._v(" "),r("b-modal",{attrs:{id:"2fa-modal",size:"lg","ok-title":"Activate"},on:{ok:t.activate},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.__("2fa.activate").capitalizeAll())+"\n\t\t\t")]},proxy:!0}],null,!1,1630685287)},[t._v(" "),r("b-list-group",[r("b-list-group-item",[r("h6",{staticClass:"mb-3"},[t._v("\n\t\t\t\t\t\t1. "+t._s(t.__("2fa.messages.activate.step-1"))+"\n\t\t\t\t\t")]),t._v(" "),r("p",[t._v("\n\t\t\t\t\t\t"+t._s(t.__("2fa.messages.activate.install-app"))+"\n\t\t\t\t\t")]),t._v(" "),r("ul",[r("li",[r("lit-fa-icon",{attrs:{icon:["fab","apple"]}}),t._v(" "),r("a",{attrs:{href:"https://apps.apple.com/de/app/2fa-authenticator-2fas/id1217793794",target:"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t2FA Authenticator (2FAS)\n\t\t\t\t\t\t\t")])],1),t._v(" "),r("li",[r("lit-fa-icon",{attrs:{icon:["fab","android"]}}),t._v(" "),r("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=de&gl=US",target:"_blank"}},[t._v("\n\t\t\t\t\t\t\t\tGoogle Authenticator\n\t\t\t\t\t\t\t")])],1)])]),t._v(" "),r("b-list-group-item",[r("h6",{staticClass:"mb-3"},[t._v("\n\t\t\t\t\t\t2. "+t._s(t.__("2fa.messages.activate.step-1"))+"\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"d-flex justify-content-between"},[r("div",[r("p",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.__("2fa.messages.activate.scan-qr"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),r("p",{},[r("span",{domProps:{innerHTML:t._s(t.__("2fa.messages.activate.key"))}}),t._v(" "),r("strong",[t._v(t._s(t.secret))])])]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.qr)}})])]),t._v(" "),r("b-list-group-item",[r("h6",{staticClass:"mb-3"},[t._v("\n\t\t\t\t\t\t3. "+t._s(t.__("2fa.messages.activate.step-3"))+"\n\t\t\t\t\t")]),t._v(" "),r("p",[t._v("\n\t\t\t\t\t\t"+t._s(t.__("2fa.messages.activate.enter-password"))+"\n\t\t\t\t\t")]),t._v(" "),r("b-form-group",{attrs:{id:"lit-2fa-password",label:t.__("2fa.messages.activate.current-password"),"label-for":"lit-2fa-password"}},[r("b-form-input",{attrs:{id:"lit-2fa-password",type:"password",state:0==t.state.password.length&&null,placeholder:"***"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),t._l(t.state.password,(function(e,n){return r("b-form-invalid-feedback",{key:n},[t._v("\n\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t")])}))],2)],1),t._v(" "),r("b-list-group-item",[r("h6",{staticClass:"mb-3"},[t._v("\n\t\t\t\t\t\t4. "+t._s(t.__("2fa.messages.activate.step-4"))+"\n\t\t\t\t\t")]),t._v(" "),r("b-form-group",{attrs:{id:"lit-2fa-code",label:t.__("2fa.code"),"label-for":"lit-2fa-code"}},[r("b-form-input",{attrs:{id:"lit-2fa-code",state:0==t.state.code.length&&null},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),t._v(" "),t._l(t.state.code,(function(e,n){return r("b-form-invalid-feedback",{key:n},[t._v("\n\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t")])}))],2)],1)],1)],1)]],2)}),[],!1,null,null,null).exports;function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}const c=a({name:"LitFieldVerify",props:{field:{required:!0,type:Object},value:{required:!0}},data:function(){return{showModal:!1,state:null,messages:[]}},computed:{user:function(){return Lit.user()}},beforeMount:function(){Lit.bus.$on("saved",this.checkForErrors)},methods:{verify:function(t){t.preventDefault(),Lit.bus.$emit("save")},update:function(t){this.$emit("input",t)},resetErrors:function(){this.showModal=!1,this.state=null,this.messages=[]},checkForErrors:function(t){var e=t.findFailed(this.field._method,this.field.route_prefix);if(!e)return this.resetErrors();if(!e.isAxiosError)return this.resetErrors();var r=this.findErrors(e);if(!r||_.isEmpty(r))return this.resetErrors();!0===this.showModal&&(this.state=!1,this.messages=r),this.showModal=!0},findErrors:function(t){if(s(t.response.data)==s({})&&"errors"in t.response.data){if(!this.field.translatable)return t.response.data.errors[this.field.local_key];var e=[];for(var r in t.response.data.errors){var n=t.response.data.errors[r];if(r.endsWith("."+this.field.local_key))for(var o in n){var a=n[o];e.push(a)}}return e}}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{attrs:{title:"Hello","ok-title":t.__("2fa.verify").capitalize(),"cancel-title":t.__("base.cancel").capitalize()},on:{ok:t.verify},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[r("template",{slot:"modal-title"},[t._v("\n\t\t"+t._s(t.__("2fa.verify").capitalize())+"\n\t")]),t._v(" "),r("div",{staticClass:"d-flex justify-content-around"},[r("div",{staticClass:"rounded-circle my-3 text-center",staticStyle:{background:"#d3dde6",height:"100px",width:"100px","line-height":"100px"}},[r("lit-fa-icon",{staticClass:"text-secondary",staticStyle:{"font-size":"50px",display:"inline-block","vertical-align":"middle",transform:"translateY(-3px)"},attrs:{icon:"lock"}})],1)]),t._v(" "),r("div",[r("b-form-group",{attrs:{"label-for":"otp-"+t.field.id}},[r("template",{slot:"label"},[t._v("\n\t\t\t\t"+t._s(t.user.two_fa_enabled?t.__("2fa.code"):t.__("base.password"))+"\n\t\t\t")]),t._v(" "),r("b-form-input",{attrs:{id:"otp-"+t.field.id,type:t.user.two_fa_enabled?"text":"password",placeholder:t.user.two_fa_enabled?"000 000":"***",state:t.state},on:{input:t.update}}),t._v(" "),t._l(t.messages,(function(e,n){return r("b-form-invalid-feedback",{key:n,style:"display:"+(null==t.state?"none":"block")},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])}))],2)],1)],2)}),[],!1,null,null,null).exports;console.log("Hi"),Lit.booting((function(t){t.component("lit-two-fa",i),t.component("lit-field-verify",c)}))})()})();