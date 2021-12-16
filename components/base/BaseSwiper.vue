<template>
  <view class="wrap">
    <swiper indicator-dots circular class="swiper">
      <swiper-item
        class="swiper-item"
        v-for="(item, index) in list"
        :key="item"
        @click="handleSwiperClick(index)"
      >
        <image
          src="https://pic4.zhimg.com/v2-d1685367b6bae10418cf768b0f3eb47b_b.jpg"
          mode="scaleToFill"
        />
      </swiper-item>
    </swiper>
  </view>
</template>

<script   >
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleSwiperClick = (index) => {
      emit("clickItem", index);
    };

    return {
      handleSwiperClick,
    };
  },
};
</script>

<style lang="scss">
.wrap {
  width: 100%;
}
.swiper {
  width: 100%;
  height: 300rpx;
  // background: #f00;
  swiper-item {
    width: 100%;
    height: 100%;
    border-radius: 8rpx;
  }
  image {
    width: 100%;
    border-radius: 8rpx;
  }
}
</style>