<template>
  <div>
    <lesson-list :list="grouplessons" type="appoint"/>
    <modal />
  </div>
</template>
<script>
  import LessonList from '../LessonList'
  import Modal from '../Modal'

  import { grouplessons } from './helper'

  export default {
    components: {
      LessonList,
      Modal
    },
    data () {
      return {
        grouplessons
      }
    }
  }
</script>
<style></style>
