<template>
  <div class="banner">
    <img :src="bannerImg" alt="">
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    bannerImg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
}

.banner img {
  width: 100%;
  vertical-align: middle;
}
</style>
