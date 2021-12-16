<template>
  <view class="home">
    <view class="swiper-wrap">
      <base-swiper :list="[1, 2, 3]" @clickItem="handleSwiperChange" />
      <NavBar :nvaList="['热门视频', '最新视频']" @click-item="handleNavItem" />
      <ListVue />
    </view>
  </view>
</template>

<script>
import { ref } from "vue";
import BaseSwiper from "../../components/base/BaseSwiper.vue";
import NavBar from "../../components/base/NavBar.vue";
import ListVue from "./components/List.vue";

export default {
  setup() {
    const nvaIndex = ref(0);

    const handleNavItem = (index) => {
      nvaIndex.value = index;
      console.log("👴2021-12-16 20:15:59 index.vue line:22", nvaIndex);
    };

    const handleSwiperChange = (index) => {};

    return {
      handleNavItem,
      handleSwiperChange,
    };
  },
  components: {
    BaseSwiper,
    NavBar,
    ListVue
  },
};
</script>

<style lang="scss">
.swiper-wrap {
  padding: 30rpx;
  image {
    border-radius: 8rpx;
  }
  swiper-item {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }
}
</style>
