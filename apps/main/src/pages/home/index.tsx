import { Button, Card, Col, Row, Space, Typography } from "antd";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import { NotifyCard } from "./notify-card";
import { AppDashBoardTable } from './apps'
import { right } from "@/tools/css";

const HomePage = () => {
  return (
    <PageContainer header={{
      title: null,
      children: null
    }} >
      <Space style={{ width: "100%" }} direction="vertical" size="large">
        {/* 第一栏 */}
        <Row>
          <Col
            flex="auto"
            style={{
              paddingInline: 24,
            }}
          >
            <Typography.Title level={3}>早上好，欢迎来到 HuoS</Typography.Title>
            <Typography.Text type="secondary">
              HuoS 拥有丰富的业务组件、模板，帮助你快速完成产品研发。
            </Typography.Text>
          </Col>
          <Col flex="300px" className={right}>
            <Button size="large">开始了解</Button>
          </Col>
        </Row>

        {/* 第二栏 */}
        <Row>
          <Col flex="auto">
            <NotifyCard />
          </Col>
          <Col flex="300px" className={right}></Col>
        </Row>

        <Row>
          <Col flex="auto">
            <AppDashBoardTable />
          </Col>
          <Col flex="300px" className={right}></Col>
        </Row>
      </Space>
    </PageContainer>
  );
};

export default HomePage;
