(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a233dfe6","chunk-04b5698d","chunk-5af50c50","chunk-98dc3b66","chunk-0b431cc6","chunk-6b067cbc","chunk-2d0b2cbc","chunk-2d0cbcce"],{"02d7":function(t,e,s){},"0be4":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-autocomplete",{staticClass:"sans-serif small",attrs:{items:t.items,prefix:t.label,chips:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[s("v-chip",{staticClass:"chip--select-multi",attrs:{selected:e.selected,close:""},on:{input:function(s){t.remove(e.item)}}},[t._v("\n            "+t._s(e.item)+"\n        ")])]}},{key:"item",fn:function(e){return[s("v-list-tile-content",{domProps:{textContent:t._s(e.item)}})]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},a=[],r={props:{label:String,items:Array},data:function(){return{selected:[]}},methods:{remove:function(t){var e=this.selected.indexOf(t);e>=0&&this.selected.splice(e,1)},removeAll:function(){this.selected=[]}}},i=r,c=(s("8050"),s("2877")),o=Object(c["a"])(i,n,a,!1,null,"235d69aa",null);o.options.__file="SearchAutocomplete.vue";e["default"]=o.exports},"14ac":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-text-field",{attrs:{value:t.searchInput,label:t.searchLabel,clearable:"true","append-outer-icon":"search",solo:""},on:{keyup:function(e){t.onKeyup(e)},"click:clear":function(e){t.onClear(e)}}})},a=[],r=(s("386d"),{props:{label:String,search:String},data:function(){return{searchInput:this.search,searchLabel:this.label}},methods:{onKeyup:function(t){this.$emit("update:search",t.target.value)},onClear:function(){this.$emit("update:search","")}}}),i=r,c=s("2877"),o=Object(c["a"])(i,n,a,!1,null,null,null);o.options.__file="SearchBar.vue";e["default"]=o.exports},"17a1":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-3"},[s("v-btn",{attrs:{flat:""},on:{click:function(e){t.show=!t.show}}},[s("v-icon",{staticClass:"pr-1"},[t._v("tune")]),s("v-span",[t._v(t._s(t.text))])],1),s("v-slide-y-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mx-2 py-2 greyborder"},[s("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[s("v-btn",{attrs:{outline:"",color:"primary"},on:{click:function(e){t.applyFilter(e)}}},[t._v("\n                    apply\n                ")]),s("v-btn",{attrs:{outline:"",color:"error"},on:{click:function(e){t.clearFilter(e)}}},[t._v("\n                    clear\n                ")])],1),s("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.items,function(t,e){return s("v-flex",{key:e,attrs:{xs12:"",sm9:""}},[s("search-autocomplete",{ref:"filterInput",refInFor:!0,staticClass:"py-2 px-3",attrs:{label:t.title.toUpperCase(),items:t.options}})],1)}))],1)])],1)},a=[],r=(s("28a5"),s("0be4")),i={components:{SearchAutocomplete:r["default"]},props:{items:Object},data:function(){return{text:"filter",show:!1}},methods:{applyFilter:function(t){for(var e=t.target.parentElement.parentElement.parentElement,s=e.childNodes[1].childNodes,n={},a=0;a<s.length;a++)for(var r=s[a],i=r.getElementsByClassName("v-select__slot"),c=0;c<i.length;c++){var o=i[c].getElementsByClassName("v-chip__content");if(o.length>0){for(var l=i[c].getElementsByClassName("v-text-field__prefix")[0].innerText,u=[],f=0;f<o.length;f++){var p=o[f].innerText.split("\n")[0];u.push(p)}n[l]=u}}this.$emit("updateFilter",n),this.show=!1},clearFilter:function(t){this.$refs.filterInput.map(function(t){return t.removeAll()}),this.$emit("updateFilter",{}),this.show=!1}}},c=i,o=(s("f4bd"),s("2877")),l=Object(o["a"])(c,n,a,!1,null,null,null);l.options.__file="SearchFilter.vue";e["default"]=l.exports},"214f":function(t,e,s){"use strict";var n=s("32e9"),a=s("2aba"),r=s("79e5"),i=s("be13"),c=s("2b4c");t.exports=function(t,e,s){var o=c(t),l=s(i,o,""[t]),u=l[0],f=l[1];r(function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})&&(a(String.prototype,t,u),n(RegExp.prototype,o,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},2646:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showSuggestion?s("div",{staticClass:"pt-2 text-xs-center sans-serif"},[t._v("\n    Need suggestions? Try these:\n    "),s("br"),t._l(t.suggestions,function(e,n){return s("span",{key:n},[s("v-btn",{staticClass:"ma-1",staticStyle:{"text-transform":"none"},attrs:{flat:""},on:{click:function(s){t.useSuggestion(e)}}},[t._v("\n            "+t._s(e)+"\n        ")])],1)})],2):t._e()},a=[],r={props:{showSuggestion:Boolean,suggestions:Array},methods:{useSuggestion:function(t){this.$emit("useSuggestion",t)}}},i=r,c=s("2877"),o=Object(c["a"])(i,n,a,!1,null,null,null);o.options.__file="SearchSuggestion.vue";e["default"]=o.exports},2764:function(t,e,s){},"28a5":function(t,e,s){s("214f")("split",2,function(t,e,n){"use strict";var a=s("aae3"),r=n,i=[].push,c="split",o="length",l="lastIndex";if("c"=="abbc"[c](/(b)*/)[1]||4!="test"[c](/(?:)/,-1)[o]||2!="ab"[c](/(?:ab)*/)[o]||4!="."[c](/(.?)(.?)/)[o]||"."[c](/()()/)[o]>1||""[c](/.?/)[o]){var u=void 0===/()??/.exec("")[1];n=function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!a(t))return r.call(s,t,e);var n,c,f,p,d,v=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=void 0===e?4294967295:e>>>0,_=new RegExp(t.source,h+"g");u||(n=new RegExp("^"+_.source+"$(?!\\s)",h));while(c=_.exec(s)){if(f=c.index+c[0][o],f>m&&(v.push(s.slice(m,c.index)),!u&&c[o]>1&&c[0].replace(n,function(){for(d=1;d<arguments[o]-2;d++)void 0===arguments[d]&&(c[d]=void 0)}),c[o]>1&&c.index<s[o]&&i.apply(v,c.slice(1)),p=c[0][o],m=f,v[o]>=g))break;_[l]===c.index&&_[l]++}return m===s[o]?!p&&_.test("")||v.push(""):v.push(s.slice(m)),v[o]>g?v.slice(0,g):v}}else"0"[c](void 0,0)[o]&&(n=function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)});return[function(s,a){var r=t(this),i=void 0==s?void 0:s[e];return void 0!==i?i.call(s,r,a):n.call(String(r),s,a)},n]})},3866:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-title",{attrs:{"primary-title":""}},[s("h2",{staticClass:"pr-2"},[s("router-link",{attrs:{to:"/dataset/"+t.dataset.slug}},[t._v("\n              "+t._s(t.dataset.title)+"\n            ")])],1),t.dataset.categories?s("div",t._l(t.dataset.categories,function(t,e){return s("span",{key:e},[s("simple-chip",{attrs:{name:t.toUpperCase()}})],1)})):t._e(),s("simple-chip",{attrs:{name:t.dataset.ageGroup.toUpperCase()}})],1),s("v-divider"),s("div",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-container",{staticClass:"small sans-serif py-2"},[s("span",{staticClass:"bold pr-2"},[t._v("Tags")]),t.dataset.tags&&Array.isArray(t.dataset.tags)?s("span",t._l(t.dataset.tags,function(e,n){return s("span",{key:n,staticClass:"pr-2"},[t._v("\n                            "+t._s(e.toUpperCase())+"\n                        ")])})):s("span",{staticClass:"italic"},[t._v("No tags")])]),s("v-container",{staticClass:"py-2 small sans-serif hidden-sm-and-down"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{sm2:""}},[s("div",{staticClass:"pb-2"},[s("p",{staticClass:"ma-0 bold"},[t._v("Updated")]),t._v("\n                                "+t._s(t.dataset.date)+"\n                            ")])]),s("v-flex",{attrs:{sm10:""}},[s("div",[s("p",{staticClass:"ma-0 bold"},[t._v("Sources")]),t._l(t.dataset.sources,function(e,n){return s("span",{key:n},[s("a",{attrs:{href:e.url}},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")])])})],2)])],1)],1),s("v-container",{staticClass:"pt-0 small sans-serif hidden-md-and-up"},[s("div",{staticClass:"pb-2"},[s("span",{staticClass:"pr-2 bold"},[t._v("Updated")]),t._v("\n                        "+t._s(t.dataset.date)+"\n                    ")]),s("div",[s("span",{staticClass:"pr-2 bold"},[t._v("Sources")]),t._l(t.dataset.sources,function(e,n){return s("span",{key:n},[s("a",{attrs:{href:e.url}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])])})],2)]),s("v-container",{staticClass:"pa-0 text-xs-right"},[s("v-btn",{staticClass:"mr-0",attrs:{flat:""}},[t._v("\n                        Download\n                        "),s("v-icon",[t._v("file_download")])],1),s("v-btn",{attrs:{flat:"",to:"/dataset/"+t.dataset.slug}},[t._v("\n                        More\n                        "),s("v-icon",[t._v("more_horiz")])],1)],1)],1)],1)],1)],1)},a=[],r=s("4ae0"),i={components:{SimpleChip:r["default"]},props:{item:Object},computed:{dataset:function(){return this.item}}},c=i,o=s("2877"),l=Object(o["a"])(c,n,a,!1,null,null,null);l.options.__file="DatasetItem.vue";e["default"]=l.exports},"386d":function(t,e,s){s("214f")("search",1,function(t,e,s){return[function(s){"use strict";var n=t(this),a=void 0==s?void 0:s[e];return void 0!==a?a.call(s,n):new RegExp(s)[e](String(n))},s]})},"44a9":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm8:"",lg6:""}},[s("search-bar",{ref:"searchBar",attrs:{label:"Search for datasets",search:t.search},on:{"update:search":function(e){t.search=e}}}),s("search-filter",{attrs:{items:t.filters},on:{updateFilter:function(e){t.filterObj=e}}}),s("the-item-counter",{attrs:{count:t.filterItems(t.items).length,item:t.item}}),s("search-suggestion",{attrs:{showSuggestion:0===t.filterItems(t.items).length,suggestions:t.suggestions},on:{useSuggestion:function(e){t.useSuggestion(e)}}})],1),t._l(t.filterItems(t.items),function(t,e){return s("v-flex",{key:e,staticClass:"mb-3",attrs:{xs12:"",sm10:"",xl8:""}},[s("dataset-item",{attrs:{item:t}})],1)})],2)],1)},a=[],r=(s("4917"),s("ac6a"),s("456d"),s("386d"),s("be94")),i=s("2f62"),c=s("025e"),o=s("3866"),l=s("14ac"),u=s("17a1"),f=s("2646"),p=s("df30"),d={components:{DatasetItem:o["default"],SearchBar:l["default"],SearchFilter:u["default"],SearchSuggestion:f["default"],TheItemCounter:p["default"]},props:{search:String},data:function(){return{item:"dataset",suggestion:"",filterObj:{}}},computed:Object(r["a"])({},Object(i["b"])({items:"datasets",filters:"datasetFilters",suggestions:"datasetSuggestions"})),created:function(){this.$store.dispatch("createDatasetFilters")},methods:{filterItems:function(t){var e=this.search.toUpperCase(),s=0!==Object.keys(this.filterObj).length?Object(c["applyFilterBox"])(t,this.filters,this.filterObj):t;return s.filter(function(t){return t.title.toUpperCase().match(e)})},useSuggestion:function(t){this.search=t,this.$refs.searchBar.searchInput=t}}},v=d,h=s("2877"),m=Object(h["a"])(v,n,a,!1,null,null,null);m.options.__file="DatasetSearch.vue";e["default"]=m.exports},4917:function(t,e,s){s("214f")("match",1,function(t,e,s){return[function(s){"use strict";var n=t(this),a=void 0==s?void 0:s[e];return void 0!==a?a.call(s,n):new RegExp(s)[e](String(n))},s]})},"4ae0":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-chip",{staticStyle:{"font-family":"'Lato', sans-serif"},attrs:{disabled:"",small:"","text-color":"#333"}},[t._v("\n    "+t._s(t.name)+"\n")])},a=[],r={props:{name:String}},i=r,c=s("2877"),o=Object(c["a"])(i,n,a,!1,null,null,null);o.options.__file="SimpleChip.vue";e["default"]=o.exports},8050:function(t,e,s){"use strict";var n=s("2764"),a=s.n(n);a.a},aa77:function(t,e,s){var n=s("5ca1"),a=s("be13"),r=s("79e5"),i=s("fdef"),c="["+i+"]",o="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,e,s){var a={},c=r(function(){return!!i[t]()||o[t]()!=o}),l=a[t]=c?e(p):i[t];s&&(a[s]=l),n(n.P+n.F*c,"String",a)},p=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},aae3:function(t,e,s){var n=s("d3f4"),a=s("2d95"),r=s("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},be94:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var n=s("ade3");function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.forEach(function(e){Object(n["a"])(t,e,s[e])})}return t}},c5f6:function(t,e,s){"use strict";var n=s("7726"),a=s("69a8"),r=s("2d95"),i=s("5dbc"),c=s("6a99"),o=s("79e5"),l=s("9093").f,u=s("11e9").f,f=s("86cc").f,p=s("aa77").trim,d="Number",v=n[d],h=v,m=v.prototype,g=r(s("2aeb")(m))==d,_="trim"in String.prototype,b=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():p(e,3);var s,n,a,r=e.charCodeAt(0);if(43===r||45===r){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var i,o=e.slice(2),l=0,u=o.length;l<u;l++)if(i=o.charCodeAt(l),i<48||i>a)return NaN;return parseInt(o,n)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof v&&(g?o(function(){m.valueOf.call(s)}):r(s)!=d)?i(new h(b(e)),s,v):b(e)};for(var x,y=s("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)a(h,x=y[S])&&!a(v,x)&&f(v,x,u(h,x));v.prototype=m,m.constructor=v,s("2aba")(n,d,v)}},df30:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-xs-center pb-2 sans-serif"},[t._v("\n    "+t._s(t.count)+" "+t._s(t.item)+"s found\n")])},a=[],r=(s("c5f6"),{props:{count:Number,item:String}}),i=r,c=s("2877"),o=Object(c["a"])(i,n,a,!1,null,null,null);o.options.__file="TheItemCounter.vue";e["default"]=o.exports},f4bd:function(t,e,s){"use strict";var n=s("02d7"),a=s.n(n);a.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-a233dfe6.1bfc6ab2.js.map