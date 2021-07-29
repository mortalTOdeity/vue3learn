const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 100
    }
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2
    }
  },
  mutations: {
    increment(state) {
      state.homeCounter ++
    }
  },
  actions: {
    homeIncrementAction(context) {
      context.commit('increment')
      // context.commit('increment', null, {root: true})
    }
  }
}
export default homeModule