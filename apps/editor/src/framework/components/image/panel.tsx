import { MountSetter, toOptions } from '@huos/setter'
import { Input, InputNumber, Select } from "antd"

export const Panel = () => {
  return (
    <div>
      <MountSetter fields={{
        name: 'crossOrigin',
        label: 'crossOrigin',
        tooltip: '用于设置要加载图像的 HTMLImageElement 上的 crossOrigin 的键。这告诉浏览器在尝试下载图像数据时请求跨域访问。'
      }}>
        <Select allowClear options={toOptions(["anonymous", "use-credentials"])} placeholder="crossOrigin" />
      </MountSetter>
      <MountSetter fields={{
        name: 'htmlHeight',
        label: '图片高度',
        tooltip: '传递给的HTML属性img的height属性'
      }}>
        <InputNumber style={{ width: '100%' }} min={1} placeholder='原生图片高度' controls={false} suffix="px" />
      </MountSetter>
      <MountSetter fields={{
        name: 'htmlWidth',
        label: '图片宽度',
        tooltip: '传递给的HTML属性img的width属性'
      }}>
        <InputNumber style={{ width: '100%' }} min={1} placeholder='原生图片宽度' controls={false} suffix="px" />
      </MountSetter>
    </div>
  )
}