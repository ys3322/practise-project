(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({topic:"topic"}[t]||t)+"."+{"chunk-27662a75":"4f698ac7","chunk-8eb97420":"abda0dd1","chunk-aabfb8fc":"fd40eff2","chunk-f298f75c":"e06bfcce",topic:"7e6419e9"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-27662a75":1,"chunk-8eb97420":1,"chunk-aabfb8fc":1,"chunk-f298f75c":1,topic:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({topic:"topic"}[t]||t)+"."+{"chunk-27662a75":"19c456b5","chunk-8eb97420":"17e76975","chunk-aabfb8fc":"c7a7779f","chunk-f298f75c":"3bd0b18b",topic:"bf42bdc8"}[t]+".css",i=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],d.parentNode.removeChild(d),a(s)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"27c6":function(t,e,a){"use strict";a("4358")},"40e0":function(t,e,a){"use strict";var n=a("aa5f"),r=a.n(n);e["default"]=r.a},4135:function(t,e,a){},4358:function(t,e,a){},"4aa0":function(t,e,a){"use strict";a("e228")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4"),a("d3b7"),a("b680"),a("a9e3");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("MyTabbar")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-tabbar",{attrs:{"active-color":"#8b0000","inactive-color":"#666",route:!0}},[a("van-tabbar-item",{attrs:{icon:"home-o",to:"/home"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{icon:"label-o",to:"/topic"}},[t._v("专题")]),a("van-tabbar-item",{attrs:{icon:"apps-o",to:"/category"}},[t._v("分类")]),a("van-tabbar-item",{attrs:{icon:"cart-o",to:"/cart"}},[t._v("购物车")]),a("van-tabbar-item",{attrs:{icon:"user-o",to:"/profile"}},[t._v("我的")])],1)},o=[],c={name:"MyTabbar"},u=c,l=(a("5708"),a("2877")),f=Object(l["a"])(u,s,o,!1,null,null,null),d=f.exports,p={name:"App",components:{MyTabbar:d}},m=p,b=(a("034f"),Object(l["a"])(m,r,i,!1,null,null,null)),v=b.exports,h=(a("3ca3"),a("ddb0"),a("8c4f")),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"myfade"}},[a("div",{attrs:{id:"home"}},[a("van-search",{attrs:{placeholder:"请输入搜索关键词","input-align":"left"}}),a("van-swipe",{staticClass:"home-swipe",attrs:{autoplay:3e3,"indicator-color":"#8b0000"}},t._l(t.banner,(function(t,e){return a("van-swipe-item",{key:e,staticClass:"home-swipe-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image_url,expression:"item.image_url"}],staticClass:"home-swipe-img",attrs:{alt:t.name}})])})),1),a("van-grid",{staticClass:"home-grid-channel",attrs:{"column-num":5}},t._l(t.channel,(function(e){return a("van-grid-item",{key:e.id,staticClass:"van-grid-item",attrs:{icon:e.icon_url,text:e.name},on:{click:function(a){return t.handleChannelItemClick(e.url)}}})})),1),a("brand-list",{attrs:{brandList:t.brandList}}),a("news-list",{attrs:{newGoodsList:t.newGoodsList}}),a("hot-goods-list",{attrs:{hotGoodsList:t.hotGoodsList}}),a("topic-list",{attrs:{topicList:t.topicList}}),a("div",{staticClass:"categoryList"},t._l(t.categoryList,(function(t){return a("category-list",{key:t.id,attrs:{goodsList:t.goodsList,title:t.name}})})),1),a("bottom-tip")],1)])},g=[],y=(a("ac1f"),a("1276"),a("9f74")),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand-list"},[a("div",{staticClass:"title"},[t._v("品牌制造商供应")]),a("ul",t._l(t.brandList,(function(e){return a("li",{key:e.id,staticClass:"brand-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.app_list_pic_url,expression:"item.app_list_pic_url"}],attrs:{alt:""}}),a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"price"},[t._v("￥ "+t._s(e.floor_price)+" 元")])])})),0)])},C=[],w={name:"Brand-List",props:{brandList:{type:Array,default:function(){return[]}}}},k=w,x=(a("27c6"),Object(l["a"])(k,L,C,!1,null,"0e1d62fa",null)),j=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-list"},[a("div",{staticClass:"title"},[t._v("周一周四·新品首发")]),a("ul",t._l(t.newGoodsList,(function(e){return a("li",{key:e.id},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.list_pic_url,expression:"item.list_pic_url"}],attrs:{alt:e.name}}),a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"price"},[t._v("￥ "+t._s(e.retail_price)+" 元")])])})),0)])},E=[],G={name:"NewsList",props:{newGoodsList:{type:Array,default:function(){return[]}}}},T=G,N=(a("89c7"),Object(l["a"])(T,O,E,!1,null,"5df051d4",null)),z=N.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hot-goods-list"},[a("div",{staticClass:"title"},[t._v("人气推荐")]),a("ul",t._l(t.hotGoodsList,(function(e){return a("li",{key:e.id},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.list_pic_url,expression:"item.list_pic_url"}],attrs:{alt:e.name}}),a("div",{staticClass:"info"},[a("h2",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"brief"},[t._v(t._s(e.goods_brief))]),a("div",{staticClass:"price"},[t._v("￥ "+t._s(e.retail_price)+" 元")])])])})),0)])},P=[],S={name:"HotGoodsList",props:{hotGoodsList:{type:Array,default:function(){return[]}}}},$=S,H=(a("4aa0"),Object(l["a"])($,A,P,!1,null,"6fa5fbbc",null)),M=H.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic-list"},[a("div",{staticClass:"title"},[t._v("专题精选")]),a("van-swipe",{staticClass:"van-swipe",attrs:{loop:!1,"show-indicators":!1,width:"300"}},t._l(t.topicList,(function(e){return a("van-swipe-item",{key:e.id,staticClass:"van-swipe-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.item_pic_url,expression:"item.item_pic_url"}],attrs:{alt:""}}),a("p",{staticClass:"name"},[a("span",[t._v(t._s(e.title))]),a("span",{staticClass:"read-count"},[t._v("阅读量："+t._s(e.read_count))])]),a("p",{staticClass:"subtitle"},[t._v(t._s(e.subtitle))])])})),1)],1)},q=[],D={name:"TopicList",props:{topicList:{type:Array,default:function(){return[]}}}},I=D,F=(a("ec29"),Object(l["a"])(I,B,q,!1,null,"24cb9693",null)),J=F.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-list"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("ul",t._l(t.goodsList,(function(e){return a("li",{key:e.id},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.list_pic_url,expression:"item.list_pic_url"}],attrs:{alt:e.name}}),a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"price"},[t._v("￥ "+t._s(e.retail_price)+" 元")])])})),0)])},K=[],R={name:"CategoryList",props:{goodsList:{type:Array,default:function(){return[]}},title:{type:String}}},Q=R,V=(a("a557"),Object(l["a"])(Q,U,K,!1,null,"d1659176",null)),W=V.exports,X=a("757d"),Y={name:"Home",data:function(){return{banner:[],channel:[],brandList:[],newGoodsList:[],hotGoodsList:[],topicList:[],categoryList:[]}},components:{BrandList:j,NewsList:z,HotGoodsList:M,TopicList:J,CategoryList:W,BottomTip:X["default"]},methods:{getHomeData:function(){var t=this;Object(y["e"])().then((function(e){if(console.log("home==>",e),0===e.errno){var a=e.data,n=a.banner,r=a.channel,i=a.brandList,s=a.newGoodsList,o=a.hotGoodsList,c=a.topicList,u=a.categoryList;t.banner=n,t.channel=r,t.brandList=i,t.newGoodsList=s,t.hotGoodsList=o,t.topicList=c,t.categoryList=u}}))},handleChannelItemClick:function(t){this.$router.push("/channel/".concat(t.split("=").pop()))}},created:function(){this.getHomeData()}},Z=Y,tt=(a("86d0"),Object(l["a"])(Z,_,g,!1,null,"f063807a",null)),et=tt.exports;n["a"].use(h["a"]);var at=h["a"].prototype.push;h["a"].prototype.push=function(t){return at.call(this,t).catch((function(t){return t}))};var nt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:et},{path:"/topic",name:"Topic",component:function(){return a.e("topic").then(a.bind(null,"9a02"))}},{path:"/category",name:"Category",component:function(){return a.e("chunk-8eb97420").then(a.bind(null,"bb51"))}},{path:"/cart",name:"Cart",component:function(){return a.e("chunk-27662a75").then(a.bind(null,"b789"))}},{path:"/profile",name:"Profile",component:function(){return a.e("chunk-f298f75c").then(a.bind(null,"c66d"))}},{path:"/channel/:id",name:"Channel",component:function(){return a.e("chunk-aabfb8fc").then(a.bind(null,"5de9"))}}],rt=new h["a"]({mode:"history",base:"/",routes:nt});rt.beforeEach((function(t,e,a){localStorage.getItem("usertoken");a()}));var it=rt,st=a("2f62");n["a"].use(st["a"]);var ot=new st["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ct=(a("157a"),a("b650")),ut=a("d961"),lt=a("5596"),ft=a("2bb1"),dt=a("ad06"),pt=a("a3e2"),mt=a("2d6d"),bt=a("d314"),vt=a("f0ca"),ht=a("2bdd"),_t=a("7744"),gt=a("d399"),yt=a("ac28"),Lt=a("2ed4"),Ct=a("9ffb"),wt=a("d1e1"),kt=a("772a"),xt=a("565f"),jt=a("2830"),Ot=a("21ab"),Et=a("ca19"),Gt=a("2241"),Tt=a("343b"),Nt=a("3104"),zt=a("bb33"),At=a("7713"),Pt=a("82a8"),St=a("2b5e"),$t=a("417e"),Ht=a("3acc"),Mt=a("66fd"),Bt=a("efa0"),qt=a("20fb"),Dt=a("c36e"),It=a("0b33"),Ft=a("5e46"),Jt=a("f240"),Ut=a("1d36"),Kt=a("241e"),Rt=a("a37c"),Qt=a("58e6");n["a"].use(ct["a"]),n["a"].use(ut["a"]),n["a"].use(lt["a"]),n["a"].use(ft["a"]),n["a"].use(dt["a"]),n["a"].use(pt["a"]),n["a"].use(mt["a"]),n["a"].use(bt["a"]),n["a"].use(vt["a"]),n["a"].use(ht["a"]),n["a"].use(_t["a"]),n["a"].use(gt["a"]),n["a"].use(yt["a"]),n["a"].use(Lt["a"]),n["a"].use(Ct["a"]),n["a"].use(wt["a"]),n["a"].use(kt["a"]),n["a"].use(xt["a"]),n["a"].use(jt["a"]),n["a"].use(Ot["a"]),n["a"].use(Et["a"]),n["a"].use(Gt["a"]),n["a"].use(Tt["a"],{loading:a("f8b2")}),n["a"].use(Nt["a"]),n["a"].use(zt["a"]),n["a"].use(At["a"]),n["a"].use(Pt["a"]),n["a"].use(St["a"]),n["a"].use($t["a"]),n["a"].use(Ht["a"]),n["a"].use(Mt["a"]),n["a"].use(Bt["a"]),n["a"].use(qt["a"]),n["a"].use(Dt["a"]),n["a"].use(It["a"]),n["a"].use(Ft["a"]),n["a"].use(Jt["a"]),n["a"].use(Ut["a"]),n["a"].use(Kt["a"]),n["a"].use(Rt["a"]),n["a"].use(Qt["a"]),n["a"].filter("priceFormat",(function(t){return"￥ "+Number(t).toFixed(2)+" 元"})),n["a"].config.productionTip=!1,new n["a"]({router:it,store:ot,render:function(t){return t(v)}}).$mount("#app")},5708:function(t,e,a){"use strict";a("4135")},6039:function(t,e,a){},"6d26":function(t,e,a){},"757d":function(t,e,a){"use strict";var n=a("be2a"),r=a("40e0"),i=(a("fc38"),a("2877")),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"6fdb26d7",null);e["default"]=s.exports},"85ec":function(t,e,a){},"86d0":function(t,e,a){"use strict";a("d378")},"89c7":function(t,e,a){"use strict";a("6d26")},"9f74":function(t,e,a){"use strict";a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return f})),a.d(e,"d",(function(){return d}));a("d3b7");var n=a("bc3a"),r=a.n(n),i=a("d399");function s(t){var e=r.a.create({baseURL:"http://127.0.0.1:8360/",timeout:"5000"});return e.interceptors.request.use((function(t){return i["a"].loading({message:"正在加载...",forbidClick:!0}),t}),(function(t){return console.log(t),Promise.reject(t)})),e.interceptors.response.use((function(t){return i["a"].clear(),t.data}),(function(t){console.log("request,error==>",t)})),e(t)}function o(){return s({url:"/"})}function c(t){return s({url:"/topic/list",params:t})}function u(){return s({url:"/catalog/index"})}function l(t){return s({url:"/catalog/current",params:t})}function f(t){return s({url:"/goods/category",params:t})}function d(t){return s({url:"/goods/list",params:t})}},a557:function(t,e,a){"use strict";a("c71d")},aa5f:function(t,e){},be2a:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[t._v("到底了~~")])},r=[]},c71d:function(t,e,a){},d378:function(t,e,a){},e228:function(t,e,a){},e47c:function(t,e,a){},ec29:function(t,e,a){"use strict";a("6039")},f8b2:function(t,e,a){t.exports=a.p+"img/loading.cc698d35.gif"},fc38:function(t,e,a){"use strict";a("e47c")}});
//# sourceMappingURL=app.1148038c.js.map