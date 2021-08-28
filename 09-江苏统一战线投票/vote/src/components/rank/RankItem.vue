<template>
  <!--<h2>{{rankItem}}</h2>-->
  <div class="rank-item">
    <!-- 如果插槽没有被替换，那么就显示插槽内的元素-->
    <slot>
      <div class="rank">
      <span>
        第{{ rankIndex }}名
      </span>
      </div>
    </slot>

    <div class="title">
      <span>{{ rankItem.base_name }}</span>
    </div>
    <div class="count">
      <span v-bind:style="countColor">
        {{ rankItem.voted_count }}票
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankTopItem",
  props: {
    rankItem: {
      type: Object,
      default() {
        return {}
      }
    },
    rankIndex: {
      type: Number,
      default: 0
    },
    color:{
      type:String,
      default:'#595959'
    }
  },
  computed:{
    countColor(){
      return {color:this.color}
    }
  }
}
</script>

<style scoped>
.rank-item {
  font-size: 0.12rem /* 14/100 */;
  height: 0.51rem /* 60/100 */;
  display: flex;
  align-items: center;
  line-height: 0.18rem;
  border-bottom: 1px solid #e9e9e9;
}

.rank-item .title {
  flex: 1;
  margin-right: 0.146rem /* 8/100 */;
  height: 42px;
  align-self: center;
  vertical-align: middle;
  text-align: left;
  display: flex;
  align-items: center;
  color: #595959;
}

.rank-item .rank {
  width: 0.708rem /* 70.8/100 */;
  color: #c68c43;
  display: flex;
  align-items: center;
  margin: 0.2rem 0 0.2rem 0.3rem;

}

.rank-item .count {
  margin-right: 0.16rem /* 16/100 */;
  display: flex;
  align-items: center;
  color: #595959;
}
</style>
