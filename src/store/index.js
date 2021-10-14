import { createStore } from 'vuex'

export default createStore({
  state: {
    num: 10
  },
  getters: {
    getNum (state) {
      return state.num * 2
    }
  },
  mutations: {
    NUM_MUTAION (state, data) {
      state.num = data
      console.log(state.num)
    },
    NUM_MUTAION2 (state, data) {
      state.num = data
      console.log(state.num)
    }
  },
  actions: {
    numAction ({ commit }, age) {
      commit('NUM_MUTAION', age)
    }
  },
  modules: {
  }
})
