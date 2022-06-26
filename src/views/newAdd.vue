<template>
  <div ref="newAddRef" style="width: 100%; height: 100%"></div>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue'
import { covidData } from '@/utils/index.js'
export default {
  name: 'App',
  setup() {
    const { proxy } = getCurrentInstance()

    onMounted(async () => {
      const { data: res } = await covidData()
      const covidList = JSON.parse(res.slice(13, -2))

      const newArr = covidList.data.historylist.slice(0, 31)
      const xAxisData = newArr.map((item) => {
        return item.date
      })
      xAxisData.reverse()

      const seriesData = newArr.map((item) => {
        return item.cn_conadd
      })
      seriesData.reverse()

      const seriesData2 = newArr.map((item) => {
        return item.wjw_susNum
      })
      seriesData2.reverse()

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
            // 坐标轴刻度
            axisTick: {
              show: false,
              // 刻度与元素对齐
              alignWithLabel: true,
              // 坐标轴长度
              length: 0
            },
            axisLabel: {
              inside: false,
              fontSize: 12,
              // x轴数据间距
              interval: 4
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
            top: '25%',
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
              type: 'line',
              smooth: true
            },
            {
              name: '疑似',
              data: seriesData2,
              type: 'line'
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
