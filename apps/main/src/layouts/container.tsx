import { PageContainer } from '@ant-design/pro-components'
import { css } from '@emotion/css'
import { Button } from 'antd'

export const Container = ({ children }: any) => {
  return (
    <div className={css({
      paddingInline: 24,
      paddingBlock: 12
    })} >
      <PageContainer
        content="欢迎使用 ProLayout 组件"
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
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="rest">重置</Button>,
          <Button key="submit" type="primary">
            提交
          </Button>,
        ]}
      >
        {children}
      </PageContainer>
    </div>
  )
}