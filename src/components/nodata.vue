<template>
  <div class="nodata">
    <img src="../../public/images/no-log.png" alt="" />
    <p class="title">暂无明细记录</p>
    
  </div>
</template>

<script>
  export default {
    name: 'Nodata',
  }
</script>

<style lang='scss' scoped>
  .nodata {
    margin-top: .61rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img{
      width: 4.99rem;
      height: 3.12rem;
    }

    .title{
      font-size: .43rem;
      margin-top: .29rem;
    }

  }
</style>