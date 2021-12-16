<template>
  <view class="list-view">
    <VideoItem v-for="item in 20" :key="item" />


   

  </view>
</template>

<script>
import VideoItem from "../../../components/base/VideoItem.vue";
export default {
  name: "list",
  components: { VideoItem },
};
</script>

<style>
.list-view {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30rpx;

}
</style>
