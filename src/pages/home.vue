<template>
  <Header></Header>
  <Calendar :month="7" checkin="2021-03-01" checkout="2021-03-02"></Calendar>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import Calendar from '../components/Calendar.vue';
</script>

<style lang="scss" scoped>
</style>