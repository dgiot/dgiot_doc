"use strict";(self.webpackChunkdgiot_website=self.webpackChunkdgiot_website||[]).push([[9695],{4137:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),d=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=d(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=d(n),m=i,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return n?o.createElement(h,a(a({ref:e},p),{},{components:n})):o.createElement(h,a({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=s;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1246:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(7462),i=(n(7294),n(4137));const r={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:5},a=void 0,c={unversionedId:"product_doc/docs/introduction/install_the_deployment",id:"product_doc/docs/introduction/install_the_deployment",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u5b89\u88c5\u90e8\u7f72",source:"@site/docs/product_doc/docs/introduction/install_the_deployment.md",sourceDirName:"product_doc/docs/introduction",slug:"/product_doc/docs/introduction/install_the_deployment",permalink:"/en/docs/product_doc/docs/introduction/install_the_deployment",draft:!1,editUrl:"https://github.com/dgiot/dgiot_doc/tree/main/docs/product_doc/docs/introduction/install_the_deployment.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:5},sidebar:"docs",previous:{title:"\u4ea7\u54c1\u4f18\u52bf",permalink:"/en/docs/product_doc/docs/introduction/product_advantage"},next:{title:"\u4e2d\u6027\u8bbe\u7f6e",permalink:"/en/docs/product_doc/docs/introduction/neutral_setting"}},l={},d=[{value:"\u5b89\u88c5\u90e8\u7f72",id:"\u5b89\u88c5\u90e8\u7f72",level:2},{value:"1.\u670d\u52a1\u5668\uff08\u4f8b\u5982\u963f\u91cc\u4e91\u670d\u52a1\u5668\u6216\u8005\u817e\u8baf\u4e91\u4e91\u670d\u52a1\u5668\uff09",id:"1\u670d\u52a1\u5668\u4f8b\u5982\u963f\u91cc\u4e91\u670d\u52a1\u5668\u6216\u8005\u817e\u8baf\u4e91\u4e91\u670d\u52a1\u5668",level:4},{value:"2.\u590d\u5236\u7c98\u8d34\u7f51\u5740 https://gitee.com/dgiiot/dgiot \u8fdb\u5165DG-IOT\u5f00\u6e90\u7269\u8054\u7f51\u5e73\u53f0",id:"2\u590d\u5236\u7c98\u8d34\u7f51\u5740-httpsgiteecomdgiiotdgiot-\u8fdb\u5165dg-iot\u5f00\u6e90\u7269\u8054\u7f51\u5e73\u53f0",level:4},{value:"3.\u5c06\u9875\u9762\u5411\u4e0b\u6ed1\u81f3\u4e00\u952e\u90e8\u7f72\u5904\uff0c\u590d\u5236\u6b64\u884c\u4ee3\u7801",id:"3\u5c06\u9875\u9762\u5411\u4e0b\u6ed1\u81f3\u4e00\u952e\u90e8\u7f72\u5904\u590d\u5236\u6b64\u884c\u4ee3\u7801",level:4},{value:"4.\u4ee5\u817e\u8baf\u4e91\u670d\u52a1\u5668\u4e3a\u4f8b\uff0c\u5fae\u4fe1\u626b\u7801\u767b\u5f55\uff0c\u8fdb\u5165\u5b9e\u4f8b\u9875\u9762",id:"4\u4ee5\u817e\u8baf\u4e91\u670d\u52a1\u5668\u4e3a\u4f8b\u5fae\u4fe1\u626b\u7801\u767b\u5f55\u8fdb\u5165\u5b9e\u4f8b\u9875\u9762",level:4},{value:"5.\u8fdb\u5165\u8be5\u56fe\u9875\u9762\uff0c\u5bc6\u94a5\u4e3a\u79df\u597d\u670d\u52a1\u5668\u65f6\u88c5\u7cfb\u7edf\u65f6\u521b\u5efa\uff0c\u9009\u62e9\u5bc6\u94a5\u540e\uff0c\u70b9\u51fb\u767b\u9646",id:"5\u8fdb\u5165\u8be5\u56fe\u9875\u9762\u5bc6\u94a5\u4e3a\u79df\u597d\u670d\u52a1\u5668\u65f6\u88c5\u7cfb\u7edf\u65f6\u521b\u5efa\u9009\u62e9\u5bc6\u94a5\u540e\u70b9\u51fb\u767b\u9646",level:4},{value:"6.\u8fdb\u5165\u9875\u9762\uff0c\u5c06\u590d\u5236\u7684\u4ee3\u7801\u7c98\u8d34\u540e\u56de\u8f66\uff0c\u7b49\u5f85\u811a\u672c\u5b89\u88c5",id:"6\u8fdb\u5165\u9875\u9762\u5c06\u590d\u5236\u7684\u4ee3\u7801\u7c98\u8d34\u540e\u56de\u8f66\u7b49\u5f85\u811a\u672c\u5b89\u88c5",level:4},{value:"7.\u5f53\u51fa\u73b0\u56fe\u4e2d\u6240\u793a\uff0c\u5373\u4e3a\u5b89\u88c5\u90e8\u7f72\u5b8c\u6210",id:"7\u5f53\u51fa\u73b0\u56fe\u4e2d\u6240\u793a\u5373\u4e3a\u5b89\u88c5\u90e8\u7f72\u5b8c\u6210",level:4},{value:"7.\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8f93\u5165\u57df\u540d/IP\u5730\u5740\u5373\u53ef\u8bbf\u95ee\u7269\u8054\u7f51\u5e73\u53f0\u3002\u7528\u6237\u540d\uff0c\u5bc6\u7801\u9ed8\u8ba4\u5747\u4e3a dgiot_admin",id:"7\u90e8\u7f72\u5b8c\u6210\u540e\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165\u57df\u540dip\u5730\u5740\u5373\u53ef\u8bbf\u95ee\u7269\u8054\u7f51\u5e73\u53f0\u7528\u6237\u540d\u5bc6\u7801\u9ed8\u8ba4\u5747\u4e3a-dgiot_admin",level:4}],p={toc:d};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5b89\u88c5\u90e8\u7f72"},"\u5b89\u88c5\u90e8\u7f72"),(0,i.kt)("h4",{id:"1\u670d\u52a1\u5668\u4f8b\u5982\u963f\u91cc\u4e91\u670d\u52a1\u5668\u6216\u8005\u817e\u8baf\u4e91\u4e91\u670d\u52a1\u5668"},"1.\u670d\u52a1\u5668\uff08\u4f8b\u5982\u963f\u91cc\u4e91\u670d\u52a1\u5668\u6216\u8005\u817e\u8baf\u4e91\u4e91\u670d\u52a1\u5668\uff09"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/"},"\u817e\u8baf\u4e91"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.aliyun.com/"},"\u963f\u91cc\u4e91")),(0,i.kt)("h4",{id:"2\u590d\u5236\u7c98\u8d34\u7f51\u5740-httpsgiteecomdgiiotdgiot-\u8fdb\u5165dg-iot\u5f00\u6e90\u7269\u8054\u7f51\u5e73\u53f0"},"2.\u590d\u5236\u7c98\u8d34\u7f51\u5740 ",(0,i.kt)("a",{parentName:"h4",href:"https://gitee.com/dgiiot/dgiot"},"https://gitee.com/dgiiot/dgiot")," \u8fdb\u5165DG-IOT\u5f00\u6e90\u7269\u8054\u7f51\u5e73\u53f0"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/2.png",alt:"2.png"})),(0,i.kt)("h4",{id:"3\u5c06\u9875\u9762\u5411\u4e0b\u6ed1\u81f3\u4e00\u952e\u90e8\u7f72\u5904\u590d\u5236\u6b64\u884c\u4ee3\u7801"},"3.\u5c06\u9875\u9762\u5411\u4e0b\u6ed1\u81f3\u4e00\u952e\u90e8\u7f72\u5904\uff0c\u590d\u5236\u6b64\u884c\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget -q https://gitee.com/dgiiot/dgiot/raw/master/dgiot_install.sh  && sh dgiot_install.sh\n-d \uff08\u57df\u540d  \u914d\u7f6e\u81ea\u5df1\u7684\u57df\u540d \u5982\u4e0d\u914d\u7f6e\u9ed8\u8ba4 prod.iotn2n.com  \uff09  \n-s \uff08\u7248\u672c\u53f7 \u6307\u5b9a\u7248\u672c\u53f7\uff09\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/3.png",alt:"3.png"}),"\n\u6ce8\uff1a\u57df\u540d\u8bc1\u4e66\u653e\u9700\u8981\u5230\u6267\u884c\u547d\u4ee4\u7684\u540c\u4e00\u76ee\u5f55\u4e0b"),(0,i.kt)("h4",{id:"4\u4ee5\u817e\u8baf\u4e91\u670d\u52a1\u5668\u4e3a\u4f8b\u5fae\u4fe1\u626b\u7801\u767b\u5f55\u8fdb\u5165\u5b9e\u4f8b\u9875\u9762"},"4.\u4ee5\u817e\u8baf\u4e91\u670d\u52a1\u5668\u4e3a\u4f8b\uff0c\u5fae\u4fe1\u626b\u7801\u767b\u5f55\uff0c\u8fdb\u5165\u5b9e\u4f8b\u9875\u9762"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/34.png",alt:"34.png"})),(0,i.kt)("h4",{id:"5\u8fdb\u5165\u8be5\u56fe\u9875\u9762\u5bc6\u94a5\u4e3a\u79df\u597d\u670d\u52a1\u5668\u65f6\u88c5\u7cfb\u7edf\u65f6\u521b\u5efa\u9009\u62e9\u5bc6\u94a5\u540e\u70b9\u51fb\u767b\u9646"},"5.\u8fdb\u5165\u8be5\u56fe\u9875\u9762\uff0c\u5bc6\u94a5\u4e3a\u79df\u597d\u670d\u52a1\u5668\u65f6\u88c5\u7cfb\u7edf\u65f6\u521b\u5efa\uff0c\u9009\u62e9\u5bc6\u94a5\u540e\uff0c\u70b9\u51fb\u767b\u9646"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/140.png",alt:"140.png"})),(0,i.kt)("h4",{id:"6\u8fdb\u5165\u9875\u9762\u5c06\u590d\u5236\u7684\u4ee3\u7801\u7c98\u8d34\u540e\u56de\u8f66\u7b49\u5f85\u811a\u672c\u5b89\u88c5"},"6.\u8fdb\u5165\u9875\u9762\uff0c\u5c06\u590d\u5236\u7684\u4ee3\u7801\u7c98\u8d34\u540e\u56de\u8f66\uff0c\u7b49\u5f85\u811a\u672c\u5b89\u88c5"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/12.png",alt:"12.png"})),(0,i.kt)("h4",{id:"7\u5f53\u51fa\u73b0\u56fe\u4e2d\u6240\u793a\u5373\u4e3a\u5b89\u88c5\u90e8\u7f72\u5b8c\u6210"},"7.\u5f53\u51fa\u73b0\u56fe\u4e2d\u6240\u793a\uff0c\u5373\u4e3a\u5b89\u88c5\u90e8\u7f72\u5b8c\u6210"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/6.png",alt:"6.png"})),(0,i.kt)("h4",{id:"7\u90e8\u7f72\u5b8c\u6210\u540e\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165\u57df\u540dip\u5730\u5740\u5373\u53ef\u8bbf\u95ee\u7269\u8054\u7f51\u5e73\u53f0\u7528\u6237\u540d\u5bc6\u7801\u9ed8\u8ba4\u5747\u4e3a-dgiot_admin"},"7.\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8f93\u5165\u57df\u540d/IP\u5730\u5740\u5373\u53ef\u8bbf\u95ee\u7269\u8054\u7f51\u5e73\u53f0\u3002\u7528\u6237\u540d\uff0c\u5bc6\u7801\u9ed8\u8ba4\u5747\u4e3a dgiot_admin"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%88%901.png",alt:"\u90e8\u7f72\u5b8c\u62101.png"}),"\n",(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%88%902.png",alt:"\u90e8\u7f72\u5b8c\u62102.png"}),"A8%E7%BD%B2%E5%AE%8C%E6%88%902.png)"))}u.isMDXComponent=!0}}]);