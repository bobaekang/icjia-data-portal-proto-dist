(function(e){function t(t){for(var c,o,a=t[0],s=t[1],i=t[2],f=0,d=[];f<a.length;f++)o=a[f],r[o]&&d.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],c=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(c=!1)}c&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},o={app:0},r={app:0},u=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0b431cc6":"aa427f4e","chunk-18fbf365":"03c23c4e","chunk-19bffbea":"5fb78b00","chunk-19e45dec":"5649e17e","chunk-2984f280":"141904c6","chunk-2d20f173":"741a5395","chunk-2d216235":"ae7ec575","chunk-2d21d846":"a673134a","chunk-2d221e09":"5cf998b2","chunk-0484444f":"884fd1a8","chunk-04bf3c66":"44584727","chunk-3987dd10":"a7616a2c","chunk-6f226644":"a3cb7914","chunk-2d225f0a":"7bea16e8","chunk-2f0d915c":"8cdbe4d4","chunk-566ac790":"e15fc71f","chunk-681f2b3e":"d7cb2408","chunk-ce2d1a30":"adce6320"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0484444f":1,"chunk-04bf3c66":1,"chunk-3987dd10":1,"chunk-6f226644":1,"chunk-566ac790":1,"chunk-681f2b3e":1,"chunk-ce2d1a30":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-0b431cc6":"31d6cfe0","chunk-18fbf365":"31d6cfe0","chunk-19bffbea":"31d6cfe0","chunk-19e45dec":"31d6cfe0","chunk-2984f280":"31d6cfe0","chunk-2d20f173":"31d6cfe0","chunk-2d216235":"31d6cfe0","chunk-2d21d846":"31d6cfe0","chunk-2d221e09":"31d6cfe0","chunk-0484444f":"83f0d8f7","chunk-04bf3c66":"0c518372","chunk-3987dd10":"02dfdcc3","chunk-6f226644":"02dfdcc3","chunk-2d225f0a":"31d6cfe0","chunk-2f0d915c":"31d6cfe0","chunk-566ac790":"7adb0d3d","chunk-681f2b3e":"b7c620ae","chunk-ce2d1a30":"476ddcde"}[e]+".css",o=s.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var a=r[u],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===c||i===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){a=f[u],i=a.getAttribute("data-href");if(i===c||i===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.request=c,n(r)},d.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(d)}).then(function(){o[e]=0}));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var u=new Promise(function(t,n){c=r[e]=[t,n]});t.push(c[2]=u);var i,f=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=a(e),i=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+c+": "+o+")");u.type=c,u.request=o,n[1](u)}r[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,f.appendChild(d)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/a-dist/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025e":function(e,t,n){"use strict";function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"./views",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=o(e,!1),a=r(e,t),s={path:u,component:function(){return n("d43f")("".concat(a))}};return null!=c&&(s.children=c),s}n.r(t),n.d(t,"makeRoute",function(){return c});var o=function(e,t){return"home"==e?"/":t?e:"/".concat(e)},r=function(e,t){return"".concat(t,"/").concat(e.charAt(0).toUpperCase()+e.slice(1),".vue")}},"034f":function(e,t,n){"use strict";var c=n("64a9"),o=n.n(c);o.a},"3dfd":function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-toolbar"),n("router-view"),n("app-button-back-to-top"),n("app-footer")],1)},o=[],r=(n("cadf"),n("551c"),n("097d"),n("6908")),u=n("46a8"),a=n("fd2d"),s={components:{AppToolbar:r["default"],AppButtonBackToTop:u["default"],AppFooter:a["default"]}},i=s,f=(n("034f"),n("2877")),d=Object(f["a"])(i,c,o,!1,null,null,null);d.options.__file="App.vue";t["default"]=d.exports},"41cb":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var c=n("2b0e"),o=n("8c4f"),r=n("025e");c["default"].use(o["a"]),t["default"]=new o["a"]({routes:["home","dataset","research","apps","resources","about"].map(function(e){return r["makeRoute"](e)}),scrollBehavior:function(){return{x:0,y:0}}})},"46a8":function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#bbb"},on:{click:e.toTop}},[n("v-icon",[e._v("keyboard_arrow_up")])],1)},o=[],r={data:function(){return{fab:!1}},methods:{onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>50}},toTop:function(){this.$vuetify.goTo(0)}}},u=r,a=n("2877"),s=Object(a["a"])(u,c,o,!1,null,null,null);s.options.__file="ButtonBackToTop.vue";t["default"]=s.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var c=n("2b0e"),o=n("ce5b"),r=n.n(o),u=(n("bf40"),n("3dfd")),a=n("41cb");c["default"].config.productionTip=!1,c["default"].use(r.a),new c["default"]({router:a["default"],render:function(e){return e(u["default"])}}).$mount("#app")},"64a9":function(e,t,n){},6908:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{id:"toolbar",height:e.hpixel,fixed:"","scroll-off-screen":""}},[n("a",{attrs:{href:e.logo.href,target:"_blank"}},[n("img",{attrs:{src:e.logo.url,height:e.logoHpixel,alt:"logo"}})]),n("router-link",{attrs:{to:"/"}},[n("v-toolbar-title",[e._v("\n                "+e._s(e.titleUpper)+"\n            ")])],1),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},e._l(e.views,function(t){return n("v-btn",{key:t,attrs:{to:"/"+t,flat:""}},[e._v("\n                "+e._s(t)+"\n            ")])})),n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[n("v-icon",[e._v("menu")])],1),n("v-list",e._l(e.views,function(t,c){return n("v-list-tile",{key:c,attrs:{to:"/"+t}},[n("v-list-tile-title",{staticClass:"slot"},[e._v("\n                        "+e._s(t)+"\n                    ")])],1)}))],1)],1),n("div",{style:{height:e.hpixel}})],1)},o=[],r=(n("cadf"),n("551c"),n("097d"),{data:function(){return{height:75,title:"ICJIA data portal",views:["dataset","research","apps","resources","about"],logo:{url:"http://www.icjia.state.il.us/_themes/icjia/img/logo-icjia-small-blue-3.png",href:"http://www.icjia.state.il.us"}}},computed:{titleUpper:function(){return this.title.toUpperCase()},hpixel:function(){return"".concat(this.height,"px")},logoHpixel:function(){return"".concat(.85*this.height,"px")}}}),u=r,a=(n("daed"),n("2877")),s=Object(a["a"])(u,c,o,!1,null,"87b9aa4c",null);s.options.__file="Toolbar.vue";t["default"]=s.exports},"72df":function(e,t,n){},"760c":function(e,t,n){"use strict";var c=n("b675"),o=n.n(c);o.a},b675:function(e,t,n){},d43f:function(e,t,n){var c={"./App":["3dfd",9],"./App.vue":["3dfd",9],"./assets/appInfo":["b1c1",3,"chunk-2d20f173"],"./assets/appInfo.json":["b1c1",3,"chunk-2d20f173"],"./assets/articleInfo":["cbe9",3,"chunk-2d221e09"],"./assets/articleInfo.json":["cbe9",3,"chunk-2d221e09"],"./components/ArticleSnippet":["a8be",9,"chunk-2d221e09","chunk-3987dd10"],"./components/ArticleSnippet.vue":["a8be",9,"chunk-2d221e09","chunk-3987dd10"],"./components/ArticleView":["e713",9,"chunk-2d225f0a"],"./components/ArticleView.vue":["e713",9,"chunk-2d225f0a"],"./components/ButtonBackToTop":["46a8",9],"./components/ButtonBackToTop.vue":["46a8",9],"./components/CardApp":["0cc2",9,"chunk-2984f280"],"./components/CardApp.vue":["0cc2",9,"chunk-2984f280"],"./components/CarouselArticle":["e8a5",9,"chunk-2d221e09","chunk-0484444f"],"./components/CarouselArticle.vue":["e8a5",9,"chunk-2d221e09","chunk-0484444f"],"./components/Footer":["fd2d",9],"./components/Footer.vue":["fd2d",9],"./components/HighlightApps":["6fdc",9,"chunk-566ac790"],"./components/HighlightApps.vue":["6fdc",9,"chunk-566ac790"],"./components/ResourceInfo":["e495",9,"chunk-681f2b3e"],"./components/ResourceInfo.vue":["e495",9,"chunk-681f2b3e"],"./components/Search":["c106",9,"chunk-2f0d915c"],"./components/Search.vue":["c106",9,"chunk-2f0d915c"],"./components/SearchBar":["14ac",9,"chunk-0b431cc6"],"./components/SearchBar.vue":["14ac",9,"chunk-0b431cc6"],"./components/Toolbar":["6908",9],"./components/Toolbar.vue":["6908",9],"./components/ViewTitle":["d246",9,"chunk-2d21d846"],"./components/ViewTitle.vue":["d246",9,"chunk-2d21d846"],"./main":["56d7",9],"./main.js":["56d7",9],"./router":["41cb",9],"./router.js":["41cb",9],"./store":["c0d6",9,"chunk-2d216235"],"./store.js":["c0d6",9,"chunk-2d216235"],"./utils":["025e",9],"./utils.js":["025e",9],"./views/About":["f820",9,"chunk-ce2d1a30"],"./views/About.vue":["f820",9,"chunk-ce2d1a30"],"./views/Apps":["e082",9,"chunk-18fbf365"],"./views/Apps.vue":["e082",9,"chunk-18fbf365"],"./views/Dataset":["a564",9,"chunk-19bffbea"],"./views/Dataset.vue":["a564",9,"chunk-19bffbea"],"./views/Home":["bb51",9,"chunk-2d221e09","chunk-04bf3c66"],"./views/Home.vue":["bb51",9,"chunk-2d221e09","chunk-04bf3c66"],"./views/Research":["45d3",9,"chunk-2d221e09","chunk-6f226644"],"./views/Research.vue":["45d3",9,"chunk-2d221e09","chunk-6f226644"],"./views/Resources":["93b9",9,"chunk-19e45dec"],"./views/Resources.vue":["93b9",9,"chunk-19e45dec"]};function o(e){var t=c[e];return t?Promise.all(t.slice(2).map(n.e)).then(function(){var e=t[0];return n.t(e,t[1])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(c)},o.id="d43f",e.exports=o},daed:function(e,t,n){"use strict";var c=n("72df"),o=n.n(c);o.a},fd2d:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{height:"auto"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{"text-xs-center":""}},[e._v("\n            © 2019 Illinois Criminal Justice Information Authority\n        ")])],1)],1)},o=[],r={},u=r,a=(n("760c"),n("2877")),s=Object(a["a"])(u,c,o,!1,null,null,null);s.options.__file="Footer.vue";t["default"]=s.exports}});
//# sourceMappingURL=app.f10ac6e5.js.map