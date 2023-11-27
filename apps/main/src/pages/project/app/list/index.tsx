import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from "@ant-design/pro-components";
import { Card,  Row, Col, Pagination } from "antd";
import { Header } from "./header";
import { css } from "@emotion/css";
import { AppCard } from "./card";

const classes = {
  main: css({
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateRows: "auto auto 1fr",
    gap: 16,
  }),
  list: css({
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr 50px",
  }),
  paination: css({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  }),
};

export default () => {
  return (
    <div className={classes.main}>
      <Header />
      <Card size="small">
        <QueryFilter searchText="搜索" defaultCollapsed style={{ padding: 0 }}>
          <ProFormText name="name" label="应用名称" />
          <ProFormDatePicker name="createDate" label="创建时间" />
        </QueryFilter>
      </Card>
      <Card
        bodyStyle={{
          height: "calc(100% - 56px)",
        }}
        title="应用列表"
      >
        <div className={classes.list}>
            <div>
              <Row
                gutter={[12, 12]}
                style={{
                  overflow: "auto",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 122].map((key) => (
                  <Col key={key} xxl={4} lg={8} md={8} xs={12} >
                    <AppCard />
                  </Col>
                ))}
              </Row>
            </div>
          <div className={classes.paination}>
            <Pagination total={100} />
          </div>
        </div>
      </Card>
    </div>
  );
};
