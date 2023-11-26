/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Flex } from "antd";
import { HolderOutlined } from "@ant-design/icons";
import { useEditor, useNode } from "@craftjs/core";

export const PortalOperationNode = () => {
  const { id } = useNode();


  const { query } = useEditor()

  const {
    moveable,
    connectors: { drag },
  } = useNode((node) => {
    return {
      moveable: query.node(node.id).isDraggable(),
    };
  });

  return (
    <div
      css={css({
        position: "absolute",
        bottom: -29,
        left: 0,
        background: "#2178ea",
        display: "flex",
        height: 30,
        width: "100%",
        maxWidth: 100,
        zIndex: 10000,
        pointerEvents: "none",
      })}
    >
      <Flex
        align="center"
        css={css({
          pointerEvents: "auto",
          color: "#FFF",
          height: 30,
        })}
      >
        {
          moveable ?  <div ref={moveable as any} css={css({
            width: 30,
          })}>
            <HolderOutlined/>
          </div> : null
        }
       
      </Flex>
    </div>
  );
};
