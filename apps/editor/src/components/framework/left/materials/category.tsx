import * as React from 'react'
import { Col, Row, Typography, Empty, Divider } from "antd"
import { useEditor, Element } from '@craftjs/core'
import { CardItem } from './card'
import { useTokens } from '@/hooks/useTokens'

export interface CategoryProps {
  list?: any[]
}

export const Category: React.FC<CategoryProps> = (props) => {


  const { connectors } = useEditor();
  const { token } = useTokens()

  return (
    <div >
      <Typography.Text style={{ marginBottom: 12, display: 'inline-block' }} type="secondary" >基础组件</Typography.Text>
      <Row gutter={[6, 12]} >
        {
          (props.list || []).map((item) => {
            const { key, component } = item
            let value = React.createElement(component);
            if (["Container"].includes(key)) {
              value = <Element canvas is={component} initialHeight={100} initialWidth={"10%"} style={{
                background: token.colorPrimary
              }} />;
            }

            if (["Form", "FormItem"].includes(key)) {
              console.log("TableView")
              value = <Element canvas is={component} />
            }

            if (!item?.component?.craft?.displayName) return null

            return (
              <Col span={8} key={item.key}
                ref={(ref: HTMLDivElement) => connectors.create(ref, value)} >
                <CardItem name={item?.component?.craft?.displayName} />
              </Col>
            )
          })
        }
        {
          !props.list ? <Col span={24} >
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Col> : null
        }
      </Row>
      <Divider style={{
        marginBlock: token.margin
      }} />
    </div>
  )
}