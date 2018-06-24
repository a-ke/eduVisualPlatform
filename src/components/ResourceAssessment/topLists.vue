<template>
    <div class="hotTop">
              <div class="hotTop-title">{{title}}</div>
              <ul v-if="lists.length>0" class="hotTop-content" :style="{'padding-top':((100/lists.length)/2)+'%'}">
                <li class="hotTop-list" v-for="(list,index) in lists" :key="index" :id="list.studyId" :style="{height:(100/lists.length)+'%'}">
                  <span :class="{'hotTop-list-index':true,top3:index<3}">{{index+1}}</span>
                  <div :class="{'hotTop-list-title':true,active:currentTitle==index}" @mouseenter="clearInterval" @mouseleave="animateTitle">{{list.worksName}}</div>                  
                  <span class="hotTop-list-progress"><span class="progress" :style="{width:(100-index*10)+'%'}"></span></span>
                  <span class="hotTop-list-num">{{list.studyCount}}</span>
                </li>
              </ul>
              <ul v-else class="hotTop-content">
                <div class="no-top">暂无热门点播</div></ul>
            </div>
</template>
<script>
export default {
  props: ["title", "lists"],
  data() {
    return {
      currentTitle: -1,
      interValObj: null
    };
  },
  methods: {
    animateTitle: function() {
      var vm = this;
      console.log(vm.currentTitle);
      vm.interValObj = setInterval(function() {
        if (vm.currentTitle >= vm.lists.length - 1) {
          vm.currentTitle = 0;
        } else {
          vm.currentTitle++;
        }
      }, 1000);
    },
    clearInterval: function() {
      var vm = this;
      clearInterval(vm.interValObj);
    }
  },
  mounted: function() {
    var vm = this;
    vm.animateTitle();
  },
  destroyed: function() {
    var vm = this;
    clearInterval(vm.interValObj);
  }
};
</script>

<style lang="scss">
.hotTop {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .hotTop-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  .hotTop-content {
    position: relative;
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
    .hotTop-list {
      overflow: hidden;
      .hotTop-list-index {
        float: left;
        width: 0.22rem;
        height: 0.22rem;
        line-height: 0.22rem;
        background: #0c6ab0;
        color: #fff;
      }
      .hotTop-list-index.top3 {
        background: #ac6a00;
      }
      .hotTop-list-title {
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
        transition: all 0.5s linear;
      }
      .hotTop-list-title.active,
      .hotTop-list-title:hover {
        font-size: 0.18rem;
        color: #ffd761;
      }
      .hotTop-list-progress {
        float: left;
        width: 0.9rem;
        height: 0.16rem;
        margin-top: 0.03rem;
      }
      .hotTop-list-progress .progress {
        display: block;
        height: 100%;
        background: #096ab0;
      }
      .hotTop-list-num {
        float: right;
        height: 0.22rem;
        line-height: 0.22rem;
        color: #fff;
        font-size: 0.14rem;
      }
    }
    .no-top {
      display: block;
      width: 100%;
      position: absolute;
      top: 50%;
      margin-top: -0.14rem;
      margin-left: -10px;
      text-align: center;
      color: #1f5596;
      font-size: 0.28rem;
      font-weight: 600;
      letter-spacing: 2px;
      text-shadow: 3px 3px #01243b;
    }
  }
}
</style>
