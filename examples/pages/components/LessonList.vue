<template>
  <div class="lesson-box">
    <ul v-if="type === 'bill'">
      <li v-for="item in list">
        <span class="bill-date">{{item.date}}</span>
        <h5>{{item.billfor}}</h5>
        <span class="receiver">{{item.receiver}}</span>
        <span class="price">¥{{item.price}}</span>
        <span class="status" :class="item.status">{{getStatusText(item.status)}}</span>
      </li>
    </ul>
    <ul v-else-if="type === 'trade'" class="trade-box">
      <li v-for="item in list">
        <h5>{{item.tradefor}}</h5>
        <span class="receiver">{{item.place}}</span>
        <span class="date">{{item.date}}</span>
        <span class="duration">时长：{{item.duration}}</span>
      </li>
    </ul>
    <ul v-else-if="type === 'appoint'" class="appoint-box">
      <li v-for="item in list">
        <img :src="item.pic"/>
        <h5>{{item.tradefor}}</h5>
        <span class="receiver">{{item.lessonteacher}}</span>
        <span class="date">{{item.date}}</span>
        <span class="price">¥{{item.price}}</span>
        <span class="status" :class="item.status">{{getStatusText(item.status)}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array
      },
      type: {
        type: String
      }
    },
    methods: {
      getStatusText (status) {
        switch (status) {
          case 'hastake': return '已上课'
          case 'cancell': return '已取消'
          case 'appoint': return '已预约'
          case 'hastopup': return '已成功'
          case 'cancellappoint': return '取消预约'
          case 'gopunch': return '立即打卡'
        }
      }
    }
  }
</script>
<style lang="less" scope>
  .lesson-box{
    ul{
      li{
        padding: .28rem .3rem .34rem;
        position: relative;
        border-bottom: 1px solid #333333;
        background-color: #171717;
        .bill-date,.receiver,.status{
          display: block;
          font-size: .26rem;
          color: #999999;
        }
        h5{
          font-size: .34rem;
          height: .6rem;
          line-height: .6rem;
          margin-top: .04rem;
        }
        .price{
          font-size: .44rem;
          position: absolute;
          top: .45rem;
          right: .3rem;
        }
        .status{
          position: absolute;
          top: 1.05rem;
          right: .3rem;
        }
        .hastake,.hastopup{
          color: #3fb34f;
        }
        .appoint{
          color: #ff4236;
        }
      }
    }
    .trade-box{
      li{
        padding: .49rem .3rem;
        h5{
          font-size: .36rem;
        }
        .date{
          position: absolute;
          top: .54rem;
          right: .3rem;
          color: #b2b2b2;
        }
        .duration{
          color: #ff4236;
          font-size: .38rem;
          position: absolute;
          top: 1.04rem;
          right: .3rem;
        }
      }
    }
    .appoint-box{
      li{
        padding-left: 1.83rem;
        img{
          width: 1.35rem;
          height: 1.35rem;
          float: left;
          margin-left: -1.53rem;
        }
        .date, .hastake{
          color: #999999;
        }
        .cancellappoint{
          display: block;
          border: 1px solid #ff4236;
          color: #ff4236;
          width: 1.6rem;
          height: .56rem;
          line-height: .56rem;
          text-align: center;
          border-radius: .06rem;
        }
        .gopunch{
          display: block;
          background-color: #ff4236;
          width: 1.62rem;
          height: .58rem;
          line-height: .58rem;
          text-align: center;
          border-radius: .06rem;
          color: #ffffff;
        }
      }
    }
  }
</style>
