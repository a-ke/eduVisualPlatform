<template>
    <div class="schoolTeachingType">  
        <div class="schoolTeachingType-title">{{title}}</div>
        <div id="schoolTeachingType-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "schoolTeachingType",
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
          indicator: [
            { name: "练习型", max: 6500 },
            { name: "混合型", max: 16000 },
            { name: "讲授型", max: 30000 },
            { name: "对话型", max: 38000 }
          ]
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
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "各学院直播总数统计"
              }
            ]
          }
        ]
      };
      var myChart = vm.$echarts.init(
        document.getElementById("schoolTeachingType-echarts")
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
  }
}
</style>
