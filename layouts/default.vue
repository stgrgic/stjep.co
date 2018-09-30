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

$text = #000
$blue = #2470DF
$purple = #550088

body {
  color #000
  padding-bottom 3rem
}
a {
  color inherit
}
a {
  color $text
  border-bottom 1px solid $text
  text-decoration: none;
  // transition: all 0.2s ease;
  padding-bottom 1px
  &:hover {
    color: $blue;
    border-bottom 3px solid $blue
  }
  // &:visited {
  //   color: $purple;
  //   border-bottom 3px solid $purple
  // }
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

