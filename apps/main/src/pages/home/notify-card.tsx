import { css } from "@emotion/css"
import { Button, Card, List, Space, Tag, Typography } from "antd"
import { RightOutlined } from '@ant-design/icons'

const classes = {
  item: css({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gap: 16
  })
}

export const NotifyCard = () => {
  return (
    <Card size="small" hoverable >
      <Space style={{ width: '100%' }} size={14} direction="vertical" >
      {
        [1,3,4].map((item) => (
          <div key={item} className={classes.item} >
            <Tag color='error' >异常</Tag>
            <Typography.Text>发现 3 条异常，请立即处理</Typography.Text>
            <Button type="text" size="small" icon={<RightOutlined />} />
          </div>
        ))
      }
      </Space>
    </Card>
  )
} 