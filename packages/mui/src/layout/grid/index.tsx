import * as React from 'react'
import { createReactMaterial } from "@huos/core";
import { RowView, ColView } from './view'
import { HuosRemixIcon } from "@huos/icons";
import { Element } from "@craftjs/core";
import { ColPanel, RowPanel } from './panel'

export const __AntdCol = createReactMaterial(ColView, {
  displayName: '栅格-列',
  props: {
    span: 12
  },
  custom: {
    useResize: true,
    useCanvas: true,
  },
  related: {
    icon: () => <HuosRemixIcon type="icon-layout-column-line" />,
    settingRender: ColPanel,
  }
})

export const __AntdRow = createReactMaterial(RowView, {
  displayName: '栅格-行',
  custom: {
    useResize: true,
    useCanvas: true
  },
  related: {
    icon: () => <HuosRemixIcon type="icon-layout-row-fill" />,
    settingRender: RowPanel,
  }
})