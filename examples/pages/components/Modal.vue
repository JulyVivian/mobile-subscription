<template>
  <div class="popup-wrapper" v-if="showPop">
    <div class="mask"></div>
    <div class="popup-content">
      <slot name="title"></slot>
      <slot name="content" class="popup-bd"></slot>
      <div class="popup-ft">
        <span v-for="(btn, i) in btns" @click="_onClick(i)">{{btn}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      btns: {
        type: Array
      },
      showPop: {
        type: Boolean
      }
    },
    methods: {
      _onClick (index) {
        this.$emit('click', index)
      }
    }
  }
</script>
<style lang="less">
  .popup-wrapper{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
      border-radius: .3rem;
      color: #000000;
      .popup-ft{
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: .87rem;
        line-height: .87rem;
        border-top: 1px solid #d9d9d9;        
        span{
          flex: 1; 
        }
        span+span{
          border-left: 1px solid #d9d9d9;
        }
      }
    }
  }
</style>