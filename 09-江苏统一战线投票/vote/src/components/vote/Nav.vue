<template>
  <div class="nav">
    <div class="show" v-on:click="clickVote">投票展示</div>
    <div class="rank" v-on:click="clickRank">实时排名</div>
    <div class="info" v-on:click="clickInfo">活动说明</div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    clickVote() {
      this.$router.push('/vote')
    },
    clickRank() {
      this.$router.push('/rank')
    },
    clickInfo() {
      this.$router.push('/info')
    },
  }
}
</script>

<style scoped>
.nav {
  width: 94%;
  height: 0.3rem /* 30/100 */;
  margin: 0.1rem /* 10/100 */ auto;
  display: flex;
  justify-content: space-between;
}

.nav div {
  width: 32%;
  text-align: center;
  line-height: 0.3rem /* 30/100 */;
  font-size: 0.14rem /* 14/100 */;
  background-image: -webkit-linear-gradient(left, #1c8b9e, #68d2c5);
  color: #fff;
  border-radius: 0.06rem /* 6/100 */;
}
</style>
