<template>
  <div id="visua-content">
    <left-nav></left-nav>
    <div id="main-wrapper">
      <router-view/>
    </div>
  </div>
</template>
<script>
const leftNav = () => import("../components/leftNav.vue");
export default {
  name: "visua-content",
  components: {
    leftNav
  }
};
</script>
<style lang="scss">
#visua-content {
  height: 100%;
  width: 100%;
  #main-wrapper {
    height: 100%;
    padding: 10px 20px 10px 20px;
  }
}
</style>




