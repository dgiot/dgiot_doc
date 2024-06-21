---
title: PLC通道设备接入
sidebar_position: 2
---
# PLC设备连接手册
### 1.创建采集通道
1.创建PLC采集通道。位置在通道管理-创建通道
<img width="100%" src="http://www.dgiotcloud.cn/wp-content/uploads/2022081812155529.png" />

2.选择PLC采集通道，填写名称，协议类型、S7协议。
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/PLC%E9%80%9A%E9%81%93%E9%85%8D%E7%BD%AE.png" />

### 2.创建产品
1.创建产品

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081902061520.png" />

2.PLC协议设备类型的产品

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E5%88%9B%E5%BB%BA%E4%BA%A7%E5%93%81.png" />

### 3.物模型
1. **导入物模型**
进入物模型页面，选择PLC协议类型，下载plc物模型模板

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E7%89%A9%E6%A8%A1%E5%9E%8B%E6%A8%A1%E6%9D%BF%E4%B8%8B%E8%BD%BD.png" />

**由于PLC与DGIOT物联网数据库的兼容性问题，需要对数据类型做转换。**

| PLC类型  | PLC数据类型（注意小写）  |
| :------------: | :------------: |
|  bool | bool  |
|  byte | byte  |
|  Int |  short |
|  Word | ushort  |
|  Double Int | int32  |
|  Double Word | uint32  |
|  REAL | float  |
|  string | string  |

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/PLC%E7%82%B9%E4%BD%8D%E8%A1%A8.png" />

2. **以上文件用excel修改后需要转换格式。将该文件用记事本打开，选择文件另存为**

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E8%AE%B0%E4%BA%8B%E6%9C%AC.png" />

3. **保存类型选择所有文件，玄宗当前文件，编码选择UTF-8，点击保存。**

<img width="40%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E5%8F%A6%E5%AD%98%E4%B8%BA.png" />

4. **完成上述步骤后，在界面导入即可看到物模型文件。**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E7%89%A9%E6%A8%A1%E5%9E%8B.png" />

### 4.创建分组
1.进入分组管理，新增。
选择创建的PLC采集通道，所属部门一级关联创建的产品
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E6%96%B0%E5%A2%9E%E5%88%86%E7%BB%84.png" />

 **如果不绑定产品，可以吧当前分组作为产品，可以给该分组配置采集信息，导入物模型用于采集。**

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF.png" />

2.启用分组，如果没有绑定产品，则默认当前分组未产品，进行采集。
如果绑定了产品，会启动分组下绑定的所有产品。

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E5%88%86%E7%BB%84%E7%AE%A1%E7%90%86.png" />

3.绑定了产品，则给产品配置采集信息。

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E5%88%86%E7%BB%84%E4%BA%A7%E5%93%81%E9%85%8D%E7%BD%AE.png" />

4.启用分组下产品，对该产品进行采集任务执行。

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E4%BB%BB%E5%8A%A1%E5%90%AF%E5%8A%A8.png" />


<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E5%88%86%E7%BB%84%E7%AE%A1%E7%90%86.png" />

### 5.数据查看
1.物联网平台会自动创建设备。用户在设备管理可以看到设备当前状态

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86.png" />

点击详情查看设备实时数据及历史数据查看。
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/PLC/%E5%AE%9E%E6%97%B6%E6%95%B0%E6%8D%AE.png" />