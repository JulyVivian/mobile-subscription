<template>
  <div class="head-box">
    <img :src="memberData[0].pic" />
    <div class="head-conent" :class="{'height-limit': !isshow }">
      <h5 class="ellipsis">{{memberData[0].name}}</h5>
      <p>{{memberData[0].keywords}}</p>
      <div ref="tradertitle"><img src="../../assets/badge.png"/>{{memberData[0].detail}}</div>
      <img class="open-pic" v-if="overHeight" src="../../assets/open.png" @click="onShowAll"/>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      memberData: {
        type: Array
      }
    },
    data () {
      return {
        isshow: false,
        overHeight: false
      }
    },
    mounted () {
      this.$nextTick(() => {
        console.log(this.$refs.tradertitle.offsetHeight)
        if (this.$refs.tradertitle && this.$refs.tradertitle.offsetHeight > 44) {
          this.overHeight = true
        }
      })
    },
    methods: {
      onShowAll () {
        this.isshow = true
        this.overHeight = false
      }
    }
  }
</script>
<style lang="less">
  .head-box{
    width: 6.94rem;
    padding: .44rem .28rem;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    position: relative;
    .open-pic{
      position: absolute;
      bottom: .15rem;
      width: .28rem;
      min-height: .2rem;
      left: 50%;
    }
    img{
      float: left;
      width: 1.36rem;
      min-height: 1.36rem;
    }
    .height-limit.head-conent{
      height: 1.72rem;
      overflow: hidden;
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
