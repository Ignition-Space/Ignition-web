import {
  Avatar,
  Badge,
  Button,
  Card,
  Flex,
  Input,
  List,
  Segmented,
  Space,
  Tag,
  Typography,
} from "antd";
import {
  SearchOutlined,
} from "@ant-design/icons";
import { CreateModal } from './create-modal'

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];

export default () => {
  return (
    <Flex vertical gap={24}>
      <Flex align="center" justify="space-between">
        <Segmented
          style={{ fontWeight: "normal" }}
          options={["我创建的", "我加入的"]}
        />
        <Space>
          <Input
            placeholder="搜索站点"
            prefix={
              <Typography.Text type="secondary">
                <SearchOutlined />
              </Typography.Text>
            }
          />
          <CreateModal key="create" title="创建站点" trigger={<Button type="primary">创建站点</Button>}/>
        </Space>
      </Flex>
      <List
        grid={{
          xxl: 4,
          gutter: 12,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              size="small"
              title={
                <Typography.Text>测试标题</Typography.Text>
              }
              extra={<Avatar shape="square" style={{ backgroundColor: '#1677ff' }} size="small">王</Avatar>}
            >
             <Flex vertical>
             <Flex style={{ height: 80 }} >
                <Typography.Paragraph ellipsis={{
                  tooltip: true,
                  rows: 3
                }} type="secondary">
                  商品会员系统，常需要设计者与开发者能快速做出响应。同时这类产品中存在很多类似的页面以及组件
                </Typography.Paragraph>
              </Flex>
              <Flex align="center" justify="space-between" >
                <Space>
                  {/* <Badge showZero color="blue" count="部署中" /> */}
                  <Tag color="processing" bordered={false} >部署中</Tag>
                </Space>
                <Flex>
                  <Button  size="small" type="link" >编辑</Button>
                  <Button danger size="small" type="text" >删除</Button>
                </Flex>
              </Flex>
             </Flex>
            </Card>
          </List.Item>
        )}
        pagination={{}}
      />
    </Flex>
  );
};
