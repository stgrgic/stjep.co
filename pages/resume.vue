<template>
  <div class="resume">
    <h2>Resume</h2>
    <div class="job" v-for="job in cv.employment" :key="job.id">
      <div class="job__icon">
        <img :src="getCompanyLogo(job.id)" :alt="job.id">
      </div>

      <div class="job__content">
        <h3 class="job__name">{{ job.name }}</h3> 
        <div>
          <span class="job__period">{{ job.period }}</span>
          <a :href="job.url" target="_blank" class="job__website">Website</a>
        </div>
        
        <p class="job__description">{{ job.introduction }}</p>

        <div class="what-i-learned" v-if="job.learned">
          <h4>What I learned</h4>
          <ul class="job__learned-list">
            <li v-for="(learned, index) in job.learned" :key="index">{{ learned }}</li>
          </ul>
        </div>

        <section class="featured-projects" v-if="job.projects">
          <h4>Featured projects</h4>
          <div class="project" v-for="project in job.projects" :key="project.id">
            <div class="project__icon">
              <img :src="getProjectLogo(project.id)" :alt="project.id">
            </div>

            <div class="project__content">
              <h5 class="project__name">{{project.name}}</h5>
              <a :href="project.url" target="_blank">Check it out →</a>
              <p>{{ project.description }}</p>
            </div>

          </div>
        </section>

      </div>

    </div>
  </div>
</template>

<script>
import cv from '@/assets/data/cv.json'

export default {
  data () {
    return {
      cv
    }
  },
  methods: {
    getCompanyLogo: function (id) {
      return require(`@/assets/icons/resume/${id}-logo.svg`)
    },
    getProjectLogo: function (id) {
      return require(`@/assets/icons/resume/projects/${id}.svg`)
    }
  }
}
</script>

<style lang="stylus">
  .resume {
    // background-color #ccc
    max-width 800px
    // margin 0 auto
    line-height 1.6
    p, li {
      // color #444
    }
  }
  .job {
    display flex
    // background-color #aaf
    &__name {
      margin 0
      margin-top 1rem
      font-size 2rem
    }
    &__icon {
      // max-width 140px
      width 140px
      img {
        // max-width 140px
      }
    }
    &__content {
      // background-color #aaa
      width calc(100% - 140px)
      padding-left 20px
      padding-top 0.5rem
    }
    &__period {
      margin-right 1rem
    }
  }
  .featured-projects h4 {
    margin-bottom 1rem
    margin-top 2rem
    // font-weight 400
  }
  .project {
    // background-color #aaf
    display flex
    margin-bottom 2rem
    &__name {
      display inline
      margin-right 1rem
    }
    &__content {
      width calc(100% - 100px)
      padding-left 20px
      padding-top 1rem
    }
    &__icon {
      width 100px
      height 100px
    }
    &__name {
      font-size 1.25rem
    }
  }
</style>