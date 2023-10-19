/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ReactDOM from "react-dom";
import { useFrame } from "react-frame-component";
import { DragOutlined } from "@ant-design/icons";

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
    const [ dragged ] = state.events.dragged
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
    }
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

  const getPos = React.useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: top > 0 ? top : bottom,
      left: left,
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
                background: "#2178ea",
                width: "max-content",
                transform: "translate(8px, -35px)",
                display: 'flex',
                alignItems: 'center',
                minWidth: "max-content",
                height: 30,
                color: '#fff',
                paddingInline: 6
              }}
            >
             {name}
             {
              moveable ? <DragOutlined ref={drag as any} /> : null
             }
            </div>,
            canvasDocument?.body as HTMLElement
          )
        : null}
      {
        render
      }
    </>
  );
};
