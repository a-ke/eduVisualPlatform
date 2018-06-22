<template>
    <div class="vodCourseProportion">  
        <div class="vodCourseProportion-title">{{title}}</div>
        <div id="vodCourseProportion-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "vodCourseProportion",
  props: ["title", "data"],
  data() {
    return {
      transData: [],
      myChart: null,
      currentIndex: -1
    };
  },
  methods: {
    HandleData: function() {
      var vm = this;
      vm.data.map(function(item, index) {
        vm.transData.push({
          value: item.worksCount,
          name: item.majorName
        });
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
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          textStyle: {
            color: "#fff",
            padding: [0, 0, 0, 5]
          }
        },
        series: [
          {
            name: "各学院课程总数统计",
            type: "pie",
            labelLine: {
              length: 5,
              length2: 30,
              lineStyle: {
                color: "#fff"
              }
            },
            radius: "80%",
            center: ["40%", "50%"],
            data: vm.transData,
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
      vm.myChart = vm.$echarts.init(
        document.getElementById("vodCourseProportion-echarts")
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
.vodCourseProportion {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .vodCourseProportion-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  #vodCourseProportion-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
