import {
  BindPrototypeManage,
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { Input, Select } from "antd";

export const Panel = () => {
  return (
    <>
      <BooleanSetter label="加载状态" name="loading" valuePropName="checked" />

      <BooleanSetter label="块级状态" name="block" valuePropName="checked" />

      <BooleanSetter label="危险按钮" name="danger" valuePropName="checked" />

      <BooleanSetter label="禁用状态" name="disabled" valuePropName="checked" />

      <BooleanSetter label="幽灵模式" name="ghost" valuePropName="checked" />


      <StringSetter
        label="图标样式"
        name="classNames.icon"
        valuePropName="checked"
      />

      <StringSetter
        tooltip="点击跳转的地址，指定此属性 button 的行为和 a 链接一致"
        label="跳转地址"
        name="href"
      />

      <RenderFieldSetter tooltip="设置按钮形状" label="按钮形状" name="shape">
        <Select
          placeholder="请选择类型"
          options={toOptions(["default", "circle", "round"])}
        />
      </RenderFieldSetter>

      <RenderFieldSetter tooltip="设置按钮大小" label="按钮大小" name="size">
        <Select
          placeholder="请选择类型"
          options={toOptions(["large", "middle", "small"])}
        />
      </RenderFieldSetter>

      <RenderFieldSetter
        tooltip="相当于 a 链接的 target 属性，href 存在时生效"
        label="跳转方式"
        name="target"
      >
        <Select
          popupMatchSelectWidth={270}
          placeholder="请选择"
          options={[
            {
              value: "_self",
              label: "在当前窗口打开",
            },
            {
              value: "_blank",
              label: "在新窗口打开",
            },
            {
              value: "_parent",
              label: "在父窗口打开",
            },
            {
              value: "_top",
              label: "在顶层窗口打开",
            },
          ]}
        />
      </RenderFieldSetter>
      <RenderFieldSetter tooltip="设置按钮类型" label="按钮类型" name="type">
        <Select
          placeholder="请选择类型"
          options={toOptions(["default", "primary", "dashed", "link", "text"])}
        />
      </RenderFieldSetter>
    </>
  );
};
