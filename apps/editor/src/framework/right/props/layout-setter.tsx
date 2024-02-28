import { TableOutlined } from "@ant-design/icons";
import { ProFormText, ProFormDigit } from "@ant-design/pro-components";
import { HuosRemixIcon } from "@huos/icons";
import { RenderFieldSetter } from "@huos/setter";
import { Flex, Segmented, Typography, Space } from "antd";

export const LayoutSetter = {
  key: "layout",
  label: "布局",
  children: (
    <Flex vertical>
      <RenderFieldSetter
        isExpression={false}
        name="display"
        label="Display"
      >
        <Segmented
          options={[
            {
              icon: <HuosRemixIcon type="icon-layout-5-line" />,
              value: "inline",
            },
            {
              icon: <HuosRemixIcon type="icon-align-justify" />,
              value: "inline-block",
            },
            {
              icon: <HuosRemixIcon type="icon-layout-column-line" />,
              value: "flex",
            },
            {
              icon: <TableOutlined />,
              value: "grid",
            },
          ]}
        />
      </RenderFieldSetter>
      <RenderFieldSetter isExpression={false} label="宽 x 高">
        <Flex justify="flex-end" align="center" gap={8}>
          <ProFormText
            formItemProps={{ noStyle: true }}
            fieldProps={{ placeholder: "宽度" }}
            name="width"
          />
          <Typography.Text>x</Typography.Text>
          <ProFormText
            formItemProps={{ noStyle: true }}
            fieldProps={{ placeholder: "高度" }}
            name="height"
          />
        </Flex>
      </RenderFieldSetter>
      <RenderFieldSetter isExpression={false} label="内边距">
        <Space size="small">
          {[
            "marginTop",
            "marginRight",
            "marginBottom",
            "marginLeft",
          ].map((propKey) => (
            <ProFormDigit
              formItemProps={{ noStyle: true }}
              fieldProps={{
                placeholder: propKey.charAt(6),
                controls: false,
              }}
              name={propKey}
            />
          ))}
        </Space>
      </RenderFieldSetter>
      <RenderFieldSetter isExpression={false} label="外边距">
        <Space size="small">
          {[
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
          ].map((propKey) => (
            <ProFormDigit
              formItemProps={{ noStyle: true }}
              fieldProps={{
                placeholder: propKey.charAt(7),
                controls: false,
              }}
              name={propKey}
            />
          ))}
        </Space>
      </RenderFieldSetter>
    </Flex>
  ),
}