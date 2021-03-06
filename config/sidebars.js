// @ts-check
/**
 * @description sidebars menu
 * @docs https://www.docusaurus.cn/docs/sidebar/items#sidebar-item-category
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // 自动生成目录
    // tutorialSidebar: [{
    //     type: 'autogenerated', //类型
    //     dirName: 'dgiot' // 生成目录
    // }],
    // 手动定义目录
    docs: [
        {
            type: 'category',
            label: 'user_manual',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    type: 'category',
                    label: '设备运维',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'user_manual/docs/equipment_operational'
                        }
                    ],
                },{
                    type: 'category',
                    label: '智慧园区',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'user_manual/docs/wisdom_park'
                        }
                    ],
                },{
                    type: 'category',
                    label: '数字工厂',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'user_manual/docs/digital_factory'
                        }
                    ],
                },{
                    type: 'category',
                    label: '云检测',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'user_manual/docs/detection'
                        }
                    ],
                },{
                    type: 'category',
                    label: '云压测',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'user_manual/docs/pressure_test'
                        }
                    ],
                }
            ]
        },
        {
            type: 'category',
            label: 'product_doc',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    type: 'category',
                    label: '部署详情',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/deployment_details'
                        }
                    ],
                },{
                    type: 'category',
                    label: '简介',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/introduction'
                        }
                    ],
                },{
                    type: 'category',
                    label: '设备云',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/equipment_cloud'
                        }
                    ],
                },{
                    type: 'category',
                    label: '多租户',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/multi-tenant'
                        }
                    ],
                },{
                    type: 'category',
                    label: '云运维',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/cloud_operations'
                        }
                    ],
                },{
                    type: 'category',
                    label: '云函数',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/cloud_function'
                        }
                    ],
                },{
                    type: 'category',
                    label: '云系统',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/cloud_system'
                        }
                    ],
                },{
                    type: 'category',
                    label: '云检测',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/cloud_detection'
                        }
                    ],
                },{
                    type: 'category',
                    label: '云日志',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'product_doc/docs/cloud_log'
                        }
                    ],
                },
                'product_doc/tool_set'
            ],
        },
        {
            type: 'category',
            label: 'developer_guid',
            collapsible: true,
            collapsed: false,
            items: [
                'developer_guid/index',
                {
                    type: 'category',
                    label: '系统架构',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'developer_guid/docs'
                        }
                    ]
                }
            ],
        },
        {
            type: 'category',
            label: 'practical_tutorial',
            collapsible: true,
            collapsed: false,
            items: [
                'practical_tutorial/index',
                {
                    type: 'autogenerated',
                    dirName: 'practical_tutorial/docs'
                }
            ],
        },
    ],
};

module.exports = sidebars;
