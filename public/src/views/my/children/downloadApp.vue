<template>
  <div class="page-downlaodApp">
    <Header :tag="tag" />
    <div class="wrap">
      <img src="../../../../public/images/elmlogo.jpeg" alt="">
      <p class="title">下载饿了么APP</p>
      <button>下载</button>
    </div>
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
        tag: '下载'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      margin-top: .61rem;
      border-radius: .61rem;
    }

    .title{
      font-size: .5rem;
      margin-top: .27rem;
      margin-bottom: .61rem;
      color: #666;
    }

    button {
      border: none;
      border-radius: .11rem;
      font-size: .43rem;
      color: #fff;
      width: 9.12rem;
      height: 1.12rem;
      background: #4cd964;
    }
  }
</style>