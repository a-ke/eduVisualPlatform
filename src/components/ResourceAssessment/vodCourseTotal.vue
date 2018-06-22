<template>
    <div class="vodCourseTotal">  
        <div class="vodCourseTotal-title">{{title}}</div>
        <div id="vodCourseTotal-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "vodCourseTotal",
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
        vm.xData.push(item.date);
        vm.yData.push(item.worksCount);
      });
      vm.initCharts();
    },
    initCharts: function() {
      var vm = this;
      var option = {
        grid: {
          x: 50,
          y: 10,
          x2: 30,
          y2: 30,
          borderWidth: 1
        },
        tooltip: {
          show: true,
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          splitLine: { show: true, lineStyle: { color: "#042E60" } }, //网格线
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#008ACD", //左边线的颜色
              width: "2" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色,
              fontSize: 13
            },
            rotate: 20
          },
          boundaryGap: false,
          data: vm.xData
        },
        yAxis: {
          type: "value",
          splitLine: { show: true, lineStyle: { color: "#042E60" } }, //网格线
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#008ACD", //左边线的颜色
              width: "2" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
              fontSize: 13
            },
            formatter: "{value}"
          }
        },
        series: [
          {
            type: "line",
            showAllSymbol: true,
            symbolSize: 10,
            data: vm.yData
          }
        ]
      };
      vm.myChart = vm.$echarts.init(
        document.getElementById("vodCourseTotal-echarts")
      );
      vm.myChart.setOption(option);

      setInterval(function() {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        vm.myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: vm.currentIndex
        });
        vm.currentIndex = (vm.currentIndex + 1) % dataLen;
        // 高亮当前图形
        vm.myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: vm.currentIndex
        });
        // 显示 tooltip
        vm.myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: vm.currentIndex
        });
      }, 1000);
    }
  },
  mounted: function() {
    var vm = this;
    vm.HandleData();
  }
};
</script>
<style lang="scss">
.vodCourseTotal {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .vodCourseTotal-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  #vodCourseTotal-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
