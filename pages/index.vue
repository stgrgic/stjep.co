<template>
<div class="home">
  <div class="home__description">
    <p>My name is Stjepan.</p>
    <p>I am a designer who loves to code, draw, take photos...</p>
    <p>Lately, I’ve been focusing on interaction and experience design, because I can be creative with everything I love to do. I can design and visualize ideas. Then quickly code and prototype interactions. And spice them up with beautifull ilustrations and icons.</p>
  </div>
  <Resume />
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
.home {
  &__description {
    max-width: 600px;
    font-size: 20px;
    line-height: 1.9;
    color: #1F3751
    p {
      margin: 0;
      padding: 0;
    }
  }
}
</style>

