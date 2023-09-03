import { Button, Segmented, Space } from 'antd'
import { css } from "@emotion/css"
import { PlusOutlined } from '@ant-design/icons'
import { CreateAppModal } from './create-app-modal'

const classes = {
  body: css({
    display: 'flex',
    justifyContent: 'space-between'
  })
}

export const Header = () => {
  return (
    <div className={classes.body}>
      <Segmented options={["全部", "与我有关"]} />
      <Space>
        <CreateAppModal/>
      </Space>
    </div>
  )
} 