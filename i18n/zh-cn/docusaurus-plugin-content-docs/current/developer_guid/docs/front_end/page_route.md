---
title: 云组态
sidebar_position: 1
---

### dgiotTopo架构交互
![dgiot_topo.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/dgiottopo/dgiot_topo/dgiot_topo.png)
### 起步
### 图元id编码规则
 + Image的id为产品id({productid}),文档存库地址为topo/product/{productid}.jpg
 + websocket的topic规则为topo/${productid}/${deviceid}
 + Label的name表示label类型,id为物模型属性{productid}_{thingid},
  tag设计为event，text展示业务数据,
   例如label的name为thing，product为9528ac1c5d, thingid为flow，
```
{
    "attrs":{
        "id":"9528ac1c5d_flow",
        "name":"thing",
        "x":100,
        "y":100,
        "draggable":true
    },
    "className":"Label",
    "children":[
        {
            "attrs":{
                "name":"mousemove"
            },
            "className":"Tag"
        },
        {
            "attrs":{
                "id":"9528ac1c5d_flow_text",
                "text":"dgiot",
                "fontSize":50,
                "lineHeight":1.2,
                "padding":10,
                "fill":"green"
            },
            "className":"Text"
        }
    ]
}
```



####  组态关联物模型流程
![组态物模型消息交互流程.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/dgiottopo/dgiot_topo/%E7%BB%84%E6%80%81%E7%89%A9%E6%A8%A1%E5%9E%8B%E6%B6%88%E6%81%AF%E4%BA%A4%E4%BA%92%E6%B5%81%E7%A8%8B.png)
##### 概念
###### 图元数据
图元数据是基于konva.toJSON()封装，加入自己定义的lable。及lable关联对应的动作消息数据事件，绑定产品，设备，物模型等数据。

图元数据示例(图元初始属性)：

```javascript
{
    "attrs":{
        "id":"9528ac1c5d_flow",
        "name":"thing",
        "x":100,
        "y":100,
        "draggable":true
    },
    "className":"Label",
    "children":[
        {
            "attrs":{
                "name":"mousemove"
            },
            "className":"Tag"
        },
        {
            "attrs":{
                "id":"9528ac1c5d_flow_text",
                "text":"dgiot",
                "fontSize":50,
                "lineHeight":1.2,
                "padding":10,
                "fill":"yellow"
            },
            "className":"Text"
        }
    ]
}
```
根据label的name表示一种图元类型，开放时需要独立创建文件，例如name为thing
则应该创建一个对应的文件来处理动作,所有的event处理逻辑都封装到这个文件中，通过evnetbus和外部的页面微服务（mqtt）等进行通讯
在更新数据时，只需传入对应Label.id 和其更新后的值，即可进行更新 

###### dgiotThing
dgiotThing 为物模型的处理函数
#### 流程 
1. 渲染图元数据时，会自动为图元添加绑定对应的event处理函数
2. 用户点击thingTopo，通过 eventBus.on({topic}，{payload})触发对应的dgiotThing事件
3. 根据对应物模型函数方法，通过eventBus触发对应事件逻辑，例如
   - 弹出物模型组件，操作物模型（关联对应的物模型。绑定物模型的值，修改绑定的物模型）
   - 弹出视频组件，上传、播放，删除视频资源（直播流，视频，在线视频地址）。
   - 弹窗音频组件，上传、播放，删除音频资源
5. 通过 eventBus.on({topic}，{payload})向dgiotTopo发送绑定物模型的数据。更新对应物模型数据

#### 数据
##### 绑定物模型的数据
![绑定物模型的数据.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/dgiottopo/dgiot_topo/%E7%BB%91%E5%AE%9A%E7%89%A9%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%95%B0%E6%8D%AE.png)
##### 数据概念
##### bindtopo消息格式
- topic: getTopic(dgiotThing)
- payload 
 ```javascript
{
  "newid":"9528ac1c5d_new",
  "id":"9528ac1c5d_flow"
  "text":"13°"
  ...
}
```
##### 数据更新

#### ackthing 
通过eventBus.on({topic}，{payload})组态绑定物模型后，使用eventBus.emit('ackthing') 设置dgiot—_topo中的属性值
##### ackthing 消息格式
- topic: getTopic(ackthing)
- payload 
 ```javascript
{
  "newid":"9528ac1c5d_new",
  "id":"9528ac1c5d_flow"
  "text":"16°"，
  "type":"ackthing"，
  "fill":"green"
  ...
}
```
#### 存档
1. 根据返回消息，根据id{9528ac1c5d_flow}在konva.stage找到图元，更新图元（图元id{9528ac1c5d_new}，图元文本{13°}，图元颜色{green}等属性）
2. 数据更新完后。使用konva.stage.toJSON()序列化数据后，通过eventBus.on({topic}，{payload})发给dgiotThing（物模型）
3. 通过eventBus.on({topic}，{payload})发给物模型
##### savetopo消息格式
- topic: getTopic(dgiotThing)
- payload 
 ```javascript
{
      "type":"savetopo"，
      "id":"9528ac1c5d",
      "data": stage.toJSON()
     ...
   }
```


查找到关联的物模型数据发生变化后，通过eventBus更新组态节点（节点id，文本内容）
![渲染数据.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/dgiottopo/dgiot_topo/%E6%B8%B2%E6%9F%93%E6%95%B0%E6%8D%AE.png)


