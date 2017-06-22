<template>
  <popup-picker :show="show" v-sync:show="show" :list="list"></popup-picker>
</template>
<script>
  import { PopupPicker } from 'vmc'

  export default {
    props: {
      show: {
        type: Boolean
      },
      value: {
        type: String
      },
      list: {
        type: Array
      }
    },
    components: {
      PopupPicker
    }
  }
</script>
<style>
</style>
