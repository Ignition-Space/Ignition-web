import { __Box__ } from '@/framework/components/box'
import { Frame as DocumentFrame, Element } from '@craftjs/core'


export const DocumentNodes = () => {
  return (
    <div id='__CasterViewPort__' >
      <DocumentFrame>
        <Element canvas is={__Box__} height="100vh" width="100vw" backgroundColor="#f4f4f4" >
          无内容
        </Element>
      </DocumentFrame>
    </div>
  )
}