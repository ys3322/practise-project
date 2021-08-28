<template>
  <div class="vote-data">
    <vote-data-item v-for="(item, index) in votedata"
                    v-bind:vote-data-item="item" v-bind:key="item.id"
    @selected="selected(item.id)"
    @cancelSelected="cancelSelected(item.id)"/>
  </div>
</template>

<script>
import VoteDataItem from "./VoteDataItem";

export default {
  name: "VoteData",
  components: {
    VoteDataItem
  },
  methods:{
    selected(id){
      console.log('selected--',id);
      this.$emit('selected',id)
    },
    cancelSelected(id){
      console.log('cancelSelected--',id);
      this.$emit('cancelSelected',id)
    }

  },
  props: {
    votedata: {
      type: Array,
      default: []
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.vote-data {
  width: 94%;
  margin:0.1rem  /* 10/100 */ auto 0.5rem  /* 50/100 */ auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
}
</style>
