---
title: 网页代理
sidebar_position: 7
---

# 反向代理
  |  字段   | 值  |
  |  ----  | ----  |
  | 源路径  | keypath |
  | 源host  | 127.0.0.1:5080 |
  | 目标host  | www.iotn2n.com |
  | 协议  | http |
  | x-forwarded-for  | true |
 配置词典内容如下：
 
```
{
"key":"keypath",
"data":{
  "host": "www.iotn2n.com",
  "protocol": "http",
  "x-forwarded-for": true
}
}
```
在浏览器里面输入
http://127.0.0.1:5080/dgiotproxy/[keypath]/[otherpath]

则返回反向代理路径结果

http://www.dgiotcloud.cn/[otherpath]

# 爬虫代理

htlm->tokens功能
功能类似于 BeautifulSoup 的爬虫功能

```
 [{<<"class">>,<<"my-photo">>},{<<"alt">>,<<"loading">>},{<<"style">>,<<"cursor: pointer;">>},{<<"data-src">>,<<"http://132.232.12.21:8012/202158151241/0.jpg">>},{<<"src">>,<<"images/loading.gif">>}]
```

```
 shuwa_html:find(WordPreview, {<<"img">>, {<<"class">>, <<"my-photo">>}}, <<"data-src">>)
```

# 网页代理
tokens->html功能
可以动态生成网页
