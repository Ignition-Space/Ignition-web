import React from "react";
import { ProFormCheckbox, ProFormSlider, ProFormSwitch, ProFormSegmented, ProFormRadio } from "@ant-design/pro-components";

export const SegmentedView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormSegmented>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormSegmented {...props} />
    </div>
  );
});

export const SwitchView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormSwitch>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormSwitch {...props} />
    </div>
  );
});

export const SliderView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormSlider>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormSlider {...props} />
    </div>
  );
});


export const CheckboxView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormCheckbox>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormCheckbox {...props} />
    </div>
  );
});

export const RadioGroupView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormRadio.Group>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormRadio.Group {...props} />
    </div>
  );
});