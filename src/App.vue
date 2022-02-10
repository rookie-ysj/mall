<template>
  <div>
    <router-view/>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from './components/nav.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    navBar,
  }
}
</script>

<style>
/* @import url('./assets/css/reset.css'); */

</style>
