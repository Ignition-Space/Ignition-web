import React from "react";
import {
  Box,
  BoxProps,
  Alert,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Resizable, ResizeCallback, ResizableProps } from "re-resizable";
import { useNode, useEditor } from "@craftjs/core";
import { useThrottleFn } from "ahooks";
import { FunctionComponent } from "@huos/core";

export const BoxView: FunctionComponent<ResizableProps> = React.memo((props) => {
  console.log(props, 'props')
  const { id } = useNode();

  const {
    actions: { setProp },
  } = useEditor();
  const { children, mountRef, ...styledProps } = props;

  const isEmptyChild = React.Children.count(children) === 0;

  const { run: handleResizableChange } = useThrottleFn((_, __, elRef) => {
    const { width, height } = elRef.style;

    console.log(width, height, "handleResizableChange");
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
          right: 0,
          bottom: 0,
        },

        right: {
          right: 0,
          bottom: 0,
        },
      }}
      handleComponent={{}}
      ref={(_instance) => {
        if (_instance?.resizable) {
          mountRef(_instance.resizable)
        }
      }}
    >
      {isEmptyChild ? (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertTitle mt={4} mb={1} fontSize="lg">
            提示
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            组件内容为空，可以将左侧组件拖放入内
          </AlertDescription>
        </Alert>
      ) : (
        children
      )}
    </Resizable>
  );
});
