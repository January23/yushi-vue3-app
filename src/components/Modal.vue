<template>
  <div id="__modals__" class="modal" @click="clickModal()">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit } from 'vue';

const emit = defineEmit(['modalEmit'])
const clickModal = () => {
  emit('modalEmit');
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: #00000080;
}
</style>