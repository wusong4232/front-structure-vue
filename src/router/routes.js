/**
 * 配置路由表 routes
 */

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: resolve => require(['@/pages/index'], resolve)
  }
]

export default routes
