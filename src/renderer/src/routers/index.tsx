import { lazy } from 'react'

const router = [
  {
    path: '/',
    component: lazy(() => import('@/views/message')),
    exact: true
  }
]
export default router
