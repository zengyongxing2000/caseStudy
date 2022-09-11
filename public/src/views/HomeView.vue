<template>
  <div class="page-navigation">
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/navigation.vue';

export default {
  name: 'HomeView',
  components: {
    Navigation
  }
}
</script>


<style lang="scss" scoped>
  .home{
    font-size: .55rem;
  }
</style>