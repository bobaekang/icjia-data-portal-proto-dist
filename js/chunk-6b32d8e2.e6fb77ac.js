(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b32d8e2","chunk-2353f083","chunk-4d706e7e","chunk-121ce640","chunk-5be32116","chunk-7edf78ea","chunk-2d0db23a"],{"0d37":function(t,e,a){"use strict";var r=a("9f34"),s=a.n(r);s.a},"214f":function(t,e,a){"use strict";var r=a("32e9"),s=a("2aba"),n=a("79e5"),i=a("be13"),o=a("2b4c");t.exports=function(t,e,a){var l=o(t),c=a(i,l,""[t]),u=c[0],p=c[1];n(function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})&&(s(String.prototype,t,u),r(RegExp.prototype,l,2==e?function(t,e){return p.call(t,this,e)}:function(t){return p.call(t,this)}))}},"32c8":function(t,e,a){"use strict";var r=a("ccd6"),s=a.n(r);s.a},"386d":function(t,e,a){a("214f")("search",1,function(t,e,a){return[function(a){"use strict";var r=t(this),s=void 0==a?void 0:a[e];return void 0!==s?s.call(a,r):new RegExp(a)[e](String(r))},a]})},"39b6":function(t,e,a){"use strict";var r=a("f224"),s=a.n(r);s.a},"3c2a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",xl8:""}},[a("section-title",{attrs:{title:t.title,path:t.path}})],1)],1),a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.items,function(e,r){return a("v-flex",{key:r,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("apps-item",{attrs:{item:e,simple:t.isSimpleCard}})],1)}))],1)},s=[],n=a("be94"),i=a("2f62"),o=a("6f1e"),l=a("fa2b"),c={components:{AppsItem:o["default"],SectionTitle:l["default"]},data:function(){return{title:"app highlights",path:"apps",isSimpleCard:!0}},computed:Object(n["a"])({},Object(i["b"])({items:"appsHome"}))},u=c,p=a("2877"),f=Object(p["a"])(u,r,s,!1,null,null,null);f.options.__file="HomeAppHighlights.vue";e["default"]=f.exports},"4aa2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"pb-3"},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",xl8:""}},[a("section-title",{attrs:{title:t.title,path:t.path}})],1)],1)],1),a("v-carousel",{attrs:{id:"carousel"}},t._l(t.items,function(e,r){return a("router-link",{key:r,staticStyle:{"text-decoration":"none"},attrs:{to:"/research/"+e.slug}},[a("v-carousel-item",{attrs:{src:e.image.url,gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.33)"}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:"",sm8:""}},[a("h1",{staticClass:"text-xs-center",staticStyle:{color:"white",margin:"15% 10% 0 10%"}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])],1)],1)],1)}))],1)},s=[],n=a("be94"),i=a("2f62"),o=a("fa2b"),l={components:{SectionTitle:o["default"]},data:function(){return{title:"Latest articles",path:"research"}},computed:Object(n["a"])({},Object(i["b"])({items:"articlesHome"}))},c=l,u=(a("0d37"),a("2877")),p=Object(u["a"])(c,r,s,!1,null,"bb7bc916",null);p.options.__file="HomeLatestArticles.vue";e["default"]=p.exports},"4d41":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",xl8:""}},[a("section-title",{attrs:{title:t.title,path:t.path}}),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(e,r){return a("v-flex",{key:r,attrs:{xs12:"",sm4:""}},[a("v-container",{staticClass:"pb-0"},[a("h3",[t._v(t._s(e.title.toUpperCase()))]),a("p",{staticClass:"resource-item"},[t._v(t._s(e.body))])]),a("v-btn",{attrs:{to:e.url,flat:""}},[t._v("\n                        open\n                    ")]),a("v-divider",{staticClass:"hidden-sm-and-up"})],1)}))],1)],1)],1)},s=[],n=a("fa2b"),i={components:{SectionTitle:n["default"]},data:function(){return{title:"resources",path:"resources",items:[{title:"User Guide",body:"New to the Data Portal? Read to find out more about navigating the Data Portal like a pro.",url:""},{title:"API Documentation",body:"Learn how to use the Data Portal API to obtain data, analyze them, and develop awesome applications.",url:""},{title:"Contributing Guidelines",body:"Need help! Find out how to make contributions to the Data Portal and have your work recognized.",url:""}]}}},o=i,l=(a("39b6"),a("2877")),c=Object(l["a"])(o,r,s,!1,null,"40e79fa2",null);c.options.__file="HomeResources.vue";e["default"]=c.exports},"6f1e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-3"},[a("v-img",{attrs:{height:"200px",src:t.app.image.url,"lazy-src":"https://via.placeholder.com/1/DDDDDD"}},[a("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-3"}})],1)],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h2",[t._v(t._s(t.app.title))]),a("span",{staticClass:"grey--text"},[t._v(t._s(t.app.summary))])])]),t.simple?a("v-btn",{attrs:{href:t.app.url,flat:""}},[t._v("\n        Launch\n    ")]):[a("v-card-actions",[a("v-btn",{attrs:{href:t.app.url,flat:""}},[t._v("\n                Launch\n            ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.app.showDescription=!t.app.showDescription}}},[a("v-icon",[t._v(t._s(t.app.showDescription?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[t.app.showDescription?a("v-card-text",[t._v("\n                "+t._s(t.app.description)+"\n            ")]):t._e()],1)]],2)},s=[],n={props:{item:Object,simple:Boolean},computed:{app:function(){return this.item}}},i=n,o=a("2877"),l=Object(o["a"])(i,r,s,!1,null,null,null);l.options.__file="AppsItem.vue";e["default"]=l.exports},"9f34":function(t,e,a){},b961:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("h3",[t._v(t._s(t.titleUpper))]),a("v-icon",[t._v("fa fa-caret-down")])],1),a("v-flex",{attrs:{xs12:"",md9:"",xl6:""}},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("v-text-field",{attrs:{label:"Search "+t.showLabel+" in Data Portal",clearable:"true","append-outer-icon":"search",solo:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submit(e):null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-radio-group",{staticClass:"py-0 my-0 sans-serif",staticStyle:{"justify-content":"center"},attrs:{row:""},model:{value:t.typeSelect,callback:function(e){t.typeSelect=e},expression:"typeSelect"}},t._l(t.types,function(t,e){return a("v-flex",{key:e},[a("v-radio",{attrs:{label:t.toUpperCase(),value:t}})],1)}))],1)],1)],1)},s=[],n=(a("386d"),{data:function(){return{title:"get started & explore this data portal",search:"",types:["dataset","research","apps"],typeSelect:"dataset"}},computed:{titleUpper:function(){return this.title.toUpperCase()},showLabel:function(){var t;return"dataset"===this.typeSelect?t="datasets":"research"===this.typeSelect?t="research publications":"apps"===this.typeSelect&&(t="applications"),t}},methods:{onSubmit:function(){null===this.search&&(this.search="");var t="".concat(this.typeSelect,"Search");this.$router.push({name:t,params:{search:this.search}})}}}),i=n,o=a("2877"),l=Object(o["a"])(i,r,s,!1,null,null,null);l.options.__file="HomeSearch.vue";e["default"]=l.exports},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"view-title"},[a("v-container",{staticClass:"pb-1"},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",xl8:""}},[a("div",{attrs:{id:"home-title"}},[t._v("\n                        "+t._s(t.title)+"\n                    ")]),a("p",{attrs:{id:"home-subtitle"}},[t._v("\n                        "+t._s(t.subtitle)+"\n                    ")]),a("p",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{to:"about",flat:"",color:"#ddd"}},[t._v("\n                            "+t._s(t.about)+"\n                        ")])],1)])],1)],1)],1),t._l(4,function(e){return a("div",{key:e,class:{"grey-background":e%2==1}},[1==e?a("home-search"):t._e(),2==e?a("home-latest-articles"):t._e(),3==e?a("home-app-highlights"):t._e(),4==e?a("home-resources"):t._e()],1)}),a("div",{staticStyle:{height:"100px"}})],2)},s=[],n=a("b961"),i=a("4aa2"),o=a("3c2a"),l=a("4d41"),c={components:{HomeAppHighlights:o["default"],HomeLatestArticles:i["default"],HomeResources:l["default"],HomeSearch:n["default"]},data:function(){return{title:"The Home of the Illinois Criminal Justice Data and Research",subtitle:"Welcome to the Illinois Crinimal Justice Information Authority (ICJIA) Data Portal. Here you can find various criminal justice datasets, research publications and resources to develop web applications, dashboards and more.",about:"About this Data Portal"}}},u=c,p=(a("32c8"),a("2877")),f=Object(p["a"])(u,r,s,!1,null,"13844642",null);f.options.__file="Home.vue";e["default"]=f.exports},be94:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var r=a("ade3");function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){Object(r["a"])(t,e,a[e])})}return t}},ccd6:function(t,e,a){},ce44:function(t,e,a){},f1ba:function(t,e,a){"use strict";var r=a("ce44"),s=a.n(r);s.a},f224:function(t,e,a){},fa2b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"section-title",attrs:{"align-end":"","justify-space-between":""}},[a("h2",[t._v(t._s(t.title))]),a("router-link",{staticClass:"normaltext",attrs:{to:t.path}},[t._v("\n        see more\n    ")])],1)},s=[],n={props:{title:String,path:String}},i=n,o=(a("f1ba"),a("2877")),l=Object(o["a"])(i,r,s,!1,null,"92b53280",null);l.options.__file="SectionTitle.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-6b32d8e2.e6fb77ac.js.map