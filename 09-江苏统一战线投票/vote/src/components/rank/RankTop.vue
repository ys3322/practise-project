<template>
  <div class="rank-top">
    <rank-item v-for="(item,index) in rankTop" :key="index"
               :rank-item="item" :rank-index="index+1" :color="colors[index]">
      <div class="img" v-bind:style="currentPosition(index)">
      </div>
    </rank-item>
  </div>
</template>

<script>
import RankItem from "./RankItem";

export default {
  name: "RankTop",
  components: {
    RankItem
  },
  data() {
    return {
      colors: ['#f14134', '#47a8ed', '#c68c43']
    }
  },
  computed: {
    // 计算属性传值
    currentPosition(){
      return function (index) {
        if (index === 1) {
          return {backgroundPositionY: '-40px',
          width:'41px',height:'30px'}
        } else if (index === 2) {
          return {backgroundPositionY: '-70px',
            width:'41px',height:'30px'}
        }
      }
    }
  },
  props: {
    rankTop: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.rank-top {
  border: 0.01rem /* 2/100 */ solid #e9e9e9;
}

.img {
  /*align-self: center;*/
  width: 40px;
  height: 40px;
  margin: 0.04rem /* 4/100 */ 0.36rem /* 36/100 */ 0 0.2rem /* 20/100 */;
  background: url("../../assets/images/Icon.png") no-repeat;
  background-size: 40px;
}
</style>
