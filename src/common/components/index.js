/**
 * Created by zhouzhigang on 2017/9/5.
 */
import mlDropdown from './src/dropdown'
import mlMenu from './src/menu'

const iml = {
  mlDropdown,
  mlMenu,
  mlMenuItem: mlMenu.Item,
  mlSubmenu: mlMenu.Sub
}

const install = function (Vue, opts = {}) {
  Object.keys(iml).forEach((key) => {
    Vue.component(key, iml[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(iml, {install})
