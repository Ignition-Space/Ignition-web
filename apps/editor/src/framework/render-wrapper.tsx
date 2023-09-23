/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ReactDOM from "react-dom";
import { useFrame } from "react-frame-component";
import {
  DragOutlined,
} from "@ant-design/icons";
import { Button,Space } from "antd";

export interface RenderNodeWrapperProps {
  render: React.ReactElement;
}

export const RenderNodeWrapper: React.FC<RenderNodeWrapperProps> = ({
  render,
}) => {
  const { id } = useNode();
  const currentRef = React.useRef<HTMLDivElement>(null);
  const { query, isActive, isHovered } = useEditor((state, queryEditor) => {
    const [selectId] = state.events.selected;
    const [hoverId] = state.events.hovered;
    return {
      isActive: queryEditor.getEvent("selected").contains(id),
      isHovered: queryEditor.getEvent("hovered").contains(id),
      selectId,
      hoverId,
    };
  });

  const {
    dom,
    isRootNode,
    moveable,
    connectors: { drag },
    name
  } = useNode((node) => ({
    isRootNode: query.node(id).isRoot(),
    dom: node.dom,
    parent: node.data.parent,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    name: node.data.displayName,
  }));

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

  const getPos = React.useCallback((dom: HTMLElement) => {
    console.log(dom.getBoundingClientRect(), "dom.getBoundingClientRect()");
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  return (
    <>
      {isHovered || isActive
        ? ReactDOM.createPortal(
            <div
              ref={currentRef}
              className="px-2 py-2 text-white bg-primary fixed flex items-center"
              style={{
                left: dom ? getPos(dom).left : undefined,
                top: dom ? getPos(dom).top : undefined,
                zIndex: 9999,
                position: "fixed",
                background: "white",
                width: "max-content",
                transform: "translate(0px, -28px)",
                backgroundColor: "transparent",
              }}
            >
              <Space.Compact size="small" block >
                <Button type="primary">{name}</Button>
                <Button
                  disabled={!moveable}
                  style={{ cursor: "move" }}
                  ref={(_ref: HTMLElement) => drag(_ref)}
                  type="primary"
                  icon={<DragOutlined />}
                />
              </Space.Compact>
            </div>,
            canvasDocument?.body as HTMLElement
          )
        : null}
        {render}
    </>
  );
};
