(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2984f280","chunk-0b431cc6","chunk-2d20f173"],{"0cc2":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[r("app-search-bar",{attrs:{label:"Search for apps",search:t.search},on:{"update:search":function(e){t.search=e}}})],1),r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},t._l(t.filterItems(t.editedItems),function(e,s){return r("v-flex",{key:s,attrs:{md4:"",sm6:"",xs12:""}},[r("v-card",{staticClass:"ma-3"},[r("v-img",{attrs:{height:"200px",src:e.imgUrl,"lazy-src":"https://via.placeholder.com/1/DDDDDD"}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-3"}})],1)],1),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h2",[t._v(t._s(e.title))]),r("span",{staticClass:"grey--text"},[t._v(t._s(e.subtitle))])])]),r("v-card-actions",[r("v-btn",{attrs:{href:e.url,flat:""}},[t._v("Launch")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.showDesc=!e.showDesc}}},[r("v-icon",[t._v(t._s(e.showDesc?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),r("v-slide-y-transition",[e.showDesc?r("v-card-text",[t._v("\n                        "+t._s(e.desc)+"\n                    ")]):t._e()],1)],1)],1)}))],1)},i=[],a=(r("4917"),r("386d"),r("14ac")),n=r("b1c1"),o={data:function(){return{items:n,search:""}},computed:{editedItems:function(){return this.items.map(function(t){return t})}},methods:{filterItems:function(t){var e=this.search.toUpperCase();return t.filter(function(t){return t.title.toUpperCase().match(e)})}},components:{AppSearchBar:a["default"]}},c=o,l=r("2877"),u=Object(l["a"])(c,s,i,!1,null,null,null);u.options.__file="CardApp.vue";e["default"]=u.exports},"14ac":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-text-field",{attrs:{value:t.searchInput,label:t.searchLabel,"append-icon":"search",solo:""},on:{keyup:function(e){t.onChange(e)}}})},i=[],a=(r("386d"),r("cadf"),r("551c"),r("097d"),{props:{label:String,search:String},data:function(){return{searchInput:this.search,searchLabel:this.label}},methods:{onChange:function(t){this.$emit("update:search",t.target.value)}}}),n=a,o=r("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);c.options.__file="SearchBar.vue";e["default"]=c.exports},"214f":function(t,e,r){"use strict";var s=r("32e9"),i=r("2aba"),a=r("79e5"),n=r("be13"),o=r("2b4c");t.exports=function(t,e,r){var c=o(t),l=r(n,c,""[t]),u=l[0],h=l[1];a(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,u),s(RegExp.prototype,c,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)}))}},"386d":function(t,e,r){r("214f")("search",1,function(t,e,r){return[function(r){"use strict";var s=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,s):new RegExp(r)[e](String(s))},r]})},4917:function(t,e,r){r("214f")("match",1,function(t,e,r){return[function(r){"use strict";var s=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,s):new RegExp(r)[e](String(s))},r]})},b1c1:function(t){t.exports=[{title:"Awesome app",subtitle:"This is an awesome application",url:"",imgUrl:"https://picsum.photos/300/300?image=10",desc:"More detailed description from the contributor.",showDesc:!1},{title:"Try me",subtitle:"This is another application",url:"",imgUrl:"https://picsum.photos/300/300?image=20",desc:"More detailed description from the contributor.",showDesc:!1},{title:"Yay",subtitle:"Yet another application",url:"",imgUrl:"https://picsum.photos/300/300?image=30",desc:"More detailed description from the contributor.",showDesc:!1},{title:"Best dashboard",subtitle:"This is the best dashboard",url:"",imgUrl:"https://picsum.photos/300/300?image=40",desc:"More detailed description from the contributor.",showDesc:!1},{title:"Award-winning app",subtitle:"This won some serious award",url:"",imgUrl:"https://picsum.photos/300/300?image=50",desc:"More detailed description from the contributor.",showDesc:!1}]}}]);
//# sourceMappingURL=chunk-2984f280.195880af.js.map