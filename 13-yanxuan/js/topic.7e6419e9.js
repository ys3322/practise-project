(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["topic"],{"1a62":function(t,e,i){},"51cc":function(t,e,i){"use strict";i("1a62")},"77c4":function(t,e,i){"use strict";i("fa22")},"9a02":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"topic"}},[i("TopicList",{attrs:{topicList:t.topicList}}),i("BottomControl",{attrs:{nextActive:t.nextActive,preActive:t.preActive},on:{nextPage:t.nextPage,prePage:t.prePage}})],1)},a=[],c=i("9f74"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"control"},[i("div",{staticClass:"item",class:{active:t.preActive},on:{click:t.prePage}},[t._v("上一页")]),i("div",{staticClass:"item",class:{active:t.nextActive},on:{click:t.nextPage}},[t._v("下一页")])])},o=[],r={name:"BottomControl",data:function(){return{}},props:{preActive:{type:Boolean,default:!1},nextActive:{type:Boolean,default:!0}},methods:{nextPage:function(){this.$emit("nextPage")},prePage:function(){this.$emit("prePage")}}},p=r,u=(i("bb29"),i("2877")),l=Object(u["a"])(p,n,o,!1,null,"2a80109a",null),g=l.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topic-list"},t._l(t.topicList,(function(e){return i("div",{key:e.id,staticClass:"topic-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.scene_pic_url,expression:"item.scene_pic_url"}],attrs:{alt:e.title}}),i("h2",{staticClass:"title"},[t._v(t._s(e.title))]),i("h4",{staticClass:"subtitle"},[t._v(t._s(e.subtitle))]),i("div",{staticClass:"price"},[t._v(t._s(t._f("priceFormat")(e.price_info)))])])})),0)},v=[],d={name:"TopicList",props:{topicList:{type:Array,default:function(){return[]}}}},h=d,m=(i("77c4"),Object(u["a"])(h,f,v,!1,null,"959f5424",null)),P=m.exports,_={name:"Topic",data:function(){return{pageSize:5,currentPage:0,topicList:[],totalPages:0}},components:{BottomControl:g,TopicList:P},methods:{getTopicList:function(t){var e=this;Object(c["f"])(t).then((function(t){if(console.log("Topic==>",t),0===t.errno){var i=t.data,s=i.currentPage,a=i.data,c=(i.pageSize,i.totalPages);e.currentPage=s,e.topicList=a,e.totalPages=c,document.documentElement.scrollTop=0}}))},nextPage:function(){this.currentPage<this.totalPages?this.getTopicList({page:++this.currentPage,size:this.pageSize}):this.$toast({message:"已经是最后一页了~",position:"top"})},prePage:function(){this.currentPage-1>0?this.getTopicList({page:--this.currentPage,size:this.pageSize}):this.$toast({message:"已经是第一页了~",position:"top"})}},computed:{preActive:function(){return this.currentPage>1},nextActive:function(){return this.currentPage<this.totalPages}},created:function(){this.getTopicList({page:++this.currentPage,size:this.pageSize})}},x=_,L=(i("51cc"),Object(u["a"])(x,s,a,!1,null,"2d20a366",null));e["default"]=L.exports},bb29:function(t,e,i){"use strict";i("d65e")},d65e:function(t,e,i){},fa22:function(t,e,i){}}]);
//# sourceMappingURL=topic.7e6419e9.js.map