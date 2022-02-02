import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    addOne(state) {
      state.counter++;
    },
    increase(state, { value }) {
      state.counter = state.counter + value;
    },
  },
  // actions allows us to use async functions
  actions: {
    addOne(context) {
      setTimeout(() => {
        context.commit('addOne');
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state) {
      return state.counter;
    },
  },
});
