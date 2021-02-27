<template>
  <div class="innhome-body-search">
    <div class="city-con">
      <input class="city-name" type="text" placeholder="城市目的地" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
const store = useStore();
const city = store.state.city;
</script>

<style lang="scss" scoped="">
.innhome-body-search {
  height: 3rem;
  background-color: white;

  .city-con {
    height: 3rem;
    display: flex;
    align-items: center;
    width: 8rem;

    &::before {
      content: "";
      display: block;
      background-image: url("../assets/i01.v1.png");
      background-size: 480px 412px;
      background-repeat: no-repeat;
      background-position: -452px -136px;
      width: 28px;
      height: 28px;
    }

    .city-name {
      border: none;
      outline: medium;
    }
  }
}
</style>