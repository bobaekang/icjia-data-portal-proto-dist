(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04bf3c66","chunk-566ac790","chunk-0484444f","chunk-681f2b3e","chunk-2f0d915c","chunk-0b431cc6","chunk-2d20f173"],{"14ac":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-text-field",{attrs:{value:t.searchInput,label:t.searchLabel,"append-icon":"search",solo:""},on:{keyup:function(e){t.onChange(e)}}})},s=[],i=(r("386d"),{props:{label:String,search:String},data:function(){return{searchInput:this.search,searchLabel:this.label}},methods:{onChange:function(t){this.$emit("update:search",t.target.value)}}}),n=i,o=r("2877"),l=Object(o["a"])(n,a,s,!1,null,null,null);l.options.__file="SearchBar.vue";e["default"]=l.exports},"18d3":function(t,e,r){},"214f":function(t,e,r){"use strict";var a=r("32e9"),s=r("2aba"),i=r("79e5"),n=r("be13"),o=r("2b4c");t.exports=function(t,e,r){var l=o(t),c=r(n,l,""[t]),u=c[0],p=c[1];i(function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})&&(s(String.prototype,t,u),a(RegExp.prototype,l,2==e?function(t,e){return p.call(t,this,e)}:function(t){return p.call(t,this)}))}},"386d":function(t,e,r){r("214f")("search",1,function(t,e,r){return[function(r){"use strict";var a=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,a):new RegExp(r)[e](String(a))},r]})},"519c":function(t,e,r){"use strict";var a=r("18d3"),s=r.n(a);s.a},"6c67":function(t,e,r){},"6fdc":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-flex",{attrs:{xs12:"",xl8:"","offset-xl2":""}},[r("h2",{staticStyle:{"border-bottom":"1px #999 solid"}},[t._v("\n            "+t._s(t.titleUpper)+"\n            "),r("span",{staticClass:"normaltext"},[t._v("\n                |\n                "),r("router-link",{attrs:{to:t.path}},[t._v("\n                    "+t._s(t.bodyUpper)+"\n                ")])],1)])]),r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},t._l(t.items,function(e,a){return r("v-flex",{key:a,attrs:{lg3:"",md4:"",sm6:"",xs12:""}},[r("v-card",{staticClass:"ma-3"},[r("v-img",{attrs:{height:"200px",src:e.imgUrl,"lazy-src":"https://via.placeholder.com/1/DDDDDD"}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-3"}})],1)],1),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h2",[t._v(t._s(e.title))]),r("span",{staticClass:"grey--text"},[t._v(t._s(e.subtitle))])])]),r("v-btn",{attrs:{href:e.url,flat:""}},[t._v("Launch")])],1)],1)}))],1)},s=[],i=(r("cadf"),r("551c"),r("097d"),r("b1c1")),n={data:function(){return{title:"app highlights",body:"see more",path:"apps",items:i.slice(0,3)}},computed:{titleUpper:function(){return this.title.toUpperCase()},bodyUpper:function(){return this.body.toUpperCase()}}},o=n,l=(r("519c"),r("2877")),c=Object(l["a"])(o,a,s,!1,null,"5b7e0aa9",null);c.options.__file="HighlightApps.vue";e["default"]=c.exports},"75cd":function(t,e,r){"use strict";var a=r("d4ea"),s=r.n(a);s.a},"93a2":function(t,e,r){"use strict";var a=r("6c67"),s=r.n(a);s.a},b1c1:function(t){t.exports=[{title:"Awesome app",subtitle:"This is an awesome application",url:"",imgUrl:"https://picsum.photos/300/300?image=10",desc:"More detailed description from the contributor.",showDesc:!1},{title:"Try me",subtitle:"This is another application",url:"",imgUrl:"https://picsum.photos/300/300?image=20",desc:"More detailed description from the contributor.",showDesc:!1},{title:"Yay",subtitle:"Yet another application",url:"",imgUrl:"https://picsum.photos/300/300?image=30",desc:"More detailed description from the contributor.",showDesc:!1},{title:"Best dashboard",subtitle:"This is the best dashboard",url:"",imgUrl:"https://picsum.photos/300/300?image=40",desc:"More detailed description from the contributor.",showDesc:!1},{title:"Award-winning app",subtitle:"This won some serious award",url:"",imgUrl:"https://picsum.photos/300/300?image=50",desc:"More detailed description from the contributor.",showDesc:!1}]},bb51:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"view-title"},[r("v-container",{staticClass:"pb-1"},[r("v-flex",{attrs:{xs12:"",xl8:"","offset-xl2":""}},[r("div",{attrs:{id:"home-title"}},[t._v("\n                    "+t._s(t.title)+"\n                ")]),r("p",{attrs:{id:"home-subtitle"}},[t._v("\n                    "+t._s(t.subtitle)+"\n                ")]),r("p",{staticClass:"normaltext text-xs-right"},[r("v-btn",{attrs:{to:"about",flat:"",color:"#ddd"}},[t._v("\n                            "+t._s(t.about)+"\n                    ")])],1)])],1)],1),t._l(4,function(e){return r("div",{key:e,class:{"grey-background":e%2==1}},[1==e?r("app-search"):t._e(),2==e?r("app-carousel-article"):t._e(),3==e?r("v-container",[r("app-highlight-apps")],1):t._e(),4==e?r("v-container",[r("app-resource-info")],1):t._e()],1)}),r("div",{staticStyle:{height:"100px"}})],2)},s=[],i=r("c106"),n=r("e8a5"),o=r("6fdc"),l=r("e495"),c={data:function(){return{title:"The Home of the Illinois Criminal Justice Data and Research",subtitle:"Welcome to the Illinois Crinimal Justice Information Authority (ICJIA) Data Portal. Here you can find various criminal justice datasets, research publications and resources to develop web applications, dashboards and more.",about:"About this Data Portal".toUpperCase()}},components:{AppSearch:i["default"],AppCarouselArticle:n["default"],AppHighlightApps:o["default"],AppResourceInfo:l["default"]}},u=c,p=(r("ef16"),r("2877")),h=Object(p["a"])(u,a,s,!1,null,"c80a5d8c",null);h.options.__file="Home.vue";e["default"]=h.exports},c106:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("h3",[t._v(t._s(t.titleUpper))]),r("v-icon",{attrs:{"x-large":""}},[t._v("arrow_drop_down")])],1),r("v-flex",{attrs:{xs12:"",md9:"",xl6:""}},[r("app-search-bar",{attrs:{label:"Search this Data Portal",search:t.search},on:{"update:search":function(e){t.search=e}}})],1)],1)],1)},s=[],i=r("14ac"),n={data:function(){return{title:"get started and explore this data portal",search:""}},computed:{titleUpper:function(){return this.title.toUpperCase()}},components:{AppSearchBar:i["default"]}},o=n,l=r("2877"),c=Object(l["a"])(o,a,s,!1,null,null,null);c.options.__file="Search.vue";e["default"]=c.exports},d4ea:function(t,e,r){},e495:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-flex",{attrs:{xs12:"",xl8:"","offset-xl2":""}},[r("h2",{staticStyle:{"border-bottom":"1px #999 solid"}},[t._v("\n            "+t._s(t.titleUpper)+"\n            "),r("span",{staticClass:"normaltext"},[t._v("\n                |\n                "),r("router-link",{attrs:{to:t.path}},[t._v("\n                    "+t._s(t.bodyUpper)+"\n                ")])],1)]),r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(e,a){return r("v-flex",{key:a,attrs:{xs12:"",sm4:""}},[r("v-container",{staticClass:"pb-0"},[r("h3",[t._v(t._s(e.title.toUpperCase()))]),r("p",{staticClass:"resource-item"},[t._v(t._s(e.body))])]),r("v-btn",{attrs:{to:e.url,flat:""}},[t._v("\n                    open\n                ")])],1)}))],1)],1)},s=[],i={data:function(){return{title:"resources",body:"see more",path:"resources",items:[{title:"User Guide",body:"New to the Data Portal? Read to find out more about navigating the Data Portal like a pro.",url:"#"},{title:"API Documentation",body:"Learn how to use the Data Portal API to obtain data, analyze them, and develop awesome applications.",url:"#"},{title:"Contributing Guidelines",body:"Need help! Find out how to make contributions to the Data Portal and have your work recognized.",url:"#"}]}},computed:{titleUpper:function(){return this.title.toUpperCase()},bodyUpper:function(){return this.body.toUpperCase()}}},n=i,o=(r("93a2"),r("2877")),l=Object(o["a"])(n,a,s,!1,null,"9ca07be2",null);l.options.__file="ResourceInfo.vue";e["default"]=l.exports},e8a5:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-container",{staticClass:"pb-0"},[r("v-flex",{attrs:{xs12:"",xl8:"","offset-xl2":""}},[r("h2",{staticStyle:{"border-bottom":"1px #999 solid"}},[t._v("\n                    "+t._s(t.titleUpper)+"\n                    "),r("span",{staticClass:"normaltext"},[t._v("\n                        |\n                        "),r("router-link",{attrs:{to:t.path}},[t._v("\n                            "+t._s(t.bodyUpper)+"\n                        ")])],1)])])],1)],1),r("v-carousel",{attrs:{id:"carousel"}},t._l(t.items,function(e,a){return r("a",{key:a,staticStyle:{"text-decoration":"none"},attrs:{href:"http://www.icjia.state.il.us/articles/"+e.filename,target:"_blank"}},[r("v-carousel-item",{attrs:{src:"http://www.icjia.state.il.us/"+e.splash,gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.33)"}},[r("v-container",[r("v-flex",{attrs:{"justify-center":"","align-center":"",xs12:"",xl8:"","offset-xl2":""}},[r("h1",{staticClass:"text-xs-center",staticStyle:{color:"white",margin:"15% 10% 0 10%"}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])],1)],1)],1)}))],1)},s=[],i=r("cbe9"),n={data:function(){return{title:"Latest articles",body:"see more",path:"research",items:i.slice(0,5)}},computed:{titleUpper:function(){return this.title.toUpperCase()},bodyUpper:function(){return this.body.toUpperCase()}}},o=n,l=(r("75cd"),r("2877")),c=Object(l["a"])(o,a,s,!1,null,"315cae55",null);c.options.__file="CarouselArticle.vue";e["default"]=c.exports},ef16:function(t,e,r){"use strict";var a=r("f93c"),s=r.n(a);s.a},f93c:function(t,e,r){}}]);
//# sourceMappingURL=chunk-04bf3c66.44584727.js.map