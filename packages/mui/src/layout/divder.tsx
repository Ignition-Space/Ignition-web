import React from "react";
import { createReactMaterial } from "@huos/core";
import { Divider, DividerProps, Segmented } from "antd";
import { BooleanSetter, RenderFieldSetter, StringSetter } from "@huos/setter";
import { AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined } from '@ant-design/icons'

export const MUI_Divider = createReactMaterial<DividerProps>(
  (props: DividerProps, ref: any) => (
    <div ref={ref} style={{ display: 'inline-block', width: '100%' }} >
      <Divider {...props} />
    </div>
  ),
  {
    displayName: "分割线",
    related: {
      settingRender: () => (
        <React.Fragment>
          <RenderFieldSetter name="type" label="方向" >
            <Segmented options={['horizontal', 'vertical']} />
          </RenderFieldSetter>
          <BooleanSetter name="dashed" label="是否虚线" />
          <BooleanSetter name="plain" label="普通文本" />
          <RenderFieldSetter name="orientation" label="标题位置" >
            <Segmented options={[
              {
                label: <AlignLeftOutlined />,
                value: 'left'
              },
              {
                label: <AlignCenterOutlined />,
                value: 'center'
              },
              {
                label: <AlignRightOutlined />,
                value: 'right'
              }
            ]} />
          </RenderFieldSetter>
          <StringSetter name="orientationMargin" label="文字距离" />
          <StringSetter name="$$children" label="文本内容" />
        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  }
);
