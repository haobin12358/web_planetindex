<template>
  <div id="app" :class="$store.state.platform == 'pc'?'pc':'m-mobile'">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    if (document.documentElement.clientWidth > 750) {
      // require('./style/pc.less');
      this.$store.state.platform = 'pc';
    } else {
      // require('./style/mobile.less');
      this.$store.state.platform = 'mobile';
    }
  }
}
</script>

<style lang="less">
  @import "style/pc.less";
  @import "style/mobile.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*width: 100%;*/
  /*overflow-x: hidden;*/
  /*margin-top: 60px;*/
}
</style>
