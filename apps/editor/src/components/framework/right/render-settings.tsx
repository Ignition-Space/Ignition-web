import * as React from 'react'
import { useEditor } from '@craftjs/core'
import { merge } from 'lodash-es'
import { Card, Form, Typography } from 'antd'
import { ProForm } from '@ant-design/pro-components'
import { css } from '@emotion/css'

export const Settings = () => {
  const [form] = Form.useForm()
  const { id: nodeId, currentNodeProps, actions, SettingRender } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data, related } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        currentNodeProps: data.props,
        SettingRender: related?.settingRender
      }
    }

  })

  const handleFormChange = async (changeValues: any) => {
    console.log(changeValues, 'changeValues')

    if (nodeId) {
      actions.setProp(nodeId, (setterProps) => {
        return merge(setterProps, changeValues)
      })
    }
    return true
  }

  // 当前编辑的组件发生改变，nodeId副作用更新了
  React.useEffect(() => {
    if (nodeId) {

      /** 切换组件清除setter配置 */
      form.resetFields()


      /** 设置新组件内容属性配置 */
      form.setFieldsValue({
        ...currentNodeProps
      })
    }
  }, [nodeId, form])

  return (
    nodeId && SettingRender ? (
      <ProForm
        layout="vertical"
        form={form}
        submitter={false}
        labelAlign="left"
        onValuesChange={handleFormChange}
        onFinish={handleFormChange}
        className={css({
          ['& .ant-pro-form-group-title']: {
            fontWeight: 600,
            marginBlockEnd: 12,
            cursor: 'pointer'
          }
        })} >
        <SettingRender />
      </ProForm>
    ) : <Card size='small' >
      <Typography.Text type="secondary" >暂无选中的编辑组件，请点击画布当中的组件后再尝试吧。</Typography.Text>
    </Card>
  )
}
