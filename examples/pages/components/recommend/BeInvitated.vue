<template>
  <div>
    <div v-if="being" class="beinvitated-box">
      <p class="title">恭喜您</p>
      <p class="get">获得<span>20元</span>新手代金券1张</p>
      <form>
        <div><input type="tel" placeholder="手机号码"/></div>
        <div>
          <span @click="startTimer">{{!stop ? '获取验证码' : timer+'s后重发'}}</span>
          <input class="valid-code" type="tel" placeholder="验证码"/>
        </div>
        <button class="bind-btn" @click="getProfit">领取奖励</button>
      </form>
    </div>
    <div v-else class="getinvitated">
      <img class="pic" src="https://julyvivian.github.io/js_css_sources/p3.png"/>
      <h6>Sandy</h6>
      <p>邀请您来操场操练起来！</p>
      <button class="bind-btn">立即赴约</button>      
    </div>
    <img class="bottom-bg-pic" src="https://julyvivian.github.io/js_css_sources/down.jpg"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        timer: 60,
        stop: false,
        internal: null,
        being: true
      }
    },
    methods: {
      update () {
        if (this.timer <= 0) {
          this.timer = 60
        } else {
          this.timer--
        }
      },
      startTimer () {
      //如果是false就开始倒计时，如果是true就停止倒计时
      if (this.stop == false) {
        this.Interval = setInterval(this.update, 1000);    
      } else {
        clearInterval(this.Interval);
      }
        this.stop = !this.stop;
      },
      goToAgreement () {
        this.$router.push('/login/useragreement')
      },
      getProfit () {
        this.being = false
      }
    }
  }
</script>
<style lang="less" scope>
  .beinvitated-box{
    width: 7.5rem;
    background: url('https://julyvivian.github.io/js_css_sources/up.jpg') no-repeat top center;
    background-size: contain;
    padding-top: 2.62rem;
    text-align: center;
    position: relative;
    z-index: 1;
    img{
      width: 100%;
    }
    .title{
      font-size: .5rem;
      height: .62rem;
      line-height: .62rem;
    }
    .get{
      font-size: .4rem;
      height: .82rem;
      line-height: .82rem;
      span{
        color: #ff851a;
        font-size: .5rem;
      }
    }
    form{
      padding: 0 .78rem;
      margin-top: .54rem;
      div{
        height: .94rem;
        line-height: .94rem;
        margin-bottom: .4rem;
        border-bottom: 1px solid #8b8b8b;
        input{
          display: block;
          height: 100%;
          font-size: .36rem;
        }
        .valid-code{
          width: 4.38rem;
        }
        span{
          color: #ff4236;
          font-size: .26rem;
          width: 1.52rem;
          height: .45rem;
          line-height: .45rem;
          float: right;
          margin-top: .23rem;
          border-left: 1px solid #8b8b8b;
        }
      }
      .bind-btn{
        margin-top: 1.42rem;
        background-color: #ff4236;
        display: block;
        height: 1rem;
        line-height: 1rem;
        width: 100%;
        border-radius: .5rem;
        color: #ffffff;
        font-size: .36rem;
      }
    }
  }
  .getinvitated{
    width: 7.5rem;
    background: url('https://julyvivian.github.io/js_css_sources/up.jpg') no-repeat top center;
    background-size: contain;
    padding-top: 2.62rem;
    text-align: center;
    position: relative;
    z-index: 1;
    img{
      width: 100%;
    }
    .pic{
      width: 1.55rem;
      height: 1.55rem;
    }
    h6{
      font-size: .48rem;
      height: .88rem;
      line-height: .88rem;
    }
    p{
      font-size: .4rem;
      margin-bottom: .7rem;
      height: .56rem;
      line-height: .56rem;
    }
    .bind-btn{
      background-color: #ff4236;
      display: block;
      height: 1rem;
      line-height: 1rem;
      width: 5.9rem;
      border-radius: .5rem;
      color: #ffffff;
      font-size: .36rem;
      margin: 0 auto;
    }
  }
  .bottom-bg-pic{
    height: 3.62rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
