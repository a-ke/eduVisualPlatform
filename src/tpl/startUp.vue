<template>
 <div id="star-up">
    <div class="content">
      <bg-canvas class="bgCanvas-component"></bg-canvas>
      <div class="navigation">
        <div class="navigation-list JSCZ-navigation" title="教师成长">
          <a href="#">
            <img src="../../static/images/public/JSCZ.png" alt="教师成长">
          </a>
        </div>
        <div class="navigation-list JXFX-navigation" title="教学分析">
          <a href="#">
            <img src="../../static/images/public/JXFX.png" alt="教学分析">
          </a>
        </div>
        <div class="navigation-list XSCZ-navigation" title="学生成长">
          <a href="#">
            <img src="../../static/images/public/XSCZ.png" alt="学生成长">
          </a>
        </div>
        <div class="navigation-list ZYPG-navigation" title="资源评估">
          <a href="#">
            <img src="../../static/images/public/ZYPG.png" alt="资源评估">
          </a>
        </div>
        <div class="navigation-list LBJS-navigation" title="录播教室">
          <a href="#">
            <img src="../../static/images/public/LBJS.png" alt="录播教室">
          </a>
        </div>
        <div class="navigation-list XXJS-navigation" title="学校建设">
          <a href="#">
            <img src="../../static/images/public/XXJS.png" alt="学校建设">
          </a>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
const bgCanvas = () => import("../components/bgCanvas.vue");
export default {
  name: "star-up",
  components: {
    bgCanvas
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#star-up {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: 100%;
  }
  .bgCanvas-component {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .navigation {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .navigation-list {
    position: absolute;
    transition: all 0.5s ease;
    transform-origin: 50% 50%;
  }
  .navigation-list:hover {
    transform: scale(1.2);
  }
  .navigation-list > a {
    display: block;
  }
  .navigation-list > a img {
    width: 100%;
  }
  .JSCZ-navigation {
    left: 22%;
    top: 7%;
    width: 12%;
  }
  .JXFX-navigation {
    left: 52%;
    top: 4%;
    width: 15%;
  }
  .XSCZ-navigation {
    left: 75%;
    top: 26%;
    width: 12%;
  }
  .ZYPG-navigation {
    left: 11%;
    top: 72%;
    width: 12%;
  }
  .LBJS-navigation {
    left: 30%;
    top: 54%;
    width: 15%;
  }
  .XXJS-navigation {
    left: 57%;
    top: 70%;
    width: 15%;
  }
  .WLZB-navigation {
    left: 72%;
    top: 45%;
    width: 12%;
  }
  .WBJG-navigation {
    left: 78%;
    top: 78%;
    width: 11%;
  }
  .HWDP-navigation {
    left: 4%;
    top: 7%;
    width: 11%;
  }
}
</style>
