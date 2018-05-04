<template>
  <div>
    <Menu theme="light" width="auto">
      <MenuNode :data="data">
      </MenuNode>
    </Menu>

    <!--<dropdown>test dropdown</dropdown>-->
    <!--<mlMenu>-->
      <!--<mlMenuItem name="1">-->
        <!--itemafsa-->
      <!--</mlMenuItem>-->
      <!--<mlMenuItem name="1">-->
        <!--itemafsa-->
      <!--</mlMenuItem>-->
      <!--<mlSubmenu>-->
        <!--<template slot="title">-->
          <!--<Icon type="stats-bars"></Icon>-->
          <!--统计分析-->
        <!--</template>-->
        <!--<mlMenuItem name="3">-->
          <!--iteaaaaaaaa-->
        <!--</mlMenuItem>-->
      <!--</mlSubmenu>-->
    <!--</mlMenu>-->
    <mlMenu :data="data" class="ivu-menu ivu-menu-light ivu-menu-vertical"></mlMenu>

  </div>
</template>
<script>
  /**
   * # scenario
   * 1. menu 栏跳转详情页
   * 2. 详情页跳转 menu 栏有的页面，标记 menu-item
   * 3. 地址栏复制请求跳转，标记 menu-item
   *
   * # todo
   * 1. 读取配置初始化，生成导航栏，vuex 管理选中项
   * 2. 绑定点击事件，跳转内容展示页面
   * 3. 编写 mutation 提供 store 处理接口
   *
   * 4. 伸缩导航栏
   */

  import menuConfig from './menuConfig'
  import MenuNode from './MenuNode.vue'
  import Dropdown from './../../common/components'

  export default {
    components: { MenuNode, Dropdown },
    data () {
      return {
        data: menuConfig
      }
    }
  }
</script>

<style>

</style>
