<template>
  <!-- Every view will be a container-fluid view -->
  <div id="app" class="container-fluid">
      <!-- Every view will contain a nav bar -->
      <navigation-bar></navigation-bar>
      <!-- Every page will have a search component -->
      <search></search>
      <!-- Every view will contain a router -->
      <router-view></router-view>
      <!-- Every view will have a footer -->
      <vue-footer></vue-footer>
  </div>  
</template>

<script>
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
    NavigationBar : () => import('@/components/NavigationBar'),
    Search : () => import('@/components/youtubeSearch/Search'),
    VueFooter : () => import('@/components/VueFooter')
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
