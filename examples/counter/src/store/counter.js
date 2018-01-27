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
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    incrementByAsync({ commit }, amount) {
      setTimeout(() => {
        commit('incrementBy', amount)
      }, 1000)
    },
  },
})

export { reducer, mutations, actions }
