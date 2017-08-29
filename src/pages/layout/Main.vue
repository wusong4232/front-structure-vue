<template>
  <div class="main" :class="{'layout-hide-text': spanLeft < 4}">
    <Row type="flex" style="height: 100%">
      <i-col :span="spanLeft" class="layout-menu-left">
      <router-view name="menu"></router-view>
      </i-col>

      <i-col :span="spanRight">
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view  name="content"></router-view>
          </div>
        </div>
        <div class="layout-copy">
          2017- &copy; ecomb
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 4,
        spanRight: 20
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      }
    }
  }
</script>

<style>
  .main {
    height: 90%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-content{
    height: 95%;
    margin: 5px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main{
    padding: 5px;
  }

  .layout-copy{
    text-align: center;
    padding: 5px 0 10px;
    color: #9ea7b4;
  }

  .layout-menu-left{
    background: #eff0f1;
  }


  .layout-ceiling-main a{
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text{
    display: none;
  }

</style>
