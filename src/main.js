// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import './assets/css/font-awesome.min.css'
import './assets/css/base.css'
import iMl from './common/components'
import './common/assets/css/zTreeStyle.min.css'
import './common/assets/js/jquery.ztree.all.min'

Vue.config.productionTip = false

Vue.use(iView)

Vue.use(iMl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
