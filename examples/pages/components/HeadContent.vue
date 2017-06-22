<template>
  <div class="head-box">
    <img :src="member[0].pic" />
    <div class="head-conent">
      <h5>{{member[0].name}}</h5>
      <p>{{member[0].keywords}}</p>
      <div>{{member[0].detail}}</div>
    </div>
  </div>
</template>
<script>
  import { sumdata } from '../../assets/helper.js'

  export default {
    data () {
      return {
        member: [],
        datas: sumdata
      }
    },
    mounted () {
      this.member = this.datas.filter(item => {
        if (item.id === this.memberId) {
          return true
        }
      })
    },
    props: {
      memberId: {
        type: String
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
        font-size: .4rem;
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
      }
    }
  }
</style>
