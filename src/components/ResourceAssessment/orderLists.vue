<template>
    <div class="orderTop">
              <div class="orderTop-title">{{title}}</div>
              <ul class="orderTop-content" :style="{'padding-top':((100/lists.length)/2)+'%'}">
                <li class="orderTop-list" v-for="(list,index) in lists" :key="index" :id="list.id" :style="{height:(100/lists.length)+'%'}">
                  <span :class="{'orderTop-list-index':true,top3:index<3}">{{index+1}}</span>
                  <div class="orderTop-list-title">{{list.activityName}}</div>                  
                  <!-- <span class="orderTop-list-progress"><span class="progress" :style="{width:(100-index*10)+'%'}"></span></span> -->
                  <span class="orderTop-list-date">{{list.plannedStartTime | Date('YMDHI')}}</span>
                </li>
              </ul>
            </div>
</template>
<script>
export default {
  props: ["title", "lists"]
};
</script>

<style lang="scss">
.orderTop {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .orderTop-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  .orderTop-content {
    width: 100%;
    height: 100%;
    border: 1px solid #142d53;
    border-radius: 5px;
    padding: 0 10px;
    background: repeating-linear-gradient(
      45deg,
      #132d4d 0,
      #082242 25%,
      #132d4d 0,
      #082242 50%
    );
    background-size: 10px 10px;
    .orderTop-list {
      overflow: hidden;
      .orderTop-list-index {
        float: left;
        width: 0.22rem;
        height: 0.22rem;
        line-height: 0.22rem;
        background: #0c6ab0;
        color: #fff;
      }
      .orderTop-list-index.top3 {
        background: #ac6a00;
      }
      .orderTop-list-title {
        float: left;
        width: 1.45rem;
        height: 0.22rem;
        font-size: 0.14rem;
        text-align: left;
        line-height: 0.22rem;
        margin: 0 0.1rem;
        color: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .orderTop-list-progress {
        float: left;
        width: 0.9rem;
        height: 0.16rem;
        margin-top: 0.03rem;
      }
      .orderTop-list-progress .progress {
        display: block;
        height: 100%;
        background: #096ab0;
      }
      .orderTop-list-date {
        float: right;
        height: 0.22rem;
        line-height: 0.22rem;
        color: #fff;
        font-size: 0.14rem;
      }
    }
  }
}
</style>
