import { Avatar, Card, Dropdown } from "antd";
import { css } from "@emotion/css";

const classes = {
  card: css({
    cursor: "pointer",
    transition: "all 0.7s",
    ["&:hover"]: {
      border: `1px solid #1677ff`,
    }
  })
}

const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

export const AppCard = () => {
  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <Card className={classes.card}  >
        <Card.Meta
          avatar={
            <Avatar
              shape="square"
              size="large"
              src="https://gw.alipayobjects.com/zos/bmw-prod/6935b98e-96f6-464f-9d4f-215b917c6548.svg"
            />
          }
          title="测试工程"
          description="这是一个提供给营销系统使用的测试工程，用于测试不同营销场景下的效果"
        />
      </Card>
    </Dropdown>
  );
};
