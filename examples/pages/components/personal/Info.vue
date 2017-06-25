<template>
  <div class="appoint-box">
    <cell :arrow="false">
      <div slot="title">电话号码</div>
      <div slot="content">13776890678</div>
    </cell>
    <cell v-for="(item, i) in infolist" key={i} @click="openPopup(item, i)">  
      <div slot="title">{{item.name}}</div>
      <div slot="content">{{vals[i]}}{{vals[i] !== '请填写' &&item.name === '体重' ? 'kg' : ''}}{{vals[i] !== '请填写' &&item.name === '身高' ? 'cm' : ''}}</div>
    </cell>
    <popup-picker :list="listEdu" :show="showPop1" v-sync:show="showPop1" v-model="vals[curIndex]"></popup-picker>
    <popup-date-picker :show="showPop2" v-sync:show="showPop2" :year="listEdu" :day="false" v-model="vals[curIndex]" valueSeparator="." tow-digit-month></popup-date-picker>
  </div>
</template> 
<script>
  import { Cell, PopupPicker, PopupDatePicker } from 'vmc'

  export default {
    components: {
      Cell,
      PopupPicker,
      PopupDatePicker
    },
    data () {
      return {
        listEdu: [],
        vals: ['请填写', '请填写', '请填写', '请填写', '请填写', '请填写'],
        curIndex: 0,
        showPop1: false,
        showPop2: false,
        infolist: [
          {
            name: '性别',
            val: '',
            type: 'single',
            detaillist: [ '男', '女'] 
          },
          {
            name: '年龄',
            val: '',
            type: 'single',
            detaillist: (() => {
              let arr = new Array(100)
              for (var i=0;i<arr.length;i++) {
                arr[i]=i+1     
              }
              return arr
            })()
          },
          {
            name: '星座',
            val: '',
            type: 'single',
            detaillist: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'] 
          },
          {
            name: '身高',
            val: '',
            type: 'single',
            detaillist: (() => {
              let arr = new Array(250)
              for (var i = 0; i < arr.length; i++) {
                arr[i]=i+1     
              }
              return arr.slice(150)
            })()
          },
          {
            name: '体重',
            val: '',
            type: 'multi',
            detaillist: [30, 100]
          },
          {
            name: '健身目的',
            val: '',
            type: 'single',
            detaillist: ['减肥', '塑形', '娱乐', '交友', '消磨时间']
          }
        ]
      }
    },
    methods: {
      openPopup (obj, index) {
        if (obj.type === 'single') {
          this.showPop1 = true
        } else {
          this.showPop2 = true
        }
        this.listEdu = obj.detaillist
        this.curIndex = index
      }
    }
  }
</script>
<style lang="less">
  .appoint-box {
    .vmc-cell{
      background-color: #171717;
      border-bottom: 1px solid #333;
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
    .vmc-popup-picker{
      .header{
        background-color: #ffffff;
        div{
          height: .9rem;
          line-height: .9rem;
        }
        .right{
          color: #ff4236;
        }
      }
      .vmc-picker{
        .picker-list{
          ul{
            background-color: #ffffff;
            li{
              background-color: #ffffff;
              color: #000000;
            }
          }
        }
      }
    }
  }
</style>