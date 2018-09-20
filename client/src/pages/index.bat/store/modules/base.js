import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const base = new Vuex.Store({
  state: {
    client: '123'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})

export default {
  namespaced: true,
  ...base
}
