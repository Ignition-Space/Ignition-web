import * as React from "react";
import { Framework as EditorFramework } from "@/components/framework";
import type { FrameworRef } from "@/components/framework/mount-ref";
import { Frame } from "@/components/framework/canvas/frame";
import { useParams } from "@umijs/max";
import { Result } from "antd";

export default () => {
  const editorFrameworkRef = React.useRef<FrameworRef>(null);
  const [isEmpty, setIsEmpty] = React.useState(false)
  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      const schema = sessionStorage.getItem(params.id);
      if (editorFrameworkRef?.current && schema) {
        editorFrameworkRef.current?.onLoadState(schema);
      } else {
        setIsEmpty(true)
      }
    }
    return () => {};
  }, [params.id]);

  return (
    <EditorFramework 
      enabled={false} 
      ref={editorFrameworkRef}
    >
      <Frame />
      {
        isEmpty ? <Result /> : null
      }
    </EditorFramework>
  );
};
