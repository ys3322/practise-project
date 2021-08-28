<template>
  <div class="search">
    <div class="form">
      <input type="text" placeholder="请输入关键字搜索" v-model="key">
      <button @click="search">
        <i></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      key: ''
    }
  },
  methods: {
    search() {
      console.log('search');
      this.key = this.key.trim();
      if (this.key) {
        this.$emit('searchByKey', this.key);
      }else {
        console.log('emit-showAll');
        this.$emit('showAllData');
      }
    }
  }
}
</script>

<style scoped>
.search {
  padding-top: 0.18rem /* 18/100 */;

}

.search .form {
  display: flex;
  margin: 0 0.11rem /* 11/100 */;
  border-radius: 0.06rem /* 6/100 */;
  overflow: hidden;
  box-shadow: 0.01rem /* 1/100 */ 0.01rem /* 3/100 */ 0.04rem /* 3/100 */ rgba(0, 0, 0, .2);
}

.search input {
  flex: 1;
  height: 0.34rem /* 34/100 */;
  padding-left: 0.14rem /* 14/100 */;
  font-size: 0.12rem /* 12/100 */;
  vertical-align: middle;
}

.search button {
  width: 0.36rem /* 36/100 */;
  height: 0.36rem /* 36/100 */;
  background-image: -webkit-linear-gradient(left top, #2190a1, #afd4d0);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.04rem /* 4/100 */;
  border-bottom-left-radius: 0.04rem /* 4/100 */;
  overflow: hidden;
  vertical-align: middle;
}

.search button i {
  display: inline-block;
  width: 0.2rem /* 20/100 */;
  height: 0.2rem /* 20/100 */;
  background: url("../../assets/images/icon-search.png") no-repeat center center;
  background-size: 0.2rem /* 20/100 */ 0.2rem /* 20/100 */;
}

</style>
