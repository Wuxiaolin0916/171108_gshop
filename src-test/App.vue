<template>
  <div>
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqAddress} from "./api"
export default {
//  async mounted(){
//    let result = await reqAddress('40.10038,116.36867')
//    console.log(result)
//  },
  mounted() {
    this.$store.dispatch('getAddress')
  },
  components: {
    FooterGuide
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
