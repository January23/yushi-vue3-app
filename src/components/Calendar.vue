<template>
  <div class="calendar-con">
    <div class="calendar-panel panel-left">
      <div class="calendar-header">
        <div class="calendar-arraw" @click="preMonthClick()">&lt;</div>
        <span class="calendar-month">{{ format(new Date(current), 'yyyy年M月') }}</span>
      </div>
      <div class="calendar-week">
        <span :class="{
          'week-item': true
        }" v-for="item in WEEKS">{{ item }}</span>
      </div>
      <div class="calendar-day">
        <span
          :class="{
            'day-item': true,
            'hide-border': !item,
            'is-sunday': item?.getDay() === 0 || item?.getDay() === 6,
            'is-disable': item < today,
            'is-selected': isSameDay(item, selected.checkin) || isSameDay(item, selected.checkout),
            'is-in-range': isInRange(item, selected.checkin, selected.checkout)
          }"
          v-for="item in currentMonthDays"
          @click="selectDay(item)"
        >{{ item?.getDate() }}</span>
      </div>
    </div>
    <div class="calendar-panel panel-right">
      <div class="calendar-header">
        <span class="calendar-month">{{ format(addMonths(new Date(current), 1), 'yyyy年M月') }}</span>
        <div class="calendar-arraw" @click="nextMonthClick()">&gt;</div>
      </div>
      <div class="calendar-week">
        <span :class="{
          'week-item': true
        }" v-for="item in WEEKS">{{ item }}</span>
      </div>
      <div class="calendar-day">
        <span
          :class="{
            'day-item': true,
            'hide-border': !item,
            'is-sunday': item?.getDay() === 0 || item?.getDay() === 6,
            'is-disable': item < today,
            'is-selected': isSameDay(item, selected.checkin) || isSameDay(item, selected.checkout),
            'is-in-range': isInRange(item, selected.checkin, selected.checkout)
          }"
          v-for="item in nextMonthDays"
          @click="selectDay(item)"
        >{{ item?.getDate() }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { defineProps, reactive, ref } from 'vue';
import { format, addMonths, isLeapYear, addDays } from 'date-fns';
import { WEEKENDS, WEEKS, MonthDay } from '../utils/contants';

const props = defineProps({
  month: Number,
  checkin: String,
  checkout: String
});

const store = useStore();
const checkin = props.checkin ? new Date(props.checkin) : new Date();

const current = ref(format(checkin, 'yyyy-MM-dd'));
const initArray: Date[] = [];
const initNextMonthArray: Date[] = [];
const currentMonthDays = reactive(initArray);
const nextMonthDays = reactive(initNextMonthArray);
const today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);

const getMonthDays = (current: Date): Array<Date> => {
  let year = current.getFullYear();
  let month = current.getMonth();

  //闰年
  isLeapYear(current);
  //当前月有多少天
  let days = new Array<number>(MonthDay[current.getMonth()] + (isLeapYear(checkin) && current.getMonth() === 1 ? 1 : 0)).fill(0).map((i, index) => new Date(year, month, index + 1));
  //当前月第一天是星期几
  const currentMonthDayOffset = new Date(current.getFullYear(), current.getMonth(), 1).getDay();
  //在数组前面补空位
  if (currentMonthDayOffset != 7) {
    days.unshift(...new Array(currentMonthDayOffset).fill(undefined));
  }

  return days;
}

currentMonthDays.unshift(...getMonthDays(checkin));
nextMonthDays.unshift(...getMonthDays(addMonths(checkin, 1)));


const preMonthClick = () => {
  let month = new Date(current.value);
  nextMonthDays.splice(0, nextMonthDays.length);
  nextMonthDays.unshift(...getMonthDays(month));
  month = addMonths(month, -1);
  currentMonthDays.splice(0, currentMonthDays.length);
  currentMonthDays.unshift(...getMonthDays(month));
  current.value = format(month, 'yyyy-MM-dd');
}

const nextMonthClick = () => {
  let month = addMonths(new Date(current.value), 1);
  currentMonthDays.splice(0, currentMonthDays.length);
  currentMonthDays.unshift(...getMonthDays(month));
  nextMonthDays.splice(0, nextMonthDays.length);
  nextMonthDays.unshift(...getMonthDays(addMonths(month, 1)));
  current.value = format(month, 'yyyy-MM-dd');
}

const isSameDay = (start?: Date, end?: Date) => {
  return start?.getFullYear() === end?.getFullYear() && start?.getMonth() === end?.getMonth() && start?.getDate() === end?.getDate();
}

const isInRange = (current: Date, start?: Date, end?: Date) => {
  if (!start || !end || !current) {
    return false;
  }
  current.setHours(23);
  current.setMinutes(59);
  current.setSeconds(59);
  current.setMilliseconds(999);

  if (current < end) {
    current.setHours(0);
    current.setMinutes(0);
    current.setSeconds(0);
    current.setMilliseconds(0);

    return current > start;
  }
  return false;
}

interface Selected {
  firsted: boolean,
  checkin?: Date,
  checkout?: Date,
  mouseOver?: boolean
}

const initSelected: Selected = {
  firsted: true,
  checkin: checkin,
  checkout: props.checkout ? new Date(props.checkout) : addDays(checkin, 1)
}

const selected = reactive(initSelected)

const selectDay = (day: Date) => {
  if (selected.firsted) {
    selected.checkin = day;
    selected.checkout = undefined;
    selected.firsted = false;
  }
  else {
    if (!selected.checkin || day <= selected.checkin) {
      selected.checkin = day;
      selected.checkout = undefined;
    }
    else {
      selected.firsted = true;
      selected.checkout = day;
      store.state.date.checkin = format(selected.checkin, 'yyyy-MM-dd');
      store.state.date.checkout = format(selected.checkout, 'yyyy-MM-dd');
      store.state.date.nights = Math.floor((selected.checkout.getTime() - selected.checkin.getTime()) / 86400000);
    }
  }
}


</script>

<style lang="scss" scoped>
.calendar-con {
  display: flex;
  width: 32rem;
  border: solid 1px #ece7e7;
  padding-bottom: 1.8rem;
  overflow: hidden;

  .calendar-panel {
    flex: 1;

    .calendar-header {
      display: flex;
      margin-top: 1.8rem;

      .calendar-arraw {
        border: solid 1px #ccc;
        width: 1.6rem;
        height: 1.6rem;
        align-items: center;
        justify-content: center;
        display: flex;
      }

      .calendar-month {
        display: flex;
        flex: 1;
        font-size: 0.8rem;
        font-weight: bold;
        justify-content: center;
        align-items: center;
      }
    }

    .calendar-week {
      display: flex;

      .week-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        font-size: 0.7rem;
        margin-top: 1rem;
      }
    }

    .calendar-day {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.5rem;

      .day-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 13.8%;
        height: 2rem;
        border: solid 1px #524f4f;
        margin: 0 0 -1px -1px;
        color: #666;
        font-size: 0.7rem;

        &.hide-border {
          border-color: transparent;
        }

        &.is-sunday {
          color: red;
        }

        &.is-disable {
          color: rgb(204, 193, 193);
        }

        &.is-selected {
          color: #ff8440;
        }

        &.is-in-range {
          color: #ffc3b8;
        }
      }
    }
  }

  .panel-left {
    margin-left: 2rem;
  }
  .panel-right {
    margin-right: 2rem;
    margin-left: 1rem;
  }
}
</style>