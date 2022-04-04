<template>
  <div class="page-takeOut">
    <Header :tag="tag">
      <template v-slot:header-left>
        <van-icon class="header-left" name="search" size="0.61rem" />
      </template>
      <template v-slot:header-right v-if="!username">
        <p class="header-right" @click="$router.push('/login')">{{"登录|注册"}}</p>
      </template>
      <template v-slot:header-right v-else>
          <van-icon class="header-right" name="manager-o" size="0.61rem" @click="$router.push('/personal')"/>
      </template>
    </Header>
    <!-- 轮播图 食品分类-->
    <van-swipe class="my-swipe" indicator-color="#3478f6">
      <van-swipe-item v-for="(item,index) in foodLists" :key="index">
        <div v-for="(item, index) in item" :key="index">
          <div class="swipe-item">
            <img :src="imgBaseUrl + item.image_url" alt="" />
            {{item.title}}
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- 商家列表 -->
    <div class="shop_lsit">
      <p class="list_head">附近商家</p>
      <div class="shopswrap" v-for="(item,index) in bussineseList" :key="index">
        <div class="shopswrap_left">
          <img :src="shopimgurl + item.image_path" alt="">
        </div>
        <div class="shops_right">
          <div class="right_head">
            <h4>
              <span></span>
              <span>{{item.name}}</span>
            </h4>

            <p>
              <span v-for="(item, index) in item.supports" :key="index">{{item.icon_name}}</span>
            </p>
          </div>
          <p class="right_center"></p>
          <p class="right_bottom"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header/';
  import {
    getYzm,
    foodList,
    getBuineseList
  } from '@/api/takeout.js';
  export default {
    components: {
      Header
    },
    data() {
      return {
        tag: '请选择地址...',
        username:'',
        yzm:'',
        foodLists: [],
        shopLists: [],
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
        shopimgurl: 'https://elm.cangdu.org/img/',
        bussineseList: []
      }
    },
    methods: {
      getShop() { // 获取食品分类列表
        foodList().then(res => {
            let resArr = [...res]; // 复制一个新的数组
            let foodArr = [];
            for (let i = 0, j = 0; i < res.length; i += 8, j++) {
              foodArr[j] = resArr.splice(0, 8);
            }
            this.foodLists = foodArr;
            // console.log(this.foodLists)
          })
          .catch(res => {
            alert("获取失败");
          })
      },

      getShops() { // 获取商家列表
        let params = {
          latitude: '31.22967',
          longitude: '121.4762'
        }
        getBuineseList(params).then(res => {
          console.log(res)
          this.bussineseList = res
        }).catch(err => {
          console.log(err)
        })
      },
    },
    mounted() {
      this.getShop()
      this.getShops()
      if(localStorage.getItem("username")){
        this.username = localStorage.getItem("username")
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page-takeOut {
    background-color: #f5f5f5;

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
      font-size: .34rem;
    }

    .swipe-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: .19rem 0;
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

    // 商家列表
    .shop_lsit {
      margin-top: .25rem;
      border-top: .01rem solid #e4e4e4;
      background-color: #fff;

      .list_head {
        color: #999;
        font-size: .34rem;
        height: 1.07rem;
        line-height: 1.07rem;
      }

      .shopswrap {
        display: flex;
        width: 100%;
        padding: .43rem .25rem;

        .shopswrap_left {
          img {
            width: 1.68rem;
            height: 1.68rem;
            padding-right: .25rem;
          }
        }

        .shops_right {
          // flex: auto;

          .right_head {
            display: flex;

            h4 {
              width: 5.31rem;
            }

            p {
              transform: scale(.8);

              span {
                color: #999;
                border: 0.025rem solid #f1f1f1;
                padding: 0 0.04rem;
                border-radius: .01rem;
                margin-left: .03rem;
              }
            }
          }
        }
      }
    }
  }
</style>