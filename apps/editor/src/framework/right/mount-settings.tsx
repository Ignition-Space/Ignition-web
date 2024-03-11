import React from "react";
import { Card, Form, Typography, theme } from "antd";
import { useEditor } from "@craftjs/core";
import { merge } from 'lodash'
import { useDebounceFn } from "ahooks";

export const MountSettings = () => {
  const { token } = theme.useToken()
  const [form] = Form.useForm();
  const {
    id: nodeId,
    currentNodeProps,
    actions,
    SettingRender,
  } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data, related } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        currentNodeProps: data.props,
        SettingRender: related?.settingRender,
      };
    }
  });



  const { run: handleFormChange } = useDebounceFn(async (changeValues: any) => {
    console.log(changeValues, 'changeValues')

    if (nodeId) {
      actions.setProp(nodeId, (setterProps) => {
        return merge(setterProps, changeValues)
      })
    }
    return true
  })

  // 当前编辑的组件发生改变，nodeId副作用更新了
  React.useEffect(() => {
    if (nodeId) {

      /** 切换组件清除setter配置 */
      form.resetFields()


      /** 设置新组件内容属性配置 */
      console.log(currentNodeProps, 'currentNodeProps')
      form.setFieldsValue(currentNodeProps)
    }
  }, [nodeId])

  return (
      <Form
        style={{

         padding: token.paddingXS,
        }}
        form={form}
        layout="horizontal"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        onValuesChange={handleFormChange}
        onFinish={handleFormChange}
      >
        
        {SettingRender ? <SettingRender /> : (
          <Card size="small" >
            <Typography.Text type="secondary" >暂无选中组件，点击画布中的组件可以进行选择。</Typography.Text>
          </Card>
        )}
      </Form>
  );
};
