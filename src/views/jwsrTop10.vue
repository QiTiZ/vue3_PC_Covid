<template>
  <div ref="newAddRef" style="width: 100%; height: 100%"></div>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue'
import { getJWSRTop10 } from '@/utils/index.js'
export default {
  name: 'App',
  setup() {
    const { proxy } = getCurrentInstance()

    onMounted(async () => {
      const { data: res } = await getJWSRTop10()
      const covidList = res.result.data

      const xAxisData = covidList.map((item) => {
        return item.from
      })

      const seriesData = covidList.map((item) => {
        return item.certain
      })

      const initChart = () => {
        const option = {
          title: {
            text: '◊ 全国新增确诊,新增疑似趋势图',
            left: '10',
            top: '20',
            textStyle: {
              fontSize: '1rem',
              color: '#09ecfc'
            },
            subtext: '单位:例'
          },
          xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
              interval: 0
            },
            // 坐标轴刻度
            axisTick: {
              show: false,
              // 刻度与元素对齐
              alignWithLabel: true,
              // 坐标轴长度
              length: 0
            },

            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          grid: {
            left: '5%',
            top: '35%',
            right: '8%',
            bottom: '8%',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            borderColor: '#eee',
            backgroundColor: '#fff',
            extraCssText: 'z-index:2'
          },
          series: [
            {
              name: '确诊',
              data: seriesData,
              type: 'bar',
              itemStyle: {
                color: (e) => {
                  const value = e.value
                  if (value > 2000) {
                    return '#da2824'
                  } else if (value > 0) {
                    return '#f6b16b'
                  }
                }
              },
              barWidth: '46%'
            }
          ]
        }

        const myChart = proxy.$echarts.init(proxy.$refs.newAddRef)
        myChart.setOption(option)
      }

      initChart()
    })
  }
}
</script>

<style lang="less" scoped></style>
