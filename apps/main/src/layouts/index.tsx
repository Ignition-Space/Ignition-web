import { RouterLayout } from './router-layout'
import { Outlet, useLocation } from '@umijs/max'


export default () => {

  const location = useLocation()

  if (location.pathname === '/home') {
    return <Outlet/>
  }

  return (
    <RouterLayout />
  )
}
