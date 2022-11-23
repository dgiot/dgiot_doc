---
title: 低代码框架
sidebar_position: 1
---

#  dgiot_topo
 ![dgiot_topo.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/developer_guid/front_end/dgiot_topo.png)

  dgiot_topo插件通过mqtt实时发送消息给组态大屏各个视图节点,实现数据实时动态渲染
  
## Topic设计
 $dg/user/Topo/${sessionToken}/${NodeType}/${NodeId}/report

-  Topic字段表

|字段|类型|空|默认|注释|
|:----    |:-------    |:--- |---|------      |
|NodeType    |text     |否 |  |  拖拽式视图节点类型           |
|NodeId |text |否 |    |   拖拽式视图节点ID  |

- 备注：无

## 视图节点

|NodeType |NodeId|注释|数据类型|组件类型| 图片地址|
|:----    |:-------  |--- | --- | --- | --- |
|counter |product_counter |产品数量| mqtt | vuecomponent| -|
|counter |device_counter |设备数量| mqtt | vuecomponent| - |
|counter |device_online_counter |在线设备数| mqtt | vuecomponent| -|
|counter |device_offline_counter |离线设备数| mqtt | vuecomponent| -|
|counter |device_poweron_counter |开机设备数| mqtt | vuecomponent| -|
|counter |device_poweroff_counter |关机设备数| mqtt | vuecomponent| -|
|pie |device_poweron_poweroff |设备开关机饼图| mqtt | vuecomponent| /dgiot_file/topo/png/turnonoffpie.png|
|list |warning_list |告警列表| mqtt | vuecomponent| /dgiot_file/topo/png/warninglist.png|
|list |device_list  |设备列表| mqtt | vuecomponent| /dgiot_file/topo/png/devicelist.png |
|list |workorder_list  |工单列表| api | vuecomponent| /dgiot_file/topo/png/workorderlist.png |
|liveboard |videoalive  |视频监控| api | vuecomponent| /dgiot_file/topo/png/videolive.png |
|map |baidumap  |百度地图| api | vuecomponent| /dgiot_file/topo/png/baidumap.png |
|count |all_countvalue  |基本数据统计卡片组| api | vuecomponent| /dgiot_file/topo/png/countvalue.png |
|count |product_count  |产品数量| api | vuecomponent| /dgiot_file/topo/png/product_count.png |
|count |device_count  |设备数量| api | vuecomponent| /dgiot_file/topo/png/device_count.png |
|count |warning_count  |告警数量| api | vuecomponent| /dgiot_file/topo/png/warning_count.png |
|count |order_count  |工单数量| api | vuecomponent| /dgiot_file/topo/png/order_count.png |
|amisview | ${ViewId}  |低代码视图组件| api | amiscomponent| /dgiot_file/topo/png/amiscomponent.png |

### counter节点
  counter节点是对dgiot某一类数据的统计值，该数值通过mqtt 连接实时获取
- topic
  
  $dg/user/topo/${sessionToken}/counter/${NodeId}/report
 
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
  "label":"产品数量",
  "value":10
  }
```
- 组态节点示例
```json
{
              "attrs": {
                "x": 201.99998836517406,
                "y": 15.031454662303943,
                "id": "product_counter",
                "fill": "rgba(80, 190, 240, 0.2)",
                "name": "vuecomponent",
                "text": "产品数量",
                "type": "counter",
                "width": 262,
                "height": 72,
                "stroke": "",
                "fontSize": 14,
                "draggable": true,
                "fontFamily": "",
                "lineHeight": 0,
                "strokeWidth": 0.1
              },
              "className": "Rect"
}
```
###  pie节点
  pie节点是用来了解对dgiot某些数据占比情况（饼图）
- topic
  
  $dg/user/topo/${sessionToken}/pie/${NodeId}/report
 
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
        { 名称: "开机设备", 数量: 10 },
        { 名称: "关机设备", 数量: 20 },
      ],
}
```

###  list节点
  list节点是用来了解对dgiot列表型数据的展示和处理
- topic

   $dg/user/topo/${sessionToken}/list/${NodeId}/report

#### warning_list

   $dg/user/topo/${sessionToken}/list/warning_list/report

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

   $dg/user/topo/${sessionToken}/list/device_list/report

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
#### workorder_list

   $dg/user/topo/${sessionToken}/list/workorder_list/report

- 示例

```json
{
      columns: ["工单编号", "工单类型","创建时间","工单状态"],
      rows: [
        { "number": "工单编号1", "type": "工单类型1","createdAt":"创建时间","status":"工单状态1" },
        { "number": "工单编号2", "type": "工单类型2","createdAt":"创建时间2","status":"工单状态2" },
        { "number": "工单编号3", "type": "工单类型3","createdAt":"创建时间3","status":"状态3" },
      ]
}
```
### count节点
  count节点是对dgiot某一类数据的统计值,该数值通过api 接口请求获取
- 注意事项: 该视图设置时跳转路径为配置的低代码路由路径
  - 例如： 设备管理菜单管理路由配置路径为 /amis/View/5das4ffs44,即配置跳转路径就为 /amis/View/5das4ffs44
### amisview节点
     amisview节点是首页大屏中通过请求低代码页面进行渲染的节点
  - 注意事项: 用户需设置该节点的位置 大小和对应绑定的低代码表单   
### map节点
    map节点是首页大屏中用来展示设备地图的节点
  - 注意事项: 用户需设置该节点的位置,大小
## 低代码实时数据监听

### crud 设备列表管理设计
- topic $dg/user/devicestate/${deviceid}/report

||设备名称 |设备地址|安装位置|在线离线情况|
|---|:----    |:-------  |--- | --- |
|className|dgiotname |dgiotdevaddr|dgiotaddress|dgiotstatus|

```json
"payloadString":"{\"0c147bbf22\":{\"address\":\"\",\"isEnable\":true,\"lastOnlineTime\":1668076442,\"location\":{\"__type\":\"GeoPoint\",\"latitude\":30.373198,\"longitude\":120.076845},\"status\":\"ONLINE\"}}"

```
###  低代码配置规范说明
  - 低代码中设备管理的 设备名称 设备地址 安装位置 状态 必须以此为模板以便于能够进行一个实时数据的更新
   - ```json
    {
  "type": "text",
  "name": "objectId",
  "label": "设备Id",
  "className": "dgiotojectId"
   },
   {
  "type": "text",
  "name": "name",
  "label": "设备名称",
  "className": "dgiotname"
   },
   {
  "type": "text",
  "name": "devaddr",
  "label": "设备地址",
  "className": "dgiotdevaddr"
   },
   {
  "type": "text",
  "name": "address",
  "label": "安装位置",
  "className": "dgiotaddress"
  },
  {
  "type": "mapping",
  "map": {
    "ONLINE": "<span class='label label-success'>在线</span>",
    "OFFLINE": "<span class='label label-danger'>离线</span>"
  },
  "name": "status",
  "label": "状态",
  "className": "dgiotstatus"
  }

   ```

```html
<!-- 前端变化参考 -->
 <span class='label label-success'>在线</span>
 <span class='label label-danger'>离线</span>
 ```
前端数据发送参考
```javascript
Vue.prototype.$dgiotBus.$emit('$dg/user/devicestate',{
  "payloadString":"{\"0c147bbf22\":{\"address\":\"\",\"isEnable\":true,\"lastOnlineTime\":1668076442,\"location\":{\"__type\":\"GeoPoint\",\"latitude\":30.373198,\"longitude\":120.076845},\"status\":\"ONLINE\"}}"
})

```



