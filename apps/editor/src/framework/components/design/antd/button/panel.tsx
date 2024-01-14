import { BindPrototypeManage } from '@huos/setter'

export const Panel = () => {
  return (
    <>
      <BindPrototypeManage label="加载状态" name="loading" tooltip="设置按钮载入状态" initialValue={false} />
      <BindPrototypeManage tooltip="将按钮宽度调整为其父宽度的选项" label="block" name="block" initialValue={false} />
      <BindPrototypeManage tooltip="按钮图标的icon" label="Icon样式" name={["classNames", "icon"]} />
      <BindPrototypeManage tooltip="设置危险按钮" label="危险按钮" name="danger" initialValue={true} />
      
    </>
    
  )
}