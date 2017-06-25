<template>
  <div>
    <lesson-list v-if="traderlessons.length > 0" :list="traderlessons" type="appoint"/>
    <div v-else class="empty-box">
      <img src="https://julyvivian.github.io/js_css_sources/empty.png"/>
      <p>操场空空如也～速去操练</p>
      <button>查看课程</button>
    </div>
  </div>
</template>
<script>
  import LessonList from '../LessonList'

  import { traderlessons } from './helper'

  export default {
    
    components: {
      LessonList
    },
    data () {
      return {
        traderlessons
      }
    }
  }
</script>
<style lang="less" scope>
  .empty-box{
    background-color: #0d0d0d;
    padding-top: 2.55rem;
    text-align: center;
    img{
      width: 4.25rem;
      height: 1.96rem;
      margin: 0 auto;
    }
    button{
      display: block;
      color: #cf372e;
      border: 2px solid #cf372e;
      font-size: .34rem;
      width: 2.36rem;
      height: .76rem;
      margin: 0 auto;
      border-radius: .08rem;
    }
    p{
      font-size: .32rem;
      color: #666666;
      height: 1.44rem;
      line-height: 1.44rem;
    }
  }
</style>
