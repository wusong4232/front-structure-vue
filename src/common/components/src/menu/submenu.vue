<template>
  <ul class="" style="">
    <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" @click="handleClick">
      <div v-if="isLeaf">
        <!-- 如果有icon 显示，显示文本， 处理样式 -->
        <Icon type="ios-paper"></Icon>
        <span>{{data.title}}</span>
      </div>
      <div v-else>
        <!-- 显示等级文本 -->
        <div :class="[prefixCls + '-submenu-title']">
          <Icon type="ios-paper"></Icon>
          <span>{{data.title}}</span>
          <Icon type="ios-arrow-down" :class="[prefixCls + '-submenu-title-icon']"></Icon>
        </div>
        <transition name="slide-up">
          <div
            v-show="opened"
            :style="dropStyle">
            <!-- 在下拉框中递归子集数据 -->
            <subMenu
              v-for="item in data.children"
              :key="item.name"
              :data="item">
            </subMenu>
          </div>
        </transition>
      </div>
    </li>
  </ul>
</template>
<script>
  import drop from './../dropdown'
  import { getStyle, findComponentUpward } from './../../../utils/assist'

  const prefixCls = 'ivu-menu'

  export default {
    name: 'subMenu',
    components: { drop },
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        active: false,
        opened: false,
        dropWidth: parseFloat(getStyle(this.$el, 'width')),
        parent: findComponentUpward(this, 'Menu')
      }
    },
    computed: {
      isLeaf () {
        return !this.data.children || this.data.children.length === 0
      },
      classes () {
        return [
          `${prefixCls}-item`,
          {
            [`${prefixCls}-item-active`]: this.active,
            [`${prefixCls}-opened`]: this.opened,
            [`${prefixCls}-submenu-disabled`]: this.disabled
          }
        ]
      },
      dropStyle () {
        let style = {}
        if (this.dropWidth) style.minWidth = `${this.dropWidth}px`
        return style
      }
    },
    methods: {
      handleMouseenter () {
        if (this.disabled) return
        if (this.mode === 'vertical') return

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.parent.updateOpenKeys(this.name)
//          this.opened = true
        }, 250)
      },
      handleMouseleave () {
        if (this.disabled) return
        if (this.mode === 'vertical') return

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.parent.updateOpenKeys(this.name)
//          this.opened = false
        }, 150)
      },
      handleClick () {
        if (this.disabled) return
        if (this.mode === 'horizontal') return
        const opened = this.opened
        if (this.accordion) {
          this.parent.$children.forEach(item => {
            if (item.$options.name === 'Submenu') item.opened = false
          })
        }
        this.opened = !opened
        this.parent.updateOpenKeys(this.name)
      }
    }
  }
</script>

<style>

</style>
