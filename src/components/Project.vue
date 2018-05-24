<template>
  <span class="project">
    <h3>
      <router-link :to="{ name: 'project', params: { pId: title }}">
        {{title}}
      </router-link>
    </h3>
    <p>
      {{description}}
    </p>
  </span>
</template>

<script>
    export default {
        name: 'Project',
        props: ['title','description'],
    }
</script>

<style scoped>
    h1 {
        text-decoration: underline;
    }
    .project {
        display: inline-block;
        width: 33.333333%;
        padding: 15px;
        box-sizing: border-box; 
    }
</style>