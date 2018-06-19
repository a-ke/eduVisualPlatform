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



