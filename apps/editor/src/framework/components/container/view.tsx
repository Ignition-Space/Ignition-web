import { Box, BoxProps, ChakraProvider } from "@chakra-ui/react";
import { useNode } from "@craftjs/core";
import { ReactMaterialViewType } from "@huos/core";


export const ProviderView: ReactMaterialViewType = ({
  children,
  ...props
}, ref) => {

  return (
    <ChakraProvider>
      <Box ref={ref} {...props}>
        {children}
      </Box>
    </ChakraProvider>
  );
};
