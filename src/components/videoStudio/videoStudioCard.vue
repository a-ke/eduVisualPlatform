<template>
  <div class="videoStudioCard">
    <div class="poster">
      <img src="static/images/videoStudio/default_poster.jpg" alt="">
    </div>
    <div class="main">
      <div class="roomName">{{roomInfo.roomName}}</div>
      <div class="row">
        <div class="deviceStatus">
          设备状态
          <img :src="roomInfo.deviceStatus?'static/images/videoStudio/green.png':'static/images/videoStudio/red.png'">
        </div>
        <div class="networkStatus">
          网络状态
          <img :src="roomInfo.networkStatus?'static/images/videoStudio/green.png':'static/images/videoStudio/red.png'">
        </div>
      </div>
      <div class="storeStatus">
        <span>储存状态</span>  
        <el-progress class="progressStyle" :text-inside="true" :stroke-width="12" :percentage="Math.ceil((roomInfo.storageTotal-roomInfo.storageRemaining)/roomInfo.storageTotal*100)" :title="Math.ceil((roomInfo.storageTotal-roomInfo.storageRemaining)/roomInfo.storageTotal*100)+'%'"></el-progress>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.videoStudioCard {
  width: 100%;
  border: 1px solid #224580;
  border-radius: 3px;
  background: #082242;
  padding: 1px 1px 0.2rem 1px;
  // background-image: repeating-linear-gradient(
  //   -45deg,
  //   hsla(0, 0%, 100%, 0.1),
  //   hsla(0, 0%, 100%, 0.1) 5px,
  //   transparent 0,
  //   transparent 6px
  // );
  .poster {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .main {
    width: 100%;
    font-size: 0.12rem;
    text-align: left;
    .roomName {
      font-size: 0.16rem;
      font-weight: 600;
      padding: 0.15rem 0.1rem;
      text-align: left;
    }
    img {
      vertical-align: middle;
      // margin-left: 0.25rem;
      margin-left: 0.2rem;
      width: 0.2rem;
      height: 0.2rem;
    }
    .row {
      padding: 0 0.1rem;
      overflow: hidden;
    }
    .deviceStatus {
      float: left;
      width: 50%;
    }
    .networkStatus {
      float: left;
      width: 50%;
    }
    .storeStatus {
      width: 100%;
      margin-top: 0.1rem;
      padding: 0 0.1rem;
      overflow: hidden;
      span {
        display: inline-block;
        width: 0.5rem;
        overflow: hidden;
        vertical-align: middle;
      }
      .progressStyle {
        display: inline-block;
        width: calc(100% - 0.6rem);
      }
    }
  }
  .el-progress__text {
    color: #fff;
  }
}
</style>
<script>
export default {
  name: 'videoStudioCard',
  props: ["roomInfo"]
};
</script>


