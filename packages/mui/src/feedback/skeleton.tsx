import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { Skeleton, SkeletonProps } from "antd";

export const MUI_Skeleton = createReactMaterial<SkeletonProps>(
  (props: SkeletonProps, ref: any) => (
    <div ref={ref}>
      <Skeleton  {...props} />
    </div>
  ),
  {
    displayName: "骨架屏",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="active" label="激活动画" />
          <BooleanSetter name="avatar" label="头像占位" />
          <BooleanSetter name="loading" label="加载状态" />
          <BooleanSetter name="paragraph" label="段落站位" />
          <BooleanSetter name="round" label="显示圆角" />
          <BooleanSetter name="title" label="标题站位" />

        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  },
  {
    children: "默认按钮",
  }
);
