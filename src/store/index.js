import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Daniel Ma',
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {},
  modules: {}
})
