<template>
  <div :class="{'detail-container intro': title === '课程介绍', 'detail-container notice': title === '注意事项'}">
    <cell :arrow="false">
      <div slot="title">
        <img src="../../assets/list.png"/>
        {{title}}
      </div>
    </cell>
    <div v-if="title === '课程介绍'" class="intro-box">
      <p>减脂不是一件简单的事，也不是一件非常难的事。你需要耐心和决心，长期可坚持的减脂方法才是最好的。<br>可能你试过各种减脂的方法，这一次可能是最正确的！<br>每周三次的减脂训练，让你从入门到精通，减脂从此不再困惑。<br>下定决心，跟着我们一起进行燃脂挑战吧！</p>
      <img src="https://julyvivian.github.io/js_css_sources/detailpic1.jpg"/>
      <img src="https://julyvivian.github.io/js_css_sources/detailpic2.jpg"/>
      <ul>
        <li>
          <h6>训练效果</h6>
          <p>体能肯定会有所上升,腿部肌肉会出现,运动后注意拉伸</p>
        </li>
        <li>
          <h6>适合人群</h6>
          <p>建议BMI大于28的客户慎重选择，或咨询工作人员！</p>
        </li>
        <li>
          <h6>预约规则</h6>
          <p>每周五定时更新下周课程下周六到周四约课每班上限10人</p>
        </li>
      </ul>
    </div>
    <div v-else="title === '注意事项'" class="notice-box">
      <p><span>相关疾病请慎选：</span>心脏病；骨质疏松症；血糖及血压疾病；严重的慢性并发症，如心脏，肾，视网膜病变，严重下肢血管病变，植物神经功能障碍等；肝炎、肾炎等疾病；手术完仍处于康复期的患者，比如韧带撕裂康复、骨折康复、半月板损伤康复等；有脊椎及关节变形或损伤、肢体重要骨骼有过骨折史；怀孕或者还处在哺乳期；存在其他已知或未知的不适应大强度运动的疾病。</p>
    </div>
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
  .detail-container.notice{
    margin-bottom: 1.28rem;
  }
  .detail-container{
    color: #cccccc;
    background-color: #171717;
    margin-top: .2rem;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    .vmc-cell{
      border: 0;
      min-height: 1.04rem;
    }
    .intro-box, .notice-box{
      padding: 0 .3rem .3rem;
      p{
        font-size: .26rem;
        line-height: .34rem;
        span{
          margin-bottom: .2rem;
          display: block;
        }
      }
      img{
        height: 3.6rem;
        margin-top: .28rem;
      }
      ul{
        padding: 0 .3rem;
        margin-top: .28rem;
        li{
          list-style: url('../../assets/liststyle1.png');
          h6{
            color: #ff851a;
            font-size: .26rem;
            height: .48rem;
            line-height: .48rem;
          }
          p{
            min-height: .62rem;
            line-height: .62rem;
          }
        }
      }
    }
  }
</style>
