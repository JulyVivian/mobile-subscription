<template>
  <div class="action-box">
    <p v-if="des">月日<b>¥</b></p>
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
      btnText: {
        type: String
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
      font-size: .32rem;
      text-align: center;
      height: 1.08rem;
      line-height: 1.08rem;
      background-color: #171717;
    }
  }
</style>