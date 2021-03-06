<template>
  <div class="dest-con">
    <div class="txt">热门目的地</div>
    <div class="layout">
      <div class="left-panel">
        <div class="city-item" v-for="(dest, index) in HotDestList.slice(0,4)" :key="index">
          <img :src="dest.url" />
          <span class="name">{{ dest.city }}</span>
        </div>
      </div>
      <div class="right-panel">
        <div class="city-item" v-for="(dest, index) in HotDestList.slice(4)" :key="index">
          <img :src="dest.url" />
          <span class="name">{{ dest.city }}</span>
          <span class="desc">{{ dest.desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const HotDestList = [{
  url: "http://pic.c-ctrip.com/h5/bnb/pc/i01-0200.png",
  city: '上海'
},
{
  url: "http://pic.c-ctrip.com/h5/bnb/pc/i01-0201.png",
  city: '北京'
}, {
  url: "http://pic.c-ctrip.com/h5/bnb/pc/i01-0202.png",
  city: '成都'
}, {
  url: "http://pic.c-ctrip.com/h5/bnb/pc/i01-0203.png",
  city: '厦门'
}, {
  url: "http://pic.c-ctrip.com/h5/bnb/pc/i01-0204.png",
  city: '香港',
  desc: '繁华是她，拥挤是她，自由也是她。是曾经辉煌的香港电影，是街上随处可见的百年老店，亦或是久负盛名的购物天堂'
}, {
  url: "http://pic.c-ctrip.com/h5/bnb/pc/i01-0205.png",
  city: '三亚',
  desc: '繁华是她，拥挤是她，自由也是她。是曾经辉煌的香港电影，是街上随处可见的百年老店，亦或是久负盛名的购物天堂'
}]
</script>

<style lang="scss" scoped>
.dest-con {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .txt {
    margin: 0 auto;
    font-size: 2rem;
  }

  .layout {
    display: flex;
    margin: 0 auto;

    img {
      cursor: pointer;
      transition: all 0.6s;

      &:hover {
        transform: scale(1.2);
      }
    }

    .left-panel {
      display: flex;
      flex-wrap: wrap;
      width: 24.5rem;
      .city-item {
        display: flex;
        position: relative;
        margin-left: 2rem;
        margin-top: 2rem;
        overflow: hidden;

        .name {
          position: absolute;
          left: 1rem;
          bottom: 10%;
          color: white;
        }
      }
    }

    .right-panel {
      display: flex;

      .city-item {
        display: flex;
        position: relative;
        margin-top: 2rem;
        margin-left: 2rem;
        overflow: hidden;

        .name {
          position: absolute;
          left: 1rem;
          bottom: 20%;
          color: white;
        }

        .desc {
          position: absolute;
          left: 1rem;
          bottom: 5%;
          color: white;
          font-size: 0.6rem;
          text-align: left;
        }
      }
    }
  }
}
</style>