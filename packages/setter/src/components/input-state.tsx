import { Alert, Button, Input, Mentions, Popover, Space } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { css } from '@emotion/css'

export interface InputStateSetterProps { }

export const InputStateSetter: React.FC<InputStateSetterProps> = (props) => {

  return (
    <Popover
      open
      style={{
        width: '100%'
      }}
      overlayInnerStyle={{
        padding: 0,
        width: 320,
      }}
      placement="bottom"
      content={(
        111
      )} arrow={false} >
      <Input />
    </Popover>
  )
}