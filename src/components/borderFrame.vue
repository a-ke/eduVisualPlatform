<template>
    <div class="borderFrame">
        <span class="frame-horn top-left-horn"></span>
        <span class="frame-horn top-right-horn"></span>
        <span class="frame-horn bottom-left-horn"></span>
        <span class="frame-horn bottom-right-horn"></span>
    </div>
</template>
<script>
export default {
  name: "borderFrame"
};
</script>
<style lang="scss">
.borderFrame {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(7, 140, 235, 0.5);
  box-shadow: inset 0 0 59px rgba(0, 150, 255, 0.3);
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
}
</style>

