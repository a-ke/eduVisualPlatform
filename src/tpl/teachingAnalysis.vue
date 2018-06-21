<template>
    <div id="teachingAnalysis">
      <div class="teachingAnalysis-left">
        <div class="teachingAnalysis-left-top">  
            <school-teaching-type title="学校教学类型统计"></school-teaching-type>
          <!-- <teaching-border-frame title="学校教学类型统计" total="" :more="false">
            <school-teaching-type title="学校教学类型统计"></school-teaching-type>
          </teaching-border-frame> -->
        </div>
        <div class="teachingAnalysis-left-bottom">
          <college-teaching-type title="各学院教学类型统计"></college-teaching-type>
        </div>
      </div>
      <div class="teachingAnalysis-right">

      </div>
       <div class="teachingAnalysis-center">
         <div class="roundMove"></div>
         <div class="tips1" title="教学评审系统"></div>
         <div class="tips2" title="教学评审系统"></div>
         <div class="tips3" title="教学评审系统"></div>
       </div>
    </div>
</template>
<script>
const teachingBorderFrame = () =>
  import("../components/teachingAnalysis/teachingBorderFrame.vue");
const schoolTeachingType = () =>
  import("../components/teachingAnalysis/schoolTeachingType.vue");
const collegeTeachingType = () =>
  import("../components/teachingAnalysis/collegeTeachingType.vue");
export default {
  name: "teachingAnalysis",
  data() {
    return {};
  },
  components: {
    teachingBorderFrame,
    schoolTeachingType,
    collegeTeachingType
  }
};
</script>
<style lang="scss">
#teachingAnalysis {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background-size: 100% 100%;
  overflow: hidden;
  .teachingAnalysis-left {
    float: left;
    width: 32%;
    max-width: 500px;
    height: 100%;
    .teachingAnalysis-left-top {
      width: 100%;
      height: 4rem;
      background: url("../../static/images/public/index_box4_bg.png") no-repeat
        center;
      background-size: 100% 100%;
    }
    .teachingAnalysis-left-bottom {
      width: 100%;
      height: calc(100% - 4rem - 0.2rem);
      margin-top: 0.2rem;
      background: url("../../static/images/public/index_box3_bg.png") no-repeat
        center;
      background-size: 100% 100%;
    }
  }
  .teachingAnalysis-right {
    float: right;
    width: 32%;
    height: 100%;
  }
  .teachingAnalysis-center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 32%;
    padding-top: 32%;
    margin-top: -16%;
    margin-left: -16%;
    background: url("../../static/images/public/index_img.png") no-repeat center;
    background-size: 100% auto;
    .roundMove {
      position: absolute;
      width: 38%;
      height: 40%;
      top: 49.5%;
      left: 52.5%;
      background: rgba(0, 0, 0, 0) -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(0, 198, 255, 0)), to(rgba(0, 198, 255, 0.5)));
      border-left: 1px solid rgba(0, 198, 255, 0.6);
      border-radius: 0 0 100%;
      transform: rotate(0deg);
      transform-origin: 0 0 0;
      animation: 4s linear 0s normal both infinite running round;
    }
    .tips1 {
      position: absolute;
      left: -10%;
      top: 29%;
      width: 12%;
      height: 39%;
      background: url("../../static/images/public/nav_zy.png") no-repeat;
      background-size: 100% 100%;
    }
    .tips2 {
      position: absolute;
      left: -6%;
      top: -4%;
      width: 28%;
      height: 34%;
      background: url("../../static/images/public/nav_nr.png") no-repeat;
      background-size: 100% 100%;
    }
    .tips3 {
      position: absolute;
      left: 18%;
      top: -15.5%;
      width: 35%;
      height: 19%;
      background: url("../../static/images/public/nav_zl.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
@keyframes round {
  100% {
    transform: rotate(360deg);
  }
}
</style>


