<template>
  <div class="recharge-box">
    <cell :arrow="false">
      <div slot="title">充值账户</div>
      <div slot="content">13776890123</div>
    </cell>
    <cell :arrow="false">
      <div slot="title">剩余额度</div>
      <div slot="content">¥200</div>
    </cell>
    <div class="select-amount-box">
      <ul class="clx">
        <li v-for="item in list" :class="{'active': item.isActive}" @click="_onclick(item)">
          <span>¥{{item.amount}}</span>
          <span class="add">¥{{item.add}}</span>
        </li>
      </ul>
    </div>
    <action :btnText="appointText" :datas="dataSum" type="recharge"/>
  </div>
</template>
<script>
  import { Cell } from 'vmc'

  import Timepay from './Timepay'
  import Action from './Action'

  export default {
    components: {
      Cell,
      Timepay,
      Action
    },
    data () {
      return {
        list: [
          {
            amount: 1000,
            isActive: false,            
            add: 0
          },
          {
            amount: 3000,
            isActive: false,            
            add: 90
          },
          {
            amount: 8000,
            isActive: false,            
            add: 640
          },
          {
            amount: 10000,
            isActive: false,            
            add: 1200
          },
        ],
        appointText: '立即支付',
        dataSum: {
          price: '',
          add: ''
        }
      }
    },
    methods: {
      _onclick (obj) {
        this.list.forEach(item => {
          if (item !== obj) {
            item.isActive = false
          } else {
            item.isActive = !item.isActive
          }
        })
        this.dataSum.price = obj.amount
        this.dataSum.add = obj.add
      }
    }
  }
</script>
<style lang="less">
  .recharge-box{
    background-color: #0d0d0d;
    .vmc-cell{
      background-color: #171717;
      border-bottom: 1px solid #333333;
      min-height: 1.2rem;
      .cell-title{
        color: #808080;
        font-size: .32rem;
      }
    }
    .select-amount-box{
      padding-top: .38rem;
      padding-left: .38rem;
      ul{
        margin: 0 auto;
        li{
          float: left;
          margin-right: .38rem;
          margin-bottom: .38rem;
          width: 3.14rem;
          height: 1.54rem;
          border: 1px solid #666666;
          text-align: center;
          background-color: #171717;
          padding-top: .5rem;
          span{
            font-size: .5rem;
            display: block;
            margin: 0 auto;
          }
          .add{
            color: #b2b2b2;
            font-size: .36rem;
          }
        }
        li.active{
          background-color: #2b0908;
          border-color: #972723;
          span{
            color: #ff4229;
          }
        }
      }
    }
  }
</style>
