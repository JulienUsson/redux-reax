import { createModule } from 'reax'

const { reducer, mutations, actions } = createModule({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      return { count: state.count + 1 }
    },
    incrementBy(state, amount) {
      return { count: state.count + amount }
    },
  },
  actions: {
    incrementAsync({ commit }, timeout = 1000) {
      setTimeout(() => {
        commit('increment')
      }, timeout)
    },
    incrementByAsync({ commit }, amount, timeout = 1000) {
      setTimeout(() => {
        commit('incrementBy', amount)
      }, timeout)
    },
  },
})

export { reducer, mutations, actions }
