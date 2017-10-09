<script src="../../assets/js/jquery-vendor.js"></script>
<template>
  <div class="h100">
    test
    <!--<router-view></router-view>-->
    <!--<ztree :setting="setting"></ztree>-->

    <ul id="treeDemo" class="ztree"></ul>
  </div>
</template>


<script>
  import $ from 'jquery'

  // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
  var setting = {
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
  }
  // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
  var zNodes = [
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

  let ztree = {}
  $(document).ready(function () {
    $.fn.zTree.init($('#treeDemo'), setting, zNodes)
    ztree = $.fn.zTree.getZTreeObj('treeDemo')
    ztree.checkAllNodes(true)
    console.log(ztree.getCheckedNodes(true))
  })
  console.log(ztree)

  export default {
    data () {
      return {
        setting: {
          data: {
            key: {
              name: 'label',
              title: 'fullName'
            }
          }
        }
      }
    },
    mounted () {
      console.log('--->', $.fn.zTree.getZTreeObj('treeDemo'))
    }
  }
</script>

<style>

  .ztree {

  }

</style>
