import { Box, BoxProps, ChakraProvider } from "@chakra-ui/react";
import { FunctionComponent } from "@huos/core";


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
