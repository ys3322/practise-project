<template>
  <div class="vote-data-item" :key="voteDataItem.id">
    <div class="img">
      <!--<img :src="'http://m.xhbycm.net/vote_2021/uploads/'+voteDataItem.base_photo" alt="">-->
      <img :src="getPhotoUrl(voteDataItem.base_photo)" alt="">
    </div>
    <p>{{ voteDataItem.base_name }}</p>
    <div class="vote-info">
      <label>
        <input type="checkbox"
               v-bind:value="voteDataItem.id"
               v-model="checkedValue" @change="inputChange"
                :checked="checkedValue">
        <span>选择投票</span>
      </label>
      <span class="count">{{ voteDataItem.voted_count }}票</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "VoteDataItem",
  props: {
    voteDataItem: {
      type: Object,
      default: null
    }
  },
  computed: {
    getPhotoUrl() {
      return function (imgName) {
        //return this.baseURL + imgName;
        return 'http://m.xhbycm.net/vote_2021/uploads/' + imgName;
      }
    }
  },
  methods: {
    inputChange() {
      if(this.checkedValue){
        this.$emit('selected')
      }else {
        this.$emit('cancelSelected')
      }
    }
  },
  data() {
    return {
      baseImgUrl: 'http://m.xhbycm.net/vote_2021/uploads/%E5%9B%BE%E7%89%871(4).png',
      checkedValue:this.voteDataItem.checkedValue
    }
  }

}
</script>

<style scoped>
.vote-data-item {
  width: 48%;
  height: 1.68rem  /* 168/100 */;
  box-shadow: 0.02rem  /* 2/100 */ 0.02rem  /* 2/100 */ 0.04rem  /* 4/100 */ rgba(0, 0, 0, .2);
  margin-bottom: 0.1rem  /* 10/100 */;
  border-radius: 0.08rem  /* 8/100 */;
  overflow: hidden;
  padding-bottom: 0.06rem  /* 6/100 */;
  font-size: 0.1458rem  /* 14/100 */;
  display: flex;
  flex-flow: nowrap column;
}

.img {
  width: 1.75rem  /* 175/100 */
}

.img img {
  width: 100%;
  height: 0.94rem  /* 94/100 */;
  vertical-align: middle;
  margin-bottom: 0.06rem  /* 6/100 */;
  object-fit: cover;
}

.vote-data-item p {
  flex: 1;
  overflow: hidden;
  text-align: left;
  line-height: 1.5;
  margin: 0 0.1rem  /* 10/100 */;
  white-space: break-spaces;
  text-overflow: ellipsis;
}

.vote-info {
  margin: 0.02rem  /* 2/100 */ 0.1rem  /* 10/100 */;
  display: flex;
  line-height: 1.5;
  justify-content: space-between;
}
.vote-info input{
  width: 0.12rem  /* 14/100 */;
  height: 0.12rem  /* 14/100 */;
}
.vote-info>span.count{
  font-size: 0.125rem;
}

input[type=checkbox]:checked::after {
  content: "✓";
  display: inline-block;
  width: 0.14rem  /* 14/100 */;
  height: 0.14rem  /* 14/100 */;
  color: #fff;
  top: -0.03rem  /* -1/100 */;
  left: -0.01rem  /* -1/100 */;
  position: relative;
  font-size: 0.12rem  /* 12/100 */;
  border-radius: 0.04rem  /* 4/100 */;
  font-weight: bold;
  background-color: #f30000;
}

.vote-info .count {
  display: inline-block;
  height: 0.16rem  /* 16/100 */;
  line-height: 0.16rem  /* 16/100 */;
  text-align: center;
  font-size: 0.12rem  /* 12/100 */;
  color: #f30000;
  padding: 0.02rem  /* 2/100 */ 0.04rem  /* 4/100 */;
  border-radius: 0.04rem  /* 4/100 */;
  border: 0.01rem  /* 1/100 */ solid #f30000;
}

</style>
