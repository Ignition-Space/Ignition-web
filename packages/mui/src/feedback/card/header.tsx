import React from "react";
import { createReactMaterial } from "@huos/core";
import CardHeader, { CardHeaderProps } from "@mui/material/CardHeader";
import { BooleanSetter, RenderFieldSetter, StringSetter } from "@huos/setter";
import { Element } from '@craftjs/core'
import { MUI_Box } from '../../layout/box'

export const MUI_CardHeader = createReactMaterial<CardHeaderProps>(
  (props: CardHeaderProps, ref: any) => (
    <CardHeader ref={ref} {...props}>
      {props.children}
    </CardHeader>
  ),
  {
    displayName: "卡片-头部",
    props: {
      title: '卡片标题'
    },
    custom: {
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="disableTypography" label="禁用排版" />
          <StringSetter name="string" label="标题" />
          <RenderFieldSetter name="titleTypographyProps" label="标题排版样式" />
        </React.Fragment>
      ),
      icon: () => "CA"
    },
  },
  {
    subheader: <Element canvas id="card-header-subheader" is={MUI_Box} />
  }
);
