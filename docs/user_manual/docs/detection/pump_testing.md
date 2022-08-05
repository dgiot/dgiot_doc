---
title: 水泵远程质量检测与质量对比系统
sidebar_position: 1
---
# 概述
### 产品介绍
此产品主要围绕水泵远程检测数据采集、采集任务管理、质检数据比对分析等功能作基础设计与研发，完成对水泵检测取证过程配套硬件设备的选型与调测；项目架构时需要考虑平台后期发展的可扩展性。
水泵远程质量检测与质量比对系统实现以下功能：
* 实现水泵运行参数采集功能；
* 实现水泵检测现场监控功能；
* 实现审查机构水泵检测过程回溯功能；
* 实现终端数据远程传输功能；
* 实现质量比对相关远程存储、查询、统计、分析等功能。

### 产品概述及目标
  利用工业物联网、移动通信、网络技术、智能传感、电子证据链、数据爬取等技术完成水泵远程质量检测取证，实现水泵质量关键数据的采集与传输；借助第三方可信公证云平台的认证，确保检测取证过程合法合规；通过水泵远程检测取证工具矩阵的数据与检测结果数据的比对，保障检测过程的规范性、真实性与有效性。利用大数据分析、科学计算、分布式存储、分布式计算、可视化等技术完成水泵远程质量检测质量比对，通过对不同地区、厂家、类型、批次、指标等多个维度数据分析比对，实现对水泵质量数据的大数据分；借助与相关行业标准、技术规范的比对，确保将对水泵质量比对的数据进行全面科学分析。通过对生产企业水泵质量数据的分析应用，可为质检中心水泵产业整合与行业升级的决策提供支撑。
#### 水泵质量远程检测
  线上完成水泵检测任务的流转，及时任务分配与提示，加速质检任务的发布执行与质检结果的发布；依托线上取证平台充分整合行业检测资源，科学利用水泵行业整体质量检测能力，将质检认证资质授权至质检能力合格企业，有效缓解水泵企业质量检测能力发展不均衡、质检中心检测任务过重、行业质检资源未充分利用等问题。
提供便携式水泵质量比对现场采集套件与云端质量比对数据分析系统；通过现场采集套件与云端服务、计算资源协同工作，完成质检远程取证业务流、数据流双流合一的闭环管理，逐步实现水泵质量检测远程取证的规范化、标准化、制度化。
#### 水泵质量比对系统
 完成水泵质量核心指标数据建模，运用虚拟化技术构建测试仪表数字化模型，利用云端服务实现测试仪表质量检测结果可视化呈现；为二次检测设备厂商提供“互联网+”质量问题诊断服务，提升行业整体数字化、信息化水平；结合水泵质量数据多维度对比分析，为水泵企业提升产品质量提供综合诊断与质量提升引导服务，为监管单位进行产业整合提供全面数据支撑。
逐步扩展成以水泵检测综合服务为核心的综合服务平台，实现远程取证服务、行业交流服务、质检综合管理、质量检测数据分析、数据运营“五位一体”的总体布局；加强水泵企业共享质检中心、共享水泵检测实验室、二次检测设备厂商、行业专家的线上交流与互动；利用电子商务技术提供线上水泵检测服务交易平台，提高质检资源的综合利用率，实现行业质检资源的综合利用与动态调控。

# 检测交互流程
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/182a241a68fe537acdcba891e3701039)

# 设备数据采集流程
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/417d7c69f293aae1382c1b930c93ef9b)

#### 1、采用dgiot_dtu扫描本地OPC_DA数据再上传到平台
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/64853c3d74d1756a1490b05b58f56b8d)

#### 2、通过低代码配置需要采集的OPC服务器及点位，来下发采集任务
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/297ffb1d9ab88edfaf49572c7146b080)

### 采集数据展示
实时数据
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/26d9541f2f4db128380df3bd116b0c68)
采集数据
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/1058ae29972c543f8b45bf85048bac8d)
采集数据生成性能曲线
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/8ddd09fc1ac76db1b886fcc692fa0473)

# 报告系统
## 1.添加报告模板
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/b0050c539984172ab9c3d1e26911222a)
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/1d649bbee08ebac503fb69b35bee7a4d)

## 2.给模板添加取证组件
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/3fff850d67bc79ee76491cc206cddfec)

## 3.添加检测任务
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/0f33d51513763de334c5a9449c404cef)

## 4.配置任务数据
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/ebee671c7d108a0b535939778184f787)
开始任务
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/5967a5fee39511c80c1800933453d89d)
采集数据
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/7f88f9da152c9acd729eb8b43c8cbf35)

## 5.检测报告添加取证，提交审核
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/d42b4afc806acad0cbb6b3dce85a2c64)
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/0c15676bc8c80b44551e374dba2113da)

## 6.审核
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/21b4c150f912a525ed2d7c25c5abe4fd)
审核通过
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/f3714582ec2a895003ac9942da456ea5)
生成报告
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/b18dd6bedf488e9c224cdd0e3c0afe8c)
数据及性能曲线
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/bc55b7b0da71c8d478bb589706c782aa)






