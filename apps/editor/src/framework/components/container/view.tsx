import React from "react";
import { ChakraProvider, Container, ContainerProps } from "@chakra-ui/react";

export const ProviderView: React.FC<ContainerProps> = React.memo((props) => {

  return (
    <ChakraProvider>
      <Container maxW="full" paddingInline={0} {...props} >
        {props.children}
      </Container>
    </ChakraProvider>
  );
});