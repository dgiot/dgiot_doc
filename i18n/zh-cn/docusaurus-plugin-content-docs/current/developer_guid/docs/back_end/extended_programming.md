---
title: 扩展编程
sidebar_position: 8
---

# 反向代理
  |  字段   | 值  |
  |  ----  | ----  |
  | 源路径  | oldpath |
  | 目标路径  | newpath |
  | 源host  | 127.0.0.1:5080 |
  | 目标host  | www.iotn2n.com |
  | 协议  | http |
  | modify_path  | true |
  | x-forwarded-for  | true |
 配置词典内容如下：
 
```
{
"key":"oldpath",
"data":{
  "host": "www.iotn2n.com",
  "protocol": "http",
  "modify_path": "newpath",
  "x-forwarded-for": true
}
}
```
在浏览器里面输入
http://127.0.0.1:5080/dgiotproxy/oldpath

则返回反向代理路径结果

http://www.iotn2n.com/newpath