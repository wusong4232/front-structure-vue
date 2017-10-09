<script src="../../assets/js/jquery-vendor.js"></script>
<template>
  <div class="h100">
    test
    <!--<router-view></router-view>-->

    <ul id="treeDemo" class="ztree"></ul>
  </div>
</template>


<script>
  import $ from 'jquery'

  export default {
    data () {
      return {
        setting: {
          check: {
            enable: true,
            chkStyle: 'checkbox',
            chkboxType: {'Y': 'p', 'N': 's'}
          },
          callback: {
            onCheck: function (event, treeId, treeNode) {
              console.log('------>', treeNode)
            }
          }
        },
        zNodes: [
          {
            name: 'test1',
            open: true,
            children: [
              {name: 'test1_1'}, {name: 'test1_2'}
            ]
          },
          {
            name: 'test2',
            open: true,
            children: [
              {name: 'test2_1'}, {name: 'test2_2'}
            ]
          }
        ]
      }
    },
    mounted () {
      $.fn.zTree.init($('#treeDemo'), this.setting, this.zNodes)
      console.log('--->', $.fn.zTree.getZTreeObj('treeDemo'))
    }
  }
</script>

<style>

  .ztree {

  }

</style>
