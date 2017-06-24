<template>
  <div class="tab-control-box">
    <tab-control :tab-list="memberData" tab-index="0">
      <template slot="tabPage" scope="props">
        <div>
          <i></i>
          <h5>{{props.item.name}}</h5>
          <p class="career">课程教练</p>
          <p>{{props.item.detail}}</p>
        </div>
      </template>
    </tab-control>
  </div>
</template>
<script>
  import { TabControl } from 'vmc'

  export default {
    components: {
      TabControl
    },
    props: {
      memberData: {
        type: Array
      }
    }
  }
</script>
<style lang="less">
  .tab-control-box{
    box-sizing: border-box;
    .vmc-tab-control{
      .tab-items{
        background-color: #0d0d0d;
        padding-top: .22rem;
        padding-left: 3.08rem;
        height: 1.66rem;
        display: initial;
        img{
          height: 1.34rem;
          width: 1.34rem;
        }
        .tab-item{
          float: left;
          width: 1.34rem;
          height: 1.67rem;
          margin-right: .3rem;
          background-color: #0d0d0d;
          position: relative;
          .arrow{
            position: absolute;
            bottom: 0;
            width: .36rem;
            height: .18rem;
            left: .49rem;
            display: none;
          }
        }
        .tab-item.active{
          .arrow{
            display: block;
          }
        }        
      }
      .tab-pages{
        height: 2.3rem;
        background-color: #171717;
        .tab-page{
          padding-top: .26rem;
          text-align: center;
          h5{
            font-size: .4rem;
            color: #ffffff;
          }
          p.career{
            color: #ff851a;
            padding: 0;
          }
          p{
            font-size: .28rem;
            color: #b2b2b2;
            padding: 0 20%;
          }
        }
      }
    }
  }
</style>
