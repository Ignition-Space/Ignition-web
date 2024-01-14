import { BindPrototypeManage } from "@huos/setter"


export const Panel = () => {
  return (
   <>
    <BindPrototypeManage name="background" label="背景配置" initialValue="#FFF" />
    <BindPrototypeManage name="width" label="宽度" initialValue="100vw" />
    <BindPrototypeManage name="height" label="高度" initialValue="100vh" />

   </>
  )
}