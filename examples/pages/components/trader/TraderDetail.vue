<template>
  <div class="detail-box">
    <head-content :memberData="memberData"/>
    <calender />
    <timepay :list="timelist"/>
    <cell @click="openMap">
      <div slot="title"><img src="../../../assets/location.png" />静安区安远路128号平高国际大厦3楼</div>
    </cell>
    <action @click="goAppoint" :btnText="appointText"/>
  </div>
</template>
<script>
  import { Cell } from 'vmc'

  import HeadContent from '../HeadContent'
  import Timepay from '../Timepay'
  import Action from '../Action'
  import Calender from '../ui/Calender'

  import { privateTraders, payfortimes } from './helper.js'

  export default {
    data () {
      return {
        memberId: 0,
        timelist: payfortimes,
        memberlist: privateTraders,
        memberData: [],
        appointText: '立即预约'
      }
    },
    beforeMount () {
      const {params: {id}} = this.$route

      if (id) {
        this.memberId = id
      }
    },
    mounted () {
      this.memberData = this.memberlist.filter(item => {
        if (item.id === this.memberId) {
          return true
        }
      })
    },
    methods: {
      openMap () {
        console.log(0)
      },
      goAppoint () {
        this.$router.push(`/components/appoint/${this.memberId}`)
      }
    },
    components: {
      HeadContent,
      Calender,
      Timepay,
      Cell,
      Action
    }
  }
</script>
<style lang="less">
  .detail-box {
    .vue-date-container{
      background-color: #171717;
    }
    .vmc-cell{
      background-color: #171717;
      border-top: 1px solid #333;
      color: #999999;
      padding: 0 .29rem;
      min-height: .66rem;
      .cell-title{
        div{
          font-size: .26rem;
          img{
            width: .28rem;
            height: .32rem;
            display: inline-block;
            margin-right: .12rem;
            vertical-align: text-top;
          }
        }
      }
      .cell-arrow{
        .icono-caretRight{
          color: #989898;
        }
      }
    }
  }
</style>
