import { __Provider__ } from '@/framework/components'
import { Frame as DocumentFrame, Element } from '@craftjs/core'


export const DocumentNodes = () => {
  return (
    <div id='__CasterViewPort__' >
      <DocumentFrame>
        <Element canvas is={__Provider__} height="100vh" width="100vw" backgroundColor="#f4f4f4" overflow="auto" />
      </DocumentFrame>
    </div>
  )
}