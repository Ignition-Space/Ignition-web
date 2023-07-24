import { Typography } from 'antd'
import type { StatisticProps } from '@ant-design/pro-components';
import { ProCard, StatisticCard, PageContainer } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const items = [
  { key: '1', title: '全部', value: 10, total: true },
  { key: '2', status: 'default', title: '未发布', value: 5 },
  { key: '3', status: 'processing', title: '发布中', value: 3 },
  { key: '4', status: 'error', title: '发布异常', value: 1 },
  { key: '5', status: 'success', title: '发布成功', value: 1 },
];

export const WorkBranchView = () => {
  return (
    <PageContainer
      content={<Typography.Text type="secondary" >Welcome to Retool, fanghua!</Typography.Text>}
      breadcrumb={undefined}
      
    >
      <ProCard
      tabs={{
        onChange: (key) => {
          console.log('key', key);
        },
        items: items.map((item) => {
          return {
            key: item.key,
            style: { width: '100%' },
            label: (
              <Statistic
                layout="vertical"
                title={item.title}
                value={item.value}
                status={item.status as StatisticProps['status']}
                style={{
                  width: 120,
                  borderInlineEnd: item.total ? '1px solid #f0f0f0' : undefined,
                }}
              />
            ),
            children: (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                  height: 100,
                }}
              >
                关联展示内容 {item.title}
              </div>
            ),
          };
        }),
      }}
    />
    </PageContainer>
  )
}