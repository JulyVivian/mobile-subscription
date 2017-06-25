<template>
  <div class="camp-box">
    <div v-for="camp in camps" @click="onClick(camp)">
      <img :src="camp.pic" />
      <div v-if="type === 'normal'">
        <button>预约</button>
        <p class="limits">限{{camp.limits}}人</p>
        <p class="price-days"><span>¥{{camp.price}}</span><img src="../../assets/time.png" />{{camp.downcount}}天</p>
        <p class="detail">{{camp.detail}}</p>
      </div>
      <div v-else="type === 'personal'">
        <span class="status">{{getStatusText(camp.status)}}</span>
        <p class="price-days"><span>¥{{camp.price}}</span><img src="../../assets/time.png" />{{camp.downcount}}天</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      camps: {
        type: Array
      },
      type: {
        type: String
      }
    },
    methods: {
      onClick (item) {
        this.$router.push(`/components/playground/PlayGroundDetail/${item.id}`)
      },
      getStatusText (status) {
        switch (status) {
          case 'hassign': return '已报名'
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .camp-box{
    width: 7.5rem;
    div{
      img{
        width: 100%;
        height: 3.9rem;
        display: block;
      }
      div{
        max-height: .97rem;
        padding: .3rem;
        border-top: 1px solid #333333;
        border-bottom: 1px solid #333333;
        background-color: #1a1a1a;
        position: relative;
        .limits{
          position: absolute;
          right: .5rem;
          top: .98rem;
          width: .9rem;
          height: .25rem;
          color: #999999;
          font-size: .26rem;
        }
        .status{
          position: absolute;
          right: .28rem;
          top: .35rem;
          color: #808080;
          font-size: .3rem;
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
        .price-days{
          height: .5rem;
          line-height: .5rem;
          span{
            color: #ff851a;
            font-size: .44rem;
          }
          img{
            display: inline-block;
            width: .28rem;
            height: .28rem;
            margin-left: .24rem;
            margin-right: .1rem;
          }
        }
        .detail{
          height: .47rem;
          line-height: .47rem;
          color: #b2b2b2;
        }
      }
    }
  }
</style>
