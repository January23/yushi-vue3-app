<template>
  <div class="city-group-con">
    <div class="group-tab">
      <span
        :class="{ 'gourp-name': true, active: gindex === currentGroupTab }"
        v-for="(group, gindex) in CityList"
        @click="selectTab(gindex)"
      >{{ group.getName() }}</span>
    </div>
    <div class="city-tab">
      <span
        class="city-item"
        v-for="(city, cindex) in CityList[currentGroupTab].getCities()"
        :key="cindex"
        @click="cityChange(city)"
      >{{ city.getName() }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmit, defineProps } from 'vue';
import { useStore } from 'vuex';
import { CityInfo, CityList } from '../mock/home/citylist';

const emit = defineEmit(['changeCityVisable']);

const store = useStore();
const city = store.state.city;
const currentGroupTab = ref(0);

const selectTab = (index: number) => {
  currentGroupTab.value = index;
}

const cityChange = (item: CityInfo) => {
  console.log(item)
  city.name = item.getName();
  city.id = item.getId();
  emit('changeCityVisable', false);
}
</script>

<style lang="scss" scoped>
.city-group-con {
  display: flex;
  font-size: 0.7rem;
  padding: 1.5rem;
  width: 31rem;
  flex-direction: column;

  .group-tab {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .gourp-name {
      flex: 1;
      display: flex;
      justify-content: center;
      line-height: 2rem;

      &.active {
        color: orange;
      }
    }
  }

  .city-tab {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-height: 18rem;

    .city-item {
      flex: 1;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>