---
title: 文件数据标识
sidebar_position: 1
---

# 文件数据编码原理
  文件数据编码基础是文件路径与文件名，dgiot通过结合数据分类对文件数据的filepath和filename进行编码

# go-fastdfs
[go-fastdfs](https://sjqzhang.github.io/go-fastdfs/#character)是一个基于http协议的分布式文件系统,与dgiot权限系统无缝集成，支持自定义filepath和filename，符合文件数据编码要求,下面是java文件上传代码示例
``` java
public static void main(String[] args) {
    //文件地址
    File file = new File("D:\\git\\2.jpg");
    //声明参数集合
    HashMap<String, Object> paramMap = new HashMap<>();
    //文件
    paramMap.put("file", file);
    //输出
    paramMap.put("output","json");
    //自定义路径
    paramMap.put("path","image");
    //场景
    paramMap.put("scene","image");
    //上传
    String result= HttpUtil.post("http://xxxxx:xxxx/group1/upload", paramMap);
    //输出json结果
    System.out.println(result);
}
```
 文件数据通过go-fastdfs管理，文件描述数据存parse库或者tdengine等数据库，文件服务地址不允许存到数据库中，只允许存filepath和filename的文件编码数据。
例如：
http://xxxxx:xxxx/group1/user/profile/bdbd86e2e3.jpg
+ 文件服务器地址
  http://xxxxx:xxxx/group1/
+ 文件编码数据
  user/profile/bdbd86e2e3.jpg
存数据库时候只允许存user/profile/bdbd86e2e3.jpg这一部分，用户在前端登陆时候，可以从login的返回报文中拿到http://xxxxx:xxxx/group1/，在页面渲染时，动态拼接成http://xxxxx:xxxx/group1/user/profile/bdbd86e2e3.jpg
go-fastdfs的文件路径与文件名编码规范要服从parse数据库和tdengie数据库的编码规范要求

# Parse库文件数据编码
 ## User文件数据
 + 用户头像: 
     user/profile/{userid}.jpg  
     如果{userid} 为 bdbd86e2e3，则完整的用户头像文件数据编码为user/profile/bdbd86e2e3.jpg
 ## Product文件数据
 + 组态底图
   product/topo/{productid}.jpg 
   如果{productid} 为 ed09e37bbb，
   则完整的组态底图文件数据编码为 product/topo/ed09e37bbb.jpg
 + 产品ICO
    product/ico/{productid}.ico
    如果{productid} 为 ed09e37bbb，
    则完整的产品ICO文件数据编码为 product/ico/ed09e37bbb.ico

 ## Device文件数据
  + 组态底图
  device/topo/{productid}/{deviceid}.jpg 
  如果{productid} 为 ed09e37bbb，{deviceid}为5e3123f197
  则完整的组态底图文件数据编码为 device/topo/ed09e37bbb/5e3123f197.jpg

 ## Evidence文件数据
  + 图片证据 
   evidence/image/{evidenceid}.jpg 
  如果{evidenceid} 为 5d00e37b7b
  则完整的图片证据文件数据编码为 evidence/image/5d00e37b7b.jpg

 + 视频证据 
   evidence/video/{evidenceid}.mp4
  如果{evidenceid} 为 5d00e37b7b
  则完整的视频证据文件数据编码为 evidence/video/5d00e37b7b.mp4

+ 音频证据 
  evidence/audio/{evidenceid}.mp3
  如果{evidenceid} 为 5d00e37b7b
  则完整的视频证据文件数据编码为 evidence/audio/5d00e37b7b.wav

+ 文件证据 
  evidence/file/{evidenceid}.doc
  如果{evidenceid} 为 5d00e37b7b
  则完整的视频证据文件数据编码为 evidence/file/5d00e37b7b.doc

## Channel文件数据
 + 通道ICO
 channel/ico/{channelid}.ico
    如果{channelid} 为 8d09e37bbb，
    则完整的产品ICO文件数据编码为 channelid/ico/8d09e37bbb.ico

# Tdengine库文件数据编码
 ## 文件数据类型
  + mp4数据
  tdengine/mp4/{timestamp}.ico
    如果timestamp 为 1629435361000，
    则完整的产品ICO文件数据编码为 tdengine/mp4/1629435361000.mp4
  tdengine存库只存1629435361000，页面渲染时通过物模型描述来进行完整文件路径的拼接

 + matlab数据
  tdengine/matlab/{timestamp}.mat
    如果timestamp 为 1629435361000，
    则完整的产品ICO文件数据编码为 tdengine/matlab/1629435361000.mat
  tdengine存库只存1629435361000，页面渲染时通过物模型描述来进行完整文件路径的拼接


 