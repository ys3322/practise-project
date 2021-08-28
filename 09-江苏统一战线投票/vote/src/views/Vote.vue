<template>
  <div class="vote">
    <Banner v-bind:banner-img="bannerImg"/>
    <search v-on:searchByKey="searchByKey"
            @showAllData="showAllData"/>
    <Nav/>
    <Footer :selected-count="selectedCount"/>
    <vote-data :votedata="voteData"
               @selected="selected"
               @cancelSelected="cancelSelected"/>
  </div>
</template>

<script>
import Banner from "../components/vote/Banner";
import Search from "../components/vote/Search";
import Nav from "../components/vote/Nav";
import Footer from "../components/vote/Footer";
import VoteData from "../components/vote/VoteData";

import bannerImg from "../assets/images/IndexBanner.png"
import {getBaseList} from "../network/vote";

export default {
  name: "Vote",
  components: {
    Footer,
    Nav,
    Search,
    Banner,
    VoteData
  },
  methods: {
    getBaseList() {
      getBaseList().then(value => {
        console.log(value)
        this.voteData = value.data;
        this.allData = value.data;
      });
    },
    selected(id) {
      this.selectedCount++;
      this.allData.filter((item)=>{
        if(item.id === id ){
          item.checkedValue = true;
        }
      })
    },
    cancelSelected(id) {
      this.selectedCount--;
      this.allData.filter((item)=>{
        if(item.id === id ){
          item.checkedValue = false;
        }
      })
    },
    searchByKey(key) {
      this.voteData=this.allData.filter((item) => {
        if (item.base_name.indexOf(key) >= 0) {
          return item;
        }
      })
    },
    showAllData(){
      console.log('showAllData');
      this.voteData = this.allData;
    }
  },
  data() {
    return {
      selectedCount: 0,
      bannerImg,
      voteData: null,
      allData:null
    }
  },
  created() {
    this.getBaseList();

  }
}
</script>

<style scoped>

</style>
