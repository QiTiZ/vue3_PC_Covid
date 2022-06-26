<template>
  <div ref="mapRef" style="width: 100%; height: 500px"></div>
</template>

<script>
import { onMounted, getCurrentInstance, reactive } from 'vue'
import { covidData } from '@/utils/index.js'
import chinaMap from '@/assets/js/china.json'
export default {
  name: 'App',
  setup() {
    const { proxy } = getCurrentInstance()

    const list = reactive({
      mapmap: []
    })

    const getData = async () => {
      const { data: res } = await covidData()
      const covidList = JSON.parse(res.slice(13, -2))

      const mapList = covidList.data.list.map((item) => {
        return {
          name: item.name,
          value: item.econNum,
          cure: item.cureNum,
          totalNum: item.value,
          deathNum: item.deathNum
        }
      })
      list.mapmap = mapList
    }

    const initChart = () => {
      const myChart = proxy.$echarts.init(proxy.$refs.mapRef)
      proxy.$echarts.registerMap('china', chinaMap)
      const option = {
        series: [
          {
            type: 'map',
            map: 'china',
            top: '5%',
            label: {
              show: true
            },
            // 地图缩放
            zoom: 1.1,
            itemStyle: {
              // 地图区域颜色
              areaColor: '#084a7f'
            },
            data: list.mapmap
          }
        ],
        visualMap: [
          {
            type: 'piecewise',
            show: true,
            splitNumber: 6,
            left: '5%',
            bottom: '13%',
            itemWidth: '13px',
            itemHeight: '13px',
            pieces: [
              { min: 10000, color: 'rgb(184, 9, 9)' },
              { min: 1000, max: 9999, color: 'rgb(230, 69, 70)' },
              { min: 100, max: 999, color: 'rgb(245, 117, 103)' },
              { min: 10, max: 99, color: 'rgb(255, 153, 133' },
              { min: 1, max: 9, color: ' rgb(255, 229, 219)' },
              { value: 0, color: '#fff' }
            ],
            textStyle: {
              fontSize: 10,
              color: '#fff'
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          borderColor: 'black',
          backgroundColor: 'black',
          extraCssText: ' opacity:0.7;',
          textStyle: {
            color: '#fff'
          },
          formatter: (e) => {
            console.log(e)
            // return `地区：<b>${e.name}</b>  <div>现有确诊：<b>${e.value}</b></div> <div>累计确诊：<b>${e.data.totalNum}</b></div> <div>累计治愈：<b>${e.data.cure}</b></div> <div>累计死亡：<b>${e.data.deathNum}</b></div>`
          }
        }
      }

      myChart.setOption(option)
    }

    onMounted(() => {
      getData()
      initChart()
    })

    return { list }
  }
}
</script>

<style lang="less" scoped></style>
