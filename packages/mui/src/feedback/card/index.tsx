import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter, RenderFieldSetter,
} from "@huos/setter";
import Card, { CardProps } from "@mui/material/Card";
import { MUI_CardContent } from './content'
import { MUI_CardActions } from './actions'
import { MUI_CardHeader } from './header'
import { Element } from '@craftjs/core'
import { Segmented } from "antd";

export * from './content'
export * from './actions'
export * from './header'

export const MUI_Card = createReactMaterial<CardProps>(
  (props: CardProps, ref: any) => (
    <Card ref={ref} {...props}>
      <Element canvas id="card-header" is={MUI_CardHeader} />
      <Element canvas id="card-content" is={MUI_CardContent} />
      <Element canvas id="card-actions" is={MUI_CardActions} />
    </Card>
  ),
  {
    displayName: "卡片",
    custom: {
      useCnavas: false
    },
    props: {
      style: {
        // padding: 20
      }
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="raised" label="阴影样式" />
          <RenderFieldSetter initialValue="text" name="variant" label="形态" >
          <Segmented options={[
              {
                label: '文本',
                value: 'text'
              },
              {
                label: '实体',
                value: 'outlined',
              },
              {
                label: '大',
                value: 'contained'
              }
            ]} />
          </RenderFieldSetter>
        </React.Fragment>
      ),
      icon: () => "C"
    },
  }
);
