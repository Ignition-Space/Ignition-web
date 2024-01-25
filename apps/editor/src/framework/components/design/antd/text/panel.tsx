import { BindPrototypeManage } from "@huos/setter"

export const Panel = () => {
  return (
    <>
      <BindPrototypeManage label="使用代码样式" name="code" tooltip="添加代码样式"  />
      <BindPrototypeManage label="复制" name="copyable" tooltip="是否可拷贝，为对象时可进行各种自定义"  />
      <BindPrototypeManage label="删除线" name="delete" tooltip="添加删除线样式"  />
      <BindPrototypeManage label="禁用文本" name="disabled"  />
      <BindPrototypeManage label="编辑态" name="editable"  />
      <BindPrototypeManage label="溢出省略" name="ellipsis" tooltip="自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件。不同于 Typography.Paragraph，Text 组件自身不带 100% 宽度样式，因而默认情况下初次缩略后宽度便不再变化。如果需要自适应宽度，请手工配置宽度样式"  />
      <BindPrototypeManage label="键盘样式" name="editable" tooltip="添加键盘样式" />
      <BindPrototypeManage label="标记样式" name="mark" tooltip="添加标记样式" />
      <BindPrototypeManage label="加粗" name="strong" tooltip="是否斜体" />
      <BindPrototypeManage label="文本类型" name="type" tooltip="文本类型【secondary | success | warning | danger】" />
      <BindPrototypeManage label="下划线样式" name="underline" tooltip="下划线类型" />
      <BindPrototypeManage label="文本内容" name="__child" tooltip="请输入文本内容" />
    </>
  )
}
