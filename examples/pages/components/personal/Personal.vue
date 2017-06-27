<template>
  <div class="personal-box">
    <div class="card">
      <p class="card-title"><span>去充值</span>操场余额</p>
      <p class="price">¥18,888</p>
      <p class="idlist"><span @click="jump('historybill')">历史账单</span><span @click="jump('vouchers')">代金券</span>ID:13776890678</p>
    </div>
    <div class="train-times">
      <p><b>12</b><span>累计训练／次</span></p>
      <p><b>255</b><span>累计时长／分</span></p>
      <p><b>12</b><span>累计天数</span></p>
    </div>
    <cell @click="jump('traderecord')">
      <div slot="title">训练记录</div>
      <div slot="content">2</div>
    </cell>
    <cell class="group-lesson" @click="jump('appointgroup')">
      <div slot="title">已预约团体课程</div>
      <div slot="content">3</div>
    </cell>
    <cell @click="jump('appointtrader')">
      <div slot="title">已预约个人课程</div>
      <div slot="content">1</div>
    </cell>
    <cell @click="jump('appointcampus')">
      <div slot="title">已报名训练营</div>
      <div slot="content">1</div>
    </cell>
    <cell @click="jump('info')" class="group-lesson">
      <div slot="title">个人信息</div>
    </cell>
  </div>
</template>
<script>
  import { Cell } from 'vmc'

  export default {
    components: {
      Cell
    },
    methods: {
      jump(path) {
        this.$router.push('/personal/' + path)
      }
    }
  }
</script>
<style lang="less">
  .personal-box{
    padding: .4rem 0;
    .card{
      background: url('https://julyvivian.github.io/js_css_sources/card.png') no-repeat top center;
      height: 3.67rem;
      background-size: contain;
      padding: .3rem;
      margin: 0 .3rem;
      p{
        font-size: .34rem;
        color: #624e26;
      }
      .card-title{
        height: .52rem;
        line-height: .52rem;
        padding-left: .64rem;
        span{
          float: right;
          width: 1.63rem;
          height: .5rem;
          line-height: .5rem;
          text-align: center;
          border: 1px solid #d4c498;
          border-radius: .25rem;
        }
      }
      .price{
        height: 2.38rem;
        line-height: 2.38rem;
        font-size: .8rem;
        color: #624e26;
        font-weight: bold;
        text-align: center;
      }
      .idlist{
        color: #624e26;
        font-size: .3rem;
        height: .3rem;
        line-height: .3rem;
        padding: .18rem 0;
        span{
          float: right;
          width: 1.55rem;
          text-align: center;
        }
        span:nth-child(1){
          border-left: 1px solid #624e26;
        }
      }
    }
    .train-times{
      display: flex;
      background-color: #171717;
      border-top: 1px solid #333333;
      border-bottom: 1px solid #333333;
      height: 1.38rem;
      padding-top: .44rem;
      p{
        flex: 1;
        text-align: center;
        b{
          font-size: .6rem;
          color: #ff4236;
          display: block;
        }
        span{
          font-size: .22rem;
        }
      }
    }
    .group-lesson.vmc-cell{
      margin-top: .2rem;
      border-top: 1px solid #333333;
    }
    .vmc-cell{
      background-color: #171717;
      border-bottom: 1px solid #333333;  
      height: 1.02rem;
      padding: 0 .3rem;
      .cell-title{
        font-size: .32rem;
      }
      .cell-arrow{
        i{
          color: #505051;
        }
      }  
      .cell-content{
        div{
          margin-bottom: -.04rem;
        }
      }  
    }
  }
</style>
