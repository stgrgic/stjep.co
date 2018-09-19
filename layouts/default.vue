<template>
  <div class="container">
    <Navbar />
    <nuxt/>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="stylus">
.container {
  max-width 1030px
  width 100%
  margin 0 auto
}
</style>

