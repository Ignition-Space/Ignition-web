import React from "react";
import { Space, SpaceProps } from '@arco-design/web-react'
import { EmptySetter } from '@/framework/canvas/empty-render'

export const SpaceView: React.FC<SpaceProps> = React.memo(({children, ...props}) => {

  return (
    <Space {...props} >
      <EmptySetter>
        {children}
      </EmptySetter>
    </Space>
  );
});