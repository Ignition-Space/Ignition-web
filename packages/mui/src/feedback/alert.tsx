import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
} from "@huos/setter";
import { Alert, AlertProps, Select } from "antd";

export const MUI_Alert = createReactMaterial<AlertProps>(
  (props: AlertProps, ref: any) => (
    <div ref={ref} style={{ display: 'inline-block' }} >
      <Alert {...props}/>
    </div>
  ),
  {
    displayName: "警告提示",
    props: {
      message: 'Message Text',
      description: 'Description Text'
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name='showIcon' label="显示图标" />
          <BooleanSetter name='banner' label="公告模式" />
          <BooleanSetter name='closable' label="关闭配置" />
          <StringSetter name="description" label="提示描述"/>
          <StringSetter name="message" label="提示内容"/>
          <RenderFieldSetter>
            <Select style={{ width: '100%' }} options={[
              {
                label: '成功',
                value: 'success'
              },
              {
                label: '信息',
                value: 'info'
              },
              {
                label: '警告',
                value: 'warning'
              },{
                label: '错误',
                value: 'error'
              }
            ]} />
          </RenderFieldSetter>
          
        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  },
);
