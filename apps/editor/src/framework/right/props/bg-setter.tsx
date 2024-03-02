import { BgColorsOutlined } from "@ant-design/icons";
import {
  ProForm,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { HuosRemixIcon } from "@huos/icons";
import { RenderFieldSetter } from "@huos/setter";
import {
  AutoComplete,
  CollapseProps,
  ColorPicker,
  Flex,
  Input,
  Segmented,
  Slider,
  Space,
  Typography,
} from "antd";

export const BackgroundSetter: Required<CollapseProps>["items"][0] = {
  key: "background",
  label: '背景',
  children: (
    <Flex vertical>
      <RenderFieldSetter
        isExpression={false}
        name="_backgroundMode"
        label="背景样式"
      >
        <Segmented
          options={[
            {
              label: <BgColorsOutlined />,
              value: "Color",
            },
            {
              label: <HuosRemixIcon type="icon-image-2-fill" />,
              value: "Bg",
            },
          ]}
        />
      </RenderFieldSetter>

      <ProFormDependency name={["_backgroundMode"]}>
        {({ _backgroundMode }) => {
          if (_backgroundMode === "Bg") {
            return (
              <>
                <RenderFieldSetter label="背景地址">
                  <ProFormTextArea
                    placeholder="请输入URL地址"
                    noStyle
                    name="backgroundUrl"
                    fieldProps={{
                      autoSize: { minRows: 1, maxRows: 2 },
                    }}
                  />
                </RenderFieldSetter>
                <RenderFieldSetter label="背景配置">
                  <Space>
                    <ProForm.Item noStyle>
                      <AutoComplete
                        allowClear
                        placeholder="背景尺寸"
                        placement="bottomLeft"
                        popupMatchSelectWidth={150}
                        style={{ width: 100 }}
                        options={[
                          { label: "contain(包含)", value: "contain" },
                          { label: "cover(覆盖)", value: "cover" },
                          { label: "auto(自动)", value: "auto" },
                        ]}
                      />
                    </ProForm.Item>
                    <ProFormSelect
                      
                      noStyle
                      allowClear
                      name="backgroundRepeat"
                      placeholder="重复背景"
                      options={[
                        { value: "repeat", label: "重复" },
                        { value: "repeat-x", label: "水平重复" },
                        { value: "repeat-y", label: "垂直重复" },
                        { value: "no-repeat", label: "不重复" },
                      ]}
                    />
                  </Space>
                </RenderFieldSetter>
                <RenderFieldSetter label="位置">
                  <Space>
                    <ProForm.Item noStyle name="backgroundPositionX">
                      <AutoComplete
                        allowClear
                        suffixIcon="X"
                        style={{ width: 100 }}
                        placeholder="水平位置"
                        options={[
                          { value: "left", label: "左对齐" },
                          { value: "center", label: "居中对齐" },
                          { value: "right", label: "右对齐" },
                        ]}
                      />
                    </ProForm.Item>
                    <ProForm.Item noStyle name="backgroundPositionY">
                      <AutoComplete
                        allowClear
                        suffixIcon="Y"
                        placeholder="垂直位置"
                        style={{ width: 100 }}
                        options={[
                          { value: "left", label: "左对齐" },
                          { value: "center", label: "居中对齐" },
                          { value: "right", label: "右对齐" },
                        ]}
                      />
                    </ProForm.Item>
                  </Space>
                </RenderFieldSetter>
              </>
            );
          }

          return (
            <RenderFieldSetter
              isExpression={false}
              name="backgroundColor"
              label="背景颜色"
              getValueFromEvent={(_, color) => color}
            >
              <ColorPicker placement="bottomRight" format="rgb" showText />
            </RenderFieldSetter>
          );
        }}
      </ProFormDependency>

      <RenderFieldSetter isExpression={false} name="opacity" label="透明度">
        <Slider style={{ width: "100%" }} min={0} max={1} step={0.1} />
      </RenderFieldSetter>
    </Flex>
  ),
};
