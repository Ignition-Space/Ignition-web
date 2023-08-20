import { Typography } from 'antd';
import React from 'react'


export interface ReadonlyStateProps {
  value?: any
}

export const ReadonlyState: React.FC<ReadonlyStateProps> = (props) => {

  return (
    <Typography.Text>
      {props?.value?.$$jsx}
    </Typography.Text>
  )
}