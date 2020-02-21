<template>
  <div id="app" class="container-fluid">
    <!-- Every view will be a container-fluid view -->
    <!-- <div class="container-fluid"> -->
      <!-- Every view will contain a nav bar -->
      <navigation-bar></navigation-bar>
      <!-- Every view will contain a router -->
      <router-view></router-view>
      <!-- Every view will have a footer -->
      <vue-footer></vue-footer>

    <!-- </div> -->
  </div>  
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import VueFooter from '@/components/VueFooter'


export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
        handler(to, from) {
        to.meta.from = from;
        document.title = to.meta.title || 'Photo Album';
      }
    },
  },
  components: {
    NavigationBar,
    VueFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
