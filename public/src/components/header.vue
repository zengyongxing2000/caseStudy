<template>
  <div class="header">
    <slot name="header-left">
      <van-icon class="header-left" name="arrow-left" size="0.61rem" @click="$router.go(-1)" />
    </slot>
    <p @click="goCitys" class="header-center">{{tag}}</p>
    <slot name="header-right"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      tag: {
        type: String,
        default: () => {
          return ''
        }
      }
    },
    data() {
      return {
        item: '我的'
      }
    },
    methods: {
      goCitys() {
        if (this.$route.path === '/take-out') {
          this.$router.push({
            path: '/citys'
          })
        }
      }
    }

  }
</script>

<style lang='scss' scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1.22rem;
    background-color: #3190e8;
    color: white;
    z-index: 100;

    .header-left{
      position: absolute;
      left: .26rem;
    }
    .header-center{
      width: 4.99rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      color: #fff;
      text-align: center;
      font-size: .5rem;
      font-weight: 700;
    }

    .header-right {
      position: absolute;
      right: .26rem;
      font-size: .4rem;
      font-weight: 400;
    }
  }
</style>