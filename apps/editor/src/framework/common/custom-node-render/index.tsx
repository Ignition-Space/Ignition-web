/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ReactDOM from "react-dom";
import { DragOutlined, HolderOutlined } from "@ant-design/icons";
import { Flex, Typography, theme } from "antd";
import { css } from "@emotion/react";

export interface RenderNodeWrapperProps {
  render: React.ReactElement;
}

export const CustomNodeRender: React.FC<RenderNodeWrapperProps> = ({
  render,
}) => {
  const { id } = useNode();
  const { query, isActive, isHovered } = useEditor((state, queryEditor) => {
    const [selectId] = state.events.selected;
    const [hoverId] = state.events.hovered;
    const [dragged] = state.events.dragged;
    return {
      isActive: queryEditor.getEvent("selected").contains(id),
      isHovered: queryEditor.getEvent("hovered").contains(id),
      isDragged: queryEditor.getEvent("dragged").contains(id),
      selectId,
      hoverId,
      dragged,
    };
  });

  const {
    dom,
    name,
    isRootNode,
    moveable,
    connectors: { drag },
  } = useNode((node) => {
    return {
      isRootNode: query.node(id).isRoot(),
      dom: node.dom,
      parent: node.data.parent,
      moveable: query.node(node.id).isDraggable(),
      deletable: query.node(node.id).isDeletable(),
      name: node.data.displayName,
      isResize: node.data.custom.useResize || false,
    };
  });

  React.useEffect(() => {
    if (dom) {
      if (isActive) {
        dom.classList.add("editor-component-active");
      } else {
        dom.classList.remove("editor-component-active");
      }
    }
  }, [dom, isActive]);

  React.useEffect(() => {
    if (dom && !isRootNode) {
      if (isHovered && !isActive) {
        dom.classList.add("editor-component-hover");
      } else {
        dom.classList.remove("editor-component-hover");
      }
    }
  }, [dom, isHovered, isRootNode, isActive]);

  return (
    <>
      {dom && isActive && !isRootNode
        ? ReactDOM.createPortal(
            <div
              css={css({
                position: "absolute",
                bottom: -29,
                left: 0,
                background: "#3170f9",
                display: "flex",
                width: "max-content",
                zIndex: 10000,
                pointerEvents: "none",
                borderRadius: 3,
                fontSize: 12,
                color: "#FFF",
                padding: 4,
              })}
            >
              <Flex
                align="center"
                gap={6}
                css={css({
                  pointerEvents: "auto",
                  color: "#FFF",
                  width: "max-content",
                  paddingInline: 6,
                })}
              >
                {moveable ? (
                  <Flex
                    ref={drag as any}
                    align="center"
                    justify="flex-start"
                    css={css({
                      fontWeight: "bold",
                      fontSize: 12,
                      color: "#FFF",
                    })}
                  >
                    <DragOutlined />
                  </Flex>
                ) : null}
                <Typography.Text style={{ fontSize: 12, color: "#FFF" }}>
                  {name}
                </Typography.Text>
              </Flex>
            </div>,
            dom!
          )
        : null}
      {render}
    </>
  );
};
