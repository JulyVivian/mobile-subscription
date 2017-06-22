<template>
  <div class="appoint-box">
    <cell :arrow="false">
      <div slot="title">教练</div>
      <div slot="content">jake</div>
    </cell>
    <cell :arrow="false">
      <div slot="title">课时</div>
      <div slot="content">1课时</div>
    </cell>
    <cell :arrow="false">
      <div slot="title">时间</div>
      <div slot="content">月日</div>
    </cell>
    <cell :arrow="false">
      <div slot="title">价格</div>
      <div slot="content">¥</div>
    </cell>
    <cell :arrow="false">
      <div slot="title">地址</div>
      <div slot="content">静安区</div>
    </cell>
    <cell class="voucher" @click="openVoucherList">
      <div slot="title">代金券</div>
      <div slot="content">1张可用</div>
    </cell>
    <cell :arrow="false">
      <div slot="title">账户余额</div>
      <div slot="content">¥</div>
    </cell>
    <cell :arrow="false">
      <div slot="title">还需支付</div>
      <div slot="content">¥</div>
    </cell>
    <p>备注:请提前10分钟到达场地,穿着舒适的运动服及运动鞋。</p>
    <action @click="submitOrder" :des="false" :btnText="submitText"/>
  </div>
</template>
<script>
  import { Cell } from 'vmc'
  import Action from '../Action'

  export default {
    components: {
      Cell,
      Action
    },
    data () {
      return {
        submitText: '提交订单'
      }
    },
    methods: {
      openVoucherList () {
        this.$router.push('/components/trader/vouchers')
      },
      submitOrder () {
        console.log(3)
      }
    }
  }
</script>
<style lang="less">
  .appoint-box {
    .vmc-cell{
      background-color: #171717;
      border-color: #333333;
      border-bottom: none;
      color: #808080;
      padding: 0 .3rem;
      min-height: 1.2rem;
      .cell-title{
        div{
          font-size: .32rem;
          color: #808080;
        }
      }
      .cell-content{
        div{
          color: #ffffff;
          font-size: .32rem;
        }
      }
      .cell-arrow{
        .icono-caretRight{
          color: #808080;
        }
      }
    }
    .voucher{
      margin-top: .28rem;
      border-top: 1px solid #333333;
    }
    p{
      background-color: #0d0d0d;
      height: .84rem;
      line-height: .84rem;
      color: #666666;
      font-size: .26rem;
      text-indent: .3rem;
    }
  }
</style>