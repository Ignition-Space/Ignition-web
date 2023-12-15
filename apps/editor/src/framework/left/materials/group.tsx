import React from "react";
import { MaterialProps } from ".";
import { Flex, Typography } from "antd";
import { MaterialRecord } from "./record";
import { css } from "@emotion/css";
import { Canvas, useEditor } from "@craftjs/core";
import { SmileOutlined } from "@ant-design/icons";
import _ from "lodash";

export interface MaterialGroupProps {
  groupName: string;
  groupList: MaterialProps["components"];
  description?: string;
}

const classes = {
  group: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 12,
    overflow: 'auto',
    height: '100%'
  }),
};

export const MaterialGroup: React.FC<MaterialGroupProps> = (props) => {
  const { connectors } = useEditor();

  return (
    <Flex vertical gap={12}>
      <Typography.Text type="secondary">{props.groupName}</Typography.Text>
      <div className={classes.group}>
        {_.map(props.groupList, (value, key: string) => {
          const displayName = value.craft?.displayName;
          const { icon } = value.craft.related || {};
          const { useCanvas = false } = value.craft?.custom || {};
          return (
            <MaterialRecord
              key={key}
              ref={(ref: HTMLDivElement) => {
                if (ref) {
                  connectors.create(
                    ref,
                    useCanvas ? (
                      <Canvas canvas is={value} />
                    ) : (
                      React.createElement(value)
                    )
                  );
                }
              }}
              name={displayName}
              icon={icon ? React.createElement(icon) : <SmileOutlined />}
            />
          );
        })}
      </div>
    </Flex>
  );
};
