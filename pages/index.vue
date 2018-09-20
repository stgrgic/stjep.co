<template>
<div class="home">
  <div class="home__description">
    <p style="font-size: 44px; line-height: 1;margin-bottom: 1rem">👋</p>
    <h2>10 seconds!</h2>
    <p>Hi, my name is Stjepan.<br>
    I am a designer who loves to code, draw, take photos... <br>
    Lately, I’ve been focusing on interaction and experience design. <!-- By working on such projects, I use all my potential and knowledge, and that makes me happy! --></p>
    <h2>Work.</h2>
    <p>I have worked with startups and business around the world like <a href="">OptimoRoute</a>, <a href="">Memgraph</a>, <a href="">Agrivi</a>, <a href="">vibby</a> and others. For more details, check <a href="">my resume</a>.</p>
    <h2>Now...</h2>
    <p>Read more on <a href="">Now page</a> (<a href="">What is now page?</a>). Also, you can find me on <a href="">instagram</a> and <a href="">twitter</a>.</p>
    <h2>Writing</h2>
    <ul>
      <li><a href="">Misfit Designer</a></li>
      <li>Designer's Road <a href="">(Archive)</a>. <a href="">What happened?</a></li>
    </ul>
    <h2>Simple stupid projects</h2>
    <!-- <p>I grow up on cuntry side making figurines from mud, but now I am trying to make somethin o</p> -->
    <p>Sometimes I think of something stupid that might be usefull and I simply build it. <span style="font-size: 14px; font-weight: bold">¯\_(ツ)_/¯</span></p>
    <ul>
      <li><a href="">Aspect Calculator</a></li>
      <li><a href="">CSS Tools</a></li>
      <li><a href="">Chrome Plugins</a></li>
    </ul>
  </div>
  <!-- <Resume /> -->
</div>
</template>

<script>
import Resume from '@/components/Resume'
export default {
  components: {
    Resume
  }
}
</script>

<style lang="stylus">

$text = #000
$blue = #2470DF
$purple = #550088

.home {
  &__description {
    max-width: 600px;
    font-size: 20px;
    line-height: 1.6;
    color #000
    h2 {
      font-size 20px
      margin 0
      margin-top 3rem
      margin-bottom 0.5rem
    }
    
    p {
      margin: 0;
      padding: 0;
      margin-bottom 0.5rem
    }
    
    ul {
      margin 0
    }
    
    a {
      color $text
      border-bottom 1px solid $text
      text-decoration: none;
      transition: all 0.2s ease;
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
  }
}
</style>

