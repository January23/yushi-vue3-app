<template>
  <Header></Header>
  <CouponEntrance></CouponEntrance>
  <HotDest></HotDest>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import Header from './Header.vue';
import CouponEntrance from '../components/CouponEntrance.vue';
import HotDest from './HotDest.vue';


const store = useStore();

document.addEventListener('click', (e) => {
  // store.commit(HOME_SHOW_CALENDAR);
})
</script>

<style lang="scss" scoped>
</style>