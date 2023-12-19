import React from "react";
import { Card, Form, Typography } from "antd";
import { useEditor } from "@craftjs/core";
import { css } from "@emotion/css";
import { merge } from 'lodash'

export const MountSettings = () => {
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



  const handleFormChange = async (changeValues: any) => {

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

      console.log('switchNodeId', nodeId, currentNodeProps)

      /** 切换组件清除setter配置 */
      form.resetFields()


      /** 设置新组件内容属性配置 */
      form.setFieldsValue(currentNodeProps)
    }
  }, [nodeId])

  return (
    <div
      className={css({
        height: '100%',
        overflow: 'hidden',
        ["& .ant-pro-form-group-title"]: {
          fontWeight: 600,
          marginBlockEnd: 0,
          cursor: "pointer",
        },
      })}
    >
      <Form
        layout="vertical"
        form={form}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
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
    </div>
  );
};
