<template>
  <dv-border-box-11 title="疫情实时数据报告">
    <div class="left_top">
      <dv-border-box-12>
        <newAdd></newAdd>
      </dv-border-box-12>
    </div>
    <div class="left_middle">
      <dv-border-box-12>
        <jwTop></jwTop>
      </dv-border-box-12>
    </div>
    <div class="left_bottom">
      <dv-border-box-12>
        <vaccine></vaccine>
      </dv-border-box-12>
    </div>
    <div class="middle">
      <dv-border-box-12>
        <dayData></dayData>
        <mapData></mapData>
      </dv-border-box-12>
    </div>
    <div class="right_top">
      <dv-border-box-12>dv-border-box-12</dv-border-box-12>
    </div>
    <div class="right_bottom">
      <dv-border-box-12>dv-border-box-12</dv-border-box-12>
    </div>
  </dv-border-box-11>
</template>

<script>
import '@/assets/css/home.less'
import newAdd from './newAdd.vue'
import jwTop from './jwsrTop10.vue'
import vaccine from './vaccine.vue'
import dayData from './dayData.vue'
import mapData from './mapData.vue'
export default {
  name: 'data_page',
  setup() {},
  components: {
    newAdd,
    jwTop,
    vaccine,
    dayData,
    mapData
  }
}
</script>

<style lang="less" scoped></style>
