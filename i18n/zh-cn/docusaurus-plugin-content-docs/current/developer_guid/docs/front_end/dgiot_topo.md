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
|counter |device_counter |设备数量|
|counter |online_device_counter |在线设备数|
|counter |offline_device_counter |离线设备数|
|pie | device_online_offline |设备在线离线饼图|
| list |warning_list |告警列表|
| list |device_list  |设备列表|

### counter节点
  counter节点是对dgiot某一类数据的统计值
- topic
  
  $dg/user/topo/counter/${NodeId}/report
 
- payload

```json
  {
  "label":"label1",
  "value":"value"
  }
```
- 示例

```json
  {
  "lable":"产品数量",
  "value":10
  }
```
###  pie节点
  pie节点是用来了解对dgiot某些数据占比情况（饼图）
- topic
  
  $dg/user/topo/pie/${NodeId}/report
 
- payload

```json
{
      columns: ["column1", "column2"],
      rows: [
        { column1: "value1", column2: "value2"},
        { column1: "value_1", column2: "value_2" },
      ]
}
```

- 示例
```json
 {
      columns: ["名称", "数量"],
      rows: [
        { 名称: "在线设备", 数量: 10 },
        { 名称: "离线设备", 数量: 20 },
      ],
}
```

###  list节点
  list节点是用来了解对dgiot列表型数据的展示和处理
- topic

   $dg/user/topo/list/${NodeId}/report

#### warning_list

   $dg/user/topo/list/warning_list/report

- 示例

```json
{
      columns: ["设备编号", "报警时间","状态","产品名称"],
      rows: [
        { "devaddr": "设备编号", "createdAt": "2022-10-31 19:12:02","status":"告警产生","productname":"产品名称" },
        { "devaddr": "设备编号", "createdAt": "2022-10-31 19:12:02","status":"告警恢复","productname":"产品名称" },
        { "devaddr": "设备编号3", "createdAt": "报警时间3","status":"状态3","productname":"产品名称3" },
        { "devaddr": "设备编号4", "createdAt": "报警时间4","status":"状态4","productname":"产品名称4" },
      ]
}
```
#### device_list

   $dg/user/topo/list/device_list/report

- 示例

```json
{
      columns: ["设备名称", "设备地址","安装位置","状态","最后更新时间"],
      rows: [
        { "name": "设备名称1", "devaddr": "设备地址1","address":"余杭区良渚街道","status":"ONLINE","updatedAt":"2022-10-31 19:12:02" },
        { "name": "设备名称2", "devaddr": "设备地址2","address":"安装位置2","status":"OFFLINE","updatedAt":"2022-10-28 19:35:42" },
        { "name": "设备名称3", "devaddr": "设备地址3","address":"安装位置3","status":"状态3","updatedAt":"最后更新时间3" },
      ]
}
```