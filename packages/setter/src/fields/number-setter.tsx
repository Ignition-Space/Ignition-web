import React from 'react';
import { InputNumber, InputProps } from "antd";
import { RenderFieldSetter, SetterProps } from "..";
import { InputNumberProps } from "antd/lib";

export const NumberSetter: React.FC<SetterProps<InputNumberProps>> = ({ filedProps, ...props }) => {
  return (
    <RenderFieldSetter {...props} >
      <InputNumber style={{ width: '100%' }} placeholder="请输入" {...filedProps} />
    </RenderFieldSetter>
  )
}