import React from "react";
import { ProFormDatePicker, ProFormDateTimePicker, ProFormDateRangePicker, ProFormDateTimeRangePicker } from "@ant-design/pro-components";

export const DatePickerView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormDatePicker>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormDatePicker {...props} />
    </div>
  );
});

export const DateTimePickerView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormDateTimePicker>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormDateTimePicker {...props} />
    </div>
  );
});

export const DateRangePickerView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormDateRangePicker>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormDateRangePicker {...props} />
    </div>
  );
});


export const DateTimeRangePickerView = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ProFormDateTimeRangePicker>
>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormDateTimeRangePicker {...props} />
    </div>
  );
});