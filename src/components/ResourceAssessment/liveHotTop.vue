<template>
    <div class="liveHotTop">  
        <div class="liveHotTop-title">{{title}}</div>
        <div id="liveHotTop-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "liveHotTop",
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
          trigger: "item"
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
            "10月"
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
            data: [120, 200, 150, 80, 70, 110, 130, 400, 90, 190],
            type: "bar",
            itemStyle: {
              // 普通样式。
              normal: {
                // 点的颜色
                color: new vm.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#CD585F"
                  },
                  {
                    offset: 1,
                    color: "#C1232B"
                  }
                ])
              },
              emphasis: {
                color: "#C1232B",
                shadowBlur: 15,
                shadowColor: "rgba(255, 35, 43, 0.9)"
              }
            }
          }
        ]
      };
      var myChart = vm.$echarts.init(
        document.getElementById("liveHotTop-echarts")
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
