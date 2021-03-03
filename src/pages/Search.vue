<template>
  <div class="innhome-body-search">
    <div class="city-con">
      <input class="city-name" type="text" placeholder="城市目的地" v-model="city.name" />
    </div>
    <div class="vertical-line"></div>
    <div class="date-con" @click="store.commit(HOME_SHOW_CALENDAR)">
      <span class="date-text">{{ date.checkin }} 周{{ WEEKS[new Date(date.checkin).getDay()] }}</span>
      <div class="date-nights date-text">共{{ date.nights }}晚</div>
      <span class="date-text">{{ date.checkout }} 周{{ WEEKS[new Date(date.checkout).getDay()] }}</span>
    </div>
    <div class="vertical-line"></div>
    <div class="keyword-con">
      <input type="text" class="keyword-name" placeholder="关键字/位置" />
    </div>
    <!-- commit的名字定义在vuex的store中 -->
    <button class="search-btn" @click="store.commit(HOME_SEARCH_INN)">搜索</button>
    <Calendar v-if="store.state.showCalendar" :month="7" checkin="2021-03-01" checkout="2021-03-02"></Calendar>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { HOME_SEARCH_INN, HOME_SHOW_CALENDAR } from '../store/mutation-type';
import { WEEKS } from '../utils/contants';
import Calendar from '../components/Calendar.vue';

const store = useStore();
const city = store.state.city;
const date = store.state.date;

</script>

<style lang="scss" scoped="">
.innhome-body-search {
  height: 3rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .city-con {
    height: 3rem;
    display: flex;
    align-items: center;
    width: 10rem;

    &::before {
      content: "";
      display: block;
      background-image: url("../assets/i01.v1.png");
      background-size: 480px 412px;
      background-repeat: no-repeat;
      background-position: -452px -136px;
      margin-left: 0.8rem;
      width: 28px;
      height: 28px;
    }

    .city-name {
      border: none;
      height: 3rem;
      box-sizing: border-box;
      max-width: 6rem;
      outline: 0;
    }
  }

  .vertical-line {
    width: 1px;
    height: 2rem;
    background-color: #ccc;
  }

  .date-con {
    display: flex;
    flex: 1;
    align-items: center;

    &::before {
      content: "";
      display: block;
      background-image: url("../assets/i01.v1.png");
      background-size: 480px 412px;
      background-repeat: no-repeat;
      background-position: -452px -248px;
      margin-left: 0.8rem;
      width: 28px;
      height: 28px;
    }

    .date-text {
      font-size: 0.8rem;
      margin-left: 0.4rem;
    }

    .date-nights {
      border: solid 1px #ccc;
      border-radius: 1rem;
      padding: 0 0.4rem;
    }
  }

  .keyword-con {
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: block;
      background-image: url("../assets/i01.v1.png");
      background-size: 480px 412px;
      background-repeat: no-repeat;
      background-position: -452px -214px;
      margin-left: 0.8rem;
      width: 28px;
      height: 28px;
    }

    .keyword-name {
      border: none;
      height: 3rem;
      box-sizing: border-box;
      outline: 0;
    }
  }

  .search-btn {
    background-image: linear-gradient(#ff8440, #ff6a50);
    border: none;
    height: 3rem;
    width: 7rem;
    font-weight: bold;
    color: white;
  }
}
</style>