<template>
  <div>
    <lesson-list :list="traderlessons" type="appoint"/>
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
<style></style>
