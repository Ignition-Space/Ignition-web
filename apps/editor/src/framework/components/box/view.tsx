/** @jsxImportSource @emotion/react */
import React from "react";
import { Resizable, ResizableProps } from "re-resizable";
import { useNode, useEditor } from "@craftjs/core";
import { useThrottleFn } from "ahooks";
import { FunctionComponent } from "@huos/core";
import { EmptySetter } from "@/framework/canvas/empty-render";

const initialStyle: React.CSSProperties = {
  height: 8,
  width: 8,
  borderRadius: '50%',
  border: `1px solid rgb(26, 115, 232)`,
  background: '#FFF',
  zIndex: 2
}

export const BoxView: FunctionComponent<ResizableProps> = (props) => {
  const { id } = useNode();

  const {
    actions: { setProp },
  } = useEditor();
  const { children, mountRef, ...styledProps } = props;

  const { run: handleResizableChange } = useThrottleFn((_, __, elRef) => {
    const { width, height } = elRef.style;

    setProp(id, (prop: any) => {
      prop.size = {
        width,
        height,
      };
    });
  });

  return (
    <Resizable
      enable={{
        bottom: true,
        right: true,
      }}
      bounds="parent"
      {...styledProps}
      onResizeStop={handleResizableChange}
      handleStyles={{
        bottom: {
          ...initialStyle,
          bottom: -3.5,
          left: '50%',
          transform: "translateX(-50%)",
        },

        right: {
          ...initialStyle,
          right: -3.5,
          top: '50%',
          transform: "translateY(-50%)",
        },
      }}
      ref={(_instance) => {
        if (_instance?.resizable) {
          mountRef(_instance.resizable)
        }
      }}
    >
      <EmptySetter>{children}</EmptySetter>
    </Resizable>
  );
}