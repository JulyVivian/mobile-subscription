<template>
  <div class="appoint-group-box">
    <lesson-list :list="grouplessons" type="appoint"/>
  </div>
</template>
<script>
  import LessonList from '../LessonList'

  import { grouplessons } from './helper'

  export default {
    components: {
      LessonList
    },
    data () {
      return {
        grouplessons
      }
    }
  }
</script>
<style lang="less">
</style>
