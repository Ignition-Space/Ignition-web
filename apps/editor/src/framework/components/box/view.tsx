import React from "react";
import {
  Box,
  BoxProps,
  Alert,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export const BoxView: React.FC<BoxProps> = React.memo((props) => {
  const { children, ...styledProps } = props;

  const isEmptyChild = React.Children.count(children) === 0;

  return (
    <Box  {...styledProps}>
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
      ) : props.children
      }
      
    </Box>
  );
});