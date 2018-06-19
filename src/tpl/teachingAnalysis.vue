<template>
    <div id="teachingAnalysis">
        <border-frame class="frameList">
          <span>123</span>
        </border-frame>
        <count-card class="countCard" :cardInfo="{title: '直播频道总数', count: 33}"></count-card>
    </div>
</template>
<script>
const borderFrame = () => import("../components/borderFrame.vue");
const countCard = () => import("../components/countCard.vue");
export default {
  name: "teachingAnalysis",
  components: {
    borderFrame,
    countCard
  }
};
</script>
<style lang="scss">
#teachingAnalysis {
  color: #fff;
  overflow: hidden;
  .frameList {
    width: 200px;
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


