(function(){"use strict";var e={8910:function(e,t,a){a(5769),a(1418),a(8410),a(1370);var r=a(4415),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),a("div",{staticClass:"demo"},[e._m(1),a("div",{staticClass:"contents"},[a("button",{on:{click:function(t){e.modal=!0}}},[a("span",[e._v(" Open swipe-modal ")])])])]),a("div",{staticClass:"inputs"},[e._m(2),a("div",{staticClass:"contents"},e._l(e.propsValue,(function(t,r){return a("div",{key:r},["text"===t.type?a("div",{staticClass:"input-field"},[a("label",{attrs:{for:t.name}},[e._v(" "+e._s(t.name)+" ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"prop.value"}],attrs:{type:"text",id:t.name},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}})]):e._e(),"checkbox"===t.type?a("div",{staticClass:"switch "},[a("label",{staticClass:"label",attrs:{for:t.name}},[e._v(e._s(t.name))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"prop.value"}],attrs:{type:"checkbox",id:t.name},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{change:function(a){var r=t.value,n=a.target,o=!!n.checked;if(Array.isArray(r)){var s=null,i=e._i(r,s);n.checked?i<0&&e.$set(t,"value",r.concat([s])):i>-1&&e.$set(t,"value",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(t,"value",o)}}})]):e._e()])})),0)]),e._m(3),a("swipe-modal",{attrs:{dark:e.propsValue.dark.value,persistent:e.propsValue.persistent.value,"backgroundC-color":e.propsValue.backgroundColor.value,fullscreen:e.propsValue.fullscreen.value,"no-tip":e.propsValue.noTip.value,"contents-width":e.propsValue.contentsWidth.value,"contents-height":e.propsValue.contentsHeight.value,"border-top-radius":e.propsValue.borderTopRadius.value,"border-top-left-radius":e.propsValue.borderTopLeftRadius.value,"border-top-right-radius":e.propsValue.borderTopRightRadius.value,"contents-color":e.propsValue.contentsColor.value,"tip-color":e.propsValue.tipColor.value,"dark-contents-color":e.propsValue.darkContentsColor.value},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("div",{staticStyle:{padding:"24px"}},[e._v(" vue-swipe-modal ")])])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"marker"}),a("h1",[e._v(" @takuma-ru/vue-swipe-modal [Demo] ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sub-header"},[a("div",{staticClass:"marker"}),a("h2",[e._v(" Result ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sub-header"},[a("div",{staticClass:"marker"}),a("h2",[e._v(" Prop Field ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"links"},[a("div",{staticClass:"sub-header"},[a("div",{staticClass:"marker"}),a("h2",[e._v(" Links ")])]),a("div",{staticClass:"contents"},[e._v(" links ")])])}],s=a(9201),i=a(4223),l=(0,s.aZ)({components:{"swipe-modal":i.B},setup:function(){var e=(0,s.iH)(!1),t=(0,s.qj)({dark:{type:"checkbox",value:!1,name:"dark"},persistent:{type:"checkbox",value:!1,name:"persistent"},backgroundColor:{type:"text",value:"#80808080",name:"background-color"},fullscreen:{type:"checkbox",value:!1,name:"fullscreen"},noTip:{type:"checkbox",value:!1,name:"no-tip"},contentsWidth:{type:"text",value:"100%",name:"contents-width"},contentsHeight:{type:"text",value:"30vh",name:"contents-height"},borderTopRadius:{type:"text",value:void 0,name:"border-top-radius"},borderTopLeftRadius:{type:"text",value:"0px",name:"border-top-left-radius"},borderTopRightRadius:{type:"text",value:"0px",name:"border-top-right-radius"},contentsColor:{type:"text",value:"white",name:"contents-color"},tipColor:{type:"text",value:"#c8c8c8",name:"tip-color"},darkContentsColor:{type:"text",value:"#1E1E1E",name:"dark-contetns-color"}});return{modal:e,propsValue:t}}}),u=l,c=a(9917),p=(0,c.Z)(u,n,o,!1,null,"6e1577f6",null),v=p.exports;r.Z.use(s.ZP),r.Z.config.productionTip=!1,new r.Z({render:function(e){return e(v)}}).$mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],o=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],i=r[1],l=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var c=l(a)}for(t&&t(r);u<s.length;u++)o=s[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=self["webpackChunkvue2_app"]=self["webpackChunkvue2_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(8910)}));r=a.O(r)})();
//# sourceMappingURL=app-legacy.11b18e72.js.map