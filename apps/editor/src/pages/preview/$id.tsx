import * as React from 'react'
import { useParams } from '@umijs/max'
import { Framework as EditorFramework } from '@/components/framework'
import { Frame } from '@/components/framework/canvas/frame'
export default () => {

  const [schemaData, setSchemaData] = React.useState<string | null>()
  const params = useParams()

  React.useEffect(() => {
    if (params.id) {
      const schema = sessionStorage.getItem(params.id)
      setSchemaData(schema)
    }
    return () => {
      if (params.id) {
        sessionStorage.removeItem(params.id)
      }
    }
  }, [params.id])

  return (
    <EditorFramework enable={false} schema={schemaData} >
      <Frame/>
    </EditorFramework>
  )
}
