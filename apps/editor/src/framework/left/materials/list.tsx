import { App, Card, Flex, Typography } from "antd";
import * as __baseMaterias__ from "@/framework/components";
import * as __antDesignMaterias from "@/framework/components/design/antd";
import { MaterialGroup } from "./group";
import { css } from "@emotion/css";

const classes = {
  list: css({
    height: "100%",
    paddingInline: 12,
    paddingBlock: 6,
    boxSizing: "border-box",
  }),
};

export const MaterialList = () => {

  const { message } = App.useApp()

  return (
    <Flex vertical gap={12} className={classes.list}>
      <MaterialGroup groupName="基础组件" groupList={__baseMaterias__} />
      <MaterialGroup groupName="蚂蚁体系" groupList={__antDesignMaterias} />
      <MaterialGroup groupName="蚂蚁体系" groupList={__antDesignMaterias} />
      <MaterialGroup groupName="蚂蚁体系" groupList={__antDesignMaterias} />
      <MaterialGroup groupName="蚂蚁体系" groupList={__antDesignMaterias} />
      <MaterialGroup groupName="蚂蚁体系" groupList={__antDesignMaterias} />
      <div style={{ paddingBottom: 12 }}>
        <Card size="small">
          <Flex justify="center">
            <Typography.Text type="secondary">
              暂无更多, 请<Typography.Link onClick={() => message.success("尽情期待")} >添加</Typography.Link>
            </Typography.Text>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};
