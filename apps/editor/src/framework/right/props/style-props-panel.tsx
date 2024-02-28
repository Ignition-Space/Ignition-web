import {
  ProForm, useDebounceFn,
} from "@ant-design/pro-components";
import { useEditor } from "@craftjs/core";
import {
  Button,
  Collapse,
  Flex,
  Form,
  Typography,
} from "antd";
import _ from "lodash";
import React from "react";
import { LayoutSetter } from './layout-setter'
import { FontSetter } from "./font-setter";
import { PositionSetter } from "./position-setter";
import { BorderRaidusSetter } from "./border-setter";
import { BackgroundSetter } from './bg-setter'
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

export const StylePropsPanel = () => {
  const [form] = Form.useForm();
  
  const {
    id: nodeId,
    currentNodeProps,
    actions,
  } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        currentNodeProps: data.props,
      };
    }
  });

  const style: React.CSSProperties = currentNodeProps?.style || {};

  console.log(style, "CSSProperties");

  // 当前编辑的组件发生改变，nodeId副作用更新了
  React.useEffect(() => {
    if (nodeId) {
      /** 切换组件清除setter配置 */
      form.resetFields();

      /** 设置新组件内容属性配置 */
      form.setFieldsValue(style);
    }
  }, [nodeId]);

  const { run: handleFormChange } = useDebounceFn(async (changeValues) => {

    if (nodeId) {
      actions.setProp(nodeId, (setterProps) => {
        setterProps.style = {
          ...setterProps?.style,
          ...changeValues
        }
      })
    }
    return true
  })

  return (
    <ProForm
      submitter={false}
      layout="horizontal"
      form={form}
      onValuesChange={handleFormChange}
    >
      <Collapse
        size="small"
        ghost
        expandIconPosition="end"
        expandIcon={(panelProps) => (
          <Flex>
            <Button size="small" type="text" icon={panelProps.isActive ? <CaretUpOutlined /> : <CaretDownOutlined /> } />
          </Flex>
        )}
        defaultActiveKey={["layout", "font", 'position', 'border', 'background']}
        items={[
          LayoutSetter,
          FontSetter,
          BackgroundSetter,
          BorderRaidusSetter,
          PositionSetter,
        ].map(item => ({
          ...item,
          label: <Typography.Text strong >{item.label}</Typography.Text>
        }))}
      />
    </ProForm>
  );
};
