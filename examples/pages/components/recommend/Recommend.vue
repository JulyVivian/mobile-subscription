<template>
  <div>
    <div class="recommend-box">
      <p class="title">邀请朋友赢好礼</p>
      <p class="click-pot">点击右上角分享至微信好友或群</p>
      <p class="with">你和TA都将获得</p>
      <img class="voucher" src="https://julyvivian.github.io/js_css_sources/coupon.png"/>
      <p class="has-invitated">你已邀请4位好友，共获得80元代金券</p>
    </div>
    <img class="bottom-bg-pic" src="https://julyvivian.github.io/js_css_sources/down.jpg"/>
  </div>
</template>
<script></script>
<style lang="less" scope>
  .recommend-box{
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
      color: #ff4236;
      font-size: .5rem;
      height: 1.08rem;
      line-height: 1.08rem;
    }
    .click-pot{
      height: .9rem;
      line-height: .9rem;
      font-size: .4rem;
    }
    .with{
      color: #b2b2b2;
      font-size: .36rem;
      height: .5rem;
      line-height: .5rem;
      margin-bottom: .28rem;
    }
    .voucher{
      width: 4.06rem;
      height: 2.14rem;
    }
    .has-invitated{
      color: #b2b2b2;
      font-size: .26rem;
      height: .5rem;
      line-height: .5rem;
      margin-top: .65rem;
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
