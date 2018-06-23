<template>
    <div class="collegeTeachingType">  
        <div class="collegeTeachingType-title">{{title}}</div>
        <div id="collegeTeachingType-echarts"></div>
    </div>
</template>
<script>
export default {
  name: "collegeTeachingType",
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
        baseOption: {
          title: {
            show: false
          },
          grid: {
            show: true,
            top: 50
          },
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
          timeline: {
            axisType: "category",
            width: "100%",
            left: 0,
            autoPlay: true,
            playInterval: 1000,
            bottom: 50,
            lineStyle: {
              color: "#fff"
            },
            label: {
              color: "#fff",
              rotate: 45,
              position: 20
            },
            checkpointStyle: {
              color: "#00C9FF",
              borderColor: "rgba(0, 200, 255, 0.8)"
            },
            controlStyle: {
              color: "#fff",
              borderColor: "#fff"
            },
            data: []
          },
          tooltip: {},
          legend: {
            x: "right",
            textStyle: {
              color: "#fff",
              padding: [0, 0, 0, 5]
            },
            // padding: [0, 15, 0, 0],
            // data: ["混合型", "对话型", "练习型", "讲授型"]
          },
          calculable: true,
          grid: {
            top: 0,
            bottom: 0
          },
          series: [
            {
              name: "各学院教学类型统计",
              type: "pie",
              center: ["50%", "40%"],
              radius: "60%",
            }
          ]
        },
        options: []
      };
      for (let item of dataList) {
        let legend = [];
        let data = [];
        for (let type of item.list) {
          legend.push(type.teachType);
          data.push({
            name: type.teachType,
            value: type.worksCount
          });
        }
        option.baseOption.timeline.data.push(item.academyName);
        option.options.push({
            title: { text: `${item.academyName}各教学类型统计` },
            legend: {data: legend},
            series: [
              {
                data: data
              }
            ]
          });
      }
      var myChart = vm.$echarts.init(
        document.getElementById("collegeTeachingType-echarts")
      );
      myChart.setOption(option);
    }
  },
  mounted: function() {
    var vm = this;
    vm.initCharts(vm.dataList);
  }
};
</script>
<style lang="scss">
.collegeTeachingType {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  .collegeTeachingType-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    text-align: left;
  }
  #collegeTeachingType-echarts {
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
  }
}
</style>
