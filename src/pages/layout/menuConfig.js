/**
 * Created by zhouzhigang on 2017/8/14.
 *
 * menu 与 tabs 组件之间的对应关系及路由配置
 * 使用name叠加生成唯一key，类似与路由的唯一。避免限制名字唯一，字段过长
 * 当没有items时，父级必须有path属性
 *
 * ## 封装好方法处理有关 menu 的操作
 *
 */

const menuTabsConfig = [
  {
    name: 'index',
    title: '首页',
    icon: '',
    path: ''
  },
  {
    name: 'business',
    title: '商家',
    icon: '',
    path: '',
    children: [
      {name: 'list', title: '新建商家', icon: 'paper-airplane', path: 'list'},
      {name: 'list', title: '商家列表', icon: 'paper-airplane', path: 'list'}
    ]
  },
  {
    name: 'outlet',
    title: '网点',
    icon: '',
    path: '',
    children: [
      {name: 'list', title: '新建网点', icon: 'paper-airplane', path: 'list'},
      {name: 'list', title: '网点列表', icon: 'paper-airplane', path: 'list'}
    ]
  }
]

export default menuTabsConfig
