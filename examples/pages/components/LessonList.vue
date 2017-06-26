<template>
  <div class="lesson-big-box">
    <div class="lesson-box">
      <ul v-if="type === 'bill'">
        <li v-for="item in list">
          <span class="bill-date">{{item.date}}</span>
          <h5>{{item.billfor}}</h5>
          <span class="receiver">{{item.receiver}}</span>
          <span class="price">¥{{item.price}}</span>
          <span class="status" @click="onOpenModal(item)" :class="item.status">{{getStatusText(item.status)}}</span>
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
          <span class="status" @click="onOpenModal(item)" :class="item.status">{{getStatusText(item.status)}}</span>
        </li>
      </ul>
    </div>
    <modal :btns="btntext1" :showPop="showPop1" @click="onClickModal" class="top-up">
      <div slot="title" class="popup-hd">请输入教练编号</div>
      <div slot="content" class="popup-bd">
         <div><input type="tel"/><input type="tel"/><input type="tel"/><input type="tel"/></div>
      </div>
    </modal>
    <modal :btns="btntext2" :showPop="showPop2" @click="onClickModal" class="cancel-appoint">
      <div slot="title" class="popup-hd">
        <p>距离预约时间不足6小时，如现在取消，</p>
        <p>则需扣除30%预约费用，具体如下：</p>
      </div>
      <div slot="content" class="popup-bd">
        <div>
          <p>200-200*0.3=<b>¥140</b></p>
          <p>是否继续？</p>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
  import Modal from './Modal'

  export default {
    components: {
      Modal
    },
    data () {
      return {
        curObj: {},
        btntext1: ['暂不', '打卡'],
        btntext2: ['仍然取消', '暂不'],
        showPop1: false,
        showPop2: false,
        mode: ''
      }
    },
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
      },
      onClickModal (index) {
        this.showPop1 = false
        this.showPop2 = false
        if (this.mode === 'cancel') {
          // 确定取消
          if (index === 0) {
            console.log('取消预约')
          }
        } else if (this.mode === 'punch'){
          // 确定打卡
          if (index === 1) {
            console.log('打卡')
          } 
        }
      },
      onOpenModal (obj) {
        this.curObj = obj
        if (obj.status === 'cancellappoint') {
          this.showPop2 = true
          this.mode = 'cancel'
        } else if (obj.status === 'gopunch'){
          this.showPop1 = true
          this.mode = 'punch'
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
  .lesson-big-box{
    .top-up.popup-wrapper{
      .popup-content{
        padding-top: .42rem;
        text-align: center;
        .popup-hd{
          height: .7rem;
          line-height: .7rem;
          font-size: .34rem;
          color: #333333;
          margin-bottom: .42rem;
        }
        .popup-bd{
          div{
            width: 4.7rem;
            height: 1.1rem;
            margin: 0 auto;
            border: 1px solid #808080;
            input{
              float: left;
              width: 1.15rem;
              height: 1.1rem;
              line-height: 1.1rem;
              text-align: center;
              color: #333333;
              font-size: .8rem;
            }
            input+input{
              border-left: 1px solid #808080;
            }
          }
        }
      }
    }
    .popup-ft{
      span{
        font-size: .34rem;
        color: #666666;
      }
      span+span{
        color: #ff4236;
      }
    }
    .cancel-appoint.popup-wrapper{
      .popup-content{
        text-align: center;
        padding-top: .52rem;
        .popup-hd{
          p{
            color: #333333;
            font-size: .28rem;
            height: .47rem;
            line-height: .47rem;
          }
        }
        .popup-bd{
          p{
            height: 1.28rem;
            line-height: 1.28rem;
            font-size: .44rem;
            color: #333333;
            b{
              font-size: .5rem;
              color: #ff4236;
            }
          }
          p+p{
            font-size: .4rem;
            height: .64rem;
            line-height: .64rem;
          }
        }
      }
    }
  }
</style>
