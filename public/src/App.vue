<template>
  <div id="app">
     <Navigation v-if="$route.meta.TabbarShow"/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/navigation.vue';
export default {
   components: {
    Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 1.22rem;
  padding-bottom: 1.22rem;
}
</style>
