import axios from 'axios'

export const covidData = () => {
  return axios.get('/covid/project/fymap/ncp2020_full_data.json')
}

// 境外输入TOP10
export const getJWSRTop10 = () => {
  return axios.get('/gwpreData/ncp/top_jwsr?sortby=certainto&n=10')
}

// 疫苗接种
export const getVaccine = () => {
  return axios.get(
    '/vaccineData/newsqa/v1/automation/modules/list?modules=VaccineTopData'
  )
}
