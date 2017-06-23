<template>
  <div class="tab-head-box">
    <img :src="memberData[0].pic" />
    <div class="tab-head-conent">
      <h5>{{memberData[0].name}}</h5>
      <p>{{memberData[0].keywords}}</p>
      <div>{{memberData[0].detail}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      memberData: {
        type: Array
      }
    }
  }
</script>
<style lang="less">
</style>
