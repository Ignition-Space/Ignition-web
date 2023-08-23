import { 
  createBrowserRouter,
} from 'react-router-dom'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/login'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: '/login',
    Component: LoginPage,
    loader: () => {
      return {
        name: ''
      }
    }
  }
]);