<template>
  <ul :class="classes" :style="styles"><slot></slot></ul>
</template>
<script>
  import Emitter from '../../mixins/emitter'

  const prefixCls = 'iml-menu'

  export default {
    name: 'Menu',
    mixins: [ Emitter ],
    props: {
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
