<template>
  <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">

    <div :class="[prefixCls + '-submenu-title']" ref="reference" @click="handleClick">
      <slot name="title"></slot>
      <Icon type="ios-arrow-down" :class="[prefixCls + '-submenu-title-icon']"></Icon>
    </div>

    <transition name="slide-up">
      <Drop
        v-show="opened"
        placement="bottom"
        ref="drop"
        :style="dropStyle"><slot></slot></Drop>
    </transition>
  </li>
</template>
<script>
  export default {
    name: 'submenu',
    data () {
      return {}
    },
    methods: {
      handleMouseenter () {
        if (this.disabled) return
        if (this.mode === 'vertical') return

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.parent.updateOpenKeys(this.name)
          this.opened = true
        }, 250)
      },
      handleMouseleave () {
        if (this.disabled) return
        if (this.mode === 'vertical') return

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.parent.updateOpenKeys(this.name)
          this.opened = false
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
