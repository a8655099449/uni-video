<template>
  <view class="nav">
    <view
      :class="{
        'nav-item': true,
        active: index == _activeIndex,
      }"
      v-for="(item, index) in nvaList"
      :key="item"
      @click="clickItem($event, index)"
      :ref="setRefs"
      >{{ item }}
    </view>
    <view
      class="slide-bar"
      :style="{
        left: `${slideLefts[_activeIndex]}px`,
        width: `${sliderBarWidth * 2}rpx`,
      }"
    >
    </view>
  </view>
</template>

<script >
import { ref, onMounted } from "vue";
import { querySelect, querySelectAll } from "../../utils";

export default {
  name: "NavBar",
  props: {
    nvaList: {
      type: Array,
      default: ["菜单1", "菜单2", "菜单3"],
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
    sliderBarWidth: {
      type: Number,
      default: 10,
    },
  },
  setup({ activeIndex, sliderBarWidth }, { emit }) {
    const _activeIndex = ref(activeIndex);

    const clickItem = (evert, index) => {
      emit("clickItem", index);
      _activeIndex.value = index;
    };

    const slideLefts = ref([]);
    const setRefs = (el) => {};

    onMounted(async () => {
      const doms = await querySelectAll(`.nav-item`);

      let firstLeft = 0;
      slideLefts.value = doms.map(({ width, left }, index) => {
        if (index === 0) {
          firstLeft = left;
        }
        return left - firstLeft + (width - sliderBarWidth) / 2;
      });
    });

    return {
      clickItem,
      setRefs,
      slideLefts,
      _activeIndex,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  position: relative;
  .slide-bar {
    position: absolute;
    bottom: 0;
    height: 6rpx;
    border-radius: 3rpx;
    background-color: #ff878c;
    transition: 0.3s;
  }

  .nav-item {
    flex: 1;
    text-align: center;
    padding: 10rpx;
    color: #999999;
    // border: 1px solid #000;
    &.active {
      color: #000;
      font-weight: 600;
    }
  }
}
</style>