<template>
  <div class="voucher-select">
    <voucherlist :list="voucherlist"/>
  </div>
</template>
<script>
  import Voucherlist from '../Voucherlist'
  import { vouchers } from './helper.js'

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
  .voucher-select{
    background-color: #;
  }
</style>
