/**
 * 配置路由表 routes
 */

const routes = [
  {
    path: '/',
    name: 'layout',
    component: resolve => require(['@/pages/layout/index.vue'], resolve),
    children: [
      {
        path: '/',
        name: 'body',
        components: {
          header: resolve => require(['@/pages/layout/Header.vue'], resolve),
          menu: resolve => require(['@/pages/layout/Menu.vue'], resolve),
          content: resolve => require(['@/pages/layout/Content.vue'], resolve),
          footer: resolve => require(['@/pages/layout/Footer.vue'], resolve)
        },
        children: [
          // 业务代码相关路由配置在这里
          {
            path: '/serviceA',
            name: 'serviceA',
            component: resolve => require(['@/pages/service/serviceA.vue'], resolve)
          }
        ]
      }
    ]
  }

]

export default routes
