(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activitesDetail-activitesDetail"],{"226d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".detailContainer[data-v-6dfe98b4]{background-color:#fff}.detailContainer .headImg[data-v-6dfe98b4]{width:100%;height:%?400?%}.detailContainer .ad_titile[data-v-6dfe98b4]{text-align:center;padding-top:%?30?%;margin-bottom:%?30?%;font-size:%?44?%}.detailContainer .ad_au_text[data-v-6dfe98b4]{font-size:%?32?%;color:#8e8e8e}.detailContainer .ad_context[data-v-6dfe98b4]{padding:%?0?% %?40?% %?40?% %?40?%}",""]),t.exports=e},"291d":function(t,e,i){var n=i("226d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("50e60940",n,!0,{sourceMap:!1,shadowMode:!1})},"32b4":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"detailContainer"},[t.showHeadImg?i("v-uni-image",{staticClass:"headImg",attrs:{src:t.src},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.hideHeadImg()}}}):t._e(),i("v-uni-view",{staticClass:"ad_titile"},[i("v-uni-text",{staticClass:"company"},[t._v(t._s(t.title))])],1),i("v-uni-view",{staticClass:"cu-list menu-avatar"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",style:{backgroundImage:"url("+t.headerImg+")"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[i("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(t.userName))]),i("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("管理员")])],1),i("v-uni-view",{staticClass:"text-gray text-sm "},[i("v-uni-view",{staticClass:"text-cut"},[i("v-uni-text",{staticClass:"margin-right-xs"}),t._v(t._s(t.startTime)),i("v-uni-text",{staticClass:"iconfont iconyuedu padding-left"}),t._v(t._s(t.readCount)),i("v-uni-text",{staticClass:"iconfont icongood-fill padding-left"}),t._v(t._s(t.likeCount))],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"ad_context"},[i("v-uni-rich-text",{attrs:{nodes:t.context}})],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"5a72":function(t,e,i){"use strict";i.r(e);var n=i("b6ae"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"93bc":function(t,e,i){"use strict";var n=i("291d"),a=i.n(n);a.a},b6ae:function(t,e,i){"use strict";i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("a293"),a=n.constant,o=n.util,s={data:function(){return{showHeadImg:!0,activitiesId:"",title:"",readCount:"",likeCount:"",communityId:"",src:"",userName:"",startTime:"",headerImg:"",context:""}},components:{},props:{},onLoad:function(t){n.onLoad(t),this.activitiesId=t.activitiesId,this.title=t.title,this.readCount=t.readCount,this.likeCount=t.likeCount,this.communityId=t.communityId},onReady:function(){},onShow:function(){var t=this,e=uni.getStorageSync(a.mapping.OWNER_INFO);if(null==e||""==e)return t.communityId=a.mapping.HC_TEST_COMMUNITY_ID,void t.loadActiviteFun();this.loadOwnerHeaderImg(),n.getOwner((function(e){var i="";i=null==e?"7020181217000001":e.communityId,t.communityId=i,t.loadActiviteFun()}))},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{loadOwnerHeaderImg:function(){var t=this;n.getOwner((function(e){var i=a.url.getOwnerPhotoPath+"?objId="+e.memberId+"&communityId="+e.communityId+"&fileTypeCd=10000&time="+new Date;t.headerImg=i,t.userName=e.appUserName}))},loadActiviteFun:function(){var t=this,e={page:1,row:1,communityId:this.communityId,activitiesId:this.activitiesId};uni.request({url:a.url.listActivitiess,header:n.getHeaders(),method:"GET",data:e,success:function(e){if(console.log("请求返回信息：",e),200==e.statusCode){var i=e.data.activitiess[0];i.src=a.url.filePath+"?fileId="+i.headerImg+"&communityId="+t.communityId+"&time="+new Date;var n=i.startTime.replace(/\-/g,"/"),s=new Date(n);return i.startTime=o.date.formatDate(s),t.src=i.src,t.userName=i.userName,t.startTime=i.startTime,t.context=i.context,t.readCount=i.readCount,t.likeCount=i.likeCount,void console.log(t)}wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},hideHeadImg:function(){this.showHeadImg=!1}}};e.default=s},bf13:function(t,e,i){"use strict";i.r(e);var n=i("32b4"),a=i("5a72");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("93bc");var s,u=i("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"6dfe98b4",null,!1,n["a"],s);e["default"]=c.exports}}]);