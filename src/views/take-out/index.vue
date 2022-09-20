<template>
  <div class="page-takeOut">
    <Header :tag="tag">
      <template v-slot:header-left>
        <van-icon class="header-left" name="search" size="0.61rem" />
      </template>
      <template v-slot:header-right v-if="!username">
        <p class="header-right" @click="$router.push('/login')">
          {{ "登录|注册" }}
        </p>
      </template>
      <template v-slot:header-right v-else>
        <van-icon class="header-right" name="manager-o" size="0.61rem" @click="$router.push('/personal')" />
      </template>
    </Header>
    <!-- 轮播图 食品分类-->
    <van-swipe class="my-swipe" indicator-color="#3478f6">
      <van-swipe-item v-for="(item, index) in foodLists" :key="index">
        <div v-for="(item, index) in item" :key="index">
          <div class="swipe-item" @click="$router.push('fooddetails')">
            <img :src="imgBaseUrl + item.image_url" alt="" />
            {{ item.title }}
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>

    <!-- 商家列表 -->
    <!-- TODO: 下拉加载-->
    <ShopList></ShopList>

  </div>
</template>

<script>
import Header from "@/components/header/";
import { foodList, getBuineseList } from "@/api/takeout.js";
import ShopList from "@/components/common/shopList.vue";
export default {
  components: {
    Header,
    ShopList,
  },
  data() {
    return {
      tag: "请选择地址...",
      username: "",
      yzm: "",
      foodLists: [],
      shopLists: [],
      imgBaseUrl: "https://fuss10.elemecdn.com", //图片域名地址
      shopimgurl: "https://elm.cangdu.org/img/",
    };
  },
  methods: {
    getShop() {
      // 获取食品分类列表
      foodList()
        .then((res) => {
          let resArr = [...res]; // 复制一个新的数组
          let foodArr = [];
          for (let i = 0, j = 0; i < res.length; i += 8, j++) {
            foodArr[j] = resArr.splice(0, 8);
          }
          this.foodLists = foodArr;
          // console.log(this.foodLists)
        })
        .catch((res) => {
          alert("获取失败");
        });
    },
  },
  mounted() {
    this.getShop();
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }

    if (this.$route.query.address) {
      this.tag = this.$route.query.address;
    }
  },
};
</script>

<style lang="scss" scoped>
.page-takeOut {
  background-color: #f5f5f5;
  $blue: #3190e8;

  // 轮播图
  .my-swipe {
    height: 5.28rem;
    background-color: #fff;
  }

  .my-swipe .van-swipe-item {
    display: flex;
    flex-wrap: wrap;
    color: #666;
    text-align: center;
    font-size: 0.34rem;
  }

  .swipe-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.19rem 0;
    width: 2.48rem;
    height: 2rem;

    img {
      width: 1.12rem;
      height: 1.12rem;
    }
  }

  ::v-deep .van-swipe__indicator {
    background-color: #000;
  }
}
</style>
