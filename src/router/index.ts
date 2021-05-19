import { IRouterItem } from './index.d'
import App from '../layouts/index'
import NoAuthority from '../frameOut/NoAuthority'
import NotFound from '../frameOut/NotFound'
import A from '../pages/A'
import B from '../pages/B'

const router: IRouterItem[] = [
  {
    key: 'app',
    props: {
      path: '/',
      component: App
    },
    children: [
      {
        key: 'app_a',
        props: {
          path: '/page-a',
          component: A
        }
      },
      {
        key: 'app_b',
        props: {
          path: '/page-b',
          component: B
        }
      }
    ]
  },
  {
    key: 'noAuthority',
    props: {
      path: '/noAuthority',
      exact: true,
      component: NoAuthority
    }
  },
  {
    key: 'notFound',
    props: {
      path: '/404',
      exact: true,
      component: NotFound
    }
  }
]

export default router
