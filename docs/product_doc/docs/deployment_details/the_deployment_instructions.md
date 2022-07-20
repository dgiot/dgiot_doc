---
title: 部署须知
sidebar_position: 12
---

## 数据库说明
系统当前使用的数据库：

| 数据类型 | 名称 | 说明 |
|-----|----|----|
|  配置数据  |  postgres  |  关系数据库  |
|  状态数据  |  tdengine |  时序数据库  |
|  文件数据   | go-fast |   对象存储数据库 |

## 端口设置
### 端口列表

| 端口名 | 连接地址 | 说明 |
|-----|----|----|
|  80   |  http://prod.iotn2n.com/  |  dgiot http连接  |
|  443  |  https://prod.iotn2n.com/ |  dgiot https证书连接  |
|  1883   | tcp://prod.iotn2n.com:1883 |   mqtt tcp连接 |
|  8883| tcp://prod.iotn2n.com:8883    |   mqtt tcp 证书连接 |
|  8083  | ws://prod.iotn2n.com:8083/mqtt   |  mqtt websocket连接  |
|  8084  |  wss://prod.iotn2n.com:8084/mqtt  | mqtt websocke证书连接   |

#### 防火墙

系统需要开启端口进行数据传输，如果云服务默认没有开启对应端口，需要在防火墙上添加安全规则
需要开启的端口列表如上，操作如下（以腾讯云为例）：


点击防火墙按钮进入防火墙规则配置页面 
![点击进入防火墙](https://images.gitee.com/uploads/images/2022/0108/152451_94c17d8c_10296448.png "屏幕截图.png")

添加防火墙端口
![设置防火墙端口](https://images.gitee.com/uploads/images/2022/0108/152137_822b7ca6_10296448.png "屏幕截图.png")


