<template>
    <div id="videoStudio">
        <border-frame class="totalStatistics" title="总统计">
          <div slot="content">
            <div class="row">
              <count-card class="countCard" :cardInfo="{title: '直播频道总数', count: 33}"></count-card>
              <count-card class="countCard" :cardInfo="{title: '直播频道总数', count: 33}"></count-card>
              <count-card class="countCard" :cardInfo="{title: '直播频道总数', count: 33}"></count-card>
              <count-card class="countCard" :cardInfo="{title: '直播频道总数', count: 33}"></count-card>
            </div>
          </div>
        </border-frame>
        <border-frame class="videoRoom" title="录播教室">
          <span slot="content">
            录播教室
          </span>
        </border-frame>
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
  height: 100%;
  color: #fff;
  .totalStatistics {
    width: 100%;
    height: 25%;
    margin-bottom: 20px;
    overflow: hidden;
    .row {
      width: 100%;
      height: 100%;
      padding: 0 10px;
      overflow: hidden;
      .countCard {
        float: left;
        width: calc(100% / 8 - 10px);
        height: 60%;
        margin: 0 10px;
      }
    }
  }
  .videoRoom {
    width: 100%;
    height: calc(75% - 20px);
  }
}
</style>


