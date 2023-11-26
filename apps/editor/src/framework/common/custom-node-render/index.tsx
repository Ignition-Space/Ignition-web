/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ReactDOM from "react-dom";
import { useFrame } from "react-frame-component";
import { DragOutlined, HolderOutlined } from "@ant-design/icons";
import { Button, Flex, Popover, Space, Tooltip, Typography, theme } from "antd";
import { PortalOperationNode } from "./portal";
import { css } from "@emotion/react";

export interface RenderNodeWrapperProps {
  render: React.ReactElement;
}

export const CustomNodeRender: React.FC<RenderNodeWrapperProps> = ({
  render,
}) => {
  const { id } = useNode();
  const { token } = theme.useToken();
  const currentRef = React.useRef<HTMLDivElement>(null);
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

  const { document: canvasDocument } = useFrame();

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
      {dom && isActive
        ? ReactDOM.createPortal(
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
                paddingInline: 4,
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
                {moveable ? (
                  <Flex
                    ref={drag as any}
                    align="center"
                    justify="center"
                    css={css({
                      height: 30,
                      width: 30,
                      fontWeight: 'bold'
                    })}
                  >
                    <HolderOutlined />
                  </Flex>
                ) : null}
                {name ? (
                  <Flex
                    align="center"
                    css={css({
                      height: 30,
                    })}
                  >
                    {name}
                  </Flex>
                ) : null}
              </Flex>
            </div>,
            dom!
          )
        : null}
      {render}
    </>
  );
};
