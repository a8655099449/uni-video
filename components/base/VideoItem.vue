<template>
  <view class="video-item">
    <view class="img-view">
      <BaseImage />
    </view>
    <view class="zan">
      <text class="tag">标签</text>
      <text>
        <text class="iconfont icon-dianzan"></text>
        6666
      </text>
    </view>
  </view>
</template>

<script>
import BaseImage from "../BaseImage/index.vue";
export default {
  components: { BaseImage },
  name: "VideoItem",
};
</script>

<style lang="scss">
.video-item {
  /* display: inline-flex; */
  width: calc(50% - 10rpx);
  margin-right: 20rpx;
  margin-bottom: 15rpx;
  border-radius: 8rpx;
  box-shadow: 0px 3rpx 6rpx rgba(153, 153, 153, 0.2);
  &:nth-child(2n) {
    margin-right: 0;
  }
  .img-view {
    // height: 480px;
    height: 185rpx;
  }
  overflow: hidden;

  .zan {
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
    align-items: center;
    font-size: 20rpx;
    

    color: #999999;
    .tag {
      background: #fff6e9;
      border: 1px solid #ffa631;
      color: #ffa631;
      padding: 4rpx 16rpx ;
      opacity: 1;
      border-radius: 8rpx;
    }
  }
}
</style>
