<template>
  <div class="diagonalBlockNav">
    <div class="left-btn" @click="leftMove"><i class="el-icon-caret-left"></i></div>
    <div class="right-btn" @click="rightMove"><i class="el-icon-caret-right"></i></div>
    <div class="nav-body">
      <div class="block-wrapper">
        <div v-for="item in navList" :key="item.id" :class="currentNav==item.id?'nav-block active':'nav-block'" @click="selectNav(item.id)"><span v-cloak>{{item.value}}</span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.diagonalBlockNav {
  width: 100%;
  height: 100%;
  .left-btn,
  .right-btn {
    width: 5%;
    height: 100%;
    font-size: 0.3rem;
    color: #b5b5b5;
    cursor: pointer;
    &.active {
      color: #0ffcff;
    }
  }
  .left-btn {
    float: left;
  }
  .right-btn {
    float: right;
  }
  .nav-body {
    width: 90%;
    // height: 100%;
    margin: 0 auto;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    .block-wrapper {
      float: left;
      transition: all 0.2s ease;
    }
    .nav-block {
      display: inline-block;
      padding: 0 6px;
      // height: 100%;
      transform: skewX(-20deg);
      background: #06233F;
      border: 1px solid #063963;
      cursor: pointer;
      transition: all 0.2s ease;
      +.nav-block {
        margin-left: 5px;
      }
      span {
        display: inline-block;
        height: 86.5%;
        transform: skewX(20deg);
      }
      &.active {
        background: #075694;
      }
    }
  }
}
</style>
<script>
/** 
 * 组件需要传递的参数
 * 1.组件的导航信息navList,格式：[{id:1, value:"导航一"}, {id:2, vale: "导航二"}]
 * 2.点击导航的事件回调函数, handleChange(id)
 */
export default {
  name: "diagonalBlockNav",
  data() {
    return {
      currentNav: 1
    }
  },
  props: ["navList"],
  methods: {
    //选择导航
    selectNav(id) {
      var vm = this;
      vm.currentNav = id;
      vm.$emit("handleChange", id);
    },
    //点击左边的按钮
    leftMove() {
      var vm = this;
      var nav_body = document.querySelector(".diagonalBlockNav .nav-body");
      var block_wrapper = document.querySelector(".nav-body .block-wrapper");
      if (block_wrapper.offsetWidth <= nav_body.offsetWidth) {
        return;
      }
      if (vm.margin_left < vm.step) {
        vm.margin_left = 0;
        event.currentTarget.classList.remove("active");
      } else {
        vm.margin_left -= vm.step;
      }
      document.querySelector(".right-btn").classList.add("active");
      block_wrapper.style.cssText = `margin-left: -${vm.margin_left}px`;
    },
    //点击右边的按钮
    rightMove() {
      var vm = this;
      var nav_body = document.querySelector(".diagonalBlockNav .nav-body");
      var block_wrapper = document.querySelector(".nav-body .block-wrapper");
      var margin_left = parseFloat(getComputedStyle(block_wrapper).marginLeft);
      if (block_wrapper.offsetWidth <= nav_body.offsetWidth) {
        return;
      }
      if (vm.margin_left+vm.step+nav_body.offsetWidth > block_wrapper.offsetWidth) {
        vm.margin_left = Math.floor(block_wrapper.offsetWidth - nav_body.offsetWidth) + 20;
        event.currentTarget.classList.remove("active");
      } else {
        vm.margin_left += vm.step;
      }
      document.querySelector(".left-btn").classList.add("active");
      block_wrapper.style.cssText = `margin-left: -${vm.margin_left}px`;
    },
    initNav() {
      var vm = this;
      // if (document.querySelector(".nav-body").height)
      var nav_body = document.querySelector(".diagonalBlockNav .nav-body");
      var block_wrapper = document.querySelector(".nav-body .block-wrapper");
      var left_btn = document.querySelector(".diagonalBlockNav .left-btn");
      var right_btn = document.querySelector(".diagonalBlockNav .right-btn");
      console.log(nav_body.offsetWidth);
      vm.margin_left = 0;
      vm.step = Math.floor(nav_body.offsetWidth/2); //一次移动的距离
      if (block_wrapper.offsetWidth > nav_body.offsetWidth) {
        right_btn.classList.add("active");
      }
    }
  },
  watch: {
    navList: function() {
      var vm = this;
      vm.$nextTick(function() {
        vm.initNav();
      });
    }
  },
  mounted: function() {
    var vm = this;
  }
};
</script>


