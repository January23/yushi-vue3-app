<template>
  <div class="innhome-body-banner">
    <Ad></Ad>
    <div class="other">
      <span class="title">携程民宿</span>
      <div class="search">
        <Search></Search>
      </div>
      <span class="desc">携程民宿——高品质民宿预订平台</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Ad from './Ad.vue';
import Search from './Search.vue';
</script>

<style lang="scss" scoped>
.innhome-body-banner {
  width: 100%;
  min-width: 60rem;
  max-width: 96rem;
  margin: 0 auto;
  display: block;
  min-height: 11.5rem;
  position: relative;

  .other {
    position: absolute;
    top: 1.2rem;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .title {
    position: absolute;
    left: 5rem;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    height: 2rem;
  }

  .search {
    position: absolute;
    bottom: 3rem;
    width: 50rem;
    transform: translate(-50%, -50%);
    left: 50%;
  }

  .desc {
    position: absolute;
    bottom: 1.6rem;
    text-align: center;
    left: 0;
    right: 0;
    color: white;
    font-size: 1.2rem;
  }
}
</style>