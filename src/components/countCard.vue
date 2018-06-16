<template>
  <div class="countCard">
    <div class="titleDetail" v-cloak>{{cardInfo.title}}</div>
    <div class="numDetail" :title="cardInfo.count" v-cloak>{{cardInfo.count}}</div>
  </div>
</template>
<style lang="scss" scoped>
  .countCard {
    width: 100%;
    height: 100%;
    background: rgba(7,140,235,0.2);
    overflow: hidden;
    border-radius: 15px;
    .titleDetail {
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      background: #137FC8;
      text-align: left;
      padding: 0 0 0 10%;
      overflow: hidden;
    }
    .numDetail {
      width: 100%;
      height: calc(100% - 0.4rem);
      text-align: center;
      font-size: 0.35rem;
      color: #F0BD26;
      font-weight: 600;
      line-height: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

@media screen and (max-width: 1366px) {
  .numDetail {
    line-height: 0.6rem;
  }
}
@media screen and (max-width: 0.75rem) {
  .numDetail {
    line-height: 0.6rem;
  }
}
</style>
<script>
export default {
  data() {
    return {

    }
  },
  props: ["cardInfo"],//cardInfo {title:"", count:19}
}
</script>


