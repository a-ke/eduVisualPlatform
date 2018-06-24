<template>
    <div class="schoolTeachingType">  
        <div class="schoolTeachingType-title">{{title}}</div>
        <div id="schoolTeachingType-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "schoolTeachingType",
  props: ["title", "dataList"],
  data() {
    return {
      seriesValue: [],
      indicatorValue: [],
      max: 0
    };
  },
  methods: {
    HandleData: function() {
      var vm = this;
      vm.dataList.map(function(item, index) {
        if (item.worksCount > vm.max) {
          vm.max = item.worksCount;
        }
        vm.seriesValue.push(item.worksCount);
        vm.indicatorValue.push({
          max: vm.max,
          name: item.typeName
        });
      });
      vm.max = Math.floor(vm.max * 1.3);
      vm.indicatorValue.map(function(item, index) {
        item.max = vm.max;
      });
      vm.initCharts();
    },
    initCharts: function(dataList) {
      var vm = this;
      var option = {
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0
        },
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: "#fff",
              fontSize: 14,
              backgroundColor: "transparent",
              borderRadius: 3,
              padding: [0, 0]
            }
          },
          shape: "circle",
          center: ["50%", "50%"],
          radius: "70%",
          splitArea: {
            areaStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          indicator: vm.indicatorValue
        },
        series: [
          {
            name: "学校各教学类型比例",
            type: "radar",
            itemStyle: {
              color: "#096AB0"
            },
            lineStyle: {
              color: "#00B7F1" // 图表中各个图区域的边框线颜色
            },
            areaStyle: {
              color: "#00B7F1",
              opacity: 0.5
            },
            data: [
              {
                value: vm.seriesValue,
                name: "学校各教学类型比例"
              }
            ]
          }
        ]
      };
      var myChart = vm.$echarts.init(
        document.getElementById("schoolTeachingType-echarts")
      );
      myChart.clear();
      myChart.setOption(option);
    }
  },
  mounted: function() {
    var vm = this;
    vm.HandleData(vm.dataList);
  }
};
</script>
<style lang="scss">
.schoolTeachingType {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .schoolTeachingType-title {
    position: absolute;
    top: -5px;
    left: 50%;
    margin-left: -0.64rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  #schoolTeachingType-echarts {
    width: 100%;
    height: 100%;
    padding: 0.1rem 0.2rem 0.3rem;
  }
}
</style>
