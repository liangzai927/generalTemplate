import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { router } from './modules/router'

export default new Vuex.Store({
  modules: {
    router
  }
})