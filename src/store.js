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
});
