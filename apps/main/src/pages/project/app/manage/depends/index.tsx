import { ProCard, ProList } from "@ant-design/pro-components";
import { Tabs, TabsProps } from "antd";
import { DependCreatedBody } from './body';

const items: TabsProps['items'] = [
  {
    key: 'js',
    label: '脚本',
    children: <DependCreatedBody/>
  },
  {
    key: '2',
    label: '样式',
    children: <DependCreatedBody/>
  },
  {
    key: 'font',
    label: '字体',
    children: <DependCreatedBody/>
  },
];

export const DepensManageCard = () => {
  return (
    <ProCard bordered title="资源管理" tooltip="应用依赖的配置信息" bodyStyle={{
      paddingBlockStart: 0
    }} >
      <Tabs defaultActiveKey="js" items={items} />
    </ProCard>
  );
};
