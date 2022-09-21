<template>
  <div class="childrenContent">
    <Header :tag="children.name"></Header>
    <div class="childrenContent__left">
      <img :src="
        shopimgurl + children.image_path ||
        '../../../assets/err.jpg'
      " :onerror="badImg" />
    </div>
    <div class="childrenContent__right">
      <h3 class="childrenName">{{ children.name }}</h3>
      <p style="color: #999">{{ children.description }}</p>
      <p class="childrenSales">
        <span>月售{{ children.month_sales }}份</span>
        <span>好评率{{ children.satisfy_rate }}%</span>
      </p>
      <footer>
        <section class="food_price">
          <span>¥</span>
          <span v-if="children.specfoods && children.specfoods[0]">{{ children.specfoods[0].price }}</span>
          <span v-if="children.specifications">起</span>
        </section>
        <van-icon name="add" color="#4d8ee1" size="21" @click.stop="addBuyCat" />
      </footer>

      <div class="shop__settlement">
        <div class="settlement__info">
          <i class="iconfont icon-buyCat info-buyCat"></i>
        </div>
        <div class="settlement__price">
          <span>{{ "￥0.00" }}</span>
          <span>{{ "配送费¥" }}</span>
        </div>
        <div class="settlment__submit-btn">
          <p>还差¥20起送</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  components: { Header },
  data() {
    return {
      shopimgurl: "https://elm.cangdu.org/img/",
      children: "",
      badImg: 'this.src="' + require("../../../assets/err.jpg") + '"',
    }
  },
  methods: {
    addBuyCat() {

    }
  },
  mounted() {
    const item = JSON.parse(this.$route.query.datas)
    this.children = item
  },

}
</script>

<style lang="scss" scoped>
// 右边菜单内容主体
.childrenContent {
  border-bottom: 1px solid #f8f8f8;
  overflow: hidden;

  .childrenContent__left {

    img {
      width: 10rem;
      height: 10rem;
    }
  }

  .childrenContent__right {
    padding: 0 0.25rem;

    .childrenName {
      margin-bottom: 0.12rem;
      font-size: 0.43rem;
      color: #333;
    }

    .childrenSales {
      color: #333;
    }

    .children__activity {
      span {
        display: inline-block;
        border-radius: 0.25rem;
        transform: scale(0.8);
        padding: 0.03rem;
      }
    }

    footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0.19rem;

      .food_price {
        span {
          font-family: "Helvetica Neue", Tahoma, Arial;
        }

        span:nth-of-type(1) {
          font-size: 0.43rem;
          color: #f60;
          margin-right: 0.05rem;
        }

        span:nth-of-type(2) {
          font-size: 0.432rem;
          color: #f60;
          font-weight: bold;
          margin-right: 0.3rem;
        }

        span:nth-of-type(3) {
          color: #666;
        }
      }
    }
  }

  .shop__settlement {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1.2rem;
    width: 100%;
    background-color: #3d3d3f;

    .settlement__info {
      background-color: #3d3d3f;
      position: absolute;
      padding: 0.25rem;
      border: 0.11rem solid #444;
      border-radius: 50%;
      left: 0.3rem;
      top: -0.5rem;

      .info-buyCat {
        font-size: 28px !important;
      }
    }

    .settlement__price {
      color: #fff;
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 80px;

      span:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 0.06rem;
      }
    }

    .settlment__submit-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      width: 117px;
      height: 100%;
      color: #fff;
      background-color: #535356;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>