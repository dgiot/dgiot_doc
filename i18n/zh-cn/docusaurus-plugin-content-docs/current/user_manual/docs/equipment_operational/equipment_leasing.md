---
title: 工业设备租赁一体化运维平台
sidebar_position: 1
---
# 工业设备租赁一体化运维平台

## 概述
### 产品介绍
工业设备租赁一体化运维平台以数据为基础、以算法为支撑、以场景为导向，应用先进的实时大数据处理，运维封装行业经验的深度实践，打通后台与前台业务应用之间的信息断层和管理断层，提升业务与IT管理效能。   
工业设备租赁一体化运维平台实现以下功能:
* 多租户分级管理
* 设备位置可视化管理
* 设备数据信息一屏展示
* 设备故障预警与诊断告警
* 设备远程控制与配置同步
* 小程序远程运维
  
### 产品概述及目标
随着企业本钱的持续增长，工业领域对于移动化物联网运维系统由智能硬件接口设备、智能应用系统云平台套件以及大数据智能分析效劳组成，通过智能采控终端采集设备，将各种数据上传到云平台，存储
、整理、分析，通过智能应用系统实现时时在线监控、记录、查询、统计、分析、修改、报警等操作，实现远程智能化管理，提高企业智能化管理水平。的潜在需求，设备联网、产品物联网化将成为必然趋势，从工业和企业角度来说，产品物联网化将从运营、销售、售后等各方面帮助提升企业的效率，为工
业或企业在行业的洗牌中占据一定优势。

## 设备交互流程

![industry1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/industry/industry1.png)

### 多租户分级管理

![industry6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/industry/industry6.png)

## 设备信息采集(MQTT)

订阅登录报文的Topic($dg/thing/{productId}/{deviceAddr}/firmware/report)获取设备信息   
使用设备编号即设备地址作为唯一标识  
登录报文
```
{
    "RatedPower":37,
    "RatedFreq":50,
    "RatedLoad":2000,
    "WeightFactor":360,
    "SumLayer":1,
    "LearnedLayer":0,
    "SelfLearned":0,
    "SelfAdjust":0,
    "Lon":11710.6737,
    "Lat":3419.7984,
    "SerialNo":"20115275",
    "CtrlSerialNo":"202007023288",
    "MDSerialNo":"22222222",
    "SIMSerialNo":"22222222222222222222",
    "ProtocolVersion":"1.0.1",
    "CtrSoftVersion":"0.1.0",
    "MDSoftVersion":"1.0.1"
}
```

订阅周期报文的Topic($dg/thing/{productId}/{deviceAddr}/properties/report)获取设备信息   
周期报文  
```
{
    "BrakeRequest": 0,
    "InverterFault": 0,
    "BrakeFbkFault": 0,
    "AutoSwitch": 0,
    "AntiFallingLimit": 0,
    "InDoorLimit": 0,
    "OutDoorLimit": 0,
    "SkyightDoorLimit": 0,
    "UpLimit": 0,
    "DownLimit": 0,
    "UpDecSpdLimit": 1,
    "DownDecSpdLimit": 1,
    "Handheld": 0,
    "HandUp": 0,
    "HandDown": 0,
    "HandheldStart": 0,
    "ConsoleUp": 0,
    "ConsoleDown": 0,
    "HighSpd": 0,
    "ConsoleStart": 0,
    "PowerState": 1,
    "PubState": 1,
    "AgreementState": 0,
    "UpState":0,
    "DownState":0,
    "HighSpdState":0,
    "RunState":0,
    "BrakeState":0,
    "ContactorState":1,
    "AimRunDir":0,
    "RunFreq":50,
    "BusVoltage":514,
    "Vout":380,
    "Iout":20,
    "RunPhase":4,
    "HMIComm":0,
    "ConsoleComm":0,
    "CurrLayer":1,
    "RunLayer":0,
    "AimLayer":0,
    "DeadLoad":1500,
    "NetWeight":164,
    "PubFreq":30,
    "PowerOffDelay":48,
    "servicetime":2,
    "idletime":3
}
```
### 数据处理

|标识符|功能名称|数据类型|
|-|-|-|  
|agreementstate|协议状态|enum|
|servicetime|电梯服务时间|int|
|idletime|电梯空闲时间|int| 
|poweroffdelay|关机确认时间|int| 
|runstate|电梯运行状态|enum|
|aimlayer|目标楼层|int|
|runlayer|运行层|int|
|currlayer|当前楼层|int|
|pubfreq|发布频率控制|int|
|deadload|自重|float|
|netweight|净重|float|
|consolecomm|操作台通信状态|enum|
|hmicomm|HMI 通信状态|enum|
|runphase|运行阶段|int|
|iout|输出电流|float|
|vout|输出电压|float|
|busvoltage|母线电压|float|
|runfreq|运行频率|float|
|aimrundir|运行方向|enum|
|contactorstate|主接触器输出|enum|
|brakestate|抱闸输出|enum|
|highspdstate|高速|enum|
|downstate|下行|enum|
|upstate|上行|enum|
|pubstate|通信服务状态|enum|
|powerstate|开关机状态|enum|
|consolestart|操作台启动|enum|
|highspd|操作台高速|enum|
|consoledown|操作台下行|enum|
|consoleup|操作台上行|enum|
|handheldstart|手持启动|enum|
|handdown|手持下行|enum|
|handup|手持上行|enum|
|handheld|手持状态|enum|
|downdecspdlimit|下减速状态|enum|
|updecspdlimit|上减速状态|enum|
|downlimit|下限位状态|enum|
|uplimit|上限位状态|enum|
|skyightdoorlimit|天窗门状态|enum|
|outdoorlimit|出料门状态|enum|
|indoorlimit|进料门状态|enum|
|antifallinglimit|防坠器状态|enum|
|autoswitch|手自切换|enum|
|brakefbkfault|抱闸电源反馈|enum|
|inverterfault|变频器故障|enum|
|brakerequest|抱闸请求|enum|

### 设备位置可视化管理
```
通过获取经纬度在地图上进行标识，进行宏观以及微观的数量展示
{
    "Lon":12003.28182,
    "Lat":3021.80238,
}
```
![industry4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/industry/industry4.png)


## 组态
### 图片背景
```markdown
组态底图 product/topo/{productid}.jpg 如果{productid} 为 ed09e37bbb， 则完整的组态底图文件数据编码为 product/topo/ed09e37bbb.jpg
```
### 设备数据信息一屏展示
与物模型相对应的数据组态屏
![industry2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/industry/industry2.png)
## 告警中心
各种属性相关联进行数据处理，实现告警中心
![industry3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/industry/industry3.png)

## 设备远程控制与配置同步

设备远程控制与配置同步以低代码为核心对平台的控制界面编辑
![industry5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/industry/industry5.png)


### 低代码标识
#### 开关机控制
```markdown
"name": "data.profile.PowerOnCtrl",
"label": "开关机控制：",
"value": " 1",
"inline": false,
"onText": "开机",
"option": "",
"offText": "关机",
"disabled": false,
"trueValue": 1,
"disabledOn": "",
"falseValue": " 0"
```
#### 信息服务控制
```markdown
"name": "data.profile.PubCtrl",
"label": "信息服务控制：",
"value": 1,
"inline": false,
"onText": "开启",
"option": "",
"offText": "关闭",
"trueValue": " 1",
"disabledOn": "",
"falseValue": " 0"
```

#### 发布频率
```markdown
"name": "data.profile.PubFreq",
"size": "",
"step": 1,
"label": "发布频率:",
"value": 30
```
#### 协议解除
```markdown
"name": "data.profile.AgreementRelease",
"label": "协议解除：",
"value": 0,
"onText": "解除协议",
"option": "",
"offText": "不解除协议",
"trueValue": " 1",
"disabledOn": "",
"falseValue": " 0"
```
#### 开关机控制
```markdown
"name": "data.profile.PowerOffDelay",
"size": "",
"step": 1,
"label": "关机延迟时间:",
"value": 48
```

## 小程序远程运维













