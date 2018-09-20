<template>
  <nav class="nav">
    <ul>
      <li><nuxt-link to="/"><logo /></nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/now">Now</nuxt-link></li>
      <!-- <li><nuxt-link to="/lab">Lab</nuxt-link></li> -->
    </ul>
  </nav>
</template>

<script>
import logo from '@/components/stjepcoLogo'
export default {
  name: 'Navbar',
  components: {
    logo
  }
}
</script>

<style lang="stylus">
.nav {
  margin-top 2rem
  margin-bottom 3rem
  ul {
    list-style none
    margin 0
    padding 0
    display flex
    align-items center
    li {
      display inline-block
      // margin-right 2rem
      margin-right 1rem
        
      a {
        border none
        text-decoration none
        font-size 20px
        // color #1268E6
        display inline-block
        padding 0.5rem
      }
      &:first-child {
        margin-right 0.5rem
        a {
          // fill #1268E6
          padding 0
          margin-right 1rem
        }
      }
      .nuxt-link-exact-active {
        // background-color #aaa
        color #1268E6
        fill #1268E6
      }
    }
  }
}
</style>