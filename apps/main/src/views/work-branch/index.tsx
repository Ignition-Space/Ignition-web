import { PageContainer } from '@ant-design/pro-components'
import { Button, Typography } from 'antd'
import { CreateAppModal } from './create-app-modal'

export const WorkBranchView = () => {
  return (
    <PageContainer
      content={<Typography.Text type="secondary" >Welcome to Retool, fanghua!</Typography.Text>}
      breadcrumb={undefined}
      tabList={[
        {
          tab: '基本信息',
          key: 'base',
        },
        {
          tab: '详细信息',
          key: 'info',
        },
      ]}
      extra={[
        <CreateAppModal key="create-app" />
      ]}
      footer={[
        <Button key="rest">重置</Button>,
        <Button key="submit" type="primary">
          提交
        </Button>,
      ]}
    >
      11
    </PageContainer>
  )
}