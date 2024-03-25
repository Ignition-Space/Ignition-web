import React from "react";
import { createReactMaterial } from "@huos/core";
import CardContent, { CardContentProps } from "@mui/material/CardContent";

export const MUI_CardContent = createReactMaterial<CardContentProps>(
  (props: CardContentProps, ref: any) => (
    <CardContent ref={ref} {...props}>
      {props.children}
    </CardContent>
  ),
  {
    displayName: "卡片-主体",
    custom: {
      useCanvas: true
    },
    related: {
      settingRender: () => (
        <React.Fragment>
        </React.Fragment>
      ),
      icon: () => "C"
    },
  }
);
