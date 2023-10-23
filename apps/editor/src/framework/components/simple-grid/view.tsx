import React from "react";
import { SimpleGrid, SimpleGridProps } from '@chakra-ui/layout'

export const SpaceView: React.FC<SimpleGridProps> = React.memo(({children, ...props}) => {

  return (
    <SimpleGrid {...props} >
      {children}
    </SimpleGrid>
  );
});