<template>
  <div class="head-box">
    <img :src="memberData[0].pic" />
    <div class="head-conent">
      <h5 class="ellipsis">{{memberData[0].name}}</h5>
      <p>{{memberData[0].keywords}}</p>
      <div><img src="../../assets/badge.png"/>{{memberData[0].detail}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      memberData: {
        type: Array
      }
    }
  }
</script>
<style lang="less">
  .head-box{
    width: 6.94rem;
    min-height: 1.36rem;
    padding: .44rem .28rem;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    img{
      float: left;
      width: 1.36rem;
      min-height: 1.36rem;
    }
    .head-conent{
      margin-left: 1.58rem;
      h5{
        font-size: .34rem;
        height: .5rem;
        line-height: .5rem;
      }
      p{
        color: #ff851a;
        font-size: .28rem;
        height: .46rem;
        line-height: .46rem;
      }
      div{
        font-size: .28rem;
        color: #b2b2b2;
        padding-left: .42rem;
        img{
          width: .34rem;
          min-height: .34rem;
          float: left;
          margin-left: -.42rem;
        }
      }
    }
  }
</style>
