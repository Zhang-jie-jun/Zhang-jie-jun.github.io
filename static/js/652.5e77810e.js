(self["webpackChunkresume11"]=self["webpackChunkresume11"]||[]).push([[652],{3668:function(t,a,i){var e=i(9864);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);var n=i(9333).A;n("394e6c86",e,!0,{sourceMap:!1,shadowMode:!1})},3652:function(t,a,i){"use strict";var e;i.d(a,{A:function(){return p}});var n,o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"tabbar tn-bg-white"},[i("div",{},[i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"}),i("div",{staticClass:"g-bubble"})]),t._l(t.tabList,(function(a,e){return i("v-uni-view",{key:e,staticClass:"action",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.changeTabbar(e)}}},[i("v-uni-view",{staticClass:"bar-icon"},[i("v-uni-image",{attrs:{src:t.elIcon(e)}})],1),i("v-uni-view",{class:[t.value===e?"tn-color-orange":"tn-color-gray"]},[t._v(t._s(a.title))])],1)}))],2),i("v-uni-view",{staticClass:"tn-tabbar__placeholder tn-safe-area-inset-bottom",style:{height:"calc("+t.height+"rpx)"}}),i("v-uni-view",{staticClass:"tnwave waveAnimation"},[i("v-uni-view",{staticClass:"waveWrapperInner bgTop"},[i("v-uni-view",{staticClass:"wave waveTop",staticStyle:{"background-image":"url('https://mp-3ad318f6-bda9-4e5c-9962-7e028b4b8932.cdn.bspapp.com/images/wave-2.png')"}})],1),i("v-uni-view",{staticClass:"waveWrapperInner bgMiddle"},[i("v-uni-view",{staticClass:"wave waveMiddle",staticStyle:{"background-image":"url('https://mp-3ad318f6-bda9-4e5c-9962-7e028b4b8932.cdn.bspapp.com/images/wave-2.png')"}})],1),i("v-uni-view",{staticClass:"waveWrapperInner bgBottom"},[i("v-uni-view",{staticClass:"wave waveBottom",staticStyle:{"background-image":"url('https://mp-3ad318f6-bda9-4e5c-9962-7e028b4b8932.cdn.bspapp.com/images/wave-1.png')"}})],1)],1)],1)},s=[],r=(i(2892),{props:{value:{type:[String,Number],default:0},height:{type:Number,default:160}},data:function(){return{tabList:[{title:"首页",pagePath:"/pages/index/index",inactiveIcon:"/static/image/tabBar/icon_home1.png",activeIcon:"/static/image/tabBar/icon_home2.png"},{title:"项目",pagePath:"/pages/project/project",inactiveIcon:"/static/image/tabBar/icon_project1.png",activeIcon:"/static/image/tabBar/icon_project2.png"},{title:"联系",pagePath:"/pages/user/user",inactiveIcon:"/static/image/tabBar/icon_user1.png",activeIcon:"/static/image/tabBar/icon_user2.png"}]}},computed:{elIcon:function(){var t=this;return function(a){var i=t.tabList[a];return a===t.value?i["activeIcon"]:i["inactiveIcon"]}}},methods:{changeTabbar:function(t){var a=this.tabList[t];t!==this.value&&(console.log(a),uni.navigateTo({url:a.pagePath}))}}}),d=r,b=(i(3668),i(8535)),c=(0,b.A)(d,o,s,!1,null,"2276236d",null,!1,e,n),p=c.exports},9864:function(t,a,i){"use strict";i.r(a);var e=i(5522),n=i.n(e),o=i(7643),s=i.n(o),r=s()(n());r.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/**\n * @Author      : zouwq\n * @Date        : 2022-10-09\n * @Description : 此文件为项目的主题变量，这些变量目前只能通过uni.scss引入才有效，\n *                由于uni.scss中引入的样式会同时混入到全局样式文件和单独每一个页面的样式中，\n *                造成微信程序包太大，故uni.scss只建议放scss变量名相关样式，\n *                其他的样式可以通过main.js或者App.vue引入\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 波浪*/.template-outset[data-v-2276236d]{width:100vw;height:100vh}@-webkit-keyframes move_wave-data-v-2276236d{0%{-webkit-transform:translateX(0) translateZ(0) scaleY(1);transform:translateX(0) translateZ(0) scaleY(1)}50%{-webkit-transform:translateX(-25%) translateZ(0) scaleY(1);transform:translateX(-25%) translateZ(0) scaleY(1)}100%{-webkit-transform:translateX(-50%) translateZ(0) scaleY(1);transform:translateX(-50%) translateZ(0) scaleY(1)}}@keyframes move_wave-data-v-2276236d{0%{-webkit-transform:translateX(0) translateZ(0) scaleY(1);transform:translateX(0) translateZ(0) scaleY(1)}50%{-webkit-transform:translateX(-25%) translateZ(0) scaleY(1);transform:translateX(-25%) translateZ(0) scaleY(1)}100%{-webkit-transform:translateX(-50%) translateZ(0) scaleY(1);transform:translateX(-50%) translateZ(0) scaleY(1)}}.tnwave[data-v-2276236d]{overflow:hidden;position:fixed;left:0;right:0;bottom:calc(%?50?% + constant(safe-area-inset-bottom));bottom:calc(%?50?% + env(safe-area-inset-bottom));z-index:997;margin:auto;height:%?90?%}.waveWrapperInner[data-v-2276236d]{position:absolute;width:100%;overflow:hidden;height:100%}.wave[data-v-2276236d]{position:absolute;left:0;width:200%;height:100%;background-repeat:repeat-x;background-position:0 bottom;-webkit-transform-origin:center bottom;transform-origin:center bottom}.bgTop[data-v-2276236d]{opacity:.4}.waveTop[data-v-2276236d]{background-size:50% 45px}.waveAnimation .waveTop[data-v-2276236d]{-webkit-animation:move_wave-data-v-2276236d 4s linear infinite;animation:move_wave-data-v-2276236d 4s linear infinite}.bgMiddle[data-v-2276236d]{opacity:.6}.waveMiddle[data-v-2276236d]{background-size:50% 40px}.waveAnimation .waveMiddle[data-v-2276236d]{-webkit-animation:move_wave-data-v-2276236d 3.5s linear infinite;animation:move_wave-data-v-2276236d 3.5s linear infinite}.bgBottom[data-v-2276236d]{opacity:.95}.waveBottom[data-v-2276236d]{background-size:50% 35px}.waveAnimation .waveBottom[data-v-2276236d]{-webkit-animation:move_wave-data-v-2276236d 2s linear infinite;animation:move_wave-data-v-2276236d 2s linear infinite}.g-bubble[data-v-2276236d]:nth-child(0){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:3%;bottom:-16px;width:3px;height:3px;-webkit-animation:moveToTop-data-v-2276236d 4.377s ease-in-out -1.561s infinite;animation:moveToTop-data-v-2276236d 4.377s ease-in-out -1.561s infinite}.g-bubble[data-v-2276236d]:nth-child(1){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:5%;bottom:-57px;width:19px;height:19px;-webkit-animation:moveToTop-data-v-2276236d 9.017s ease-in-out -7.205s infinite;animation:moveToTop-data-v-2276236d 9.017s ease-in-out -7.205s infinite}.g-bubble[data-v-2276236d]:nth-child(2){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:24%;bottom:-13px;width:7px;height:7px;-webkit-animation:moveToTop-data-v-2276236d 7.868s ease-in-out -3.536s infinite;animation:moveToTop-data-v-2276236d 7.868s ease-in-out -3.536s infinite}.g-bubble[data-v-2276236d]:nth-child(3){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:12%;bottom:-39px;width:10px;height:10px;-webkit-animation:moveToTop-data-v-2276236d 8.601s ease-in-out -1.927s infinite;animation:moveToTop-data-v-2276236d 8.601s ease-in-out -1.927s infinite}.g-bubble[data-v-2276236d]:nth-child(4){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:3%;bottom:-25px;width:7px;height:7px;-webkit-animation:moveToTop-data-v-2276236d 9.021s ease-in-out -6.431s infinite;animation:moveToTop-data-v-2276236d 9.021s ease-in-out -6.431s infinite}.g-bubble[data-v-2276236d]:nth-child(5){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:40%;bottom:-41px;width:13px;height:13px;-webkit-animation:moveToTop-data-v-2276236d 2.217s ease-in-out -3.889s infinite;animation:moveToTop-data-v-2276236d 2.217s ease-in-out -3.889s infinite}.g-bubble[data-v-2276236d]:nth-child(6){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:87%;bottom:-45px;width:14px;height:14px;-webkit-animation:moveToTop-data-v-2276236d 10.591s ease-in-out -1.2s infinite;animation:moveToTop-data-v-2276236d 10.591s ease-in-out -1.2s infinite}.g-bubble[data-v-2276236d]:nth-child(7){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:87%;bottom:-42px;width:13px;height:13px;-webkit-animation:moveToTop-data-v-2276236d 10.555s ease-in-out -7.647s infinite;animation:moveToTop-data-v-2276236d 10.555s ease-in-out -7.647s infinite}.g-bubble[data-v-2276236d]:nth-child(8){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:48%;bottom:-45px;width:8px;height:8px;-webkit-animation:moveToTop-data-v-2276236d 2.844s ease-in-out -3.801s infinite;animation:moveToTop-data-v-2276236d 2.844s ease-in-out -3.801s infinite}.g-bubble[data-v-2276236d]:nth-child(9){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:73%;bottom:-55px;width:10px;height:10px;-webkit-animation:moveToTop-data-v-2276236d 2.394s ease-in-out -8.442s infinite;animation:moveToTop-data-v-2276236d 2.394s ease-in-out -8.442s infinite}.g-bubble[data-v-2276236d]:nth-child(10){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:90%;bottom:-32px;width:9px;height:9px;-webkit-animation:moveToTop-data-v-2276236d 3.856s ease-in-out -7.067s infinite;animation:moveToTop-data-v-2276236d 3.856s ease-in-out -7.067s infinite}.g-bubble[data-v-2276236d]:nth-child(11){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:25%;bottom:-25px;width:5px;height:5px;-webkit-animation:moveToTop-data-v-2276236d 10.997s ease-in-out -.311s infinite;animation:moveToTop-data-v-2276236d 10.997s ease-in-out -.311s infinite}.g-bubble[data-v-2276236d]:nth-child(12){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:87%;bottom:-15px;width:20px;height:20px;-webkit-animation:moveToTop-data-v-2276236d 8.289s ease-in-out -8.096s infinite;animation:moveToTop-data-v-2276236d 8.289s ease-in-out -8.096s infinite}.g-bubble[data-v-2276236d]:nth-child(13){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:29%;bottom:-6px;width:14px;height:14px;-webkit-animation:moveToTop-data-v-2276236d 8.268s ease-in-out -1.007s infinite;animation:moveToTop-data-v-2276236d 8.268s ease-in-out -1.007s infinite}.g-bubble[data-v-2276236d]:nth-child(14){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:18%;bottom:-2px;width:17px;height:17px;-webkit-animation:moveToTop-data-v-2276236d 7.171s ease-in-out -2.435s infinite;animation:moveToTop-data-v-2276236d 7.171s ease-in-out -2.435s infinite}.g-bubble[data-v-2276236d]:nth-child(15){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:46%;bottom:-44px;width:12px;height:12px;-webkit-animation:moveToTop-data-v-2276236d 7.755s ease-in-out -2.121s infinite;animation:moveToTop-data-v-2276236d 7.755s ease-in-out -2.121s infinite}.g-bubble[data-v-2276236d]:nth-child(16){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:79%;bottom:-53px;width:19px;height:19px;-webkit-animation:moveToTop-data-v-2276236d 7.996s ease-in-out -7.121s infinite;animation:moveToTop-data-v-2276236d 7.996s ease-in-out -7.121s infinite}.g-bubble[data-v-2276236d]:nth-child(17){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:76%;bottom:-18px;width:12px;height:12px;-webkit-animation:moveToTop-data-v-2276236d 9.88s ease-in-out -.124s infinite;animation:moveToTop-data-v-2276236d 9.88s ease-in-out -.124s infinite}.g-bubble[data-v-2276236d]:nth-child(18){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:30%;bottom:-37px;width:16px;height:16px;-webkit-animation:moveToTop-data-v-2276236d 8.853s ease-in-out -6.469s infinite;animation:moveToTop-data-v-2276236d 8.853s ease-in-out -6.469s infinite}.g-bubble[data-v-2276236d]:nth-child(19){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:92%;bottom:-22px;width:11px;height:11px;-webkit-animation:moveToTop-data-v-2276236d 6.169s ease-in-out -1.319s infinite;animation:moveToTop-data-v-2276236d 6.169s ease-in-out -1.319s infinite}.g-bubble[data-v-2276236d]:nth-child(20){opacity:.2;border-radius:100%;position:fixed;background:#26b4f5;right:36%;bottom:-32px;width:19px;height:19px;-webkit-animation:moveToTop-data-v-2276236d 2.24s ease-in-out -7.817s infinite;animation:moveToTop-data-v-2276236d 2.24s ease-in-out -7.817s infinite}@-webkit-keyframes moveToTop-data-v-2276236d{70%{opacity:.05}100%{opacity:.01;-webkit-transform:translate(-50%,-180px) scale(.3);transform:translate(-50%,-180px) scale(.3)}}@keyframes moveToTop-data-v-2276236d{70%{opacity:.05}100%{opacity:.01;-webkit-transform:translate(-50%,-180px) scale(.3);transform:translate(-50%,-180px) scale(.3)}}.custom-tabbar-page[data-v-2276236d]{width:100%;height:100vh;box-sizing:border-box;padding-bottom:%?0?%;padding-bottom:calc(%?0?% + constant(safe-area-inset-bottom));padding-bottom:calc(%?0?% + env(safe-area-inset-bottom))}\n/* 底部导航 statr */.tabbar[data-v-2276236d]{width:100%;height:%?45?%;height:calc(%?45?% + constant(safe-area-inset-bottom));height:calc(%?45?% + env(safe-area-inset-bottom));position:fixed;bottom:%?0?%;left:0;right:0;background-color:initial;z-index:998;padding-bottom:calc(%?65?% + constant(safe-area-inset-bottom));padding-bottom:calc(%?65?% + env(safe-area-inset-bottom));display:flex;align-items:center;justify-content:space-between}.tabbar .action[data-v-2276236d]{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;overflow:initial}.tabbar .action .bar-icon[data-v-2276236d]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?42?%}.tabbar .action .bar-icon uni-image[data-v-2276236d]{width:%?55?%;height:%?55?%;display:inline-block}.tabbar .action .bar-circle[data-v-2276236d]{position:relative;display:block;margin:%?0?% auto %?0?%;text-align:center;font-size:%?52?%;line-height:%?90?%;width:%?100?%!important;height:%?100?%!important;overflow:hidden}.tabbar .action .bar-circle uni-image[data-v-2276236d]{width:%?100?%;height:%?100?%;display:inline-block;margin:%?0?% auto %?0?%}.tabbar .bar-center[data-v-2276236d]{-webkit-animation:suspension-data-v-2276236d 3s ease-in-out infinite;animation:suspension-data-v-2276236d 3s ease-in-out infinite}.tabbar .bar-center .nav-index-button[data-v-2276236d]{-webkit-animation:suspension-data-v-2276236d 3s ease-in-out infinite;animation:suspension-data-v-2276236d 3s ease-in-out infinite;z-index:999999}.tabbar .bar-center .nav-index-button__content[data-v-2276236d]{position:absolute;width:%?100?%;height:%?100?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tabbar .bar-center .nav-index-button__content--icon[data-v-2276236d]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1;-webkit-transform:scale(.85);transform:scale(.85)}.tabbar .bar-center .nav-index-button__content--icon[data-v-2276236d]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%}.tabbar .bar-center .nav-index-button__meteor[data-v-2276236d]{position:absolute;top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.tabbar .bar-center .nav-index-button__meteor__wrapper[data-v-2276236d]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:spin-data-v-2276236d 20s linear infinite;animation:spin-data-v-2276236d 20s linear infinite}.tabbar .bar-center .nav-index-button__meteor__item[data-v-2276236d]{position:absolute;width:%?100?%;height:%?100?%;border-radius:%?1000?%;left:0;top:0}.tabbar .bar-center .nav-index-button__meteor__item--pic[data-v-2276236d]{display:block;width:100%;height:100%;background:url(https://resource.tuniaokj.com/images/cool_bg_image/arc3.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:arc-data-v-2276236d 4s linear infinite;animation:arc-data-v-2276236d 4s linear infinite}\n/* 底部导航 end */@-webkit-keyframes suspension-data-v-2276236d{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.6rem);transform:translateY(-.6rem)}}@keyframes suspension-data-v-2276236d{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.6rem);transform:translateY(-.6rem)}}@-webkit-keyframes spin-data-v-2276236d{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes spin-data-v-2276236d{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@-webkit-keyframes arc-data-v-2276236d{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes arc-data-v-2276236d{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\n/* 新*/\n/* 按钮 */.button-1[data-v-2276236d]{background-color:rgba(0,0,0,.15);position:fixed;\n  /* bottom:200rpx;\n     right: 20rpx; */bottom:24%;right:%?30?%;z-index:1001;border-radius:100px}.button-2[data-v-2276236d]{background-color:rgba(0,0,0,.15);position:fixed;\n  /* bottom:200rpx;\n     right: 20rpx; */bottom:15%;right:%?30?%;z-index:1001;border-radius:100px}\n/* 图标容器15 start */.icon15__item[data-v-2276236d]{width:30%;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon15__item--icon[data-v-2276236d]{width:%?100?%;height:%?100?%;font-size:%?50?%;border-radius:50%;margin-bottom:%?18?%;z-index:1}.icon15__item--icon[data-v-2276236d]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%}',""]),a["default"]=r}}]);