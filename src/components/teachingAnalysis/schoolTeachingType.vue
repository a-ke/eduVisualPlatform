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
      currentIndex: -1
    };
  },
  methods: {
    initCharts: function(dataList) {
      var vm = this;
      var option = {
        color: [
          "#F29300",
          "#277BC0",
          "#30FA76",
          "#A05623",
          "#FFB980",
          "#D44E24",
          "#8B51A8",
          "#8D98B3",
          "#CD585F",
          "#27727B",
          "#C1232B",
          "#CBD570"
        ],
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },
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
          indicator: []
        },
        series: [
          {
            name: "各学院直播总数统计",
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
            data: []
          }
        ]
      };
      var max = 0;
      var value = [];
      for(let item of dataList) {
        if (item.worksCount>max) {
          max = item.worksCount;
        }
        value.push(item.worksCount);
      }
      max = Math.floor(max * 1.3);
      for (let item of dataList) {
        option.radar.indicator.push({name: item.teachType, max: max});
      }
      option.series[0].data.push({value: value, name: "课程类型统计"});
      var myChart = vm.$echarts.init(
        document.getElementById("schoolTeachingType-echarts")
      );
      myChart.clear();
      myChart.setOption(option);
    }
  },
  watch: {
    dataList: function() {
      var vm = this;
      vm.initCharts(vm.dataList);
    }
  },
  mounted: function() {
    var vm = this;
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
    top: 0;
    left: 0;
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
