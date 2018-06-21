<template>
    <div class="studyTotal">  
        <div class="studyTotal-title">{{title}}</div>
        <div id="studyTotal-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "studyTotal",
  props: ["title"],
  data() {
    return {
      currentIndex: -1
    };
  },
  methods: {
    initCharts: function() {
      var vm = this;
      var option = {
        grid: {
          x: 50,
          y: 10,
          x2: 20,
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
            }
          },
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
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
            formatter: "{value}k"
          }
        },
        series: [
          {
            type: "line",
            showAllSymbol: true,
            symbolSize: 10,
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290,
              1330
            ]
          }
        ]
      };
      var myChart = vm.$echarts.init(
        document.getElementById("studyTotal-echarts")
      );
      myChart.setOption(option);

      setInterval(function() {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: vm.currentIndex
        });
        vm.currentIndex = (vm.currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: vm.currentIndex
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: vm.currentIndex
        });
      }, 1000);
    }
  },
  mounted: function() {
    var vm = this;
    vm.initCharts();
  }
};
</script>
<style lang="scss">
.studyTotal {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .studyTotal-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  #studyTotal-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
