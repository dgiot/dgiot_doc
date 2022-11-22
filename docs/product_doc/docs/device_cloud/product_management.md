---
title: 产品管理
sidebar_position: 1
---
### 名词解释
产品是设备的集合，通常是一组具有相同功能定义的设备集合。例如，产品指同一个型号的产品，设备就是该型号下的某个设备。因此，使用物联网平台的第一步是在产品管理控制台创建产品。
# 创建产品
在设备云——产品管理，找到对应的创建产品按钮
![产品管理_界面.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Device%20cloud/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86_%E7%95%8C%E9%9D%A2.png)
单击创建产品按钮进入创建产品详情页面。
![产品管理_创建.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Device%20cloud/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86_%E5%88%9B%E5%BB%BA.png)

依次填写必要信息，然后单击确认。

| 参数     | 描述        |
| -------- | ---- |
| 产品名称 | 为产品命名，产品名称在账号内具有唯一性 |
| 产品分组 | 产品标识，用于区分不同设备             |
| 所属分类 | 该产品的类型 |
| 所属应用 | 拥有该产品的角色 |
| 节点类型 | 产品下设备的类型，分为直连设备，网关设备和网关子设备       |
| 连网方式 | 直连设备和网关设备的连网方式           |
| 产品描述 | 可输入文字，用来描述产品信息           |


# 修改产品
点击编辑按钮，进入产品信息修改界面
![产品管理_修改产品.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Device%20cloud/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86_%E4%BF%AE%E6%94%B9%E4%BA%A7%E5%93%81.png)
可修改的信息有，产品名称，所属分类，采集融到，节点类型，联网方式，图标和描述。
![产品管理_修改信息.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Device%20cloud/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86_%E4%BF%AE%E6%94%B9%E4%BF%A1%E6%81%AF.png)

# 查询产品
产品管理页左上角可搜索产品，支持产品名称搜索
![产品管理_查询产品.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Device%20cloud/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86_%E6%9F%A5%E8%AF%A2%E4%BA%A7%E5%93%81.png)
# 删除产品
![产品管理_删除产品.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Device%20cloud/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86_%E5%88%A0%E9%99%A4%E4%BA%A7%E5%93%81.png)
单击可删除产品。

# 产品详情
在设备云——产品管理页，在产品列表的操作栏中，单击“配置”，进入“产品详情”页。单击相应页签可查看产品信息、Topic类列表，设置自定义Topic、物模型、物解析、物接入、物存储等。
![产品管理_产品详情1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Device%20cloud/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86_%E4%BA%A7%E5%93%81%E8%AF%A6%E6%83%851.png)
![产品管理_产品详情2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Device%20cloud/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86_%E4%BA%A7%E5%93%81%E8%AF%A6%E6%83%852.png)

## 添加物模型
+ 自定义属性添加
![product_manage5.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage5.png)
填写名称，标识符，取值范围，数据类型，单位等值
![product_manage6.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage6.png)

其中各项含义见下表

|名称|含义|
|----|----|
|功能名称|物模型的作用，实现的功能|
|标识符|唯一识别物模型，一般用功能名称的英文翻译|
|取值范围（数值）|物模型的取值范围|
|步长|即step，物模型取值依次增长的幅度|
|读写类型|读写：文档或属性既能读取，也能修改 只读：又称唯读，表示文档或属性只能读取，不能修改也不能存储。|
|数据类型|物模型的数据类型，可选择|
|采集公式|我们需要的数据与采集的数据之间的数学关系式 %q：数据标识第二个空里面的数据 %s：采集到的数据 %r：采集的轮次|
|控制公式|控制数据采集的次数或满足特殊的采集需求（true为1，false为大于1的其他数字）|
|数据标识第一个空|address地址值。如果是modbus协议，则数据标识表示传感器的寄存器地址。 否则用唯一数字字母组合标识即可。相应传感器说明手册可查。|
|数据标识第二个空|即%q。如果读写类型选的只读，则此处填字节数。 如果读写类型选的读写，用于modbus协议，表示参数地址，或模拟量的功能码。相应传感器说明手册可查。进制，十进制。|
|协议类型|我们可以选择modbus协议，否则就是normal|
|字节序|大端：高位字节排放在内存的低地址端，低位字节排放在内存的高地址端。 小端：低位字节排放在内存的低地址端，高位字节排放在内存的高地址端。|
|寄存器状态|线圈状态：读从机离散量输出口的ON/OFF状态。 读输入状态：读从机离散量输入信号的ON/OFF状态。  保持寄存器：可以通过通信命令读或者写的寄存器  输入寄存器：只能读不能写的寄存器|
|从机地址|从机的address，用于modbus通讯。相应传感器说明手册可查。进制：十进制|

+ 标准属性的添加

点击“新增标准属性”
![product_manage7.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage7.png)
![product_manage8.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage8.png)
自动添加相关属性
![product_manage9.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage9.png)

+ 添加物接入

选择物接入，选择通道
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![product_manage10.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage10.png)
![product_manage11.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage11.png)

+ 物存储
选择物存储，选择通道
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![product_manage12.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage12.png)

## 组态