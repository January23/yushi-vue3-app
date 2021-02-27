import { createStore } from 'vuex';
import { HOME_SEARCH_INN } from './mutation-type';

export const store = createStore({
  state: {
    city: {
      name: '',
      id: 0
    },
    date: {
      checkin: '',
      checkout: '',
      nights: 1
    },
    keyword: {}
  },
  mutations: {
    changeCity(state) {
    },
    [HOME_SEARCH_INN](state) {
      console.log(state);
    }
  }
});