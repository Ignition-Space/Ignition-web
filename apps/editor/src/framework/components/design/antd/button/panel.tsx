import { BindPrototypeManage } from "@huos/setter";

export const Panel = () => {
  return (
    <>
      <BindPrototypeManage
        label="加载状态"
        name="loading"
        tooltip="设置按钮载入状态"
        initialValue={false}
      />
      <BindPrototypeManage
        tooltip="将按钮宽度调整为其父宽度的选项"
        label="block"
        name="block"
        initialValue={false}
      />
      <BindPrototypeManage
        tooltip="按钮图标的icon"
        label="Icon样式"
        name={["classNames", "icon"]}
      />
      <BindPrototypeManage
        tooltip="设置危险按钮"
        label="危险按钮"
        name="danger"
        initialValue={true}
      />

      <BindPrototypeManage
        tooltip="设置按钮失效状态"
        label="禁用状态"
        name="disabled"
      />
      <BindPrototypeManage
        tooltip="幽灵属性，使按钮背景透明"
        label="幽灵模式"
        name="ghost"
      />
      <BindPrototypeManage
        tooltip="点击跳转的地址，指定此属性 button 的行为和 a 链接一致"
        label="跳转地址"
        name="href"
      />
      <BindPrototypeManage
        tooltip="设置 button 原生的 type 值，可选值请参考 【HTML 标准】"
        label=""
        name="htmlType"
      />
      <BindPrototypeManage
        tooltip="设置按钮载入状态【boolean | { delay: number }】"
        label="加载状态"
        name="loading"
      />
      <BindPrototypeManage
        tooltip="设置按钮形状"
        label="按钮形状"
        name="shape"
      />
      <BindPrototypeManage
        tooltip="设置按钮大小"
        label="按钮大小"
        name="size"
      />
      <BindPrototypeManage
        tooltip="相当于 a 链接的 target 属性，href 存在时生效"
        label="链接跳转方式"
        name="target"
      />
      <BindPrototypeManage
        tooltip="设置按钮类型"
        label="按钮类型"
        name="type"
      />
    </>
  );
};
