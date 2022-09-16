<template>
  <div class="apge-detail">
    <Header  :tag="tag"/>
    <div v-html="article"></div>
  </div>
</template>

<script>
import Header from '@/components/header';
export default {
  components: {
    Header
  },
  data() {
    return {
      article:'',
      tag:''
    }
  },
  mounted() {
    this.article = localStorage.getItem('article')
    this.tag = localStorage.getItem('tag')
  },
}
</script>

<style lang="scss" scoped>

</style>