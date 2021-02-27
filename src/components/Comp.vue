<template>
  <div class="con">sssssss</div>
  <div @click="store.commit('add')">{{ store.state.counter }}</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
const store = useStore();
</script>

<style lang="scss" scoped>
.con {
  color: red;
}
</style>