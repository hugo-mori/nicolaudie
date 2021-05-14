import { createStore } from 'vuex'
import axios from 'axios'

const urlIpInfo = 'https://ipinfo.io?token=797c3979edba71'
const urlMeteoStack = 'http://api.weatherstack.com/current?access_key=3df5808e506b2ea1b60b88559fc78c78'
const urlMediaStack = 'http://api.mediastack.com/v1/news?access_key=7d4a5fe7a809d9321bf20460fc688af9'

export default createStore({
  state: {
    meteoInfo: {},
    mediasInfo: [],
  },
  mutations: {
    SET_METEO_INFO(state, meteoInfo) {
      state.meteoInfo = meteoInfo
    },
    SET_MEDIA_INFO(state, mediaInfo) {
      state.mediasInfo = mediaInfo
    }
  },
  actions: {
    getInfo({ commit }) {
      axios.get(urlIpInfo)
        .then(response => {
          const info = response.data

          axios.get(`${urlMeteoStack}&query=${info.city}`)
            .then(response => {
              commit('SET_METEO_INFO', response.data)
            })

          axios.get(`${urlMediaStack}&languages=${info.country}`.toLowerCase())
            .then(response => {
              commit('SET_MEDIA_INFO', response.data.data)
            })
        })
    },
  },
  modules: {
  }
})
