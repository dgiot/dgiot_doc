import React from 'react'
import styles from './styles.module.css'
import { Col, Row, Card, Button, Divider } from 'antd'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// 获取路由导航
// 1. 打开 https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/system_deployment/
// 2. 获取父节点的数据
// todo: 需要获取节点路径并在link中添加
// let nav = []
// document
//   .querySelectorAll('.theme-doc-sidebar-item-category-level-1')
//   .forEach((i, index) => {
//     nav.push({
//       text: i
//         .getElementsByClassName('menu__list-item-collapsible')[0]
//         .querySelectorAll('.menu__link--sublist')[0].text,
//     })
//     nav[index].children = []
//     i.querySelectorAll('.menu__link--sublist-caret').forEach((t) => {
//       nav[index].children.push({ text: t.text })
//     })
//     console.log(i.getElementsByClassName('menu__list-item-collapsible'))
//   })
// console.log(nav)
// 3. 拷贝节点数据
// window.copy(JSON.stringify(nav))
function HomepageHeader() {
  // 下面打印函数可以拿到打印的path路径。但是无法拿到title，因为title是在组件中定义的。
  // console.log(useDocusaurusContext().globalData['docusaurus-plugin-content-docs'].default.versions[0].docs)
  // todo: 需要写link地址
  const nav = [
    {
      text: '用户手册',
      children: [
        { text: '设备运维' },
        { text: '智慧园区' },
        { text: '数字工厂' },
        { text: '云检测' },
        { text: '云压测' },
      ],
    },
    {
      text: '产品文档',
      children: [
        { text: '部署详情' },
        { text: '简介' },
        { text: '设备云' },
        { text: '多租户' },
        { text: '云运维' },
        { text: '云函数' },
        { text: '云系统' },
        { text: '云检测' },
        { text: '云日志' },
      ],
    },
    {
      text: '开发指南',
      children: [
        { text: '系统架构' },
        { text: '后端技术' },
        { text: '数据标识' },
        { text: '前端技术' },
        { text: '时序数据' },
      ],
    },
    {
      text: '实战教程',
      children: [
        { text: '基础知识' },
        { text: '电表接入' },
        { text: '视频教程' },
        { text: 'PT100传感器接入教程' },
        { text: '电力集抄教程' },
        { text: 'DDZY1296电表接入教程' },
        { text: '三合一传感器接入教程' },
        { text: 'Mqtt设备接入教程' },
        { text: '水泵性能曲线测量案例' },
        { text: 'OPC-DA设备接入教程' },
        { text: '摄像头接入' },
        { text: '测试' },
      ],
    },
  ]
  // 维护时,只需维护该nav的数据
  return nav.map((item, index) => (
    <Card
      style={{ marginBottom: '20px' }}
      hoverable={true}
      key={index}
      xs={12}
      sm={6}
    >
      {/*todo:循环中需要写src地址跳转*/}
      <Row>
        <Col span={2}>
          <Button type="primary">{item.text}</Button>
        </Col>
        <Col span={20} offset={1} style={{ borderLeft: '1px solid #666' }}>
          {/*循环item.children*/}
          {item.children.map((i, index) => (
            <Button type="link" key={index}>
              {i.text}
            </Button>
          ))}
        </Col>
      </Row>
    </Card>
  ))
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <HomepageHeader />
      </div>
    </section>
  )
}
