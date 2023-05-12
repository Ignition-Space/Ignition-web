import { css } from '@emotion/css'
import { Typography } from 'antd'

export const SlotEmpty = () => {
  return (
    <div className={css({
      height: '100%',
      width: '100%',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 2,
      borderStyle: 'dashed',
      padding: 12,
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 'normal',
      background: 'rgba(255,255,255, 0.2)'
    })} >
      <Typography.Text type="secondary" >
        当前为插槽容器，打开右侧属性面板可以替换当前坑位。
      </Typography.Text>
    </div>
  )
}