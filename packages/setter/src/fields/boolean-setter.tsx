import React from 'react';
import { Switch, SwitchProps } from "antd";
import { RenderFieldSetter, SetterProps } from "..";

export const BooleanSetter: React.FC<SetterProps<SwitchProps>> = ({ filedProps, ...props }) => {
  return (
    <RenderFieldSetter {...props} valuePropName="checked" >
      <Switch  {...filedProps} />
    </RenderFieldSetter>
  )
}