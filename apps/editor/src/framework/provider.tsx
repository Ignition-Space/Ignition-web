import React from "react";
import { Editor as RootEditor, Options, 
  DefaultEventHandlers,
  NodeId } from "@craftjs/core";
import * as DefaultMaterials from "./components";
import * as AntDMaterials from "./components/design/antd";
import { RenderNodeWrapper } from "./render-wrapper";
import { EmptySetter } from "@/framework/canvas/empty-render";
import { useSchema } from "./stores/useSchema";
import { jsRuntime } from "@huos/core";
import { ReactQeuryProvider } from "./common/react-query";


class CustomEventHandlers extends DefaultEventHandlers {
  handlers() {
    const defaultHandlers = super.handlers()

    return {
      ...defaultHandlers,
      // Customize the hover event handler
      hover: (el: HTMLElement, id: NodeId) => {
        const unbindDefaultHoverHandler = defaultHandlers.hover(el, id)

        // Track when the mouse leaves a node and remove the hovered state
        const unbindMouseleave = this.addCraftEventListener(el, 'mouseleave', (e) => {
          e.craft.stopPropagation()
          this.options.store.actions.setNodeEvent('hovered', '')
          console.log(`mouseleave node ${id}`)
        })

        return () => {
          unbindDefaultHoverHandler();
          unbindMouseleave();
        }
      }
    }
  }
}

export interface EditoRootWrapperProps {
  // 本地storageKey, 用户缓存当前
  children?: React.ReactNode;
}

export const EditoRootWrapper: React.FC<EditoRootWrapperProps> = (props) => {
  const { jsMoudleCode } = useSchema();

  // 初始化js模块
  React.useEffect(() => {
    jsRuntime.mountJsMoudle(jsMoudleCode);
  }, [jsMoudleCode]);

  // 初始化依赖包

  // 初始化wasm

  const handleEditorChange: Options["onNodesChange"] = (query) => {

    const json = query.serialize();
  }

  return (
    <ReactQeuryProvider>
      <RootEditor
        resolver={{ ...DefaultMaterials, EmptySetter, ...AntDMaterials }}
        onRender={RenderNodeWrapper}
        onNodesChange={handleEditorChange}

      handlers={(store) =>
        new CustomEventHandlers({ store, isMultiSelectEnabled: () => false })
      }
      >
        {props.children}
      </RootEditor>
    </ReactQeuryProvider>
  );
};
