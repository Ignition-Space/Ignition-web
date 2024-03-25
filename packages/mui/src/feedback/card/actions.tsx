import React from "react";
import { createReactMaterial } from "@huos/core";
import CardActions, { CardActionsProps } from "@mui/material/CardActions";
import { BooleanSetter } from "@huos/setter";

export const MUI_CardActions = createReactMaterial<CardActionsProps>(
  (props: CardActionsProps, ref: any) => (
    <CardActions ref={ref} {...props} >
      {props.children}
    </CardActions>
  ),
  {
    displayName: "卡片-操作",
    custom: {
      useCanvas: true
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="disableSpacing" label="禁用边距" />
        </React.Fragment>
      ),
      icon: () => "CA"
    },
  }
);
