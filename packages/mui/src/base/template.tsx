import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import Button, { ButtonProps } from "@mui/material/Button";
import { Segmented, Select } from "antd";

export const MUI_Button = createReactMaterial<ButtonProps>(
  (props: ButtonProps, ref: any) => (
    <Button ref={ref} {...props}>
      {props.children}
    </Button>
  ),
  {
    displayName: "按钮",
    related: {
      settingRender: () => (
        <React.Fragment>
          111
        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  },
  {
    children: "默认按钮",
  }
);
