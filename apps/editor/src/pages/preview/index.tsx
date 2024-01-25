import { EditoRootWrapper } from '@/framework/provider'
import { DocumentNodes } from '@/framework/canvas/document'

export const PreviewPage = () => {
  return (
    <EditoRootWrapper enabled={false} >
        <DocumentNodes />
      </EditoRootWrapper>
  )
}