import { MountSetter } from '@huos/setter'
import { Input } from "antd"

export const Panel = () => {
  return (
    <div>
      <MountSetter fields={{
        name: 'mount',
        label: '测试'
      }}>
        <Input/>
      </MountSetter>
      <MountSetter fields={{
        name: 'test2',
        label: '111'
      }}>
        <Input/>
      </MountSetter>
    </div>
  )
}