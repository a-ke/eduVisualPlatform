<template>
    <div class="liveHotTop">  
        <div class="liveHotTop-title">{{title}}</div>
        <div id="liveHotTop-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "liveHotTop",
  props: ["title", "data"],
  data() {
    return {
      yData: [],
      xData: [],
      myChart: null,
      currentIndex: -1
    };
  },
  methods: {
    HandleData: function() {
      var vm = this;
      vm.data.map(function(item, index) {
        vm.xData.push(item.activityName);
        vm.yData.push(item.playCount);
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
          x: 50,
          y: 10,
          x2: 20,
          y2: 30,
          borderWidth: 1
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{a}:<br>{b}:{c}次"
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
            formatter: function(value, index) {
              // 10 6 这些你自定义就行
              var v = value.substring(0, 5) + "...";
              return value.length > 5 ? v : value;
            },
            rotate: 0,
            interval: 0
          },
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
            name: "浏览量",
            data: vm.yData,
            type: "bar",
            barWidth: "50%",
            itemStyle: {
              // 普通样式。
              normal: {
                // 点的颜色
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
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
                  ];
                  return colorList[params.dataIndex];
                }
              },
              emphasis: {
                shadowBlur: 15,
                shadowColor: "rgba(0, 0, 0, 0.9)"
              }
            }
          }
        ]
      };
      vm.myChart = vm.$echarts.init(
        document.getElementById("liveHotTop-echarts")
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
.liveHotTop {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .liveHotTop-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  #liveHotTop-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
