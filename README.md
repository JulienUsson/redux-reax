# Redux-reax

Use [Vuex](https://vuex.vuejs.org/) syntax with Redux.

# Installation

- Install and configure [redux](https://redux.js.org/) and [react-redux](https://github.com/reactjs/react-redux)
- Run `npm install --save redux-reax` to install redux-reax
- Install and configure [redux-thunk](https://github.com/gaearon/redux-thunk) to use Actions

# Usage

## Create a module

A module contains a state, mutations and actions.

```Javascript
import { createModule } from 'redux-reax'

const { reducer, creators } = createModule({
  state: {...},
  mutations: {...},
  actions: {...},
})

export const counterReducer = reducer
export default creators
```

## State

The state object contains the initial state of the module.

```Javascript
const state = {
    count: 1,
}
```

## Mutations

Mutations is the only way to change state. Each mutations must return a new state object.
:warning: Mutations Must Be Synchronous.

```Javascript
const mutations = {
    increment(state) {
        return { count: state.count + 1 }
    },
}
```

## Actions 

Actions are asynchronous mutations. It can commit mutations or dispatch actions.

```Javascript
const actions = {
    incrementAsync({ commit, dispatch, getState }, timeout) {
        setTimeout(() => {
          commit('increment')
        }, timeout)
    }
}
```

## Usage with react-redux

```Javascript
import counter from './store/counter'

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counter.increment()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
```

# Examples

- [Counter](https://github.com/JulienUsson/react-reax/tree/master/examples/counter)

Running the examples:

``` bash
$ npm install
$ npm start # serve examples at localhost:3000
```

# License

[MIT](http://opensource.org/licenses/MIT)