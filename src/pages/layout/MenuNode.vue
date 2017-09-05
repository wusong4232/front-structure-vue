<template>
  <div>
    <div v-for="item in data">
      <div v-if="!item.children">
        <Menu-item name="item.name">{{item.title}}-{{item.name}}</Menu-item>
      </div>
      <div v-else>
        <Submenu name="item.name">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{item.title}}
          </template>
          <MenuNode
            :data="item.children">
          </MenuNode>

        </Submenu>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MenuNode',
    data () {
      return {}
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style>

</style>
