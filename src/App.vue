<template>
  <div id="app">
    <div id="head">
      <div class="head-title">教育可视化平台</div>
    </div>
    <div id="content"> 
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
body {
  min-width: 1280px;
  min-height: 749px;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  background: url("../static/images/public/background2.png") no-repeat 100% 100%;
  #head {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 45px;
    text-align: center;
    background: url("../static/images/public/head_bg.png") no-repeat 100% 100%;
    .head-title {
      height: 100%;
      font-size: 0.23rem;
      font-weight: 600;
      letter-spacing: 3px;
      text-shadow: 1px 2px 0 rgba(0, 6, 6, 1);
      color: rgba(0, 173, 255, 1);
      line-height: 45px;
    }
  }
  #content {
    height: calc(100% - 45px);
  }
  [v-cloak] {
    display: none;
  }
}
</style>
