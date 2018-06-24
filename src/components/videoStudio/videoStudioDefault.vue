<template>
  <div class="videoStudioDefaultCard">
    <div class="no-class">暂未开放</div>
  </div>
</template>
<style lang="scss">
.videoStudioDefaultCard {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #224580;
  border-radius: 3px;
  background: #082242;
  padding: 1px 1px 0.2rem 1px;
  background: repeating-linear-gradient(
    45deg,
    #132d4d 0,
    #082242 25%,
    #132d4d 0,
    #082242 50%
  );
  background-size: 10px 10px;
  .no-class {
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    margin-top: -0.14rem;
    text-align: center;
    color: #194477;
    font-size: 0.28rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-shadow: 3px 3px #01243b;
  }
}
</style>
<script>
export default {};
</script>


