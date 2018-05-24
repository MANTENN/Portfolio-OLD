<template>
  <div class="container">
      <h1>404</h1>
      <h2>Page: {{requestedRoute}}</h2>
      <p>Was not found. I'm sorry, but keep looking!</p>
  </div>
</template>

<script>
  export default {
    props: ['requestedRoute'],
    name: 'PageNotFound',
  }
</script>