<template>
<div class="home">
  <div class="home__description">
    <!-- <p style="font-size: 44px; line-height: 1;margin-bottom: 1rem">👋</p> -->
    <!-- <h2>10 seconds!</h2> -->
    <p>Hi, my name is Stjepan.<br>
    I am a designer who loves to code, draw, take photos... <br>
    Lately, I’ve been focusing on interaction and experience design. <!-- By working on such projects, I use all my potential and knowledge, and that makes me happy! --></p>
    <h2>Work.</h2>
    <p>I have worked with startups and business around the world like <a href="" target="_blank">OptimoRoute</a>, <a href="" target="_blank">Memgraph</a>, <a href="" target="_blank">Agrivi</a>, <a href="" target="_blank">vibby</a> and others. For more details, check <nuxt-link to="/resume">my resume</nuxt-link>.</p>
    <!-- <h2>Now...</h2> -->
    <!-- <p>Read more on <a href="">Now page</a> (<a href="">What is now page?</a>). Also, you can find me on <a href="">instagram</a> and <a href="">twitter</a>.</p> -->
    <h2>Writing</h2>
    <ul>
      <!-- <li><a href="">Misfit Designer</a></li> -->
      <li>Designer's Road <a href="https://designersroad.netlify.com" target="_blank">(Archive)</a>.<!--<a href="">What happened?</a>--></li> 
    </ul>
<!--     <div class="stupid-projects">
      <h2>Simple stupid projects</h2>
      <p>Sometimes I think of something stupid that might be usefull and I simply build it. <span style="font-size: 14px; font-weight: bold">¯\_(ツ)_/¯</span></p>
      <ul>
        <li><a href="">Aspect Calculator</a></li>
        <li><a href="">CSS Tools</a></li>
        <li><a href="">Chrome Plugins</a></li>
      </ul>
    </div> -->
  </div>
  <!-- <Resume /> -->
</div>
</template>

<script>
export default {
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
  }
}
</style>

