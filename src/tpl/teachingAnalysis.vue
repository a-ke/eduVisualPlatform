<template>
    <div id="teachingAnalysis">
        <div class="top">
          <border-frame class="vodCard" title="点播统计" total="点播课程总数：12536" :more="false">
          <span slot="content">点播统计</span>
        </border-frame>
        <border-frame class="studyCard" title="学习分析" total="" :more="false">
          <span slot="content">学习分析</span>
        </border-frame>
        </div>
        <div class="bottom"> 
        <border-frame class="liveCard" title="直播统计" total="直播课程总数：536" :more="false">
          <span slot="content">直播统计</span>
        </border-frame>
        </div>
    </div>
</template>
<script>
const borderFrame = () => import("../components/borderFrame.vue");
export default {
  name: "teachingAnalysis",
  components: {
    borderFrame
  }
};
</script>
<style lang="scss">
#teachingAnalysis {
  height: 100%;
  color: #fff;
  overflow: hidden;
  .top {
    height: 5.54rem;
    padding: 0.05rem;
    overflow: hidden;
    .vodCard {
      float: left;
      width: 11.22rem;
      height: 5.44rem;
    }
    .studyCard {
      float: right;
      width: calc(100% - 11.22rem - 20px);
      height: 5.44rem;
      margin-left: 20px;
    }
  }
  .bottom {
    height: calc(100% - 5.54rem - 20px);
    padding: 0.05rem;
    margin-top: 20px;
    overflow: hidden;
    .liveCard {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


