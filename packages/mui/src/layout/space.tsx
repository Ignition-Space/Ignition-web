import React from "react";
import { createReactMaterial } from "@huos/core";
import { Segmented, Space, SpaceProps } from "antd";
import { RenderFieldSetter } from "@huos/setter";

export const MUI_Space = createReactMaterial<SpaceProps & {
  componentType: 'Compact' | 'Space'
}>(
  ({componentType, ...props}: SpaceProps & {
    componentType: 'Compact' | 'Space'
  }, ref: any) => {
    
    return (
      <div ref={ref} >
        {
          componentType === 'Compact' ? <Space.Compact {...props as any}>
            {props.children}
          </Space.Compact> : <Space {...props}>
            {props.children}
          </Space>
        }
      </div>
    )
  },
  {
    displayName: "间距",
    custom: {
      useCnavas: true,
      useResize: true,
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <RenderFieldSetter name="componentType" label="组件模式" initialValue="Space" >
            <Segmented options={[
              {
                label: '默认',
                value: 'Space'
              },
              {
                label: '紧凑',
                value: 'Compact'
              }
            ]} />
          </RenderFieldSetter>
        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  },
);
