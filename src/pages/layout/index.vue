<template>
  <div class="layout">
    <Row class="h100" type="flex">
      <i-col span="4" class="layout-menu-left">
        <div class="layout-logo-left">
          <span>增值服务平台</span>
        </div>
        <router-view name="menu"></router-view>
      </i-col>
      <i-col span="20">
        <div class="layout-header">
          <router-view name="header"></router-view>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view name="content"></router-view>
          </div>
        </div>
        <div class="layout-copy">
          <router-view name="footer"></router-view>
          2011-2016 &copy; TalkingData
        </div>
      </i-col>
    </Row>


  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>


<style>

  .layout{
    height: 100%;
    border: 1px solid rgb(104, 104, 104);
    background: #f5f7f9;
    position: relative;
  }

  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }

  .layout-content{
    height: 85%;
    min-height: 200px;
    margin: 8px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }

  .layout-copy{
    height: 5%;
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }

  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
</style>
