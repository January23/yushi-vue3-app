import { format, addDays } from 'date-fns';
import { createStore } from 'vuex';
import { HOME_SEARCH_INN, HOME_SHOW_CALENDAR } from './mutation-type';

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
    keyword: {},
    showCalendar: false
  },
  mutations: {
    changeCity(state) {
    },
    [HOME_SEARCH_INN](state) {
      console.log(state);
    },
    [HOME_SHOW_CALENDAR](state) {
      state.showCalendar = !state.showCalendar;
    }
  }
});