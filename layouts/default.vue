<template>
  <div class="container">
    <Navbar />
    <nuxt/>
    <footer>
      &copy; {{ curentYear }} Stjepan Grgic
    </footer>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar'
  export default {
    name: 'Home',
    computed: {
      curentYear: function () {
        return (new Date()).getFullYear()
      }
    },
    components: {
      Navbar
    }
  }
</script>

<style lang="stylus">

body {
  color #000
  padding-bottom 3rem
}
a {
  color inherit
}


.container {
  max-width 1030px
  width 100%
  margin 0 auto
  padding-left 15px
  padding-right 15px
}

footer {
  margin-top 4rem
  opacity 0.5
}
</style>

