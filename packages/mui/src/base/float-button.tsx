import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { FloatButton, FloatButtonProps } from "antd";

export const MUI_FloatButton = createReactMaterial<FloatButtonProps>(
  (props: FloatButtonProps, ref: any) => (
    <FloatButton ref={ref} {...props} />
  ),
  {
    displayName: "悬浮按钮",
    related: {
      settingRender: () => (
        <React.Fragment>
          111
        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  }
);
