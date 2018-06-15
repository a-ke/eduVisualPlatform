<template>
    <div id="videoStudio">
        <border-frame class="frameList"></border-frame>
    </div>
</template>
<script>
const borderFrame = () => import("../components/borderFrame.vue");
export default {
  name: "videoStudio",
  components: {
    borderFrame
  }
};
</script>
<style>
#videoStudio {
  color: #fff;
}
#videoStudio .frameList {
  width: 200px;
  height: 800px;
  margin-top: 100px;
  margin-left: 100px;
}
</style>


