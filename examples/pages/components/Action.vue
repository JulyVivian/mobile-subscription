<template>
  <div class="action-box">
    <p v-if="des && type !== 'recharge'">{{datas.month}}月{{datas.day}}日{{datas.time}}<b>¥{{datas.price}}</b></p>
    <p v-else-if="des && type === 'recharge'" class="recharge"><b>¥{{datas.price}}</b>送¥{{datas.add}}</p>
    <v-button type="primary" @click="_onClick">{{btnText}}</v-button>
  </div>
</template>
<script>
  import { vButton } from 'vmc'

  export default {
    components: {
      vButton
    },
    props: {
      des: {
        type: [Boolean, String],
        default: true
      },
      type: {
        type: String
      },
      btnText: {
        type: String
      },
      datas: {
        type: Object
      }
    },
    methods: {
      _onClick(event) {
        this.$emit('click', event)
      }
    }
  }
</script>
<style lang="less">
  .action-box{
    height: 1.08rem;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    border-top: 1px solid #333333;
    .recharge{
      b{
        margin-left: 0;
        margin-right: .2rem;
        color: #ff3b44;        
      }
      color: #ffffff;
    }
    .vmc-button{
      height: 1.08rem;
      line-height: 1.08rem;
      background-color: #ff4236;
      flex: 1;
      .block{
        font-size: .4rem;
      }
    }
    p{
      width: 4.34rem;
      color: #ff3b44;
      font-size: .28rem;
      height: 1.08rem;
      line-height: 1.08rem;
      background-color: #171717;
      text-indent: .3rem;
      b{
        font-size: .34rem;
        margin-left: .2rem;
      }
    }
  }
</style>