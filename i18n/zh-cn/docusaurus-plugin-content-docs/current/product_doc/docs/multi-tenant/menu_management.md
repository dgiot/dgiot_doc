---
title: 菜单管理
sidebar_position: 2
---

## 菜单管理
菜单包括各个页面的文件路径,用户可以自定义路径实现自己的功能模块.

用户通过点击右侧按钮实现子菜单的自定义操作.也可用于页面路径的查找.

利用上排导航栏按钮对菜单进行快速操作.

![菜单管理_界面.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Multi-tenant/%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86_%E7%95%8C%E9%9D%A2.png)

## 添加菜单
单击左上角，新增一级菜单按钮


![菜单管理_新建.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Multi-tenant/%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86_%E6%96%B0%E5%BB%BA.png)

|参数|描述|
|-|-|
|name|菜单的文件名,首字母需大写|
|路径|菜单的路径|
|vue文件路径|菜单的文件路径|
|标题|菜单显示的标题|
|icon图标|菜单的图标|
|排序|菜单的顺序，数字越小越靠前|

其中菜单路径和文件路径可在 dgiot-dashboard/src/views/ 下进行查找选择。

新建菜单成功后，需要在多租户——角色管理中更新角色的菜单分配权限。
![菜单管理_部门菜单.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Multi-tenant/%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86_%E9%83%A8%E9%97%A8%E8%8F%9C%E5%8D%95.png)
更新完成后刷新即可看到新添加的菜单。
![菜单管理_完成.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Multi-tenant/%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86_%E5%AE%8C%E6%88%90.png)

## 删除菜单
单击操作栏删除按钮可直接删除菜单。
![菜单管理_删除.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Multi-tenant/%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86_%E5%88%A0%E9%99%A4.png)

## 设置菜单
单击操作栏编辑按钮，可设置菜单相关参数。
![菜单管理_编辑菜单.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/Smart%20venue/Multi-tenant/%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86_%E7%BC%96%E8%BE%91%E8%8F%9C%E5%8D%95.png)


