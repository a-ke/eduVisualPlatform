<template>
 <div id="star-up">
    <div class="content">
      <bg-canvas class="bgCanvas-component"></bg-canvas>
      <div class="navigation">
        <div class="navigation-list IPTV-navigation" title="IPTV监管">
          <a href="#">
            <img src="../../static/images/public/IPTV.png" alt="IPTV监管">
          </a>
        </div>
        <div class="navigation-list wei-navigation" title="两微一端">
          <a href="#">
            <img src="../../static/images/public/GDRMT.png" alt="两微一端">
          </a>
        </div>
        <div class="navigation-list SHDF-navigation" title="扫黄打非管理">
          <a href="#">
            <img src="../../static/images/public/SHDF.png" alt="扫黄打非管理">
          </a>
        </div>
        <div class="navigation-list SZCB-navigation" title="数字出版监管">
          <a href="#">
            <img src="../../static/images/public/SZCB.png" alt="数字出版监管">
          </a>
        </div>
        <div class="navigation-list MTDX-navigation" title="媒体导向监管">
          <a href="#">
            <img src="../../static/images/public/MTDX.png" alt="媒体导向监管">
          </a>
        </div>
        <div class="navigation-list HLWSTJM-navigation" title="互联网视听节目监管">
          <a href="#">
            <img src="../../static/images/public/HLWSTJM.png" alt="互联网视听节目监管">
          </a>
        </div>
        <div class="navigation-list WLZB-navigation" title="网络直播监管">
          <a href="#">
            <img src="../../static/images/public/WLZB.png" alt="网络直播监管">
          </a>
        </div>
        <div class="navigation-list WBJG-navigation" title="网吧监管">
          <a href="#">
            <img src="../../static/images/public/WBJG.png" alt="网吧监管">
          </a>
        </div>
        <div class="navigation-list HWDP-navigation" title="户外大屏监管">
          <a href="#">
            <img src="../../static/images/public/HWDP.png" alt="户外大屏监管">
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
<style scoped>
#star-up {
  width: 100%;
  height: 100%;
}
#star-up .content {
  width: 100%;
  height: 100%;
}
#star-up .bgCanvas-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#star-up .navigation {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#star-up .navigation-list {
  position: absolute;
  transition: all 0.5s ease;
  transform-origin: 50% 50%;
}
#star-up .navigation-list:hover {
  transform: scale(1.2);
}
#star-up .navigation-list > a {
  display: block;
}
#star-up .navigation-list > a img {
  width: 100%;
}
#star-up .IPTV-navigation {
  left: 22%;
  top: 7%;
  width: 12%;
}
#star-up .wei-navigation {
  left: 52%;
  top: 4%;
  width: 15%;
}
#star-up .SHDF-navigation {
  left: 83%;
  top: 19%;
  width: 12%;
}
#star-up .SZCB-navigation {
  left: 11%;
  top: 75%;
  width: 12%;
}
#star-up .MTDX-navigation {
  left: 22%;
  top: 54%;
  width: 15%;
}
#star-up .HLWSTJM-navigation {
  left: 57%;
  top: 70%;
  width: 15%;
}
#star-up .WLZB-navigation {
  left: 72%;
  top: 45%;
  width: 12%;
}
#star-up .WBJG-navigation {
  left: 78%;
  top: 78%;
  width: 11%;
}
#star-up .HWDP-navigation {
  left: 4%;
  top: 7%;
  width: 11%;
}
</style>
