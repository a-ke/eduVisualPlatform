<template>
    <div id="ResourceAssessment">
        <div class="top">
          <border-frame class="vodCard" title="点播统计" :total="'点播课程总数：'+vodTotals" :more="false">
          <div class="content" slot="content">
            <div class="hotTop-component">
              <top-lists v-if="getVodTopsData" title="最热课程TOP10" :lists="vodTops"></top-lists>
            </div>
            <div class="courseStatistics">
              <div class="vodCourseTotal-component">
                <vod-course-total v-if="getVodTotalsData" title="课程总数统计(个/月)" :data="vodMonthTotals"></vod-course-total>
              </div>
              <div class="vodCourseProportion-component">
                <vod-course-proportion v-if="getVodProportionData" title="各学院课程总数统计" :data="vodProportion"></vod-course-proportion>
              </div>
            </div>
          </div>
        </border-frame>
        <border-frame class="studyCard" title="学习分析" total="" :more="false">
          <div class="content" slot="content">
              <div class="studyTotal-component">
                <study-total v-if="getStudyTotalsData" title="学生学习数量统计(人/天)" :data="studyTotals"></study-total>
              </div>
              <div class="studyProportion-component">
                <study-proportion v-if="getStudyProportionData" title="各学院学生学习总数统计" :data="studyProportion"></study-proportion>
              </div>
          </div>
        </border-frame>
        </div>
        <div class="bottom"> 
        <border-frame class="liveCard" title="直播统计" :total="'直播课程总数：'+liveTotals" :more="false">
          <div class="content" slot="content">
            <div class="orderTop-component">
              <order-lists v-if="getLiveOrdersData" title="直播预约" :lists="liveOrders"></order-lists>
            </div>
            <div class="liveProportion-component">
                <live-proportion v-if="getLiveCourseProportionData" title="各学院直播总数统计" :data="liveCourseProportion"></live-proportion>
            </div>
            <div class="liveHotTop-component">
              <live-hot-top v-if="getLiveHotTopsData" title="最热直播统计TOP10(浏览量)" :data="liveHotTops"></live-hot-top>
            </div>
          </div>
        </border-frame>
        </div>
    </div>
</template>
<script>
const borderFrame = () => import("../components/borderFrame.vue");
const topLists = () => import("../components/ResourceAssessment/topLists.vue");
const orderLists = () =>
  import("../components/ResourceAssessment/orderLists.vue");
const vodCourseTotal = () =>
  import("../components/ResourceAssessment/vodCourseTotal.vue");
const vodCourseProportion = () =>
  import("../components/ResourceAssessment/vodCourseProportion.vue");
const studyTotal = () =>
  import("../components/ResourceAssessment/studyTotal.vue");
const studyProportion = () =>
  import("../components/ResourceAssessment/studyProportion.vue");
const liveHotTop = () =>
  import("../components/ResourceAssessment/liveHotTop.vue");
const liveProportion = () =>
  import("../components/ResourceAssessment/liveProportion.vue");
export default {
  name: "ResourceAssessment",
  data() {
    return {
      vodTotals: 0,
      getVodTopsData: false,
      vodTops: [],
      getVodTotalsData: false,
      vodMonthTotals: [],
      getVodProportionData: false,
      vodProportion: [],

      getStudyTotalsData: false,
      studyTotals: [],
      getStudyProportionData: false,
      studyProportion: [],

      liveTotals: 0,
      getLiveOrdersData: false,
      liveOrders: [],
      getLiveHotTopsData: false,
      liveHotTops: [],
      getLiveCourseProportionData: false,
      liveCourseProportion: []
    };
  },
  components: {
    borderFrame,
    topLists,
    orderLists,
    vodCourseTotal,
    vodCourseProportion,
    studyTotal,
    studyProportion,
    liveHotTop,
    liveProportion
  },
  methods: {
    getVodHotTop() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getResourceHotWorksList_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.vodTops = result.obj;
            vm.getVodTopsData = true;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getVodTotals() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getWorksMonthStatistics_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.vodMonthTotals = result.obj;
            vm.getVodTotalsData = true;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getVodProportion() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getWorksMajorStatistics_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.vodProportion = result.obj.list;
            vm.vodTotals = result.obj.totalWorks;
            vm.getVodProportionData = true;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getStudyTotals() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getStudyDateStatistics_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.studyTotals = result.obj;
            vm.getStudyTotalsData = true;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getStudyProportion() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getWorksStudyStatistics_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.studyProportion = result.obj.list;
            vm.getStudyProportionData = true;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getLiveOrder: function() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getAppointedLiveActivityList_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.liveOrders = result.obj;
            vm.getLiveOrdersData = true;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getLiveHotTop() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getHotLiveWorksList_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.liveHotTops = result.obj;
            vm.getLiveHotTopsData = true;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getLiveProportion() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getLiveWorksMajorStatistics_url)
        .then(function(response) {
          var result = response.data;
          if (result.status == 0) {
            vm.liveCourseProportion = result.obj.list;
            vm.liveTotals = result.obj.totalWorks;
            vm.getLiveCourseProportionData = true;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    var vm = this;
    vm.getVodHotTop();
    vm.getVodTotals();
    vm.getVodProportion();
    vm.getStudyTotals();
    vm.getStudyProportion();
    vm.getLiveOrder();
    vm.getLiveHotTop();
    vm.getLiveProportion();
  }
};
</script>
<style lang="scss">
#ResourceAssessment {
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
      padding: 0 10px 10px 0;
      .content {
        height: calc(100% - 0.3rem);
        padding: 0.1rem;
        overflow: hidden;
        .hotTop-component {
          float: left;
          width: 3.56rem;
          height: 100%;
        }
        .courseStatistics {
          float: right;
          margin-left: 20px;
          width: calc(100% - 3.56rem - 20px);
          height: 100%;
          .vodCourseTotal-component {
            height: 2.4rem;
            width: 100%;
          }
          .vodCourseProportion-component {
            width: 100%;
            height: calc(100% - 2.4rem - 10px);
            margin-top: 10px;
          }
        }
      }
    }
    .studyCard {
      float: right;
      width: calc(100% - 11.22rem - 20px);
      height: 5.44rem;
      margin-left: 20px;
      .content {
        height: calc(100% - 0.3rem);
        padding: 0.1rem;
        overflow: hidden;
        .studyTotal-component {
          height: 2.4rem;
          width: 100%;
        }
        .studyProportion-component {
          width: 100%;
          height: calc(100% - 2.4rem - 10px);
          margin-top: 10px;
        }
      }
    }
  }
  .bottom {
    height: calc(100% - 5.54rem - 20px);
    padding: 0.05rem;
    margin-top: 0.2rem;
    overflow: hidden;
    .liveCard {
      width: 100%;
      height: 100%;
      .content {
        height: calc(100% - 0.3rem);
        padding: 0.1rem 0.1rem 0.2rem 0.1rem;
        overflow: hidden;
        .orderTop-component {
          float: left;
          width: 3.56rem;
          height: 100%;
        }
        .liveHotTop-component {
          margin-left: 4rem;
          margin-right: 4.8rem;
          height: 100%;
        }
        .liveProportion-component {
          float: right;
          width: 4.56rem;
          height: 100%;
        }
      }
    }
  }
}
</style>


