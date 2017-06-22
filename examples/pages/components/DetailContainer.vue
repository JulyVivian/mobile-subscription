<template>
  <div class="detail-container">
    <cell :arrow="false">
      <div slot="title">
        <img src="../../assets/list.png"/>
        {{title}}
      </div>
    </cell>
    <div>{{content}}</div>
  </div>
</template>
<script>
  import { Cell } from 'vmc'

  export default {
    components: {
      Cell
    },
    props: {
      title: {
        type: String
      },
      content: {
        type: String
      }
    }
  }
</script>
<style lang="less">
  .detail-container{
    font-size: .26rem;
    color: #cccccc;
  }
</style>
