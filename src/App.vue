<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>

<style>
* {
	margin:0;
	padding: 0;
	box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 900px;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
</style>
