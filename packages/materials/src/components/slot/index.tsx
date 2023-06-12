import * as React from "react";
import {
  createReactMaterial,
  withMaterialNode,
  FrameworkContext,
} from "@lgnition-lowcode/core";
import { SlotEmpty } from "./empty";

export interface SlotProps {
  children?: React.ReactNode;
  empty?: React.ReactNode;
}

const SlotView = withMaterialNode<SlotProps>(
  React.forwardRef((props, ref: React.LegacyRef<HTMLDivElement>) => {
    const frameworkContext = React.useContext(FrameworkContext);

    const emptyRender = frameworkContext?.enabled ? <SlotEmpty>{props.empty}</SlotEmpty> : null;

    return (
      <div ref={ref} style={{}}>
        {props.children ? props.children : emptyRender}
      </div>
    );
  })
);

export const Slot = createReactMaterial(SlotView, {});
