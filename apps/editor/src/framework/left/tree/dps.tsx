import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { HuosRemixIcon } from "@huos/icons";
import { Button, Flex, Input, Space, Tag, Typography, theme } from "antd";
import { DepManageModal } from "./dep-manage-modal";

const classes = {
  dep: css({
    borderTop: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
    padding: theme.getDesignToken().paddingXS,
  }),
};

export const DepTree = () => {
  return (
    <Flex className={classes.dep} vertical gap={12}>
      <Flex style={{ width: "100%" }} justify="space-between">
        <Typography.Text>react @18.02</Typography.Text>
        <Space size={4}>
          <Button
            size="small"
            type="text"
            icon={<HuosRemixIcon type="icon-share-box-line" />}
          />
          <Button
            size="small"
            type="text"
            icon={<HuosRemixIcon type="icon-refresh-line" />}
          />
          <Button
            size="small"
            type="text"
            icon={<HuosRemixIcon type="icon-delete-bin-3-line" />}
          />
        </Space>
      </Flex>
      <DepManageModal />
    </Flex>
  );
};
