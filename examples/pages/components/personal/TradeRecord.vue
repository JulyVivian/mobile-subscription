<template>
  <div>
    <lesson-list :list="tradeRecords" type="trade"/>  
  </div>
</template>
<script>
  import LessonList from '../LessonList'

  import { tradeRecords } from './helper'
 
  export default {
    components: {
      LessonList
    },
    data () {
      return {
        tradeRecords
      }
    }
  }
</script>
<style></style>
