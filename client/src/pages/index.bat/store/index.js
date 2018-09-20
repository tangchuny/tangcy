import Vue from 'vue'
import Vuex from 'vuex'

import base from './modules/base.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base
  },
  strict: true
})
