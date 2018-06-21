<template>
    <div class="studyProportion">  
        <div class="studyProportion-title">{{title}}</div>
        <div id="studyProportion-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "studyProportion",
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
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          textStyle: {
            color: "#fff",
            padding: [0, 0, 0, 5]
          },
          padding: [0, 15, 0, 0],
          data: [
            "院校1",
            "院校2",
            "院校3",
            "院校4",
            "院校5",
            "院校6",
            "院校7",
            "院校8",
            "院校9",
            "院校10"
          ]
        },
        series: [
          {
            name: "各学院课程总数统计",
            type: "pie",
            labelLine: {
              length: 10,
              length2: 30,
              lineStyle: {
                color: "#fff"
              }
            },
            radius: "80%",
            center: ["40%", "50%"],
            data: [
              { value: 335, name: "院校1" },
              { value: 310, name: "院校2" },
              { value: 234, name: "院校3" },
              { value: 135, name: "院校4" },
              { value: 233, name: "院校5" },
              { value: 12, name: "院校6" },
              { value: 678, name: "院校7" },
              { value: 45, name: "院校8" },
              { value: 180, name: "院校9" },
              { value: 567, name: "院校10" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      var myChart = vm.$echarts.init(
        document.getElementById("studyProportion-echarts")
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
.studyProportion {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .studyProportion-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  #studyProportion-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
