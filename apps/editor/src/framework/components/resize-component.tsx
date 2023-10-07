/** @jsxImportSource @emotion/react */
import React from "react";
import { Resizable, ResizableProps, ResizeCallback } from "re-resizable";
import { css } from "@emotion/react";
import { useEditor, useNode } from "@craftjs/core";

const Mark = () => {
  return (
    <div
      css={css({
        width: 3,
        height: 3,
        border: `4px solid red`,
      })}
    ></div>
  );
};

export const ResizableComponent: React.FC<ResizableProps> = ({
  children,
  ...props
}) => {
  return <Resizable {...props}>{children}</Resizable>;
};

export const withResizeableNode = (
  WrappedComponent: React.FunctionComponent<{
    children?: React.ReactNode;
  }>
): React.FunctionComponent => {
  return function ({ children, ...props }: Record<string, any>) {

    const { id } = useNode();

    const {
      actions: { setProp },
    } = useEditor();

    const handleResizableChange: ResizeCallback = (_, __, elRef) => {
      const { width, height } = elRef.style;

      setProp(id, (prop) => {
        prop.width = width
        prop.heigt = height
      });
    };

    return (
      <Resizable
        enable={{
          bottom: true,
          right: true,
        }}
        bounds="parent"
        handleStyles={{
          bottom: {
            right: 0,
            bottom: 0,
          },

          right: {
            right: 0,
            bottom: 0,
          },
        }}
        handleComponent={{}}
        onResizeStop={handleResizableChange}
        size={{
          width: props.wdith,
          height: props.height
        }}
      >
        <WrappedComponent {...props}>{children}</WrappedComponent>
      </Resizable>
    );
  };
};
