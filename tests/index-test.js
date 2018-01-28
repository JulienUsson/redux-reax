import expect from 'expect'
import { createModule } from 'src'

describe('Create module', () => {
  it('create module', () => {
    const { reducer, creators } = createModule({
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
          return new Promise(resolve => {
            setTimeout(() => {
              commit('increment')
              resolve()
            }, timeout)
          })
        },
        async incrementByAsync({ dispatch }, amount, timeout = 1000) {
          for (let i = 0; i < amount; i++) {
            await dispatch('incrementAsync', timeout)
          }
        },
      },
    })
    expect(reducer).toExist()
    expect(creators).toExist()
    expect(reducer).toBeA(Function)
    expect(creators).toBeA(Object)
  })
})
