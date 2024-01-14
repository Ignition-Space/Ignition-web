import React from "react";
import { theme, Flex, Button, Typography } from "antd";
import { Tree } from "./tree";
import { css } from "@emotion/css";
import { MaterialList } from "./materials/list";
import { DoubleLeftOutlined, PlusCircleOutlined } from "@ant-design/icons";
import _ from "lodash";
import { HuosRemixIcon } from "@huos/icons";

export enum MenuTab {
  COMPONENT = "COMPONENT",
  TREE ="TREE",
}

export const Left = () => {
  const { token } = theme.useToken();
  const [activeKey, setActiveKey] = React.useState<MenuTab | undefined>(
    MenuTab.COMPONENT
  );
  const classes = {
    main: css({
      height: "100%",
      display: "grid",
      gridTemplateColumns: "45px 1fr",
    }),
    menu: css({
      paddingBlock: 8,
      borderRight: activeKey ? `1px solid ${token.colorBorderSecondary}` : undefined,
    }),
    content: css({
      width: 255,
      display: "grid",
      gridTemplateRows: "36px auto",
    }),
    title: css({
      paddingInline: 12,
      borderBottom: `1px solid ${token.colorBorderSecondary}`,
    }),
  };

  const items: Record<MenuTab, any> = {
    [MenuTab.COMPONENT]: {
      label: "组件列表",
      icon: <PlusCircleOutlined />,
      children: <MaterialList />,
    },
    [MenuTab.TREE]: {
      label: "组件树",
      icon: <HuosRemixIcon type='icon-node-tree' />,
      children: <Tree />,
    },
  };

  return (
    <div className={classes.main}>
      <Flex className={classes.menu} vertical align="center" gap={8}>
        {_.map(items, (value: any, key: MenuTab) => (
          <Button
            key={key}
            type={key === activeKey ? "primary" : "text"}
            icon={value.icon}
            onClick={() => setActiveKey(key)}
          />
        ))}
      </Flex>
      {activeKey ? (
        <div className={classes.content}>
          <Flex
            justify="space-between"
            className={classes.title}
            align="center"
          >
            <Typography.Text >{items?.[activeKey]?.label}</Typography.Text>
            <Button
              size="small"
              type="text"
              icon={<DoubleLeftOutlined />}
              onClick={() => setActiveKey(undefined)}
            />
          </Flex>
          <div>{items?.[activeKey]?.children}</div>
        </div>
      ) : null}
    </div>
  );
};
