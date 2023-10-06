import React from "react";
import { Tooltip, Tag, Button, Input } from "antd";
import { QuestionOutlined } from '@ant-design/icons'
import { css } from "@emotion/css";

export interface ReadonlyStateProps {
  value?: any;
  onChange?: (data: any) => void;
}

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
  console.log(props, 'props')
  return (
    <div className={classes.box}>
      <Tag color="blue" closable onClose={() => props.onChange && props.onChange(null)} bordered={false} >
        {props?.value?.$$jsx}
      </Tag>
    </div>
  );
};
