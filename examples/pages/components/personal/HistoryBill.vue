<template>
  <div>
    <lesson-list :list="bills" type="bill"/>
  </div>
</template>
<script>
  import LessonList from '../LessonList'

  import { bills } from './helper'

  export default {
    components: {
      LessonList
    },
    data () {
      return {
        bills
      }
    }
  }
</script>
<style></style>
