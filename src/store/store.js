import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { router } from './modules/router'

export default new Vuex.Store({
  state: {
    isFold: false,
  },
  mutations: {
    changeFold(state) {
      state.isFold = !state.isFold
    }
  },
  getters: {
    getFold(state) {
      return state.isFold
    }
  },
  modules: {
    router
  }
})