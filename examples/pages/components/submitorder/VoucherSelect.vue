<template>
  <div class="voucher-select">
    <voucherlist :list="voucherlist"/>
  </div>
</template>
<script>
  import Voucherlist from '../Voucherlist'
  import { vouchers } from '../trader/helper.js'

  export default {
    components: {
      Voucherlist
    },
    data () {
      return {
        voucherlist: vouchers
      }
    }
  }
</script>
<style>
</style>
