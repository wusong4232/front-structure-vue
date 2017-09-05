/**
 * Created by zhouzhigang on 2017/8/14.
 *
 * 使用 name 叠加生成唯一key，类似与路由的唯一。避免限制名字唯一，字段过长
 * 当没有items时，父级必须有path属性
 *
 * ## 封装好方法处理有关 menu 的操作
 *
 */

const menuTabsConfig = [
  {
    name: 'index',
    title: '首页',
    icon: 'paper-airplane',
    path: ''
  },
  {
    name: 'business',
    title: '商家',
    icon: '',
    children: [
      {name: 'name1', title: '新建商家', icon: 'paper-airplane', path: 'list'}
      // {
      //   name: 'name2',
      //   title: '商家列表',
      //   icon: 'paper-airplane',
      //   path: 'list',
      //   children: [
      //     {name: 'name3', title: '新建商家', icon: 'paper-airplane', path: 'list'}
      //   ]
      // }
    ]
  },
  {
    name: 'outlet',
    title: '网点',
    icon: '',
    children: [
      {name: 'name4', title: '新建网点', icon: 'paper-airplane', path: 'list'},
      {name: 'name5', title: '网点列表', icon: 'paper-airplane', path: 'list'}
    ]
  }
]

// 统一处理 menu 配置数据

export default menuTabsConfig
