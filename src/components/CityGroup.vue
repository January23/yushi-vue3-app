<template>
  <input
    class="city-name"
    type="text"
    placeholder="城市目的地"
    v-model="inputValue"
    @click="onClick(true)"
  />
  <div v-if="showCity" class="citylist-con">
    <div v-if="inputValue != city.name" class="city-group-con">
      <div
        class="search-city"
        v-for="(city,index) in searchCityList"
        :key="index"
        @click="cityChange(plainToClass(CityInfo, city))"
      >{{ city.getName() }}</div>
    </div>
    <div v-else class="city-group-con">
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
  </div>
</template>

<script lang="ts" setup>
import { plainToClass } from 'class-transformer';
import { ref, defineEmit, defineProps, watchEffect, reactive } from 'vue';
import { useStore } from 'vuex';
import { CityInfo, AllCityInfo } from '../mock/home/citylist';

const store = useStore();

// const emit = defineEmit(['changeCityVisable']);

const city = store.state.city;
const showCity = ref(false);
const inputValue = ref(city.name);

const currentGroupTab = ref(0);
const currentGroup = ref(AllCityInfo[currentGroupTab.value]);

const searchCityList = reactive([] as Array<CityInfo>);

const onClick = (from?: boolean) => {
  showCity.value = !showCity.value;
  if (from) {
    inputValue.value = city.name;
  }
}

const selectTab = (index: number) => {
  currentGroupTab.value = index;
  currentGroup.value = AllCityInfo[index];
}

const cityChange = (item: CityInfo) => {
  console.log(item)
  city.name = item.getName();
  city.id = item.getId();
  showCity.value = !showCity.value;
  inputValue.value = city.name;
  // emit('changeCityVisable', false);
}

watchEffect(() => {
  searchCityList.splice(0, searchCityList.length);

  if (inputValue.value != city.name) {
    const v = inputValue.value;
    AllCityInfo.forEach((group) => {
      group.getItems().forEach((item) => {
        if (item.getName() != 'hot') {
          item.getCities().forEach((city) => {
            if (city.getName().indexOf(v) >= 0) {
              searchCityList.push(city);
            }
          })
        }
      })
    })
  }
})

</script>

<style lang="scss" scoped>
.city-name {
  border: none;
  height: 3rem;
  box-sizing: border-box;
  max-width: 6rem;
  outline: 0;
}

.citylist-con {
  position: absolute;
  display: flex;
  left: 0;
  top: 100%;
  background: #eeeeee;
  z-index: 1;
  flex-direction: column;
  overflow: auto;
}

.search-city {
  padding: 0.5rem 0;
}

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