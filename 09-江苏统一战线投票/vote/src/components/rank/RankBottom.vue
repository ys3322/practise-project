<template>
  <div class="rank-bottom">
    <rank-item v-for="(item,index) in rankBottom" :key="index"
                   :rank-item="item" :rank-index="index+4"/>
  </div>
</template>

<script>
import RankItem from "./RankItem";

export default {
  name: "RankBottom",
  components: {
    RankItem
  },
  props: {
    rankBottom: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.rank-bottom {
  margin-top: 0.2rem /* 20/100 */;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .2);
  border-radius: 0.1rem /* 10/100 */;
}
</style>
