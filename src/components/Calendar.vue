<template>
  <div class="calendar-con">
    <div class="calendar-panel panel-left">
      <div class="calendar-header">
        <div class="calendar-left-arraw" @click="preMonthClick()"></div>
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
            'is-sunday': item?.getDay() === 0 || item?.getDay() === 6,
            'is-disable': item < new Date()
          }"
          v-for="item in currentMonthDays"
          @click="selectDay(item)"
        >{{ item?.getDate() }}</span>
      </div>
    </div>
    <div class="calendar-panel panel-right">
      <div class="calendar-header">
        <span class="calendar-month">{{ format(addMonths(new Date(current), 1), 'yyyy年M月') }}</span>
        <div class="calendar-left-arraw" @click="nextMonthClick()"></div>
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
            'is-sunday': item?.getDay() === 0 || item?.getDay() === 6,
            'is-disable': item < new Date()
          }"
          v-for="item in nextMonthDays"
          @click="selectDay(item)"
        >{{ item?.getDate() }}</span>
      </div>
    </div>
  </div>
</template>

<script  setup lang="ts">
import { useStore } from 'vuex';
import { defineProps, reactive, ref } from 'vue';
import { format, addMonths, isLeapYear } from 'date-fns';

const props = defineProps({
  month: Number,
  checkin: String,
  checkout: String
});

const store = useStore();
const WEEKS = ["日", "一", "二", "三", "四", "五", "六"];
const WEEKENDS = ["日", "六"];
const MonthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const checkin = props.checkin ? new Date(props.checkin) : new Date();

const current = ref(format(checkin, 'yyyy-MM-dd'));
const initArray: Date[] = [];
const initNextMonthArray: Date[] = [];
const currentMonthDays = reactive(initArray);
const nextMonthDays = reactive(initNextMonthArray);

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

const selectDay = (day: Date) => {
}

</script>

<style lang="scss" scoped>
.calendar-con {
  display: flex;
  background-color: #ededed;
  width: 32rem;

  .calendar-panel {
    flex: 1;

    .calendar-header {
      display: flex;
      margin-top: 1.8rem;

      .calendar-left-arraw {
        border: solid 1px #ccc;
        width: 1.6rem;
        height: 1.6rem;
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
        width: 14.28%;
        height: 2rem;

        &.is-sunday {
          color: rgb(255, 38, 0);
        }

        &.is-disable {
          color: rgb(204, 193, 193);
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