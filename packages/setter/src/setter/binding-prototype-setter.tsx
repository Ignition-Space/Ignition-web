import { ModalForm } from '@ant-design/pro-components'
import { Button, Col, Row } from 'antd'
import { ApiOutlined } from '@ant-design/icons'
import { browserRuntimeVM } from '@lgnition-lowcode/core'

export const BindingPrototypeSetter = () => {
  return (
    <ModalForm trigger={<Button icon={<ApiOutlined />} />} visible title="属性绑定">
      <Row>
        <Col span={24} >1</Col>
        <Col span={24} >111</Col>
      </Row>
    </ModalForm>
  )
}