<template>
  <div class="resume">
    <h2>Resume</h2>
    <div class="job" v-for="job in cv.employment" :key="job.id">
      <h3 class="job__name">{{ job.name }}</h3> 
      <p class="job__period">{{ job.period }}</p>
      <a :href="job.url" class="job__website">Website</a>
      <p class="job__description">{{ job.introduction }}</p>
      <h4>What I learned</h4>
      <ul class="job__learned-list">
        <li v-for="(learned, index) in job.learned" :key="index">{{ learned }}</li>
      </ul>
      <h4>Projects</h4>
      <div class="project" v-for="project in job.projects" :key="project.id">
        <h5>{{project.name}}</h5>
        <a :href="project.url" target="_blank">Check it out →</a>
        <p>{{ project.description }}</p>
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
  }
}
</script>