<template>
    <div id="videoStudio">
        <border-frame class="frameList" title="教学分析" :more="false">
          <span slot="content">123</span>
        </border-frame>
        <count-card class="countCard" :cardInfo="{title: '直播频道总数', count: 33}"></count-card>
    </div>
</template>
<script>
const borderFrame = () => import("../components/borderFrame.vue");
const countCard = () => import("../components/countCard.vue");
export default {
  name: "videoStudio",
  components: {
    borderFrame,
    countCard
  }
};
</script>
<style lang="scss">
#videoStudio {
  color: #fff;
  overflow: hidden;
  .frameList {
    width: 600px;
    height: 200px;
    margin-top: 100px;
    margin-left: 100px;
  }
  .countCard {
    width: 200px;
    height: 200px;
  }
}
</style>


