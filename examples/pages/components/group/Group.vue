<template>
  <div>
    <calender />
    <predetermine :predeters="lessons" mode="lesson" :onGoToDetail="goToGroupDetail"/>
  </div>
</template>

<script>
import { groupLessons } from './helper.js'
import Predetermine from '../Predetermine'
import Calender from '../ui/Calender'

export default {
  name: 'Group',
  data () {
    return {
      lessons: groupLessons
    }
  },
  created () {
    document.title = '约团课'
  },
  methods: {
    goToGroupDetail (member) {
      this.$router.push(`/components/group/detail/${member.id}`)
    }
  },
  components: {
    Predetermine,
    Calender
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
