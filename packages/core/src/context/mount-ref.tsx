import * as React from 'react'
import { useEditor } from "@craftjs/core"
import lz from 'lzutf8'

export interface FrameworRef {
  onLoadState: (json: string, options?: {
    useState?: boolean;
  }) => void;
}

export const MountRef = React.forwardRef<FrameworRef>((_, ref) => {
  const { actions, query } = useEditor()
    
  React.useEffect(() => {

    const autoSaveSchemaData = () => {
      const schema = query.serialize();
      console.log(schema, 'schema1')
      // save实现
    };

    const interval = setInterval(autoSaveSchemaData, 30 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [query]);

  React.useImperativeHandle(ref, () => ({
    /**
     * 修改当前
     * @param json stateText 或这是 JOSN
     * @param options 
     */
    onLoadState(json, options) {
      let data = json
      if (options?.useState) {
        data = lz.decompress(lz.decodeBase64(data));
      }
      actions.deserialize(data)
    }
  }))

  return null
})