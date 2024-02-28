import { RenderFieldSetter } from "@huos/setter";
import {
  CollapseProps,
  Flex,
  InputNumber,
  Segmented,
  Select,
  Space,
} from "antd";
import { positionOptions } from "./constant";
import { ProFormDependency, ProFormDigit } from "@ant-design/pro-components";
import { ClearOutlined } from "@ant-design/icons";
import { HuosRemixIcon } from "@huos/icons";

export const PositionSetter: Required<CollapseProps>["items"][0] = {
  key: "position",
  label: "位置",
  children: (
    <Flex vertical>
      <RenderFieldSetter name="position" isExpression={false} label="定位方式">
        <Select
          allowClear
          options={positionOptions}
          style={{ width: "70%" }}
          placeholder="定位方式"
        />
      </RenderFieldSetter>
      <ProFormDependency name={["position"]}>
        {({ position }) =>
          position ? (
            <RenderFieldSetter isExpression={false} label="位置">
              <Space size="small">
                {["Top", "Right", "Bottom", "Left"].map((propKey) => (
                  <ProFormDigit
                    formItemProps={{ noStyle: true }}
                    fieldProps={{
                      placeholder: propKey.charAt(0),
                      controls: false,
                    }}
                    name={propKey.toLocaleLowerCase()}
                  />
                ))}
              </Space>
            </RenderFieldSetter>
          ) : null
        }
      </ProFormDependency>
      <RenderFieldSetter name="zIndex" isExpression={false} label="层级">
        <InputNumber placeholder="元素层级" />
      </RenderFieldSetter>
      <RenderFieldSetter name="float" isExpression={false} label="浮动">
        <Segmented
          options={[
            {
              icon: <ClearOutlined />,
              value: "none",
            },
            {
              icon: <HuosRemixIcon type="icon-insert-column-left" />,
              value: "left",
            },
            {
              icon: <HuosRemixIcon type="icon-insert-column-right" />,
              value: "right",
            },
          ]}
        />
      </RenderFieldSetter>
      <RenderFieldSetter name="clear" isExpression={false} label="清除浮动">
      <Segmented
          options={[
            {
              icon: <ClearOutlined />,
              value: "none",
            },
            {
              icon: <HuosRemixIcon type="icon-insert-column-left" />,
              value: "left",
            },
            {
              icon: <HuosRemixIcon type="icon-insert-column-right" />,
              value: "right",
            },
            {
              icon: <HuosRemixIcon type="icon-insert-row-bottom"/>,
              value: 'both'
            }
          ]}
        />
      </RenderFieldSetter>
    </Flex>
  ),
};
