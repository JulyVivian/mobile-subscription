<template>
  <transition :name="direction">
  <predetermine :predeters="traders" mode="trader" :onGoToDetail="goToTraderDetail"/>
  </transition>
</template>

<script>
import { privateTraders } from './helper.js'
import Predetermine from '../Predetermine'

export default {
  name: 'PrivateTrader',
  data () {
    return {
      traders: privateTraders
    }
  },
  created () {
    document.title = '约私教'
  },
  methods: {
    goToTraderDetail (member) {
      this.$router.push(`/components/trader/detail/${member.id}`)
    }
  },
  components: {
    Predetermine
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
