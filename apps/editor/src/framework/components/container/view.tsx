import React from "react";
import { Box, BoxProps, ChakraProvider } from "@chakra-ui/react";
import { FunctionComponent } from "@huos/core";

const transfromProps = (props: any): any => ({
  ...props,
  ref: props.mountRef,
});

export const ProviderView: FunctionComponent<BoxProps> = ({
  children,
  mountRef,
  ...props
}) => {
  return (
    <ChakraProvider>
      <Box ref={mountRef} {...props}>
        {children}
      </Box>
    </ChakraProvider>
  );
};
