<template>
  <div>
    <campus :camps="grounds" type="personal"/>
  </div>
</template>

<script>
import { playgroundlessons } from './helper.js'
import Campus from '../Campus'

export default {
  data () {
    return {
      grounds: playgroundlessons
    }
  },
  created () {
    document.title = '已报名训练营'
  },
  components: {
    Campus
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.group-box{
  .group-item{
    height: 1.34rem;
    padding: .42rem .28rem;
    border: 1px solid #333333;
    img{
      float: left;
      width: 1.3rem;
    }
    div{
      position: relative;
      p, h5{
        margin-left: 1.58rem;
      }
      h5{
        height: .5rem;
        line-height: .5rem;
        font-size: .36rem;
        margin-left: 1.4rem;
      }
      .key-words{
        color: #ff851a;
        font-size: .28rem;
        height: .46rem;
        line-height: .46rem;
        margin-bottom: .07rem;
      }
      p{
        b{
          width: .26rem;
          height: .26rem;
          border: 2px solid #ffffff;
          display: inline-block;
          border-radius: 50%;
          margin-right: .1rem;
          vertical-align: sub;
        }
        span{
          margin-right: .13rem;
          font-size: .3rem;
        }
        span:nth-child(3){
          color: #ff4236;
        }
      }
      button{
        position: absolute;
        bottom: .04rem;
        right: 0;
        width: 1.34rem;
        height: .6rem;
        background-color: #ff4236;
        font-size: .32rem;
        color: #ffffff;
        border-radius: .04rem;
      }
    }
  }
}
</style>
