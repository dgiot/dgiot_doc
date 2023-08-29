import { Button, Modal, Form, Input, Select, message } from 'antd'
import React, { useState } from 'react'
// import version from '@site/config/version'
import axios from 'axios'
import 'antd/dist/antd.css'
const { Option } = Select
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
}
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} 是必填项!',
  types: {
    email: '${label} 不是有效的电子邮件!',
    version: '${label} 不是有效版本!',
  },
  version: {
    range: '${label} 必须介于${min}和${max}之间',
  },
}
/* eslint-enable no-template-curly-in-string */

export default function dgiotVersion({ children, color }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const from = {
    version: '最新版本',
    _wpcf7: '694',
    _wpcf7_version: '5.6',
    _wpcf7_locale: 'zh_CN',
    _wpcf7_unit_tag: 'wpcf7-f694-o1',
    _wpcf7_container_post: '0',
    // _wpcf7_posted_data_hash: '',
    // 'dgiot-version': '最新版本',
    // 'your-email': 'h7ml@qq.com',
    radio: '同意通过此邮件地址联系我',
  }
  const onFinish = (values) => {
    from['dgiot-version'] = values.version
    from['your-email'] = values.email
    from['your-phone'] = values.phone
    from['your-name'] = values.name
    from['your-job'] = values.job
     from['your-comp'] = values.corporate
    const formData = new FormData()
    Object.keys(from).forEach((key) => {
      formData.append(key, from[key])
    })
    axios({
      url: 'https://www.dgiotcloud.cn/wp-json/contact-form-7/v1/contact-forms/694/feedback',
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        message.info('下载链接已通过邮件的方式发送给您，请注意查收！')
      })
      .catch((e) => {
        message.error(e.message || e)
      })
  }
  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {children}
      </Button>
      <Modal
        destroyOnClose={true}
        onCancel={handleCancel}
        footer={null}
        title="请填写下面表单，我们会将下载地址发到您邮箱"
        visible={isModalVisible}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="version"
            label="下载类型"
            initialValues="最新版本"
            rules={[{ required: true, message: 'Please select gender!' }]}
          >
            <Select placeholder="请选择下载类型">
              <Option value="最新版本">最新版本</Option>
              <Option value="最新代码">最新代码</Option>
              <Option value="开发环境">开发环境</Option>
              <Option value="dgiot手机端Android版">dgiot手机端Android版</Option>
              <Option value="dgiot_windows体验版">dgiot_windows体验版</Option>
              <Option value="dgiot_app体验版">dgiot_app体验版</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: 'email',
                required: true,
              },
            ]}
          >
          <Input />
          </Form.Item>
          <Form.Item
             name="name"
             label="姓名"
            >
            <Input />
           </Form.Item>
            <Form.Item
              name="phone"
              label="手机"
                >
              <Input />
             </Form.Item>
             <Form.Item
              name="corporate"
               label="公司"
                >
            <Input />
            </Form.Item>
             <Form.Item
                 name="job"
                 label="职位"
                   >
                 <Input />
             </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button type="primary" block htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
