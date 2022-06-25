import axios from 'axios'

export const covidData = () => {
  return axios.get('/covid/project/fymap/ncp2020_full_data.json')
}
