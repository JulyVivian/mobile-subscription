<template>
  <div class="popup-wrapper">
    <div class="mask"></div>
    <div class="popup-content">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="bottom">
        <span>暂不</span>
        <span>打卡</span>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showPop: true
      }
    }
  }
</script>
<style lang="less" scope>
  .popup-wrapper{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    .mask{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #000000;
      opacity: 0.6;
      filter: alpha(opacity=60);
      z-index: 10;
    }
    .popup-content{
      background-color: #ffffff;
      width: 5.44rem;
      height: 4.29rem;
      transform: translateX(-50%) translateY(-50%);
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 11;
      border-radius: .1rem;
      color: #000000;
    }
  }
</style>