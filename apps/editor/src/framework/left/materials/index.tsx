import React from "react";
import _ from "lodash";
import { useEditor, Canvas } from "@craftjs/core";
import { css } from "@emotion/css";
import { Flex, theme } from "antd";

export interface MaterialProps {
  components: Record<string, any>;
}

export const Materials: React.FC<MaterialProps> = (props) => {
  const { connectors } = useEditor();
  const { token } = theme.useToken();

  const classes = {
    list: css({
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: token.paddingSM,
    }),
    item: css({
      border: `1px solid #e4e4e7`,
      paddingInline: token.paddingSM,
      paddingBlock: 8,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "border-color .85s",
      cursor: "pointer",
      gap: 8,
      fontSize: 14,
      color: token.colorTextSecondary,
      ["&:hover"]: {
        color: token.colorPrimary,
        borderColor: token.colorPrimary,
      },
    }),
    icon: css({
      fontSize: 16,
      fontWeight: "bold",
    }),
  };

  return (
    <div className={classes.list}>
      {_.map(props.components, (value, key: string) => {
        const displayName = value.craft?.displayName;
        const { icon } = value.craft.related || {};
        const { useCanvas = false } = value.craft?.custom || {};
        return (
          <div
            key={key}
            className={classes.item}
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
          >
            <Flex vertical justify="center" align="center" gap={8}>
              <div style={{ fontSize: 16}} >
              {icon ? React.createElement(icon) : null}
              </div>
              {displayName}
            </Flex>
          </div>
        );
      })}
    </div>
  );
};
