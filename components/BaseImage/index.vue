<template>
  <image :src="src" mode="center" class="base-image"
    :style="{
      width:width,
      height:height,
    }"
  
   />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "https://picsum.photos/300/200",
    },
    width: {
      type: String,
      default: `100%`,
    },
    height: {
      type: String,
      default: `100%`,
    },
  },
};
</script>

<style>
.base-image {
  width: 100%;
  object-fit: cover;
  
}
</style>
