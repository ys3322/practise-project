<template>
  <div class="footer">
    <div class="select-count">
      您已选择{{selectedCount}}票
    </div>
    <div class="submit-btn">提交</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props:{
    selectedCount:{
      type:Number,
      default:0
    }
  },
}
</script>

<style scoped>
  .footer{
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 0.4688rem  /* 49/100 */;
    width: 100%;
    max-width: 720px;
    font-size: 0.14583rem;

    display: flex;
    background-image: -webkit-linear-gradient(left,#1c8b9e,#68d2c5);
    border-top-left-radius: 0.08rem  /* 8/100 */;
    border-top-right-radius: 0.08rem  /* 8/100 */;
  }
  .footer div{
    text-align: center;
    line-height: 0.49rem  /* 49/100 */;
    color: #fff;
  }
  .footer div.select-count{
    flex: 5;
    border-right: 0.03rem  /* 3/100 */ solid #05d3b7;
  }
  .footer div.submit-btn{
    flex: 7;
  }
</style>
