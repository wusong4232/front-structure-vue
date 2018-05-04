<template>
  <div>
    <subMenu
      v-for="item in data"
      :key="item.name"
      :data="item">
    </subMenu>
    <div :class="[prefixCls + '-empty']" v-if="!data.length">暂无目录数据</div>
  </div>
</template>
<script>
  import Emitter from '../../mixins/emitter'
  import subMenu from './submenu.vue'

  const prefixCls = 'iml-menu'

  /**
   * menu 做菜单组件的外观处理
   * submenu 做菜单的递归展示
   */

  export default {
    name: 'Menu',
    mixins: [Emitter],
    components: {subMenu},
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      activeName: {
        type: [String, Number]
      },
      openNames: {
        type: Array,
        default () {
          return []
        }
      },
      width: {
        type: String,
        default: '240px'
      }
    },
    data () {
      return {
        currentActiveName: this.activeName
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`
        ]
      },
      styles () {
        let style = {}
        return style
      }
    },
    methods: {
      updateActiveName () {
        if (this.currentActiveName === undefined) {
          this.currentActiveName = -1
        }
        this.broadcast('Submenu', 'on-update-active-name', false)
        this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName)
      },
      updateOpenKeys (name) {
        const index = this.openNames.indexOf(name)
        if (index > -1) {
          this.openNames.splice(index, 1)
        } else {
          this.openNames.push(name)
          if (this.accordion) {
            this.openNames.splice(0, this.openNames.length)
            this.openNames.push(name)
          }
        }
      }
    },
    mounted () {
      this.updateActiveName()
//      this.updateOpened()
      this.$on('on-menu-item-select', (name) => {
        this.currentActiveName = name
        this.$emit('on-select', name)
      })
    },
    watch: {
      openNames () {
        this.$emit('on-open-change', this.openNames)
      },
      activeName (val) {
        this.currentActiveName = val
      },
      currentActiveName () {
        this.updateActiveName()
      }
    }
  }
</script>

<style>
  /*@import "./../../styles/index.less";*/

  .iml-menu {
    display: block;
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    color: #495060;
    font-size: 14px;
    position: relative;

    background: #fff;
    /*border: 1px solid #fa7259;*/
  }

  /*.iml-menu :after{*/
  /*content: '';*/
  /*display: block;*/
  /*width: 100%;*/
  /*height: 1px;*/
  /*background: #78e154;*/
  /*position: absolute;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*}*/

</style>
