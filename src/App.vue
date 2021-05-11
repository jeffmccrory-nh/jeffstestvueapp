<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Provider />
</template>

<script>
import Provider from './components/Provider.vue'

export default {
  name: 'App',
  components: {
    Provider
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
