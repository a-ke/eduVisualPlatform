<template>
    <div id="ResourceAssessment">
        <div class="top">
          <border-frame class="vodCard" title="点播统计" total="点播课程总数：12536" :more="false">
          <div class="content" slot="content">
            <div class="hotTop-component">
              <top-lists title="最热课程TOP10" :lists="vodTops"></top-lists>
            </div>
            <div class="courseStatistics">
              <div class="vodCourseTotal-component">
                <vod-course-total title="课程总数统计(月)"></vod-course-total>
              </div>
              <div class="vodCourseProportion-component">
                <vod-course-proportion title="各学院课程总数统计"></vod-course-proportion>
              </div>
            </div>
          </div>
        </border-frame>
        <border-frame class="studyCard" title="学习分析" total="" :more="false">
          <div class="content" slot="content">
              <div class="studyTotal-component">
                <study-total title="学生学习数量统计(天)"></study-total>
              </div>
              <div class="studyProportion-component">
                <study-proportion title="各学院学生学习总数统计"></study-proportion>
              </div>
          </div>
        </border-frame>
        </div>
        <div class="bottom"> 
        <border-frame class="liveCard" title="直播统计" total="直播课程总数：536" :more="false">
          <div class="content" slot="content">
            <div class="orderTop-component">
              <top-lists title="直播预约" :lists="liveOrders"></top-lists>
            </div>
            <div class="liveProportion-component">
                <live-proportion title="各学院直播总数统计"></live-proportion>
            </div>
            <div class="liveHotTop-component">
              <live-hot-top title="最热直播统计TOP10"></live-hot-top>
            </div>
          </div>
        </border-frame>
        </div>
    </div>
</template>
<script>
const borderFrame = () => import("../components/borderFrame.vue");
const topLists = () => import("../components/topLists.vue");
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
    const vodTops = [
      {
        title: "论语《四则》",
        num: 1200
      },
      {
        title: "战国策苏秦佩六国相印战国策苏秦佩六国相印",
        num: 1002
      },
      {
        title: "《搜神记》二则干宝",
        num: 960
      },
      {
        title: "《归田园居》（其二）",
        num: 800
      },
      {
        title: "《饮酒》（其八）",
        num: 380
      },
      {
        title: "《人间词话》",
        num: 240
      },
      {
        title: "矩阵的运算",
        num: 120
      },
      {
        title: "转置行列式",
        num: 80
      },
      {
        title: "《饮酒》（其八）",
        num: 60
      },
      {
        title: "函数",
        num: 40
      }
    ];
    const liveOrders = [
      {
        title: "论语《四则》",
        num: 1200
      },
      {
        title: "战国策苏秦佩六国相印战国策苏秦佩六国相印",
        num: 1002
      },
      {
        title: "《搜神记》二则干宝",
        num: 960
      },
      {
        title: "《归田园居》（其二）",
        num: 800
      },
      {
        title: "《饮酒》（其八）",
        num: 380
      },
      {
        title: "《人间词话》",
        num: 240
      }
    ];
    const liveHotTops = [
      {
        title: "论语《四则》",
        num: 1200
      },
      {
        title: "战国策苏秦佩六国相印战国策苏秦佩六国相印",
        num: 1002
      },
      {
        title: "《搜神记》二则干宝",
        num: 960
      },
      {
        title: "《归田园居》（其二）",
        num: 800
      },
      {
        title: "《饮酒》（其八）",
        num: 380
      },
      {
        title: "《人间词话》",
        num: 240
      },
      {
        title: "矩阵的运算",
        num: 120
      },
      {
        title: "转置行列式",
        num: 80
      },
      {
        title: "《饮酒》（其八）",
        num: 60
      },
      {
        title: "函数",
        num: 40
      }
    ];
    return {
      vodTops: vodTops,
      liveOrders: liveOrders,
      liveHotTops: liveHotTops
    };
  },
  components: {
    borderFrame,
    topLists,
    vodCourseTotal,
    vodCourseProportion,
    studyTotal,
    studyProportion,
    liveHotTop,
    liveProportion
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
          margin-left: 3.8rem;
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


