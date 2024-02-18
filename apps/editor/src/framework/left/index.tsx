import React from "react";
import _ from "lodash";
import { theme, Flex, Button, Typography, Tooltip } from "antd";
import { Tree } from "./tree";
import { css } from "@emotion/css";
import { MaterialList } from "./materials/list";
import { DoubleLeftOutlined, FunctionOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { HuosRemixIcon } from "@huos/icons";
import { LocalHisotry } from "./hisotry";
import { Queries } from "./queries";

export enum MenuTab {
  COMPONENT = "COMPONENT",
  TREE = "TREE",
  HISTORY = "HISTORY",
  QUERIES = "QUERIES",
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
      borderRight: activeKey
        ? `1px solid ${token.colorBorderSecondary}`
        : undefined,
    }),
    content: css({
      minWidth: 255,
      display: "grid",
      gridTemplateRows: "36px 1fr",
    }),
    title: css({
      paddingInline: 12,
      borderBottom: `1px solid ${token.colorBorderSecondary}`,
    }),
  };

  const items: Record<
    MenuTab,
    {
      label: string;
      icon: React.ReactNode;
      children: React.ReactNode;
    }
  > = {
    [MenuTab.COMPONENT]: {
      label: "组件列表",
      icon: <PlusCircleOutlined />,
      children: <MaterialList />,
    },
    [MenuTab.TREE]: {
      label: "面包树",
      icon: <HuosRemixIcon type="icon-node-tree" />,
      children: <Tree />,
    },
    [MenuTab.HISTORY]: {
      label: "历史记录",
      icon: <HuosRemixIcon type="icon-history-fill" />,
      children: <LocalHisotry />,
    },
    [MenuTab.QUERIES]: {
      label: "状态管理",
      icon: <HuosRemixIcon type="icon-database-2-fill" />,
      children: <Queries />,
    },
  };

  return (
    <div className={classes.main}>
      <Flex className={classes.menu} vertical align="center" gap={8}>
        {_.map(
          items,
          (value: (typeof items)[MenuTab.COMPONENT], key: MenuTab) => (
            <Tooltip
              key={key}
              color="blue"
              placement="rightTop"
              title={value.label}
            >
              <Button
                key={key}
                type={key === activeKey ? "primary" : "text"}
                icon={value.icon}
                onClick={() => setActiveKey(key)}
              />
            </Tooltip>
          )
        )}
      </Flex>
      {activeKey ? (
        <div className={classes.content}>
          <Flex
            justify="space-between"
            className={classes.title}
            align="center"
          >
            <Typography.Text>{items?.[activeKey]?.label}</Typography.Text>
            <Button
              size="small"
              type="text"
              icon={<DoubleLeftOutlined />}
              onClick={() => setActiveKey(undefined)}
            />
          </Flex>
          <div
            style={{
              overflow: "auto",
              height: "100%",
            }}
          >
            {items?.[activeKey]?.children}
          </div>
        </div>
      ) : null}
    </div>
  );
};
