import React from "react";
import { createReactMaterial } from "@huos/core";
import { CardView } from "./view";
import { Panel } from "./panel";
import { Element } from "@craftjs/core";

export const __ArcoCard__ = createReactMaterial(CardView, {
  displayName: "卡片",
  props: {},
  custom: {
    useCanvas: true,
  },
  related: {
    settingRender: Panel,
  },
}, {
  title: (
    <Element canvas id="card-title-slot" is="div">
      标题
    </Element>
  ),
  extra: (
    <Element canvas id="card-title-extra" is="div">
      额外空间
    </Element>
  ),
  children: (
    <Element canvas id="card-title-children" is="div">
      <div>请添加组件</div>
    </Element>
  ),
});
