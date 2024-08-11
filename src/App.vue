<template>
  <div id="app">
    <!-- <Navbar />
    <router-view /> -->
    <vue-layout />
  </div>
</template>

<script>
// import Navbar from '../../pages/MainNavbar.vue';
import VueLayout from './components/layout/index.vue';

export default {
  name: 'App',
  components: {
    // Navbar
    VueLayout
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
