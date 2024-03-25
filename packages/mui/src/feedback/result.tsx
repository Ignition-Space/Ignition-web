import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { Result, ResultProps, Select } from "antd";
import { Element } from '@craftjs/core'
import { MUI_Flex } from "@/layout";

export const MUI_Result = createReactMaterial<ResultProps>(
  (props: ResultProps, ref: any) => (
    <div ref={ref}>
      <Result {...props} extra={<Element canvas id="result-actions" is={MUI_Flex} />} />
    </div>
  ),
  {
    displayName: "结果状态",
    props: {
      status: 'success',
      subTitle: '我是副标题',
      title: '标题',
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <RenderFieldSetter name="status" label="结果状态">
            <Select style={{ width: '100%' }} options={toOptions(['success', 'error', 'info', 'warning', '404', '403', '500'])} />
          </RenderFieldSetter>
          <StringSetter name="title" label="标题" />
          <StringSetter name="subTitle" label="副标题" />
        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  },
);
