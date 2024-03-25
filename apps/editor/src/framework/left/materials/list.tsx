import { App, Card, Flex, Typography } from "antd";
import { MaterialGroup } from "./group";
import { css } from "@emotion/css";
import {
  LayoutMaterials,
  BaseMaterials,
  DataDisplayMaterials,
  DataEntryMaterials,
  OtherMaterials,
  FeedbackMaterials,
  NavMaterials,
} from "@huos/mui";
import _ from 'lodash'

const marerials = {
  '基础组件': BaseMaterials,
  "布局组件": LayoutMaterials,
  "数据展示": DataDisplayMaterials,
  "数据录入": DataEntryMaterials,
  "反馈组件": FeedbackMaterials,
  "导航组件": NavMaterials,
  "其他组件": OtherMaterials
}

const classes = {
  list: css({
    height: 10,
    paddingInline: 12,
    paddingBlock: 6,
    boxSizing: "border-box",
  }),
};

export const MaterialList = () => {
  const { message } = App.useApp();

  return (
    <Flex vertical gap={12} className={classes.list}>
      {
        _.map(marerials, (value, key) => {
          return (
            <MaterialGroup groupName={key} groupList={value} />
          )
        })
      }

      <div style={{ paddingBottom: 12 }}>
        <Card size="small">
          <Flex justify="center">
            <Typography.Text type="secondary">
              暂无更多, 请
              <Typography.Link onClick={() => message.success("尽情期待")}>
                添加
              </Typography.Link>
            </Typography.Text>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};
