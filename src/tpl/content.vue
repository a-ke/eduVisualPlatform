<template>
  <div id="visua-content">
    <left-nav></left-nav>
    <div id="main-wrapper">
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss">
  #visua-content {
    #main-wrapper {
      position: absolute;
      left: 26px;
      right: 10px;
      top: 8px;
      bottom: 10px;
      border: 1px solid #082342;
      padding: 47px 20px 24px 10px;
    }
  }
</style>

<script>
const leftNav = () => import("../components/leftNav.vue");
export default {
  name: "visua-content",
  components: {
    leftNav
  }
};
</script>



