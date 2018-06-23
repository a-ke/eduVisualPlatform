<template>
  <div id="videoStudio">
      <border-frame class="totalStatistics" title="总统计">
        <div class="row" slot="content">
            <count-card class="countCard" :cardInfo="{title: '录播教室数量', count: roomCount, unit: '个'}"></count-card>
            <count-card class="countCard" :cardInfo="{title: '录制课程数量', count: recordCourseCount, unit: '个'}"></count-card>
            <count-card class="countCard" :cardInfo="{title: '录制时长', count: recordDuration, unit: '小时'}"></count-card>
            <count-card class="countCard" :cardInfo="{title: '参与老师人数', count: teacherCount, unit: '人'}"></count-card>
            <count-card class="countCard" :cardInfo="{title: '参与学生人数', count: studentCount, unit: '人'}"></count-card>
        </div>
      </border-frame>
      <border-frame class="videoRoom" title="录播教室">
          <div class="roomWrapper" slot="content">
            <!-- <el-scrollbar> -->
            <el-carousel trigger="click" height="100%">
              <el-carousel-item v-for="(item, index) in roomList" :key="index" height="100%">
                <video-studio-card v-for="(room, index) in item" class="roomCard" :key="index" :roomInfo="room"></video-studio-card>
                <video-studio-default-card class="roomCard" v-for="(card, index) in (12-item.length)" :key="'default_'+index"></video-studio-default-card>

              <!-- </el-scrollbar> -->
              </el-carousel-item>
            </el-carousel>
          </div>
        
      </border-frame>
  </div>
</template>
<script>
const borderFrame = () => import("../components/borderFrame.vue");
const countCard = () => import("../components/countCard.vue");
const videoStudioCard = () =>
  import("../components/videoStudio/videoStudioCard.vue");
const videoStudioDefaultCard = () =>
  import("../components/videoStudio/videoStudioDefault.vue");
export default {
  name: "videoStudio",
  data() {
    return {
      roomCount: null,
      recordCourseCount: null,
      recordDuration: null,
      teacherCount: null,
      studentCount: null,
      roomList: []
    };
  },
  components: {
    borderFrame,
    countCard,
    videoStudioCard,
    videoStudioDefaultCard
  },
  methods: {
    //获取录播模块可视化总统计信息
    getCastStatisticsInfo() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getCastStatisticsInfo_url)
        .then(function(response) {
          console.log(response);
          var result = response.data;
          if (result.status == 0) {
            vm.roomCount = result.obj.roomCount;
            vm.recordCourseCount = result.obj.recordCourseCount;
            vm.recordDuration = result.obj.recordDuration;
            vm.teacherCount = result.obj.teacherCount;
            vm.studentCount = result.obj.studentCount;
          } else {
            vm.$message.error(result.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取录播教室统计信息
    getCastRoomStaticsInfo() {
      var vm = this;
      vm.axios
        .post(ajaxUrl.getCastRoomStaticsInfo_url, {
          currentPage: 0,
          numPerPage: 0
        })
        .then(function(response) {
          console.log(response);
          var result = response.data;
          if (result.status == 0) {
            for (let i = 0, len = result.obj.list.length; i < len; i += 12) {
              vm.roomList.push(result.obj.list.slice(i, i + 12));
            }
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
    vm.getCastStatisticsInfo();
    vm.getCastRoomStaticsInfo();
  }
};
</script>
<style lang="scss">
#videoStudio {
  height: 100%;
  color: #fff;
  .totalStatistics {
    width: 100%;
    height: 27%;
    margin-bottom: 20px;
    // overflow: hidden;
    .row {
      width: 100%;
      height: calc(100% - 0.33rem);
      padding: 20px;
      overflow: hidden;
      .countCard {
        float: left;
        width: calc(100% / 8 - 30px);
        height: 100%;
        margin: 0 15px;
      }
    }
  }
  .videoRoom {
    width: 100%;
    height: calc(73% - 20px);
    .roomWrapper {
      height: calc(100% - 0.54rem);
      margin: 0.1rem 0;
      overflow: hidden;
      .roomCard {
        display: inline-block;
        width: calc(16.66% - 0.4rem);
        height: calc(50% - 0.25rem);
        margin: 0.05rem 0.15rem 0.2rem 0.15rem;
        overflow: hidden;
      }
    }
  }
  .el-carousel {
    height: 100%;
    .el-carousel__indicator {
      &.is-active {
        .el-carousel__button {
          background: #00e4ff;
        }
      }
    }
    .el-carousel__button {
      width: 0.15rem;
      height: 0.15rem;
      border-radius: 50%;
    }
    .el-carousel__arrow {
      background: rgba(19, 127, 200, 0.71);
      &:hover {
        background: #137fc8;
      }
    }
  }
}
@media screen and (min-height: 1080px) {
  #videoStudio .videoRoom .roomCard {
    height: calc(50% - 0.55rem) !important;
    margin-bottom: 0.5rem !important;
  }
}
</style>


