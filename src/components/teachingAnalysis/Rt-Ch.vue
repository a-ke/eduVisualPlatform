<template>
  <div id="Rt-Ch"></div>
</template>
<style lang="scss">
#Rt-Ch {
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: ["dataList"],
  methods: {
    initChart(dataList) {
      var vm = this;
      var width = document.getElementById("Rt-Ch").offsetWidth;
      var height = document.getElementById("Rt-Ch").offsetHeight;
      var w_h_min = width;
      if (w_h_min > height) {
        w_h_min = height;
      }
      var option = {
        xAxis: {
          name: "Rt",
          type: "value",
          splitLine: {
            show: true
          },
          min: 0,
          max: 1,
          splitNumber: 10,
          nameTextStyle: {
            fontSize: 16,
            color: "#fff"
          },
          axisLabel: {
            color: "#fff"
          },
          axisLine: {
            lineStyle: {
              color: "#6E6F73"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#333"
            }
          }
        },
        yAxis: {
          name: "Ch",
          type: "value",
          splitLine: {
            show: true
          },
          min: 0,
          max: 1,
          splitNumber: 10,
          nameTextStyle: {
            fontSize: 16,
            color: "#fff"
          },
          axisLabel: {
            color: "#fff"
          },
          axisLine: {
            lineStyle: {
              color: "#6E6F73"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#141723"
            }
          }
        },
        grid: {
          top: 100,
          left: "center",
          width: w_h_min - 150,
          height: w_h_min - 150
        },
        legend: {
          type: 'scroll',
          itemWidth: 15,
          itemHeight: 15,
          textStyle: {
            color: "#fff"
          },
          pageIconColor: "#0FFCFF",
          pageIconInactiveColor: "#B5B5B5",
          pageTextStyle: {
            color: "#fff"
          },
          data: []
        },
        series: [
          {
            type: "scatter",
            itemStyle: {
              color: "#ff6600"
            },
            data: [],
            markLine: {
              silent: true,
              lineStyle: {
                type: "solid",
                color: "#ff6600"
              },
              animation: false,
              symbol: "",
              data: [
                [
                  {
                    coord: [0, 0]
                  },
                  {
                    coord: [0.5, 1]
                  }
                ],
                [
                  {
                    coord: [0.5, 1]
                  },
                  {
                    coord: [1, 0]
                  }
                ],
                [
                  {
                    coord: [0.3, 0]
                  },
                  {
                    coord: [0.3, 0.6]
                  }
                ],
                [
                  {
                    coord: [0.7, 0]
                  },
                  {
                    coord: [0.7, 0.6]
                  }
                ],
                [
                  {
                    coord: [0.3, 0.4]
                  },
                  {
                    coord: [0.7, 0.4]
                  }
                ]
              ]
            },
            markArea: {
              silent: true,
              label: {
                show: true,
                color: "#fff",
                fontSize: 16
              },
              animation: false,
              data: [
                [
                  {
                    name: "练习型",
                    coord: [0.2, 0.2]
                  },
                  {
                    coord: [0.2, 0.2]
                  }
                ],
                [
                  {
                    name: "混合型",
                    coord: [0.5, 0.2]
                  },
                  {
                    coord: [0.5, 0.2]
                  }
                ],
                [
                  {
                    name: "讲授型",
                    coord: [0.8, 0.1]
                  },
                  {
                    coord: [0.8, 0.2]
                  }
                ],
                [
                  {
                    name: "对话型",
                    coord: [0.5, 0.6]
                  },
                  {
                    coord: [0.5, 0.6]
                  }
                ]
              ]
            }
          }
        ]
      };

      for (let [key, item] of Object.entries(dataList)) {
        option.legend.data.push({
          name: item.courseName,
          icon: vm.styleList[key].type
        });
        // if (key == 3) {
        //   //图例换行
        //   option.legend.data.push("");
        // }
        option.series.push({
          name: item.courseName,
          type: "scatter",
          symbolSize: 15,
          symbol: vm.styleList[key].type,
          itemStyle: {
            color: vm.styleList[key].color
          },
          data: [
            {
              value: [item.rt, item.ch]
            }
          ]
        });
      }

      var myChart = vm.$echarts.init(document.getElementById("Rt-Ch"));
      myChart.clear();
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  watch: {
    dataList: function() {
      var vm = this;
      vm.initChart(vm.dataList);
    }
  },
  mounted: function() {
    var vm = this;

    //初始化图例样式和颜色
    vm.styleList = [
      {
        type: "circle",
        color: "#ff6600"
      },
      {
        type: "rect",
        color: "#30FA76"
      },
      {
        type: "triangle",
        color: "#8B51A8"
      },
      {
        type: "diamond",
        color: "#D44E24"
      },
      {
        type: "circle",
        color: "#277BC0"
      },
      {
        type: "rect",
        color: "#FFB980"
      },
      {
        type: "triangle",
        color: "#A7A7A7"
      },
      {
        type: "diamond",
        color: "#80FBFF"
      }
    ];
    vm.initChart(vm.dataList);
  }
};
</script>


