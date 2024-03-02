import { App, Card, Flex, Typography } from "antd";
import * as __baseMaterias__ from "@/framework/components";
import * as __layoutMaterias__ from "@/framework/components/layout";
import * as __formMaterias__ from '@/framework/components/form'
import * as __antDesignMaterias from "@/framework/components/design/antd";
import * as __datViewMaterias__ from "@/framework/components/data-view";
import { MaterialGroup } from "./group";
import { css } from "@emotion/css";

const classes = {
  list: css({
    height: 10,
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
      <MaterialGroup groupName="布局组件" groupList={__layoutMaterias__} />
      <MaterialGroup groupName="表单控件" groupList={__formMaterias__} />
      <MaterialGroup groupName="数据展示" groupList={__datViewMaterias__} />
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
