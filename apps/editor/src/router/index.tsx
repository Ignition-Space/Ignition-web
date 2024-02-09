import { 
  createBrowserRouter,
} from 'react-router-dom'
import { Index } from '../pages/index'
import { PreviewPage } from '../pages/preview'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
  {
    path: '/preview/:id',
    Component: PreviewPage,
  },
  {
    path: '/editor/:id',
    Component: Index
  }
]);

export default router