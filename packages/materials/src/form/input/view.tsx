import React from "react";
import { ProFormText, ProFormTextArea, ProFormDigit } from "@ant-design/pro-components";

export const InputView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormText>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormText {...props} />
    </div>
  );
});

export const TextAreaView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormTextArea>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormTextArea {...props} />
    </div>
  );
});

export const InputPasswordView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormText.Password>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormText.Password {...props} />
    </div>
  );
});


export const InputNumber = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormDigit>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormDigit {...props} />
    </div>
  );
});