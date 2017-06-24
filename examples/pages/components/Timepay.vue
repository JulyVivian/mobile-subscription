<template>
  <div class="time-pay-box">
    <ul class="clx">
      <li v-for="item in list" :class="{'not-valid': !item.isValid, 'active': item.isActive}" @click="_onclick(item)">
        <span>{{item.time}}</span>
        <span>¥{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array
      },
      onSelectTime: {
        type: Function
      }
    },
    methods: {
      _onclick (obj) {
        if (!obj.isValid) {
          return false
        } else {
          this.list.forEach(item => {
            if (item !== obj) {
              item.isActive = false
            }
          })
          obj.isActive = !obj.isActive
        }
        this.onSelectTime(obj)
      }
    }
  }
</script>
<style lang="less">
  .time-pay-box{
    padding: .3rem .3rem .82rem;
    border-top: 1px solid #333333;
    background-color: #0d0d0d;
    ul{
      margin: 0 auto;
      li{
        float: left;
        margin-right: .19rem;
        margin-bottom: .2rem;
        width: 1.53rem;
        height: .93rem;
        border: 1px solid #666666;
        text-align: center;
        background-color: #171717;
        padding-top: .13rem;
        span{
          font-size: .3rem;
          display: block;
          margin: 0 auto;
        }
      }
      li:nth-child(4n){
        margin-right: 0;
      }
      li.not-valid{
        background-color: #101010;
        border-color: #292929;
        span{
          color: #686868;
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
</style>
