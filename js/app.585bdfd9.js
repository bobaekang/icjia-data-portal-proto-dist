(function(e){function t(t){for(var c,o,u=t[0],s=t[1],i=t[2],f=0,d=[];f<u.length;f++)o=u[f],r[o]&&d.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},o={app:0},r={app:0},a=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-04d009f8":"c05077f4","chunk-0b431cc6":"c7fe59e9","chunk-2984f280":"195880af","chunk-2d0b23a2":"c6021037","chunk-2d0c76d2":"16dbf68e","chunk-2d0db865":"54d012c3","chunk-2d2086a8":"957ba320","chunk-2d20f173":"741a5395","chunk-2d215faa":"b543f912","chunk-2d216235":"a498f153","chunk-2d221e09":"5cf998b2","chunk-0a31e3ae":"65b8d69c","chunk-1ccbc140":"e38c1264","chunk-3e40da2c":"eef65f95","chunk-f8fb4f2a":"ffc715aa","chunk-2d2254c1":"1d095009","chunk-2d225f0a":"e1350093","chunk-2d23777d":"4ebc0ac0","chunk-74ef095e":"1fa5ed84"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0a31e3ae":1,"chunk-1ccbc140":1,"chunk-3e40da2c":1,"chunk-f8fb4f2a":1,"chunk-74ef095e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-04d009f8":"31d6cfe0","chunk-0b431cc6":"31d6cfe0","chunk-2984f280":"31d6cfe0","chunk-2d0b23a2":"31d6cfe0","chunk-2d0c76d2":"31d6cfe0","chunk-2d0db865":"31d6cfe0","chunk-2d2086a8":"31d6cfe0","chunk-2d20f173":"31d6cfe0","chunk-2d215faa":"31d6cfe0","chunk-2d216235":"31d6cfe0","chunk-2d221e09":"31d6cfe0","chunk-0a31e3ae":"8ee8f74b","chunk-1ccbc140":"adfdd1f8","chunk-3e40da2c":"a8acf1b6","chunk-f8fb4f2a":"a8acf1b6","chunk-2d2254c1":"31d6cfe0","chunk-2d225f0a":"31d6cfe0","chunk-2d23777d":"31d6cfe0","chunk-74ef095e":"64b7ce6d"}[e]+".css",o=s.p+c,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var u=r[a],i=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===c||i===o))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){u=f[a],i=u.getAttribute("data-href");if(i===c||i===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.request=c,n(r)},d.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(d)}).then(function(){o[e]=0}));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var a=new Promise(function(t,n){c=r[e]=[t,n]});t.push(c[2]=a);var i,f=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e),i=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+c+": "+o+")");a.type=c,a.request=o,n[1](a)}r[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,f.appendChild(d)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/a-dist/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025e":function(e,t,n){"use strict";n.r(t),n.d(t,"makeRoute",function(){return c}),n.d(t,"makeRouteChild",function(){return o});n("cadf"),n("551c"),n("097d");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"./views",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=r(e,!1),u=a(e,t),s={path:o,component:function(){return n("d43f")("".concat(u))}};return null!=c&&(s.children=c),s}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"./views",c=r(e,!0),o=a(e,t);return{path:c,component:function(){return n("d43f")("".concat(o))}}}var r=function(e,t){return"home"==e?"/":t?e:"/".concat(e)},a=function(e,t){return"".concat(t,"/").concat(e.charAt(0).toUpperCase()+e.slice(1),".vue")}},"034f":function(e,t,n){"use strict";var c=n("64a9"),o=n.n(c);o.a},2310:function(e,t,n){"use strict";var c=n("38e5"),o=n.n(c);o.a},"38e5":function(e,t,n){},"3dfd":function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-toolbar"),n("router-view"),n("app-button-back-to-top"),n("app-footer")],1)},o=[],r=(n("cadf"),n("551c"),n("097d"),n("6908")),a=n("46a8"),u=n("fd2d"),s={components:{AppToolbar:r["default"],AppButtonBackToTop:a["default"],AppFooter:u["default"]}},i=s,f=(n("034f"),n("2877")),d=Object(f["a"])(i,c,o,!1,null,null,null);d.options.__file="App.vue";t["default"]=d.exports},"41cb":function(e,t,n){"use strict";n.r(t);var c=n("2b0e"),o=n("8c4f"),r=n("025e");c["default"].use(o["a"]),t["default"]=new o["a"]({routes:[r["makeRoute"]("home"),r["makeRoute"]("dataset"),r["makeRoute"]("research"),r["makeRoute"]("apps"),r["makeRoute"]("resources","./views/Resources",[r["makeRouteChild"]("user","./views/Resources"),r["makeRouteChild"]("developer","./views/Resources")]),r["makeRoute"]("about")]})},"46a8":function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#bbb"},on:{click:e.toTop}},[n("v-icon",[e._v("keyboard_arrow_up")])],1)},o=[],r=(n("cadf"),n("551c"),n("097d"),{data:function(){return{fab:!1}},methods:{onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>50}},toTop:function(){this.$vuetify.goTo(0)}}}),a=r,u=n("2877"),s=Object(u["a"])(a,c,o,!1,null,null,null);s.options.__file="ButtonBackToTop.vue";t["default"]=s.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var c=n("2b0e"),o=n("ce5b"),r=n.n(o),a=(n("bf40"),n("3dfd")),u=n("41cb");c["default"].config.productionTip=!1,c["default"].use(r.a),new c["default"]({router:u["default"],render:function(e){return e(a["default"])}}).$mount("#app")},"64a9":function(e,t,n){},6908:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{id:"toolbar",height:e.hpixel,fixed:"","scroll-off-screen":""}},[n("a",{attrs:{href:"http://www.icjia.state.il.us",target:"_blank"}},[n("img",{attrs:{src:"http://www.icjia.state.il.us/_themes/icjia/img/logo-icjia-small-blue-3.png",alt:"ICJIA logo",height:e.logoHpixel}})]),n("router-link",{attrs:{to:"/"}},[n("v-toolbar-title",[e._v("\n                ICJIA DATA PORTAL\n            ")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{to:"/dataset",flat:""}},[e._v("dataset")]),n("v-btn",{attrs:{to:"/research",flat:""}},[e._v("research")]),n("v-btn",{attrs:{to:"/apps",flat:""}},[e._v("apps")]),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[e._v("\n                    resources "),n("v-icon",[e._v("arrow_drop_down")])],1),n("v-list",[n("v-list-tile",{attrs:{to:"/resources/user",ripple:""}},[n("span",{staticClass:"slot"},[e._v("\n                            "+e._s("user".toUpperCase())+"\n                        ")])]),n("v-list-tile",{attrs:{to:"/resources/developer",ripple:""}},[n("span",{staticClass:"slot"},[e._v("\n                            "+e._s("developer".toUpperCase())+"\n                        ")])])],1)],1),n("v-btn",{attrs:{to:"/about",flat:""}},[e._v("about")])],1)],1),n("div",{style:{height:e.hpixel}})],1)},o=[],r={data:function(){return{height:75}},computed:{hpixel:function(){return"".concat(this.height,"px")},logoHpixel:function(){return"".concat(.85*this.height,"px")}}},a=r,u=(n("2310"),n("2877")),s=Object(u["a"])(a,c,o,!1,null,"127bfb06",null);s.options.__file="Toolbar.vue";t["default"]=s.exports},"760c":function(e,t,n){"use strict";var c=n("b675"),o=n.n(c);o.a},b675:function(e,t,n){},d43f:function(e,t,n){var c={"./App":["3dfd",9],"./App.vue":["3dfd",9],"./assets/appInfo":["b1c1",3,"chunk-2d20f173"],"./assets/appInfo.json":["b1c1",3,"chunk-2d20f173"],"./assets/articleInfo":["cbe9",3,"chunk-2d221e09"],"./assets/articleInfo.json":["cbe9",3,"chunk-2d221e09"],"./components/ArticleSnippet":["a8be",9,"chunk-2d221e09","chunk-f8fb4f2a"],"./components/ArticleSnippet.vue":["a8be",9,"chunk-2d221e09","chunk-f8fb4f2a"],"./components/ArticleView":["e713",9,"chunk-2d225f0a"],"./components/ArticleView.vue":["e713",9,"chunk-2d225f0a"],"./components/ButtonBackToTop":["46a8",9],"./components/ButtonBackToTop.vue":["46a8",9],"./components/CardApp":["0cc2",9,"chunk-2984f280"],"./components/CardApp.vue":["0cc2",9,"chunk-2984f280"],"./components/CarouselArticle":["e8a5",9,"chunk-2d221e09","chunk-0a31e3ae"],"./components/CarouselArticle.vue":["e8a5",9,"chunk-2d221e09","chunk-0a31e3ae"],"./components/Footer":["fd2d",9],"./components/Footer.vue":["fd2d",9],"./components/HighlightApps":["6fdc",9,"chunk-2d0db865"],"./components/HighlightApps.vue":["6fdc",9,"chunk-2d0db865"],"./components/ResourceInfo":["e495",9,"chunk-2d2254c1"],"./components/ResourceInfo.vue":["e495",9,"chunk-2d2254c1"],"./components/Search":["c106",9,"chunk-2d215faa"],"./components/Search.vue":["c106",9,"chunk-2d215faa"],"./components/SearchBar":["14ac",9,"chunk-0b431cc6"],"./components/SearchBar.vue":["14ac",9,"chunk-0b431cc6"],"./components/Toolbar":["6908",9],"./components/Toolbar.vue":["6908",9],"./main":["56d7",9],"./main.js":["56d7",9],"./router":["41cb",9],"./router.js":["41cb",9],"./store":["c0d6",7,"chunk-2d216235"],"./store.js":["c0d6",7,"chunk-2d216235"],"./utils":["025e",9],"./utils.js":["025e",9],"./views/About":["f820",9,"chunk-74ef095e"],"./views/About.vue":["f820",9,"chunk-74ef095e"],"./views/Apps":["e082",9,"chunk-04d009f8"],"./views/Apps.vue":["e082",9,"chunk-04d009f8"],"./views/Dataset":["a564",9,"chunk-2d2086a8"],"./views/Dataset.vue":["a564",9,"chunk-2d2086a8"],"./views/Home":["bb51",9,"chunk-2d221e09","chunk-1ccbc140"],"./views/Home.vue":["bb51",9,"chunk-2d221e09","chunk-1ccbc140"],"./views/Research":["45d3",9,"chunk-2d221e09","chunk-3e40da2c"],"./views/Research.vue":["45d3",9,"chunk-2d221e09","chunk-3e40da2c"],"./views/Resources/Developer":["22e1",9,"chunk-2d0b23a2"],"./views/Resources/Developer.vue":["22e1",9,"chunk-2d0b23a2"],"./views/Resources/Resources":["5122",9,"chunk-2d0c76d2"],"./views/Resources/Resources.vue":["5122",9,"chunk-2d0c76d2"],"./views/Resources/User":["faf2",9,"chunk-2d23777d"],"./views/Resources/User.vue":["faf2",9,"chunk-2d23777d"]};function o(e){var t=c[e];return t?Promise.all(t.slice(2).map(n.e)).then(function(){var e=t[0];return n.t(e,t[1])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(c)},o.id="d43f",e.exports=o},fd2d:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{height:"auto"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{"text-xs-center":""}},[e._v("\n            © 2019 Illinois Criminal Justice Information Authority\n        ")])],1)],1)},o=[],r={},a=r,u=(n("760c"),n("2877")),s=Object(u["a"])(a,c,o,!1,null,null,null);s.options.__file="Footer.vue";t["default"]=s.exports}});
//# sourceMappingURL=app.585bdfd9.js.map