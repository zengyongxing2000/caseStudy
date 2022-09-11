<template>
  <div class="page-navigation">
    <nav>
      <router-link to="/take-out" :class="{'active': clickImg === 1}" @click.native="clickImg=1"><i class="iconfont icon-elment"></i>外卖</router-link>
      <router-link to="/search" :class="{'active': clickImg === 2}" @click.native="clickImg=2"><i class="iconfont icon-compass"></i> 搜索</router-link>
      <router-link to="/order" :class="{'active': clickImg === 3}" @click.native="clickImg=3"><i class="iconfont icon-dingdan"></i>订单</router-link>
      <router-link to="/my" :class="{'active': clickImg === 4}" @click.native="clickImg=4"><i class="iconfont icon-wode"></i>我的</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        clickImg: 1,
      }
    },
  }
</script>

<style lang='scss' scoped>
  nav{
    display: flex;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    height: 1.22rem;
    box-shadow: 0 -0.02667rem 0.05333rem rgb(0 0 0 / 10%);
    background-color: #fff;

    a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .active{
      color: #4395f8;
    }
  }
</style>