import { createStore } from 'vuex';

export const store = createStore({
  state: {
    city: {
      name: '',
      id: 0
    }
  },
  mutations: {
    changeCity(state) {
    }
  }
});