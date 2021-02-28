import { format, addDays } from 'date-fns';
import { createStore } from 'vuex';
import { HOME_SEARCH_INN } from './mutation-type';

export const store = createStore({
  state: {
    city: {
      name: '',
      id: 0
    },
    date: {
      checkin: format(new Date(), 'yyyy-MM-dd'),
      checkout: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
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