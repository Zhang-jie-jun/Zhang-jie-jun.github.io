(self["webpackChunkresume11"]=self["webpackChunkresume11"]||[]).push([[677],{538:function(t,e,n){var s=n(5254);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var a=n(9333).A;a("e7e4c156",s,!0,{sourceMap:!1,shadowMode:!1})},68:function(t,e,n){"use strict";var s;n.r(e),n.d(e,{default:function(){return m}});var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"z-padding-bottom white-page"},[n("v-uni-image",{staticClass:"z-width-full",staticStyle:{height:"500rpx"},attrs:{src:"/static/image/userTop.jpeg",mode:"widthFix"}}),n("v-uni-view",{staticClass:"z-card index-card"},[n("v-uni-view",{staticClass:"z-text-center"},[n("v-uni-image",{staticClass:"user-avatar z-shadow z-margin-top",attrs:{src:"/static/image/user.jpg",mode:""}}),n("v-uni-view",{staticClass:"z-text-bold z-text-lg z-margin-top-xs z-margin-bottom-xs"},[t._v(t._s(t.resume.name))]),n("v-uni-view",{staticClass:"text-color2 z-text-content"},[n("v-uni-text",[t._v("后端开发工程师")]),n("v-uni-text",{staticClass:"z-margin-left-sm"},[t._v(t._s(t.resume.major))])],1),n("v-uni-view",{staticClass:"text-color3 z-text-sm"},[t._v(t._s(t.resume.company))])],1),n("v-uni-view",{staticStyle:{margin:"60rpx 30rpx 0"}},[n("v-uni-view",{staticClass:"z-flex-center-between z-padding-xs",attrs:{"hover-class":"z-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCopy(t.resume.wechat,"微信")}}},[n("v-uni-view",{},[n("v-uni-text",{staticClass:"text-color3"},[t._v("微信")]),n("v-uni-text",{staticClass:"z-margin-left-sm"},[t._v(t._s(t.resume.wechat))])],1),n("v-uni-text",{staticClass:"tn-icon-wechat-fill tn-color-gray"})],1),n("v-uni-view",{staticClass:"z-flex-center-between z-padding-xs",attrs:{"hover-class":"z-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCall(t.resume.phone,"手机")}}},[n("v-uni-view",{},[n("v-uni-text",{staticClass:"text-color3"},[t._v("手机")]),n("v-uni-text",{staticClass:"z-margin-left-sm"},[t._v(t._s(t.resume.phone))])],1),n("v-uni-text",{staticClass:"tn-icon-phone-fill tn-color-gray"})],1),n("v-uni-view",{staticClass:"z-flex-center-between z-padding-xs",attrs:{"hover-class":"z-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCopy(t.resume.email,"邮箱")}}},[n("v-uni-view",{},[n("v-uni-text",{staticClass:"text-color3"},[t._v("邮箱")]),n("v-uni-text",{staticClass:"z-margin-left-sm"},[t._v(t._s(t.resume.email))])],1),n("v-uni-text",{staticClass:"tn-icon-email-fill tn-color-gray"})],1),n("v-uni-view",{staticClass:"z-flex-center-between z-padding-xs",attrs:{"hover-class":"z-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPageUrl(t.resume.blog,"网站")}}},[n("v-uni-view",{},[n("v-uni-text",{staticClass:"text-color3"},[t._v("网站")]),n("v-uni-text",{staticClass:"z-margin-left-sm"},[t._v(t._s(t.resume.blog))])],1),n("v-uni-text",{staticClass:"tn-icon-discover-planet-fill tn-color-gray"})],1)],1)],1),n("zou-tabbar",{ref:"tabbarRef",model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1)},o=[],r=n(3652),c=n(9358),l=n.n(c),u={components:{zouTabbar:r.A},data:function(){return{tabIndex:2,resume:l()}},computed:{year:function(){var t=new Date;return t.getFullYear()}},onLoad:function(){uni.hideTabBar()},methods:{toPageUrl:function(t){window.open(t)},toCopy:function(t,e){uni.setClipboardData({data:t,success:function(t){uni.showToast({title:e+"已复制",icon:"none"})}})},openMap:function(){uni.openLocation({latitude:24.488962,longitude:118.178234,name:"福建·厦门",address:"福建·厦门-软件园二期"})},toCall:function(t){uni.makePhoneCall({phoneNumber:t})}}},v=u,d=(n(538),n(8535)),p=(0,d.A)(v,i,o,!1,null,"5bddbf53",null,!1,s,a),m=p.exports},5254:function(t,e,n){"use strict";n.r(e);var s=n(5522),a=n.n(s),i=n(7643),o=n.n(i),r=o()(a());r.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/**\n * @Author      : zouwq\n * @Date        : 2022-10-09\n * @Description : 此文件为项目的主题变量，这些变量目前只能通过uni.scss引入才有效，\n *                由于uni.scss中引入的样式会同时混入到全局样式文件和单独每一个页面的样式中，\n *                造成微信程序包太大，故uni.scss只建议放scss变量名相关样式，\n *                其他的样式可以通过main.js或者App.vue引入\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index-card[data-v-5bddbf53]{position:relative;margin:%?-180?% %?50?% %?30?%}.index-card .share-btn[data-v-5bddbf53]{position:absolute;right:0;top:0;padding:%?30?%}.user-avatar[data-v-5bddbf53]{width:%?100?%;height:%?100?%;border-radius:50%}.resume-btn[data-v-5bddbf53]{display:flex;justify-content:center;align-items:center;width:%?580?%;height:%?70?%;line-height:%?70?%;margin:%?40?% auto;color:#fff;background:#007aff;border-radius:%?12?%}',""]),e["default"]=r},9358:function(t){t.exports={name:"张洁俊",sex:"男",experience:"6年",major:"Golang",location:"上海",position:"Golang",company:"上海爱数信息技术股份有限公司",tags:"golang,c++,mysql,Elasticsearch,VMware,Kubernetes,分布式系统,\n\t灾备解决方案,微服务,虚拟化技术,云计算 ",appraise:"就职于国内头部灾备企业，拥有6年的后端开发经验。主要从事B端灾备管理系统的设计与研发工作，对虚拟化平台和云平台灾备解决方案及灾备管理系统有深入的理解。目前在公司引擎研发部负责灾备引擎的设计和落地，拥有丰富的分布式系统和微服务实践经验",email:"zhang.jiejun@outlook.com",wechat:"jack1884851",blog:"https://zhang-jie-jun.github.io/blog",phone:"18848510326",birthday:"1996.07.29",skill:"精通Go语言，熟悉Gin、gRPC、Thrift、GORM、XORM等框架；\n\t熟悉C/C++和Python语言，掌握Git、SVN、CMake、XPCOM等开发工具；\n\t熟悉Linux操作系统，了解文件系统原理，能基于shell脚本和systemctl进行服务管理；\n\t熟悉TCP/IP、FTP、HTTP、HTTPS等网络协议，了解RESTful接口风格；\n\t熟悉Mysql、Elasticsearch、NATS、Etcd、Keepalived和Nginx等中间件；\n\t熟悉分布式系统的设计和应用，具备分布式系统、微服务和稳定性治理的实践经验；\n\t熟悉VMware、FusionCompute、OpenStack等虚拟化平台，对虚拟化技术和云计算有一定的了解；\n\t了解Kubernetes，了解Docker的基本用法，能使用Dockerfile和docker-compose简单的构建镜像和编排服务。"}}}]);