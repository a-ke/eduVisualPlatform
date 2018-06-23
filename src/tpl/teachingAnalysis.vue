<template>
    <div id="teachingAnalysis">
      <div class="teachingAnalysis-left">
        <div class="teachingAnalysis-left-top">  
            <school-teaching-type title="学校教学类型统计" :dataList="schoolData"></school-teaching-type>
          <!-- <teaching-border-frame title="学校教学类型统计" total="" :more="false">
            <school-teaching-type title="学校教学类型统计"></school-teaching-type>
          </teaching-border-frame> -->
        </div>
        <div class="teachingAnalysis-left-bottom">
          <college-teaching-type title="各学院教学类型统计" :dataList="academeData"></college-teaching-type>
        </div>
      </div>
      <div class="teachingAnalysis-right">
        <div class="teachingAnalysis-right-top">
          <diagonal-block-nav class="nav-style" :navList="stageList" @handleChange="handleChange"></diagonal-block-nav>
          <rt-ch-chart :dataList="rt_chList"></rt-ch-chart>
        </div>
         <div class="teachingAnalysis-right-bottom">
          <img src="../../static/images/public/index_tips.png" alt="">
          <div class="circleBox">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
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
const diagonalBlockNav = () =>
  import("../components/teachingAnalysis/diagonalBlockNav.vue");
const rtChChart = () => import("../components/teachingAnalysis/Rt-Ch.vue");
export default {
  name: "teachingAnalysis",
  data() {
    return {
      stageList: [],
      currentStageId: null,
      rt_chList: [],
      schoolData: [],
      academeData: []
    };
  },
  components: {
    teachingBorderFrame,
    schoolTeachingType,
    collegeTeachingType,
    diagonalBlockNav,
    rtChChart
  },
  methods: {
    //获取学院、专业、课程信息
    getStageGradeSubjectList() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getStageGradeSubjectList_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            console.log(result);
            vm.currentStageId = result.obj[0].id;
            for (let stage of result.obj) {
              vm.stageList.push({ id: stage.id, value: stage.stageName });
            }
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //导航栏点击事件
    handleChange(id) {
      console.log(id);
      var vm = this;
      vm.currentStageId = id;
    },
    //获取各学院课程统计的统计情况
    getCoursesStatistics(id) {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getAcademyCoursesStatistics_url, {
          id: id
        })
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.rt_chList = result.obj;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取学校教学类型统计
    getSchoolCourseTypeStatistics() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getSchoolCourseTypeStatistics_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.schoolData = result.obj;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取学院教学类型统计
    getAcademyCourseTypeStatistics() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getAcademyCourseTypeStatistics_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.academeData = result.obj;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {
    currentStageId: function(newV, oldV) {
      var vm = this;
      vm.getCoursesStatistics(newV);
    }
  },
  mounted: function() {
    var vm = this;
    vm.getStageGradeSubjectList();
    vm.getSchoolCourseTypeStatistics();
    vm.getAcademyCourseTypeStatistics();
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
    .teachingAnalysis-right-top {
      width: 100%;
      height: calc(100% - 140px);
      padding-top: 1.5rem;
      padding-left: 0.4rem;
      padding-right: 0.4rem;
      background: url("../../static/images/public/index_box2_bg.png") no-repeat
        center;
      background-size: 100% 100%;
      .nav-style {
        height: 0.32rem;
        line-height: 0.32rem;
        margin-bottom: 0.2rem;
      }
    }
    .teachingAnalysis-right-bottom {
      position: relative;
      float: right;
      width: 360px;
      height: auto;
      margin-right: 0.3rem;
      img {
        width: 100%;
        height: auto;
      }
      .circleBox {
        position: absolute;
        top: 50%;
        right: 0;
        width: 100px;
        height: 100px;
        margin-top: -50px;
        transform: rotateX(60deg) rotateZ(-30deg);
        animation: rotate 20s infinite linear;
        transform-style: preserve-3d;
        .circle {
          position: absolute;
          width: 100px;
          height: 100px;
          transform-style: preserve-3d;
          border-radius: 100%;
          box-sizing: border-box;
          box-shadow: 0 0 25px #19cfef, inset 0 0 25px #19cfef;
          background-color: transparent;
        }
        .circle:nth-child(1) {
          transform: rotateZ(72deg) rotateX(63.435deg);
        }
        .circle:nth-child(2) {
          transform: rotateZ(144deg) rotateX(63.435deg);
        }
        .circle:nth-child(3) {
          transform: rotateZ(216deg) rotateX(63.435deg);
        }
        .circle:nth-child(4) {
          transform: rotateZ(288deg) rotateX(63.435deg);
        }
        .circle:nth-child(5) {
          transform: rotateZ(350deg) rotateX(63.435deg);
        }
      }
    }
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

@keyframes rotate {
  0% {
    -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
    -moz-transform: rotateX(0) rotateY(0) rotateZ(0);
    -ms-transform: rotateX(0) rotateY(0) rotateZ(0);
    -o-transform: rotateX(0) rotateY(0) rotateZ(0);
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    -moz-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    -ms-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    -o-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
</style>


