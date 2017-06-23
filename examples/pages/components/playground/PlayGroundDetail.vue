<template>
  <div class="playground-detail-box">
    <tab-head :memberData="memberData"/>
    <cell :arrow="false" class="recharge">
      <div slot="title"><img src="../../../assets/rmb.png"/>¥60/节</div>
      <div slot="content">充值优惠</div>
    </cell>
    <cell :arrow="false">
      <div slot="title"><img src="../../../assets/yellowtime.png"/>年月日时分</div>
    </cell>
    <cell>
      <div slot="title"><img src="../../../assets/yellowlocation.png"/>地址</div>
    </cell>
    <detail-container :title="titles[0]"></detail-container>
    <detail-container :title="titles[1]"></detail-container>
  </div>
</template>
<script>
  import { Cell } from 'vmc'
  import { playgrounds } from './helper.js'

  import TabHead from '../TabHead'
  import DetailContainer from '../DetailContainer'

  export default {
    data () {
      return {
        memberId: 0,
        playgrounds,
        memberData: [],
        titles: ['课程介绍', '注意事项'],
        mode: 'vertical'
      }
    },
    beforeMount () {
      const {params: {id}} = this.$route

      if (id) {
        this.memberId = id
        this.memberData = this.playgrounds.filter(item => {
          if (item.id === id) {
            return true
          }
        })
      }
    },
    methods: {
    },
    components: {
      TabHead,
      Cell,
      DetailContainer
    }
  }
</script>
<style lang="less">
  .playground-detail-box{
    .recharge.vmc-cell{
      padding: .19rem .3rem;
      min-height: .82rem;
      .cell-title{
        div{
          height: .82rem;
          line-height: .82rem;
          border-right: 1px solid #333;
        }
      }
      .cell-content{
        padding-left: .52rem;
        div{
          color: #ff4236;
          font-weight: bold;
        }
      }
    }
    .vmc-cell{
      background-color: #171717;
      border-color: #333333;
      border-bottom: none;
      color: #808080;
      padding: 0 .3rem;
      min-height: 1.2rem;
      .cell-title{
        div{
          font-size: .3rem;
          color: #ffffff;
          font-weight: bold;          
          img{
            width: .28rem;
            height: .28rem;
            margin-right: .18rem;
          }
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
  }
</style>
