import React from "react";
import { Tooltip, Tag, Button, Input, Flex } from "antd";
import { css } from "@emotion/css";

export interface ReadonlyStateProps {
  value?: any;
  onChange?: (data: any) => void;
  valuePropName: string;
  [k: string]: any;
}

const stateValMap = {
  $$jsx: <Tag color="blue">表达式</Tag>,
};

const classes = {
  box: css({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  }),
  icon: css({
    fontSize: 18,
  }),
};

export const ReadonlyState: React.FC<ReadonlyStateProps> = (props) => {
  return (
    <div className={classes.box}>
      <Tag color="success">表达式</Tag>
      <Flex flex={1}>
        <Tag bordered={false}>{props?.[props.valuePropName]?.$$jsx}</Tag>
      </Flex>
      {/* <Tag color="blue" closable onClose={() => props.onChange && props.onChange(null)} bordered={false} >
        {props?.[props.valuePropName]?.$$jsx}
      </Tag> */}
    </div>
  );
};

ReadonlyState.defaultProps = {
  valuePropName: "value",
};
