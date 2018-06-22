<template>
    <div class="borderFrame">
        <span class="frame-horn top-left-horn"></span>
        <span class="frame-horn top-right-horn"></span>
        <span class="frame-horn bottom-left-horn"></span>
        <span class="frame-horn bottom-right-horn"></span>
        <div class="borderFrame-head">
          <div v-if="title" class="titleName">
            <span class="titleName_l"></span> 
            <span class="titleName_m">{{title}}</span> 
            <span class="titleName_r"></span>
          </div>
          <div v-if="total" class="total">{{total}}</div>
          <span v-if="more" class="more">
            <a href="#">more</a>
          </span>
        </div>
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
  props: ["title", "total", "more"],
  name: "borderFrame"
};
</script>
<style lang="scss">
.borderFrame {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(7, 140, 235, 0.5);
  box-shadow: inset 0 0 50px rgba(0, 150, 255, 0.6);
  background: rgba(7, 140, 235, 0.1);
  .frame-horn {
    position: absolute;
    display: block;
    width: 18px;
    height: 18px;
    background: url("../../static/images/public/hornIcon.png") no-repeat 100%
      100%;
  }
  .frame-horn.top-left-horn {
    top: -5px;
    left: -5px;
  }
  .frame-horn.top-right-horn {
    top: -5px;
    right: -5px;
    transform: rotate(90deg);
  }
  .frame-horn.bottom-left-horn {
    bottom: -5px;
    left: -5px;
    transform: rotate(-90deg);
  }
  .frame-horn.bottom-right-horn {
    bottom: -5px;
    right: -5px;
    transform: rotate(180deg);
  }
  .borderFrame-head {
    text-align: left;
    overflow: hidden;
    .titleName {
      height: 0.3rem;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      line-height: 0.3rem;
      margin: 5px 0 0 5px;
      font-size: 0.18rem;
      font-weight: 600;
      .titleName_l,
      .titleName_r {
        width: 15px;
        height: 100%;
        float: left;
      }
      .titleName_l {
        background: url("../../static/images/public/titleName_l.png") no-repeat;
        background-size: 100% 100%;
      }
      .titleName_r {
        background: url("../../static/images/public/titleName_r.png") no-repeat;
        background-size: 100% 100%;
      }
      .titleName_m {
        float: left;
        height: 100%;
        background: rgba(7, 140, 235, 0.2);
        border-top: 1px solid rgba(7, 140, 235, 1);
        border-bottom: 1px solid rgba(7, 140, 235, 1);
        padding: 0 0.2rem;
      }
    }
    .total {
      display: inline-block;
      height: 0.3rem;
      vertical-align: middle;
      margin: 5px 0 0 30px;
      font-size: 0.17rem;
      color: #ffd761;
      font-weight: 600;
      line-height: 0.3rem;
    }
    .more {
      float: right;
      background: url("../../static/images/public/moreBtn.png") no-repeat center;
      background-size: 100%;
      height: 0.33rem;
      line-height: 0.32rem;
      vertical-align: middle;
      cursor: pointer;
      font-weight: normal;
      font-size: 0.15rem;
      padding: 0 10px;
      margin-right: 0.025rem;
      a {
        color: #fff;
        text-decoration: none;
      }
      a:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>

