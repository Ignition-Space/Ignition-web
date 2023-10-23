import { MountSetter, toOptions } from '@huos/setter'
import { Select, Switch } from 'antd'

export const Panel = () => {
  return (
    <div>
      {/* preview */}
      <MountSetter fields={{
        name: 'preview',
        label: '预览状态',
        valuePropName: "checked",
        tooltip: '是否开启预览'
      }}>
        <Switch checkedChildren="禁用" unCheckedChildren="启用" />
      </MountSetter>

      {/* hoverable */}
      <MountSetter fields={{
        name: 'hoverable',
        label: '悬浮状态',
        valuePropName: "checked",
        tooltip: '悬浮状态是否有底色'
      }}>
        <Switch checkedChildren="禁用" unCheckedChildren="启用" />
      </MountSetter>

      <MountSetter fields={{
        name: 'status',
        label: "状态",
        tooltip: '按钮的状态'
      }}>
        <Select options={toOptions(['warning', 'error', 'success', 'default'])} />
      </MountSetter>
    </div>
  )
}
