import { ProFormTextArea } from '@ant-design/pro-components'
import { MountSetter, toOptions } from '@huos/setter'
import { Input, InputNumber, Segmented, Select, Switch } from "antd"

export const Panel = () => {
  return (
    <div>
      {/* Disabled */}
      <MountSetter fields={{
        name: 'disabled',
        label: '禁用状态',
        valuePropName: "checked"
      }}>
        <Switch checkedChildren="禁用" unCheckedChildren="启用" />
      </MountSetter>

      {/*  Loading */}
      <MountSetter fields={{
        name: 'loading',
        label: "加载状态",
        valuePropName: "checked"
      }}>
        <Switch checkedChildren="禁用" unCheckedChildren="启用" />
      </MountSetter>

      {/* loadingFixedWidth */}
      <MountSetter fields={{
        name: 'loadingFixedWidth',
        label: "固定加载宽度",
        valuePropName: "checked",
        tooltip: '当 loading 的时候，不改变按钮的宽度。'
      }}>
        <Switch checkedChildren="禁用" unCheckedChildren="启用" />
      </MountSetter>

      {/* long */}
      <MountSetter fields={{
        name: 'long',
        label: "固定加载宽度",
        valuePropName: "checked",
        tooltip: '按钮宽度随容器自适应。'
      }}>
        <Switch checkedChildren="禁用" unCheckedChildren="启用" />
      </MountSetter>

      {/* long */}
      <MountSetter fields={{
        name: 'href',
        label: "跳转链接",
        tooltip: '添加跳转链接，设置此属性，button表现跟a标签一致'
      }}>
        <Input placeholder='请输入跳转地址.' />
      </MountSetter>

      {/* shape */}
      <MountSetter fields={{
        name: 'shape',
        label: "形状",
        tooltip: '按钮形状，circle - 圆形， round - 全圆角， square - 长方形'
      }}>
        <Segmented options={["circle", "round", 'square']} />
      </MountSetter>

      {/* htmlType */}
      <MountSetter fields={{
        name: 'htmlType',
        label: "原生类型",
        tooltip: '按钮原生的 html type 类型'
      }}>
        <Segmented options={["button", "submit", 'reset']} />
      </MountSetter>

      {/* size */}
      <MountSetter fields={{
        name: 'size',
        label: "尺寸",
        tooltip: '按钮的尺寸'
      }}>
        <Segmented options={['mini', 'small', 'default', 'large']} />
      </MountSetter>

       {/* size */}
       <MountSetter fields={{
        name: 'status',
        label: "状态",
        tooltip: '按钮的状态'
      }}>
        <Select options={toOptions(['warning', 'danger', 'success', 'default'])} />
      </MountSetter>

      {/* size */}
      <MountSetter fields={{
        name: 'type',
        label: "类型",
        tooltip: '按钮的类型'
      }}>
        <Select options={toOptions(['default', 'primary', 'secondary', 'dashed', 'text', 'outline'])} />
      </MountSetter>

      <ProFormTextArea name="$$children" label="文本内容" tooltip="文本内容渲染" />
    </div>
  )
}