<template>
  <div class="city-group-con">
    <div class="group-tab">
      <span
        :class="{ 'gourp-name': true, active: gindex === currentGroupTab }"
        v-for="(group, gindex) in AllCityInfo"
        @click="selectTab(gindex)"
      >{{ group.getName() }}</span>
    </div>
    <div class="city-tab">
      <div class="hot-con" v-if="currentGroup.getItems()[0].getName() === 'hot'">
        <span
          class="city-item"
          v-for="(city, cindex) in currentGroup.getItems()[0].getCities()"
          :key="cindex"
          @click="cityChange(city)"
        >{{ city.getName() }}</span>
      </div>
      <div v-else>
        <div class="normal-con" v-for="(item, index) in currentGroup.getItems()" :key="index">
          <span class="normal-group">{{ item.getName() }}</span>
          <div class="city-con">
            <span
              class="city-item"
              v-for="(city, cindex) in item.getCities()"
              :key="cindex"
              @click="cityChange(city)"
            >{{ city.getName() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmit, defineProps, reactive } from 'vue';
import { useStore } from 'vuex';
import { CityInfo, AllCityInfo } from '../mock/home/citylist';

const emit = defineEmit(['changeCityVisable']);

const store = useStore();
const city = store.state.city;
const currentGroupTab = ref(0);
const currentGroup = ref(AllCityInfo[currentGroupTab.value]);

const selectTab = (index: number) => {
  currentGroupTab.value = index;
  currentGroup.value = AllCityInfo[index];
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
        color: #ff6a50;
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

    .hot-con {
      display: flex;
      flex-wrap: wrap;
    }

    .normal-con {
      display: flex;
      margin-bottom: 0.5rem;

      .normal-group {
        width: 2rem;
        padding-top: 0.6rem;
        color: #ff6a50;
      }

      .city-con {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
      }
    }

    .city-item {
      width: 16%;
      padding: 0.5rem 0;
    }
  }
}
</style>