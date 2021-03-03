<template>
  <Header></Header>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import Header from './Header.vue';
import { HOME_SHOW_CALENDAR } from '../store/mutation-type';

let store = useStore();

document.addEventListener('click', (e) => {
  // store.commit(HOME_SHOW_CALENDAR);
})

</script>

<style lang="scss" scoped>
</style>