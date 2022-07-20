---
title: 低代码
sidebar_position: 3
---

dgiot引入百度amis低代码框架的方式有两种
# 页面级引入
 - 在dgiot_dashboard原有的vue框架下，采用渐进式的方式，逐步引入页面级的amis组件，实现半低代码化，
 - 可以兼顾vue和react两大语音优势，适合承接较大型的物联网管理后台，详见[dgiot_dashboard](https://github.com/dgiot/dgiot-dashboard)，
 - 计划在今年年底前完成，并在数个大型物联网管理平台上做完技术验证
 
# 整站式引入 
- 在amis_admin框架下引入App级别的amis技术框架，
- 支持中小型的物联网管理后台快速开发,详见[dgiot_amis](https://gitee.com/dgiiot/dgiot_amis)，
- 计划在明年上半年完成低代码化，并在数个中小型物联网平台上做完技术验证

# 预期效果
 - 百度amis着重于表单渲染的低代码化，Konva侧重于二维组态的低代码化渲染，
 - 系统通过这两个github上低代码组件，能给广大的dgiot开发者和用户代码带来更好的额体验。
 
 ## dgiot-amis 请求配置
 
 由于dgiot-server 返回的后端格式参数与amis适配器参数默认不一致，因此需要配置amis的adaptor和requestAdaptor。示例如下：
 ### payload示例
 #### amis json
 ```javascript
 {
   "type": "page",
   "initApi": {
     "url": "iotapi/classes/Device/parse_objectid",
     "method": "get",
     "adaptor": "return {\r\n  \"status\":0,\r\n  \"msg\":\"\",\r\n  \"data\":response.data.basedata\r\n  }",
     "headers": {
       "store": "localStorage",
       "dgiotReplace": "parse_objectid"
     },
     "dataType": "json"
   },
   "body": [
     {
       "type": "form",
       "api": {
         "method": "put",
         "url": "iotapi/classes/Device/parse_objectid",
         "headers": {
           "store": "localStorage",
           "dgiotReplace": "parse_objectid"
         },
         "dataType": "json",
         "requestAdaptor": "return {\r\n    ...api,\r\n    data: {\r\n        basedata:{ ...api.data}\r\n    }\r\n}"
       },
       "body": [
         {
           "type": "input-text",
           "label": "设备名称",
           "name": "name"
         }
       ]
     }
   ]
 }
 ```
 
 ####  请求适配器(requestAdaptor)
 ```javascript
    "requestAdaptor": "return {\r\n    ...api,\r\n    data: {\r\n        basedata:{ ...api.data}\r\n    }\r\n} "
 ```
 在页面提交时将数据中的...api.data存储到basedata字段里
 ![...api.data存储到basedata里](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/2b83132e82d26c87f6ec0bbcb58608d1)
 
 ### 页面初始化（initApi）
 页面初始化时,会通过axios请求数据。在请求时，会将对应的变量进行替换
 
 #### 接受适配器(adaptor) payload
 ```javascript
  "adaptor": "return {\r\n  \"status\":0,\r\n  \"msg\":\"\",\r\n  \"data\":payload.basedata\r\n  }"
 ```
 在页面初始化时，将amis请求返回数组basedata字段的数据渲染到页面data中
 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/13b387e46643b8c72bbfbab36ac0a99f)
 
 
 ### 配置接收适配器

 
 [百度amis api](https://baidu.gitee.io/amis/zh-CN/docs/types/api)