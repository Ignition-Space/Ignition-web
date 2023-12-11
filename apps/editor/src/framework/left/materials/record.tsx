import React from "react";
import { Badge, Card, Flex, Typography } from "antd";
import { css } from "@emotion/css";

export interface MaterialRecordProps {
  icon: React.ReactNode;
  name: string;
}

const classes = {
  card: css({
    width: "100%",
    cursor: "move",
    svg: {
      fontSize: 24,
    },
  }),
};

export const MaterialRecord = React.forwardRef<
  HTMLDivElement,
  MaterialRecordProps
>((props, ref) => {
  return (
    <Flex ref={ref} vertical align="center" gap={8} wrap="wrap">
      <Card size="small" className={classes.card}>
        <Flex justify="center" align="center">
          {props.icon}
        </Flex>
      </Card>
      <Typography.Paragraph
        ellipsis={{
          rows: 2,
          tooltip: true,
        }}
        type="secondary"
        style={{ fontSize: 12, maxWidth: "6em" }}
      >
        {props.name}
      </Typography.Paragraph>
    </Flex>
  );
});
