<template>
  <div class="rank">
    <div class="top-rank">
      <div class="rank-info">
        <span>排名</span>
        <span>基地</span>
        <span>票数</span>
      </div>
      <rank-top :rank-top="rankTop"/>
    </div>
    <div class="bottom-rank">
      <rank-bottom :rank-bottom="rankBottom"/>
    </div>
    <div class="back-index" @click="backHome">
    </div>
  </div>
</template>

<script>
import {getRankTop} from "../network/rank";
import RankTop from "../components/rank/RankTop";
import RankBottom from "../components/rank/RankBottom";

export default {
  name: "Rank",
  components:{
    RankTop,
    RankBottom
  },
  data(){
    return {
      rankTop:null,
      rankBottom:null
    }
  },
  methods:{
    getRankTop(){
      getRankTop().then(value=>{
        //console.log(value)
        this.rankTop = value.data.slice(0,3);
        this.rankBottom = value.data.slice(3);
      })
    },
    backHome(){
      this.$router.push('/vote')
    }
  },
  created() {
    this.getRankTop();
  }
}
</script>

<style scoped>
  .rank{
    background: #fff url("../assets/images/RankBanner.png") no-repeat;
    background-size: 100%;
    padding-top: 1.165rem;
  }
  .top-rank{
    width: 94%;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0.01rem /* 2/100 */ 0.01rem /* 2/100 */ 0.02rem /* 6/100 */ rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem  /* 10/100 */;
    overflow: hidden;
  }
  .top-rank .rank-info{
    height: 0.3626rem;
    font-size: 0.14583rem;
    display: flex;
    justify-content: space-between;
    margin: 0 0.28125rem;
    border-bottom: 1px solid #e9e9e9;
    line-height: 0.3626rem;
  }
  .bottom-rank{
    width: 94%;
    margin: 0 auto;
  }
  .rank .back-index{
    position: fixed;
    width: 0.625rem  /* 45/100 */;
    height: 0.625rem  /* 45/100 */;
    right: 0;
    bottom: 0.8rem  /* 30/100 */;
    padding: 0.04rem  /* 4/100 */;
    background: url("../assets/images/home.png") no-repeat;
    background-size: 0.625rem ;
  }
</style>
