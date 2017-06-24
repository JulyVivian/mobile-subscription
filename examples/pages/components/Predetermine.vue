<template>
  <div class="predeter-box">
    <div v-for="predeter in predeters" class="predeter-item" @click="onGoToDetail(predeter)">
      <img :src="predeter.pic"/>
      <div :class="{ 'trader-box': mode === 'trader', 'lesson-box': mode === 'lesson' }">
        <button>预约</button>
        <h5 class="ellipsis">{{predeter.name}}</h5>
        <p class="key-words">{{predeter.keywords}}</p>
        <p v-if="mode === 'trader'" class="detail ellipsis">{{predeter.detail}}</p>
        <p v-else="mode === 'lesson'" class="detail"><b></b><span>{{predeter.time}}</span><span>¥{{predeter.price}}</span></p>
      </div>
    </div>    
  </div>
</template>
<script>
export default {
  props: {
    predeters: {
      type: Array
    },
    mode: {
      type: String
    },
    onGoToDetail: {
      type: Function
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.predeter-box{
  .predeter-item{
    height: 1.34rem;
    padding: .42rem .28rem;
    border-bottom: 1px solid #333333;
    background-color: #1a1a1a;
    img{
      float: left;
      width: 1.3rem;
    }
    .lesson-box{
      button{
        position: absolute;
        bottom: .04rem;
        right: 0;
      }
      h5{
        margin-left: -.18rem;
      }
      .detail{
        b{
          width: .25rem;
          height: .25rem;
          border: 1px solid #b2b2b2;
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
    }
    div{
      position: relative;
      background-color: #1a1a1a;
      margin-left: 1.58rem;            
      h5{
        height: .5rem;
        line-height: .5rem;
        font-size: .34rem;
      }
      .key-words{
        color: #ff851a;
        font-size: .28rem;
        height: .46rem;
        line-height: .46rem;
        margin-bottom: .07rem;
      }
      .detail{
        font-size: .28rem;
        color: #b2b2b2;
      }
      button{
        float: right;
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
