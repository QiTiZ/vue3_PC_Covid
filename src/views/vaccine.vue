<template>
  <h4>◊ 全球新冠疫苗接种动态追踪</h4>
  <div class="main">
    <div class="chinaVaccine">
      <div class="jiezhong">
        <i>中国累计接种</i>
        <span>
          {{ vaccineList.chinaTotalVaccine }}
          <em>亿剂</em>
        </span>
      </div>
      <div class="borderBB"></div>
      <div class="jiezhong">
        <i>中国每百人接种</i>
        <span class="hunder">
          {{ vaccineList.chinaHundredVaccine }}
          <em>剂</em>
        </span>
      </div>
    </div>
    <div class="divider"></div>
    <div class="chinaVaccine">
      <div class="jiezhong">
        <i>中国累计接种</i>
        <span>
          {{ vaccineList.worldTotalVaccine }}
          <em>亿剂</em>
        </span>
      </div>
      <div class="borderBB"></div>
      <div class="jiezhong">
        <i>中国每百人接种</i>
        <span class="hunder">
          {{ vaccineList.worldHundredVaccine }}
          <em>剂</em>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { getVaccine } from '../utils/index.js'
export default {
  name: 'App',
  setup() {
    const vaccineList = reactive({
      chinaTotalVaccine: '',
      chinaHundredVaccine: '',
      worldTotalVaccine: '',
      worldHundredVaccine: ''
    })

    const getList = async () => {
      const { data: res } = await getVaccine()

      const chinaData = res.data.VaccineTopData['中国']
      const aa = chinaData.total_vaccinations.toString()
      const chinaVaccine = aa.slice(0, 3) + ',' + aa.slice(3, 4)
      vaccineList.chinaTotalVaccine = chinaVaccine
      vaccineList.chinaHundredVaccine = chinaData.total_vaccinations_per_hundred

      const worldData = res.data.VaccineTopData['全球']
      const bb = worldData.total_vaccinations.toString()
      const worldVaccine = bb.slice(0, 3) + ',' + bb.slice(3, 4)
      vaccineList.worldTotalVaccine = worldVaccine
      vaccineList.worldHundredVaccine = worldData.total_vaccinations_per_hundred
    }

    onMounted(() => {
      getList()
    })

    // const chinaHundredVaccine = vaccineData.total_vaccinations_per_hundred

    return { vaccineList }
  }
}
</script>

<style lang="less" scoped>
h4 {
  position: absolute;
  top: 8%;
  left: 5%;
  font-style: italic;
  color: #09ecfc;
}

.main {
  width: 100%;
  position: absolute;
  top: 25%;
}
.chinaVaccine {
  display: flex;
  justify-content: space-around;
  .jiezhong {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 15px 0;
    i {
      font-style: normal;
      font-size: 12px;
    }
    span {
      margin-top: 5px;
      font-size: 20px;
      color: #178b50;
      font-weight: 600;
      em {
        font-size: 10px;
        font-style: normal;
      }
    }
    .hunder {
      color: #4e5a65;
    }
  }
  .borderBB {
    border: 0.1px solid #eee;
    height: 40px;
    margin-top: 15px;
  }
}

// 分割线
.divider {
  border: 0.1px solid #eee;
  margin: 0 10px;
}
</style>
