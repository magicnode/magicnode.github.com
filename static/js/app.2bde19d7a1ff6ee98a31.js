webpackJsonp([1,2],[,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a});var i="http://112.74.34.241:3000",s={index:i+"/albums?limit=6",pics:function(t){return i+"/albums/"+t+"/pics"}},a={index:i+"/pics?limit=6",url:function(t){return i+"/pics/url?url="+t}}},,,,,,,,,function(t,e,n){"use strict";var i=n(4);n.d(e,"a",function(){return s});var s=function(t){return t?i.b.url(t):""}},function(t,e,n){"use strict";var i=n(2),s=n(71),a=n(61),r=n.n(a);i.default.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Container",component:r.a},{path:"/albums/:id/pics",name:"AlbumsPics",component:n(60)}]})},function(t,e,n){"use strict";var i=n(2),s=n(73);i.default.use(s.a);var a=new s.a.Store({state:{title:"91看图",header:""},mutations:{},actions:{},getters:{}});e.a=a},function(t,e){},,function(t,e,n){t.exports=n.p+"static/img/404.7b6469c.png"},function(t,e,n){t.exports=n.p+"static/img/loading.ce247aa.gif"},,,function(t,e,n){n(54);var i=n(1)(n(44),n(67),null,null);t.exports=i.exports},function(t,e,n){n(52);var i=n(1)(n(45),n(64),null,null);t.exports=i.exports},function(t,e,n){n(53);var i=n(1)(n(46),n(66),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",ready:function(){this.update()},mounted:function(){this.update()},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&(this.$parent.swiper.destroyLoop(),this.$parent.swiper.createLoop()))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n(11),n(51)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){!t.swiper&&i&&(delete t.options.notNextTick,t.swiper=new Swiper(t.$el,t.options))};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"v-img",props:{imgUrl:{type:String}},computed:{imgObj:function(){if(this.imgUrl)return this.imgUrl}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"search-header",props:{title:{type:String,default:""}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),s=n.n(i),a=n(4);e.default={name:"contain",created:function(){var t=this.$route.params;this.initPics(t.id)},data:function(){return{pics:[]}},methods:{initPics:function(t){var e=this;s.a.get(a.a.pics(t)).then(function(t){e.pics=t.data}).catch(function(t){console.error(t)})},goBack:function(){this.$router.go(-1)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),s=n.n(i),a=n(4);e.default={name:"contain",created:function(){this.initAlbums()},data:function(){return{albums:[],loading:!1,scroller:null,skip:0}},mounted:function(){this.scroller=this.$el},methods:{initAlbums:function(){var t=this;s.a.get(a.a.index).then(function(e){t.albums=e.data}).catch(function(t){console.error(t)})},loadMore:function(){var t=this;this.loading=!0;var e=this;setTimeout(function(){s.a.get(a.a.index,{params:{skip:t.skip+10}}).then(function(t){console.log(t);for(var n=t.data,i=0,s=n.length;i<s;i++)e.albums.push(n[i]);e.skip+=10,e.loading=!1}).catch(function(t){console.error(t)})},2e3)},watchPics:function(t){console.log("1445",t),this.$router.push({name:"AlbumsPics",params:{id:t}})}}}},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){n(55);var i=n(1)(n(47),n(68),null,null);t.exports=i.exports},function(t,e,n){n(56);var i=n(1)(n(48),n(70),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(42),n(65),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(43),n(69),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgObj,expression:"imgObj"}],staticClass:"bg-box",attrs:{src:"",alt:"",lazy:"loading"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"swiper-slide"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-header"},[n("mu-flexbox",{staticClass:"search-header-box",attrs:{align:"center",justify:"space-between"}},[n("mu-flexbox-item",{staticClass:"search-header-box__icon"},[n("mu-icon",{attrs:{value:"dehaze",size:34}})],1),t._v(" "),n("mu-flexbox-item",{staticClass:"search-header-box__input",attrs:{grow:"4"}},[n("input",{attrs:{placeholder:t.title}})]),t._v(" "),n("mu-flexbox-item",{staticClass:"search-header-box__key"},[n("mu-icon",{attrs:{value:"add",size:34}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album"},[n("mu-appbar",{attrs:{title:"back"},nativeOn:{click:function(e){t.goBack(e)}}},[n("mu-icon-button",{attrs:{icon:"keyboard_backspace"},slot:"left"})],1),t._v(" "),n("mu-flexbox",{staticClass:"albums-box",attrs:{orient:"vertical",align:"center",justify:"space-between"}},t._l(t.pics,function(e){return n("mu-flexbox-item",{key:e._id,staticClass:"albums-box__img"},[n("v-img",{attrs:{imgUrl:t._f("pic")(e.url)}})],1)}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("search-header",{attrs:{title:"91看图"}}),t._v(" "),n("div",{staticClass:"index-albums"},t._l(t.albums,function(e){return n("mu-flexbox",{key:e._id,staticClass:"index-albums-box",attrs:{align:"center",justify:"space-between"},nativeOn:{click:function(n){t.watchPics(e._id)}}},[n("mu-flexbox-item",{staticClass:"index-albums-box__img",attrs:{grow:"2"}},[n("v-img",{attrs:{imgUrl:e.hotest_pic_url}})],1),t._v(" "),n("mu-flexbox-item",{staticClass:"index-albums-box__detail",attrs:{grow:"6"}},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s("浏览量: "+e.view))]),t._v(" "),n("p",[t._v(t._s(e.formate_time.full))])])],1)})),t._v(" "),n("mu-infinite-scroll",{attrs:{scroller:t.scroller,loading:t.loading},on:{load:t.loadMore}})],1)},staticRenderFns:[]}},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n(17),a=n.n(s),r=n(20),o=n.n(r),u=n(21),c=n.n(u),l=n(24),p=n.n(l),d=n(22),f=n.n(d),m=n(14),h=n(15),v=n(13),_=n(23),b=n.n(_),x=n(16);n.n(x);i.default.config.productionTip=!1,i.default.component("search-header",p.a),i.default.component("v-img",b.a),i.default.use(o.a),i.default.use(a.a),i.default.use(c.a,{preLoad:1.3,error:n(18),loading:n(19),attempt:1}),i.default.filter("pic",v.a),m.a.afterEach(function(t,e){}),new i.default({el:"#app",router:m.a,store:h.a,template:"<App/>",components:{App:f.a}})}],[74]);
//# sourceMappingURL=app.2bde19d7a1ff6ee98a31.js.map