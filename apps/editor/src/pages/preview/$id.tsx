import * as React from 'react'
import { Framework as EditorFramework } from '@/components/framework'
import type { FrameworRef } from '@/components/framework/mount-ref'
import { Frame } from '@/components/framework/canvas/frame'
import { useParams } from '@umijs/max'
export default () => {

  const [schemaData, setSchemaData] = React.useState<string | null>()
  const editorFrameworkRef = React.useRef<FrameworRef>(null)
  const params = useParams()

  console.log(editorFrameworkRef, 'editorFrameworkRef')

  React.useEffect(() => {
    if (params.id) {
      const schema = sessionStorage.getItem(params.id)
      // setSchemaData(schema)
      if (editorFrameworkRef?.current && schema) {
        editorFrameworkRef.current?.onLoadState(schema)
      }
    }
    return () => {
    }
  }, [params.id])

  return (
    <EditorFramework enabled={false} ref={editorFrameworkRef} >
      <Frame/>
    </EditorFramework>
  )
}
