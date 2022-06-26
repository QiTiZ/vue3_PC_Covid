<template>
  <div class="middle_top">
    <div class="t_title">
      <b>◊ 全国(含港澳台)</b>
      <span>{{ list.times }}数据统计</span>
    </div>
    <div class="t_list">
      <div class="t_item">
        <h5>新增本土确诊</h5>
        <span>
          <b style="color: #a48256">{{ list.localconNum }}</b></span
        >
      </div>
      <div class="t_item">
        <h5>新增确诊</h5>
        <span>
          <b style="color: #c96161">{{ list.addcon }}</b></span
        >
      </div>
      <div class="t_item">
        <h5>新增境外</h5>
        <span>
          <b style="color: #ffa200">{{ list.addjwsr_new }}</b></span
        >
      </div>
      <div class="t_item">
        <h5>新增无症状</h5>
        <span
          ><b style="color: #8a38a1">{{ list.addAsymNum }}</b></span
        >
      </div>
      <div class="t_item">
        <h5>现存本土确诊</h5>
        <span
          ><b style="color: #b8540e"> {{ list.locIncrNum }}</b></span
        >
      </div>
      <div class="t_item">
        <h5>现存确诊</h5>
        <span
          ><b style="color: #ff3535">{{ list.econNum }}</b></span
        >
      </div>
      <div class="t_item">
        <h5>现有无症状</h5>
        <span
          ><b style="color: #fe9885">{{ list.asymptomNum }}</b></span
        >
      </div>
      <div class="t_item">
        <h5>现存疑似</h5>
        <span
          ><b style="color: #a36fff">{{ list.sustotal }}</b></span
        >
      </div>

      <div class="t_item">
        <h5>累计确诊</h5>
        <span
          ><b style="color: #b10000">{{ list.gntotal }}</b></span
        >
        <h6>
          较昨日<code>{{ list.addcon_new }}</code>
        </h6>
      </div>
      <div class="t_item">
        <h5>累计境外输入</h5>
        <span
          ><b style="color: #fe6b22">{{ list.jwsrNum }}</b></span
        >
        <h6>
          较昨日<code>{{ list.addjwsr }}</code>
        </h6>
      </div>
      <div class="t_item">
        <h5>累计治愈</h5>
        <span
          ><b style="color: #13b593">{{ list.curetotal }}</b></span
        >
        <h6>
          较昨日<code>{{ list.addcure_new }}</code>
        </h6>
      </div>
      <div class="t_item">
        <h5>累计死亡</h5>
        <span
          ><b style="color: #666666">{{ list.deathtotal }}</b></span
        >
        <h6>
          较昨日<code>{{ list.adddeath_new }}</code>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'

import { covidData } from '@/utils/index.js'
export default {
  name: 'App',
  setup() {
    const list = reactive({
      times: '',
      localconNum: '',
      addcon: '',
      addjwsr_new: '',
      addAsymNum: '',
      locIncrNum: '',
      econNum: '',
      asymptomNum: '',
      sustotal: '',
      gntotal: '',
      jwsrNum: '',
      curetotal: '',
      deathtotal: '',
      addcon_new: '',
      addjwsr: '',
      addcure_new: '',
      adddeath_new: ''
    })

    const getData = async () => {
      const { data: res } = await covidData()
      const covidList = JSON.parse(res.slice(13, -2))

      list.times = covidList.data.times
      list.localconNum = covidList.data.localconNum
      list.addcon = covidList.data.add_daily.addcon
      list.addjwsr_new = covidList.data.add_daily.addjwsr_new
      list.addAsymNum = covidList.data.addAsymNum
      list.locIncrNum = covidList.data.locIncrNum
      list.econNum = covidList.data.econNum
      list.asymptomNum = covidList.data.asymptomNum
      list.sustotal = covidList.data.sustotal
      list.gntotal = covidList.data.gntotal
      list.jwsrNum = covidList.data.jwsrNum
      list.curetotal = covidList.data.curetotal
      list.deathtotal = covidList.data.deathtotal
      list.addcon_new = covidList.data.add_daily.addcon_new
      list.addjwsr = covidList.data.add_daily.addjwsr
      list.addcure_new = covidList.data.add_daily.addcure_new
      list.adddeath_new = covidList.data.add_daily.adddeath_new
    }
    onMounted(() => {
      getData()
    })

    return { list }
  }
}
</script>

<style lang="less" scoped>
.middle_top {
  width: 100%;
  height: 38%;
  display: flex;
  flex-direction: column;

  .t_title {
    margin: 15px 0 0 20px;
    span {
      font-size: 12px;
    }
  }
  .t_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    .t_item {
      width: 25%;
      margin: 12px 0;
      b {
        font-size: 18px;
      }
      h6 {
        code {
          color: #fff;
          font-weight: bolder;
          font-family: Microsoft YaHei, Helvetica Neue, Helvetica, STHeiTi,
            Arial, sans-serif;
          font-size: 15px;
          margin-left: 3px;
        }
      }
    }
  }
}
</style>
