import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/css/global.less'

import * as echarts from 'echarts'
import dataV from '@jiaminghi/data-view'

const app = createApp(App)
app.config.globalProperties.$echarts = echarts

app.use(ElementPlus)
app.use(dataV)
app.use(store)
app.use(router)
app.mount('#app')
