<template>
  <div class="resume">
    <!-- <button @click="print">Print</button> -->
    <div id="print">
      <h2 class="resume__title">Stjepan Grgic - Resume</h2>
      <h3 class="block__title" style="margin-bottom: 2rem">Work Experience</h3>
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

          <section class="what-i-learned" v-if="job.learned">
            <h4>What I learned</h4>
            <ul class="job__learned-list">
              <li v-for="(learned, index) in job.learned" :key="index">{{ learned }}</li>
            </ul>
          </section>

          <section class="featured-projects" v-if="job.projects">
            <h4>Featured projects</h4>
            <div class="project" v-for="project in job.projects" :key="project.id">
              <div class="project__icon">
                <img :src="getProjectLogo(project.id)" :alt="project.id">
              </div>

              <div class="project__content">
                <h5 class="project__name">{{project.name}}</h5>
                <a :href="project.url" target="_blank">Check it out</a>
                <p>{{ project.description }}</p>
              </div>

            </div>
          </section>
        </div>
      </div>

      <h3 class="block__title">Education</h3>
      <ul>
        <li class="education" v-for="education in cv.education.formal" :key="education.id">
          <h4 class="education__title">{{ education.name }}</h4>
          <p class="education__period">{{ education.period }}</p>
        </li>
      </ul>

      <h3 class="block__title">Courses</h3>
      <ul>
        <li class="courses" v-for="cours in cv.education.courses" :key="cours.name">
          {{ cours.name }} - 
          <span class="cours__info">{{ cours.info }}</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import cv from '@/assets/data/cv.json'
import { Printd } from 'printd'

export default {
  data () {
    return {
      cv,
      cssText: `
        html {
          font-size: 12px;
        }
        body {
          font-family: monospace;
        }
        img, a {
          display: none;
        }
        .featured-projects .project {
          padding-left: 1rem;
        }
      `
    }
  },
  methods: {
    getCompanyLogo: function (id) {
      return require(`@/assets/icons/resume/${id}-logo.svg`)
    },
    getProjectLogo: function (id) {
      return require(`@/assets/icons/resume/projects/${id}.svg`)
    },
    print () {
      const d = new Printd()
      // opens the "print dialog" of your browser to print the element
      d.print( document.getElementById('print'), this.cssText )
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus">
  .resume {
    // padding-left 2rem
    // background-color #ccc
    // font-family: monospace;
    max-width 800px
    // margin 0 auto
    line-height 1.6
    p, li {
      // color #444
    }
    // ul, h4, p{
    //   margin 0
    // }
    // ul, h4, p {
    //   margin-bottom 1rem
    //   margin-top 1rem
    // }
    // a {
    //   text-decoration none
    //   border-bottom 1px solid #000
    // }
    h5 {
      margin-bottom 1rem
    }
    &__title {
      font-weight 300
      margin 0
      margin-bottom 3rem
    }
  }
  .block {
    &__title {
      margin 0
      // margin-bottom 2rem
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
  .education {
    margin-bottom 1rem
    &__title {
      margin 0
    }
    &__period {
      margin 0
    }
  }
</style>