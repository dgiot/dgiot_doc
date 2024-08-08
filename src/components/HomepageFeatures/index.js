import React from 'react'
import styles from './styles.module.css'
import {
	Col,
	Row,
	Card,
	Button,
	Divider
} from 'antd'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// 获取路由导航
// 1. 打开 https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/index/
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
	const nav = [{
			children: [
			   {
					"text": "设备运维",
					"content": "工业设备租赁一体化运维平台以数据为基础、以算法为支撑、以场景为导向，应用先进的实时大数据处理。",
					"cover": "http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/logo/parse.png",
					"href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
				},
				{
					"text": "智慧园区",
					"cover": "http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/logo/parse.png",
					"href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
				},
				{
					"text": "数字工厂",
					"cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
					"href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
				},
				{
					"text": "云检测",
					"cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
					"href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
				},
				{
                "text": "设备运维",
                "content": "工业设备租赁一体化运维平台以数据为基础、以算法为支撑、以场景为导向，应用先进的实时大数据处理。",
                "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
               },
                {
                    "text": "智慧园区",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "数字工厂",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "云检测",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "设备运维",
                    "content": "工业设备租赁一体化运维平台以数据为基础、以算法为支撑、以场景为导向，应用先进的实时大数据处理。",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "智慧园区",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "数字工厂",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "云检测",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "设备运维",
                    "content": "工业设备租赁一体化运维平台以数据为基础、以算法为支撑、以场景为导向，应用先进的实时大数据处理。",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "智慧园区",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "数字工厂",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                },
                {
                    "text": "云检测",
                    "cover": "https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_doc/index/Community.png",
                    "href": "/docs/user_manual/docs/equipment_operational/equipment_leasing"
                }
			]
		}
	]

	// 维护时,只需维护该nav的数据
	return nav.map((item, index) => (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
       {item.children.map((i, index) => (
         <Col key= {{index}} span={5} offset={1} style={{ border: '0px solid #666' }}>
           <a href={i.href} >
              <Card
                 hoverable={true}
                 key={index}
                 style={{border: '0px solid #666', margin: '0px 0px 10px 0px'}}
               >
                <div>
                   <center> <img alt="cover" href={i.href} src={i.cover} style={{margin: 'auto', height: '50%',width: '50%',objectFit: 'cover'}} /> </center>
                   <center> <h2> 图片居中显示 </h2> </center>
                   <center> <h3>工业设备租赁一体化运维平台以数据为基础、以算法为支撑、以场景为导向，应用先进的实时大数据处理 </h3> </center>
                   <span></span>
                  </div>
              </Card>
           </a>
         </Col>
       ))}
    </div>
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