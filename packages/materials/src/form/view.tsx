import React from "react";
import type { FormItemProps } from "antd";
import { Form } from "antd";
import { Slot } from "..";
import { ProForm, ProFormText } from "@ant-design/pro-components";

export const FormView = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const [form] = Form.useForm();
  return (
    <div ref={ref}>
      <ProForm
        form={form}
        {...props}
        onValuesChange={(changeValues) => console.log(changeValues)}
        onFinish={(v) => {
          console.log(v, "onValuesChange");
        }}
      >
        <ProFormText name="name1" />
        <Slot>{props.children as any}</Slot>
      </ProForm>
    </div>
  );
});

export const FormItemView = React.forwardRef<HTMLDivElement, FormItemProps>(
  (props, ref) => {
    return (
      <div ref={ref}>
        <Form.Item>
          <Slot>{props.children as any}</Slot>
        </Form.Item>
      </div>
    );
  }
);
