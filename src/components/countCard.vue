<template>
  <div class="countCard">
    <div class="titleDetail" v-cloak>{{cardInfo.title}}</div>
    <div class="numDetail" :title="cardInfo.count+(cardInfo.unit||'')" v-cloak>{{cardInfo.count}}<span class="unit" v-cloak>{{cardInfo.unit}}</span></div>
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
      height: 0.57rem;
      line-height: 0.65rem;
      background: #137FC8;
      overflow: hidden;
    }
    .numDetail {
      width: 100%;
      height: calc(100% - 0.4rem);
      text-align: center;
      font-size: 0.36rem;
      color: #F0BD26;
      font-weight: 600;
      line-height: 1.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .unit {
        font-size: 0.27rem;
      }
    }
  }

@media screen and (max-width: 1366px) {
  .numDetail {
    line-height: 0.6rem;
  }
}
@media screen and (max-width: 1024px) {
  .numDetail {
    line-height: 0.5rem;
  }
}
</style>
<script>
export default {
  name: 'countCard',
  data() {
    return {

    }
  },
  props: ["cardInfo"],//cardInfo {title:"", count:19, unit: '人'}
}
</script>


