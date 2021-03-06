<template>
  <div class="coupon" @click="onClick()">优惠信息</div>
  <Teleport to="body">
    <Modal v-if="showModal" @modalEmit="onClick()">
      <CouponList></CouponList>
    </Modal>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, Teleport } from 'vue';
import Modal from './Modal.vue';
import CouponList from './CouponList.vue';
const showModal = ref(false);

const onClick = () => {
  showModal.value = !showModal.value;
}
</script>

<style lang="scss" scoped>
.coupon {
  position: absolute;
  right: 2rem;
  bottom: 20%;
  background-color: blueviolet;
  width: 2.8rem;
  height: 2.8rem;
}
</style>