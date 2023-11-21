/** @jsxImportSource @emotion/react */
import React from "react";
import { Resizable } from "re-resizable";
import { useNode, useEditor } from "@craftjs/core";
import { useThrottleFn } from "ahooks";
import { ReactMaterialViewType } from "@huos/core";

const initialStyle: React.CSSProperties = {
  height: 12,
  width: 12,
  borderRadius: "50%",
  border: `2px solid rgb(26, 115, 232)`,
  background: "#FFF",
  zIndex: 2,
};

export const BoxView: ReactMaterialViewType<any> = (props, ref: any) => {
  const { id } = useNode();

  const {
    actions: { setProp },
    isActive,
    isHovered,
  } = useEditor((_, queryEditor) => {
    return {
      isActive: queryEditor.getEvent("selected").contains(id),
      isHovered: queryEditor.getEvent("hovered").contains(id),
    };
  });
  const { children, ...styledProps } = props;

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
      enable={
        isActive || isHovered
          ? {
              bottom: true,
              right: true,
            }
          : false
      }
      bounds="parent"
      {...styledProps}
      onResizeStop={handleResizableChange}
      handleStyles={{
        bottom: {
          ...initialStyle,
          bottom: -6,
          left: "50%",
          transform: "translateX(-50%)",
        },

        right: {
          ...initialStyle,
          right: -6,
          top: "50%",
          transform: "translateY(-50%)",
        },
      }}
      ref={(_instance) => {
        if (_instance?.resizable) {
          ref(_instance?.resizable);
        }
      }}
    >
      {children}
    </Resizable>
  ) as any;
};
