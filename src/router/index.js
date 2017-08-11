import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes: routes
})

// 全局路由的钩子函数，处理跳转之前的逻辑，比如登陆
router.beforeEach((to, from, next) => {
  next()
})

export default router
