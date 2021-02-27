import { createStore } from 'vuex';

export const store = createStore({
  state: {
    counter: 1
  },
  mutations: {
    add(state) {
      state.counter++;
    }
  }
});