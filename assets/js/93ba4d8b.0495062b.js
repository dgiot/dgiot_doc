"use strict";(self.webpackChunkdgiot_website=self.webpackChunkdgiot_website||[]).push([[7020],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,f=d["".concat(o,".").concat(u)]||d[u]||s[u]||r;return a?n.createElement(f,c(c({ref:t},m),{},{components:a})):n.createElement(f,c({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(4137));const r={title:"\u6444\u50cf\u5934\u63a5\u5165",sidebar_position:10},c=void 0,l={unversionedId:"practical_tutorial/docs/9",id:"practical_tutorial/docs/9",title:"\u6444\u50cf\u5934\u63a5\u5165",description:"1.\u6253\u5f00cmd\u547d\u4ee4\u7a97\u53e3\uff0c\u8f93\u5165ping 192.168.1.1 --- 100\uff0c\u89c2\u5bdf\u662f\u5426\u6709\u56de\u590d,\u5f53ping\u5230\u4e00\u5b9a\u4f4d\u7f6e\uff0c\u8f93\u5165ARP -A\uff0c\u89c2\u5bdfip\u5730\u5740\u4e0emac\u5730\u5740\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/practical_tutorial/docs/9.md",sourceDirName:"practical_tutorial/docs",slug:"/practical_tutorial/docs/9",permalink:"/docs/practical_tutorial/docs/9",draft:!1,editUrl:"https://github.com/dgiot/dgiot_doc/tree/main/docs/practical_tutorial/docs/9.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u6444\u50cf\u5934\u63a5\u5165",sidebar_position:10},sidebar:"docs",previous:{title:"OPC-DA\u8bbe\u5907\u63a5\u5165\u6559\u7a0b",permalink:"/docs/practical_tutorial/docs/8"},next:{title:"\u6d4b\u8bd5",permalink:"/docs/practical_tutorial/docs/10"}},o={},p=[{value:"1.\u6253\u5f00cmd\u547d\u4ee4\u7a97\u53e3\uff0c\u8f93\u5165ping 192.168.1.1 --- 100\uff0c\u89c2\u5bdf\u662f\u5426\u6709\u56de\u590d,\u5f53ping\u5230\u4e00\u5b9a\u4f4d\u7f6e\uff0c\u8f93\u5165ARP -A\uff0c\u89c2\u5bdfip\u5730\u5740\u4e0emac\u5730\u5740\u3002",id:"1\u6253\u5f00cmd\u547d\u4ee4\u7a97\u53e3\u8f93\u5165ping-19216811-----100\u89c2\u5bdf\u662f\u5426\u6709\u56de\u590d\u5f53ping\u5230\u4e00\u5b9a\u4f4d\u7f6e\u8f93\u5165arp--a\u89c2\u5bdfip\u5730\u5740\u4e0emac\u5730\u5740",level:4},{value:"2.\u89c2\u5bdf\u6444\u50cf\u5934\u4e0amac\u5730\u5740\uff0c\u5bf9\u5e94\u5230ip\u5730\u5740\uff0c\u4e0b\u8f7d\u8f6f\u4ef6VLC midea player\u3002",id:"2\u89c2\u5bdf\u6444\u50cf\u5934\u4e0amac\u5730\u5740\u5bf9\u5e94\u5230ip\u5730\u5740\u4e0b\u8f7d\u8f6f\u4ef6vlc-midea-player",level:4},{value:"3.\u5b89\u88c5\u597d\u6253\u5f00VLC,\u70b9\u51fb\u5a92\u4f53\uff0c\u70b9\u51fb\u6253\u5f00\u7f51\u7edc\u4e32\u6d41\uff0c\u590d\u5236\u7c98\u8d34rtsp://admin:shuwafly2020@192.168.1.7:554/cam/realmonitor?channel=1&amp;subtype=0\uff0c\u70b9\u51fb\u64ad\u653e\u5373\u53ef\u663e\u793a\u56fe\u50cf\u3002",id:"3\u5b89\u88c5\u597d\u6253\u5f00vlc\u70b9\u51fb\u5a92\u4f53\u70b9\u51fb\u6253\u5f00\u7f51\u7edc\u4e32\u6d41\u590d\u5236\u7c98\u8d34rtspadminshuwafly202019216817554camrealmonitorchannel1subtype0\u70b9\u51fb\u64ad\u653e\u5373\u53ef\u663e\u793a\u56fe\u50cf",level:4},{value:"\u63a8\u6d41\u6559\u7a0b\uff1a",id:"\u63a8\u6d41\u6559\u7a0b",level:3},{value:"1.\u4e0b\u8f7d\u89e3\u538bffmpeg.rar\uff0c\u6253\u5f00\u6587\u4ef6\u5939\u5230ffmpeg",id:"1\u4e0b\u8f7d\u89e3\u538bffmpegrar\u6253\u5f00\u6587\u4ef6\u5939\u5230ffmpeg",level:4},{value:"2.\u63a5\u4e0b\u6765\u5728\u56fe\u4e2d\u4f4d\u7f6e\u8f93\u5165CMD\u70b9\u51fb\u56de\u8f66",id:"2\u63a5\u4e0b\u6765\u5728\u56fe\u4e2d\u4f4d\u7f6e\u8f93\u5165cmd\u70b9\u51fb\u56de\u8f66",level:4},{value:"3.\u5f39\u51fa\u547d\u4ee4\u6846",id:"3\u5f39\u51fa\u547d\u4ee4\u6846",level:4},{value:"4.\u8fdb\u5165bin\u6587\u4ef6\u5939\u4e2d\uff0c\u8f93\u5165ffmpeg\xa0-i\xa0\xa0&quot;rtsp://admin:shuwafly2020@192.168.1.7:554\uff08\u6444\u50cf\u5934\u5730\u5740\uff09&quot;\xa0\xa0-r\xa015\xa0\xa0-s\xa0640*480\xa0-an\xa0-vcodec\xa0h264\xa0-max_delay\xa0100\xa0-g\xa05\xa0-b\xa07000\xa0-f\xa0flv\xa0\xa0&quot;rtmp://153239.livepush.myqcloud.com/live/dfghgtf?txSecret=572220ccc127fdaf866044ae3118efef&amp;txTime=6163B56F\uff08\u63a8\u6d41\u5730\u5740\uff09&quot;",id:"4\u8fdb\u5165bin\u6587\u4ef6\u5939\u4e2d\u8f93\u5165ffmpeg-irtspadminshuwafly202019216817554\u6444\u50cf\u5934\u5730\u5740-r15-s640480-an-vcodech264-max_delay100-g5-b7000-fflvrtmp153239livepushmyqcloudcomlivedfghgtftxsecret572220ccc127fdaf866044ae3118efeftxtime6163b56f\u63a8\u6d41\u5730\u5740",level:4},{value:"5.\u590d\u5236\u57df\u540d\u7f51\u9875\u5730\u5740\u5728\u5e73\u53f0\u4e0a\u5373\u53ef",id:"5\u590d\u5236\u57df\u540d\u7f51\u9875\u5730\u5740\u5728\u5e73\u53f0\u4e0a\u5373\u53ef",level:4}],m={toc:p};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"1\u6253\u5f00cmd\u547d\u4ee4\u7a97\u53e3\u8f93\u5165ping-19216811-----100\u89c2\u5bdf\u662f\u5426\u6709\u56de\u590d\u5f53ping\u5230\u4e00\u5b9a\u4f4d\u7f6e\u8f93\u5165arp--a\u89c2\u5bdfip\u5730\u5740\u4e0emac\u5730\u5740"},"1.\u6253\u5f00cmd\u547d\u4ee4\u7a97\u53e3\uff0c\u8f93\u5165ping 192.168.1.1 --- 100\uff0c\u89c2\u5bdf\u662f\u5426\u6709\u56de\u590d,\u5f53ping\u5230\u4e00\u5b9a\u4f4d\u7f6e\uff0c\u8f93\u5165ARP -A\uff0c\u89c2\u5bdfip\u5730\u5740\u4e0emac\u5730\u5740\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/z.png",alt:"z.png"})),(0,i.kt)("h4",{id:"2\u89c2\u5bdf\u6444\u50cf\u5934\u4e0amac\u5730\u5740\u5bf9\u5e94\u5230ip\u5730\u5740\u4e0b\u8f7d\u8f6f\u4ef6vlc-midea-player"},"2.\u89c2\u5bdf\u6444\u50cf\u5934\u4e0amac\u5730\u5740\uff0c\u5bf9\u5e94\u5230ip\u5730\u5740\uff0c\u4e0b\u8f7d\u8f6f\u4ef6VLC midea player\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/vlc-3.0.16-win64.exe"},"vlc-3.0.16-win64.exe")),(0,i.kt)("h4",{id:"3\u5b89\u88c5\u597d\u6253\u5f00vlc\u70b9\u51fb\u5a92\u4f53\u70b9\u51fb\u6253\u5f00\u7f51\u7edc\u4e32\u6d41\u590d\u5236\u7c98\u8d34rtspadminshuwafly202019216817554camrealmonitorchannel1subtype0\u70b9\u51fb\u64ad\u653e\u5373\u53ef\u663e\u793a\u56fe\u50cf"},"3.\u5b89\u88c5\u597d\u6253\u5f00VLC,\u70b9\u51fb\u5a92\u4f53\uff0c\u70b9\u51fb\u6253\u5f00\u7f51\u7edc\u4e32\u6d41\uff0c\u590d\u5236\u7c98\u8d34rtsp://admin:",(0,i.kt)("a",{parentName:"h4",href:"mailto:shuwafly2020@192.168.1.7"},"shuwafly2020@192.168.1.7"),":554/cam/realmonitor?channel=1&subtype=0\uff0c\u70b9\u51fb\u64ad\u653e\u5373\u53ef\u663e\u793a\u56fe\u50cf\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/x.png",alt:"x.png"}),"\n",(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/c.png",alt:"c.png"})),(0,i.kt)("h3",{id:"\u63a8\u6d41\u6559\u7a0b"},"\u63a8\u6d41\u6559\u7a0b\uff1a"),(0,i.kt)("h4",{id:"1\u4e0b\u8f7d\u89e3\u538bffmpegrar\u6253\u5f00\u6587\u4ef6\u5939\u5230ffmpeg"},"1.\u4e0b\u8f7d\u89e3\u538b",(0,i.kt)("a",{parentName:"h4",href:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/ffmpeg.rar"},"ffmpeg.rar"),"\uff0c\u6253\u5f00\u6587\u4ef6\u5939\u5230ffmpeg"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/1230.png",alt:"1230.png"})),(0,i.kt)("h4",{id:"2\u63a5\u4e0b\u6765\u5728\u56fe\u4e2d\u4f4d\u7f6e\u8f93\u5165cmd\u70b9\u51fb\u56de\u8f66"},"2.\u63a5\u4e0b\u6765\u5728\u56fe\u4e2d\u4f4d\u7f6e\u8f93\u5165CMD\u70b9\u51fb\u56de\u8f66"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/0123.png",alt:"0123.png"})),(0,i.kt)("h4",{id:"3\u5f39\u51fa\u547d\u4ee4\u6846"},"3.\u5f39\u51fa\u547d\u4ee4\u6846"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/d7a72f6b-da80-a652-ce30-3b7fac72c790.png",alt:"d7a72f6b-da80-a652-ce30-3b7fac72c790.png"})),(0,i.kt)("h4",{id:"4\u8fdb\u5165bin\u6587\u4ef6\u5939\u4e2d\u8f93\u5165ffmpeg-irtspadminshuwafly202019216817554\u6444\u50cf\u5934\u5730\u5740-r15-s640480-an-vcodech264-max_delay100-g5-b7000-fflvrtmp153239livepushmyqcloudcomlivedfghgtftxsecret572220ccc127fdaf866044ae3118efeftxtime6163b56f\u63a8\u6d41\u5730\u5740"},'4.\u8fdb\u5165bin\u6587\u4ef6\u5939\u4e2d\uff0c\u8f93\u5165ffmpeg\xa0-i\xa0\xa0"rtsp://admin:',(0,i.kt)("a",{parentName:"h4",href:"mailto:shuwafly2020@192.168.1.7"},"shuwafly2020@192.168.1.7"),':554\uff08\u6444\u50cf\u5934\u5730\u5740\uff09"\xa0\xa0-r\xa015\xa0\xa0-s\xa0640*480\xa0-an\xa0-vcodec\xa0h264\xa0-max_delay\xa0100\xa0-g\xa05\xa0-b\xa07000\xa0-f\xa0flv\xa0\xa0"rtmp://153239.livepush.myqcloud.com/live/dfghgtf?txSecret=572220ccc127fdaf866044ae3118efef&txTime=6163B56F\uff08\u63a8\u6d41\u5730\u5740\uff09"'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/fdc38822-603a-97ba-0b3b-20bb648e368f.png",alt:"fdc38822-603a-97ba-0b3b-20bb648e368f.png"})),(0,i.kt)("h4",{id:"5\u590d\u5236\u57df\u540d\u7f51\u9875\u5730\u5740\u5728\u5e73\u53f0\u4e0a\u5373\u53ef"},"5.\u590d\u5236\u57df\u540d\u7f51\u9875\u5730\u5740\u5728\u5e73\u53f0\u4e0a\u5373\u53ef"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/81e17434-36b0-f9d9-b4d7-4befd6b66f88.png",alt:"81e17434-36b0-f9d9-b4d7-4befd6b66f88.png"})))}s.isMDXComponent=!0}}]);