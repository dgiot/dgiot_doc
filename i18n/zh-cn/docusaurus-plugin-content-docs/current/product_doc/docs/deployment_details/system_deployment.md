---
title: 系统部署
sidebar_position: 1
---

import DgiotVersion from '@site/src/components/dgiotVersion';

# 立即开始

一键式部署的 dgiot 用户越来越多，但最终部署成功率偏低，为了更好的服务 dgiot 用户，
近期将安排一系列的一键式部署测试，希望能得到 dgiot 生态合作伙伴、云服务厂商和服务器厂商的支持，谢谢！

## 一键部署/一键更新

dgiot 的部署/更新非常简单，一键部署/更新指令即可。
dgiot也将会提供开发工具、最新代码。

<DgiotVersion color="#25c2a0" title='输入您的电子邮箱以接收下载链接'>点击获取</DgiotVersion>

#### 部署操作详情请转移至具体服务器部署。
+ [百度云部署](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/baidu_cloud_deployment)
+ [阿里云部署](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/aliyun_deployment)
+ [腾讯云部署](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/tencent_cloud_deployment)
+ [华为云部署](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/huawei_cloud_deployment)
+ [天翼云部署](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/tianyi_cloud_deployment)
+ [腾讯云轻量型服务器部署](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/tencent_cloud_lightweight_application_server_deployment)
+ [浪潮物理服务器部署](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/inspur_physical_server_deployment)


## 版本列表

| 发行版                                                   | 版本号     | MD5                              | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------- | ---------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [v4.4.5](https://gitee.com/dgiiot/dgiot/releases/v4.4.5) | dgiot_156  | 8c2fba6120d3c2f9a92ad9813275adc6 | 增加了 OPC/modbus/mqtt/电表，四种类型的设备接入                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [v4.4.6](https://gitee.com/dgiiot/dgiot/releases/v4.4.6) | dgiot_187  | 8141f4a429cb7076477ca5f1980de42f | 修复组态保存问题，修复设备地理位置修改后实时显示的问题，增加了对天翼云的支持                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [v4.4.7](https://gitee.com/dgiiot/dgiot/releases/v4.4.7) | dgiot_254  | b70d95592f0a65c8ba896e451e892ccc | 区分开发角色和运维角色，优化了平台的功能菜单，优化了平台的打开速度，开放了云检测的检测任务                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [v4.4.8](https://gitee.com/dgiiot/dgiot/releases/v4.4.8) | dgiot_280  | 642cb947f7d69e29029a20bb184883d7 | 优化了前端加载资源，修复了组态 bug                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [v4.4.9](https://gitee.com/dgiiot/dgiot/releases/v4.4.9) | dgiot_n33  | 26599c0d5d94575bd1b04109aba3b1cb | 组态增加了低代码控制功能，在云函数添加了低代码的管理界面                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [v4.5.0](https://gitee.com/dgiiot/dgiot/releases/v4.5.0) | dgiot_n62  | 71e0211861b647b1c6816ce81f26f52f | 更新了物模型和物模型的配置界面，集成了数据字典，开放了 DLT645，DLT376，DLINK 协议，支持 DLT645 和 DLT376 电表接入，可以通过低代码平台对 dgiot 进行二次开发了                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [v4.5.1](https://gitee.com/dgiiot/dgiot/releases/v4.5.1) | dgiot_n99  | 2db7806c1bdb7eb5fddbb460af94f285 | 1、城市建筑消防协议 GB26875;<br/>2、物模型动态协议;<br/>3、HTTPC 客户端桥接通道;<br/>4、MQTTC 客户端桥接通道;<br/>5、UDPC 客户端桥接通道;<br/>6、TCPC 客户端桥接通道;<br/>7、MYSQL 采集通道                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [v4.5.3](https://gitee.com/dgiiot/dgiot/releases/v4.5.3) | dgiot_n139 | 3da7c2e4929259d3c3c023f67f8bb979 | 1. parse 订阅功能, 实现配置联动功能，如产品设备缓存，td 库表字段自动变更等 <br/>2. 适配百度 amis 整套 api，支持 json 多级 merge，低代码适配更简单 <br/>3. 物模型属性上报，与规则引擎联动产生设备告警，并推送到消息通知通道（支持小程序，短信，邮件等） <br/>4. 通过产品卡片展示组态/低代码/字典等功能，并展示产品下设备在/离线，开/关机等统计功能，设备管理添加 <br/>5. 新增设备会自动添加动态表单大屏，设备组态示例，设备列表中增加设备位置，设备状态自动同步缓存表，支持低代码下发设备配置<br/>6. 删除部分多余的 api，并添加 swaggeer 树结构 <br/>7. dlink 协议增加 mqtt 设备接入，并打通从设备到用户侧全流程的鉴权和消息路由<br/>8. 修复上个版本因物模型支持动态协议电表设备和 mqtt 设备接入失败等 bug |
| [v4.5.4](https://gitee.com/dgiiot/dgiot/tree/v4.5.4)     | dgiot_n184 | 963afd492685c5c5cd14a52b072f17b4 | 1、dgiot_dlink topic 指令统一规范<br/>2、dgiot_client 统一管理<br/>3、dgiot_task 指令任务流程优化<br/>4、设备管理页面优化，（设备状态，地理位置，实时数据，设备信息，设备控制）<br/>5.组态设计/预览拆分<br/>6.新增压测云栏目<br/>7.优化用户低代码设计<br/>8.历史数据统计                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [v4.5.5](https://gitee.com/dgiiot/dgiot/releases/v4.5.5) | dgiot_n206 | 63ede62183ec67827ae7b5aef4cc1901 | 1.组态编辑 bug 修复(修复组态绑定物模型、修复组态物模型回显)<br/>2.组态显示 bug 修复(修复低代码控件显示对应实时数据，修复实时数据显示单位)<br/>3.修复分页组件联动功能(告警中心、产品管理、设备管理、通道管理)<br/>4.物模型添加是否展示功能<br/>5.手动新建设备默认在线状态(之前手动创建为离线状态)<br/>6.合并设备管理与设备列表，名称还为设备管理<br/>7.dgiot_device 缓存优化                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [v4.5.6](https://gitee.com/dgiiot/dgiot/releases/v4.5.6) | dgiot_n210|  1e07120c13edb490a4a9e06358ec3d35|1.设备经纬度优化<br/>2.告警规则界面化修复<br/>3.告警中心“查看”匹配低代码<br/>4.物模型数据存储优化## 部署支持列表


一键式部署的dgiot用户越来越多，但最终部署成功率偏低，为了更好的服务dgiot用户，
近期将安排一系列的一键式部署测试，希望能得到dgiot生态合作伙伴、云服务厂商和服务器厂商的支持，谢谢！
# 部署支持列表
|      | centos 6/7/8 |  debian8/10 | ubuntu 16.04/18.04 | Windows|Mac|Docker|
|------|----------|----------|----------|---------|----------|--------------|
| 百度云     |      √   |       |          |         |          |        √    |   
| 腾讯云     |    √   |      |          |         |  |√|
| 阿里云     |     √  |       |          |         |          |   √           |  
| 华为云     |     √   |       |          |         |          |     √         | 
| 天翼云     |      √  |       |          |         |          |     √         | 
| AWS云      |      |       |          |         |          |       √       |  
| 微软云      |      |       |          |         |          |        √      |  
| 谷歌云      |      |       |          |         |          |       √       |  
| 联想笔记本  |       |       |          |         |          |       √       | 
| Mac笔记本   |       |       |          |         |          |       √       |    
| 浪潮服务器  |     √  |       |          |         |          |       √       |    
| 戴尔服务器  |     √  |       |          |         |          |       √       |
| 联想服务器  |     √  |       |          |         |          |       √       |     

# 配置要求
|要求|配置|
|---|---|
|最低|一核1G|
|商用|四核8G|

centos 7镜像下载
https://share.weiyun.com/nwIG7HyW
    