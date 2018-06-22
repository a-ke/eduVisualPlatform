<template>
    <div class="liveProportion">  
        <div class="liveProportion-title">{{title}}</div>
        <div id="liveProportion-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "liveProportion",
  props: ["title", "data"],
  data() {
    return {
      xData: [],
      yData: [],
      myChart: null,
      currentIndex: -1
    };
  },
  methods: {
    HandleData: function() {
      var vm = this;
      vm.data.map(function(item, index) {
        vm.xData.push({ name: item.majorName });
        vm.yData.push(item.worksCount);
      });
      vm.initCharts();
    },
    initCharts: function() {
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
          radius: "60%",
          splitArea: {
            areaStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          indicator: vm.xData
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
            data: [
              {
                value: vm.yData,
                name: "各学院直播总数统计"
              }
            ]
          }
        ]
      };
      vm.myChart = vm.$echarts.init(
        document.getElementById("liveProportion-echarts")
      );
      vm.myChart.setOption(option);
    }
  },
  mounted: function() {
    var vm = this;
    vm.HandleData();
  }
};
</script>
<style lang="scss">
.liveProportion {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .liveProportion-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  #liveProportion-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
