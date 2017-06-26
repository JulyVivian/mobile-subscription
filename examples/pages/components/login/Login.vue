<template>
  <div class="login-box">
    <img src="../../../assets/logo.png"/>
    <form>
      <div><input type="tel" placeholder="手机号码"/></div>
      <div>
        <span @click="startTimer">{{!stop ? '获取验证码' : timer+'s后重发'}}</span>
        <input class="valid-code" type="tel" placeholder="验证码"/>
      </div>
      <button class="bind-btn">立即绑定</button>
    </form>
    <p>绑定即代表同意操场PLAYGROUND<b @click="goToAgreement">用户协定条款</b></p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        timer: 60,
        stop: false,
        internal: null
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
      }
    }
  }
</script>
<style lang="less" scope>
  .login-box{
    padding: 1.3rem .78rem;
    text-align: center;
    img{
      width: 1.4rem;
      height: 1.18rem;
      margin-bottom: 1.1rem;
    }
    form{
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
    p{
      height: .38rem;
      line-height: .38rem;
      margin-top: .35rem;
      text-align: center;
      color: #b2b2b2;
      font-size: .26rem;
      b{
        text-decoration: underline;
        margin-left: .1rem;
      }
    }
  }
</style>
