<template>
  <div class="list-box">
    <ul>
      <li v-for="item in list" :class="{'valid': item.isValid, 'not-valid': !item.isValid}">
        <img src="../../assets/pick.png"/>
        <div class="list-bd">
          <span class="price">¥<b>{{item.price}}</b></span>
          <span class="title">{{item.title}}</span>
        </div>
        <span class="list-ft">{{item.validdate}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array
      }
    }
  }
</script>
<style lang="less" scoped>
  .list-box{
    padding: .3rem .29rem;
    ul{
      width: 6.92rem;
      li{
        width: 6.32rem;
        height: 1.96rem;
        margin-bottom: .2rem;
        padding: .35rem .3rem 0;
        position: relative;
        img{
          position: absolute;
          top: .72rem;
          right: .3rem;
          width: .42rem;
          height: .42rem;
        }
        .list-bd{
          height: 1rem;
          line-height: 1rem;
          .price{
            color: #ff851a;
            font-size: .5rem;
            b{
              font-size: .76rem;
            }
          }
          .title{
            font-size: .38rem;
            color: #333333;
            margin-left: .58rem;
          }
        }
      }
      .valid{
        background: url('../../assets/valid.png') no-repeat;
        background-size: contain;
      }
      .not-valid{
        background: url('https://julyvivian.github.io/js_css_sources/notvalid.png') no-repeat;
        background-size: contain;
      }
    }
  }
</style>
