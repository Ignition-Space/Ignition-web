import { Outlet } from '@umijs/max'
import { Framework as EditorFramework } from '@/components/framework'

export default () => {
  return (
    <EditorFramework>
      <Outlet />
    </EditorFramework>
  )
}
