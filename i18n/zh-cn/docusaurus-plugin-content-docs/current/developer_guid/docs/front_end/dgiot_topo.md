---
title: 低代码框架
sidebar_position: 1
---

#  dgiot_topo
 ![dgiot_topo.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/developer_guid/front_end/dgiot_topo.png)

  dgiot_topo插件通过mqtt实时发送消息给组态大屏各个视图节点,实现数据实时动态渲染
  
## Topic设计
 $dg/user/Topo/${NodeType}/${NodeId}/report

-  Topic字段表

|字段|类型|空|默认|注释|
|:----    |:-------    |:--- |---|------      |
|NodeType    |text     |否 |  |  拖拽式视图节点类型           |
|NodeId |text |否 |    |   拖拽式视图节点ID  |

- 备注：无

## 视图节点

|NodeType |NodeId|注释|
|:----    |:-------  |--- |
|counter |product_counter |产品数量|
|counter |devcice_counter |设备数量|

### counter节点
  counter节点是对dgiot某一类数据的统计值
- topic
  
  $dg/user/Topo/counter/${NodeId}/report
 
- payload

  ```json
  {
  "lable":"产品数量",
  "value":10
  }
```

