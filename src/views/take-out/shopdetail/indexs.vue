<template>
  <div class="apge-detail">
    <van-icon
      class="backTop"
      name="arrow-left"
      color="#fff"
      size="26px"
      @click="$router.go(-1)"
    />
    <!-- 头部商品详情模块-->
    <div class="detail__header">
      <div class="bgcImg">
        <img
          v-if="headerData.image_path"
          :src="shopimgurl + headerData.image_path"
          alt=""
        />
      </div>
      <div class="headerwrap">
        <div class="header__main">
          <div class="shopswrap_left">
            <img
              v-if="headerData.image_path"
              :src="shopimgurl + headerData.image_path"
              alt=""
            />
          </div>
          <div class="shops_right">
            <h4 class="right_head">
              <span>{{ headerData.name }}</span>
            </h4>
            <p class="right_center">
              商家配送／{{ headerData.order_lead_time }}分钟送达／配送费¥{{
                headerData.float_delivery_fee
              }}
            </p>
            <p>公告:&nbsp;&nbsp;&nbsp;{{ headerData.promotion_info }}</p>
          </div>
        </div>
        <div
          class="header__activity"
          v-if="headerData.activities && headerData.activities[0]"
        >
          <p class="ellipsis">
            <span
              class="tip_icon"
              :style="{
                backgroundColor: '#' + headerData.activities[0].icon_color,
                borderColor: '#' + headerData.activities[0].icon_color,
              }"
              >{{ headerData.activities[0].icon_name }}</span
            >
            <span>{{ headerData.activities[0].description }}（APP专享）</span>
          </p>
          <p>{{ headerData.activities.length }}个活动</p>
        </div>
      </div>
    </div>
    <van-tabs v-model="activeName" title-active-color="#4d8ee1">
      <!--TODO: 锚点双向绑定 滚轴联动锚点-->
      <van-tab title="商品" name="a">
        <ul class="shopMenu">
          <li
            v-for="(listItem, index) in shopList"
            :key="index"
            :class="{ liinex: index === lsIndex }"
            @click="goAnchor(listItem.name, index)"
          >
            <span class="shopMenu__item">
              {{ listItem.name }}
            </span>
            <van-badge v-if="false" class="badge--default" :content="5" />
          </li>
        </ul>
        <!-- /侧边导航栏 -->
        <div class="shopMenuContent">
          <template v-for="(ItemContent, index) in shopList" ::key="index">
            <p class="content__title" :id="ItemContent.name">
              <span class="title__name">
                {{ ItemContent.name }}
                <span class="title__description">
                  {{ ItemContent.description }}
                </span>
              </span>
              <van-icon name="ellipsis" color="#999" />
              <!-- TODO: 消息提示框 思路：框架没有这个组件，可以去找图片素材-->
            </p>
            <template v-for="children in ItemContent.foods" ::key="children.id">
              <div class="childrenContent" @click="goShopDetail(children)">
                <div class="childrenContent__left">
                  <img
                    :src="
                      shopimgurl + children.image_path ||
                      '../../../assets/err.jpg'
                    "
                    :onerror="badImg"
                  />
                </div>
                <div class="childrenContent__right">
                  <h3 class="childrenName">{{ children.name }}</h3>
                  <p style="color: #999">{{ children.description }}</p>
                  <p class="childrenSales">
                    <span>月售{{ children.month_sales }}份</span>
                    <span>好评率{{ children.satisfy_rate }}%</span>
                  </p>
                  <p v-if="children.activity" class="children__activity">
                    <span
                      :style="{
                        color: '#' + children.activity.image_text_color,
                        borderColor: '#' + children.activity.icon_color,
                      }"
                      >{{ children.activity.image_text }}</span
                    >
                  </p>
                  <footer>
                    <section class="food_price">
                      <span>¥</span>
                      <span>{{ children.specfoods[0].price }}</span>
                      <span v-if="children.specifications.length">起</span>
                    </section>
                    <!--TODO: shopNumber数量为0时，给一个消失的动画-->
                    <p class="buycat">
                      <van-icon
                        v-if="children.shopNumber"
                        name="clear"
                        color="#4d8ee1"
                        size="21"
                        @click.stop="delectBuyCat(ItemContent.id, children)"
                      />
                      <span
                        v-if="children.shopNumber"
                        ref="nbr"
                        :id="children.item_id"
                        >{{ children.shopNumber }}</span
                      >
                      <van-icon
                        name="add"
                        color="#4d8ee1"
                        size="21"
                        @click.stop="addBuyCat(ItemContent.id, children)"
                      />
                    </p>
                  </footer>
                </div>
              </div>
            </template>
          </template>
        </div>
        <!-- /右边商品列表-->
        <div class="shop__settlement">
          <div class="settlement__info">
            <i class="iconfont icon-buyCat info-buyCat"></i>
            <van-badge v-if="false" class="badge--icon" :content="5" />
          </div>
          <div class="settlement__price">
            <span>{{ "￥0.00" }}</span>
            <span>{{ "配送费¥" + headerData.float_delivery_fee }}</span>
          </div>
          <div class="settlment__submit-btn">
            <p v-if="true">还差¥20起送</p>
            <p v-else>去结算</p>
          </div>
        </div>
        <!-- /结算 -->
      </van-tab>
      <van-tab class="comments" title="评价" name="b">
        <div class="score">
          <div class="score__left">
            <p class="left__fs">{{ headerData.rating }}</p>
            <p class="left__evaluation">综合评价</p>
            <p style="color: #999">
              高于周边商家{{ (ScoresData.compare_rating * 100).toFixed(1) }}%
            </p>
          </div>
          <div class="score__right">
            <p>
              <span>服务态度</span>
              <van-rate
                v-model="ScoresData.food_score"
                allow-half
                void-icon="star"
                void-color="#eee"
                color="#f19f3b"
                size="9"
                readonly
                style="transform: scale(0.8); margin-left: -8px"
              />
              <span class="rating_num" v-if="ScoresData.service_score">{{
                ScoresData.service_score.toFixed(1)
              }}</span>
            </p>
            <p>
              <span>菜品评价</span>
              <van-rate
                v-model="ScoresData.food_score"
                allow-half
                color="#f19f3b"
                void-icon="star"
                void-color="#eee"
                size="9"
                readonly
                style="transform: scale(0.8); margin-left: -8px"
              />
              <span class="rating_num" v-if="ScoresData.food_score">{{
                ScoresData.food_score.toFixed(1)
              }}</span>
            </p>
            <p>
              <span>送达时间</span>
              <span class="rating_time"
                >{{ ScoresData.order_lead_time }}分钟</span
              >
            </p>
          </div>
        </div>
        <!-- /商铺综合评价-->
        <ul class="tab__list">
          <li
            v-for="(item, index) in TagData"
            :key="index"
            :class="{
              unsatisfied: item.unsatisfied,
              tagActivity: ratingTageIndex == index,
            }"
            @click="changeTgeIndex(index, item.name)"
          >
            {{ item.name }}({{ item.count }})
          </li>
        </ul>
        <!-- 商铺标签-->
        <ul class="rating_list_ul">
          <li
            v-for="(item, index) in ratingList"
            :key="index"
            class="rating_list_li"
          >
            <img :src="getImgPath(item.avatar)" class="user_avatar" />
            <section class="rating_list_details">
              <header>
                <section class="username_star">
                  <p class="username">{{ item.username }}</p>
                  <p class="star_desc">
                    <van-rate
                      v-model="item.rating_star"
                      allow-half
                      void-icon="star"
                      void-color="#eee"
                      color="#f19f3b"
                      size="9"
                      readonly
                      style="transform: scale(0.8); margin-left: -8px"
                    />
                    <span class="time_spent_desc">{{
                      item.time_spent_desc
                    }}</span>
                  </p>
                </section>
                <time class="rated_at">{{ item.rated_at }}</time>
              </header>
              <ul class="food_img_ul">
                <li v-for="(item, index) in item.item_ratings" :key="index">
                  <img
                    :src="getImgPath(item.image_hash)"
                    v-if="item.image_hash"
                  />
                </li>
              </ul>
              <ul class="food_name_ul">
                <li
                  v-for="(item, index) in item.item_ratings"
                  :key="index"
                  class="ellipsis"
                >
                  {{ item.food_name }}
                </li>
              </ul>
            </section>
          </li>
        </ul>
        <!-- 评论列表-->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {
  shopDetails,
  shopLeftList,
  ratingScores,
  ratingTags,
  getRatingList,
} from "@/api/takeout.js";
import { getImgPath } from "@/components/mixin.js";
export default {
  data() {
    return {
      tag: "",
      headerData: {},
      shopList: [],
      lsIndex: 0,
      shopimgurl: "https://elm.cangdu.org/img/",
      activeName: "a",
      active: "",
      badImg: 'this.src="' + require("../../../assets/err.jpg") + '"', //失效图片处理
      scroll: "", // 滚动条距离顶部的距离
      ScoresData: {},
      TagData: {},
      ratingTageIndex: "",
      ratingList: {},
      goodsCollection: [], // 商品集合
    };
  },
  mixins: [getImgPath],
  computed: {},
  methods: {
    initData() {
      //商品详情
      const shopid = localStorage.getItem("shopid");
      shopDetails(shopid).then((res) => {
        // console.log(res);
        this.headerData = res;
      });
      //商品模块--食品列表
      const params = { restaurant_id: shopid };
      shopLeftList(params).then((res) => {
        this.shopList = res;
        this.shopList.forEach((item) => {
          item.foods.forEach((item1) => {
            item1.shopNumber = 0;
          });
        });
        // console.log(res);
      });
      // 评价模块--商品综合评价
      ratingScores(shopid).then((res) => {
        this.ScoresData = res;
      });
      //评价模块--标签Tags
      ratingTags(shopid).then((res) => {
        // console.log(res);
        this.TagData = res;
      });
      //评价模块--评论列表
      getRatingList(shopid).then((res) => {
        // console.log(res);
        this.ratingList = res;
      });
    },
    //锚点跳转
    goAnchor(selector, index) {
      this.lsIndex = index;
      document
        .querySelector(`#${selector}`)
        .scrollIntoView({ behavior: "smooth" });
    },
    changeTgeIndex(index, name) {
      this.ratingTageIndex = index;
    },
    addBuyCat(id, params) {
      let index = this.shopList.findIndex((item) => item.id === id);
      this.shopList[index].foods[
        this.shopList[index].foods.findIndex((item) => item._id === params._id)
      ].shopNumber += 1;
      // 商家name id 传递商品名字 价格 数量
      this.shopList[index].foods = [...this.shopList[index].foods];
      var shopcar = {
        shopName:'',
        shopId:'',
        goodsArr:[]
      }
      var shopItem = {
        name: params.name,
        id: params._id,
        num: this.shopList[index].foods[
        this.shopList[index].foods.findIndex((item) => item._id === params._id)
      ].shopNumber
      }
      shopcar.goodsArr.push(shopItem)
      this.$store.dispatch("addCart", shopcar);
    },
    delectBuyCat(id, params) {
      let index = this.shopList.findIndex((item) => item.id === id);
      this.shopList[index].foods[
        this.shopList[index].foods.findIndex((item) => item._id === params._id)
      ].shopNumber -= 1;
      this.shopList[index].foods = [...this.shopList[index].foods];
      this.$store.dispatch("delectCart");
    },
    goShopDetail(item) {
      this.$router.push({
        path: "/foodDetail",
        query: {
          datas: JSON.stringify(item),
        },
      });
    },
  },
  mounted() {
    this.initData();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.apge-detail {
  margin-top: -1.23rem;
  position: relative;
  background-color: #f5f5f5;

  .backTop {
    position: absolute;
    top: 5px;
    left: -5px;
    z-index: 10;
  }

  .detail__header {
    position: relative;
    background-color: rgba(119, 103, 137, 0.43);
    color: #fff;

    .headerwrap {
      padding: 9.375px 0 9.375px 9.375px;
    }

    .bgcImg {
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;

      img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        -webkit-filter: blur(10px);
        filter: blur(10px);
      }
    }

    .header__main {
      display: flex;
      $blue: #3190e8;
      margin: 0 0 7px;

      .shopswrap_left {
        img {
          height: 1.79rem;
          padding-right: 0.25rem;
        }
      }

      .shops_right {
        .right_head {
          font-size: 0.5rem;
          margin-bottom: 0.19rem;
        }

        .right_center {
          margin: 0 0 7px;
        }
      }
    }

    .header__activity {
      display: flex;
      justify-content: space-between;
      margin-top: 11px;
      padding-right: 23px;

      .tip_icon {
        border: 0.02rem solid #e07976;
        border-radius: 0.1rem;
      }
    }
  }

  ::v-deep .van-tabs__line {
    background-color: #4d8ee1;
    border-bottom: 1px solid #ebebeb;
    bottom: 10px;
    height: 0.05rem;
  }

  ::v-deep .van-tabs__wrap {
    height: 40px;
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
  }

  ::v-deep .van-tab {
    top: 6px;
    font-size: 15px;
  }

  .van-tab__pane {
    display: flex;
    // height: 463px;
    // overflow: hidden;
  }

  .shopMenu::-webkit-scrollbar {
    width: 0;
  }

  .shopMenu {
    width: 2.4rem;
    background-color: #f5f5f5;
    height: 463px;
    overflow-y: scroll;

    li {
      color: #333;
      font-size: 0.37rem;
      padding: 0.43rem 0.19rem;
      border-left: 0.09rem solid #f8f8f8;
      border-bottom: 0.5px solid #ededed;
      position: relative;

      .badge--default {
        position: absolute;
        right: 0;
      }
    }

    .liinex {
      border-left: 0.09rem solid #4d8ee1;
      background-color: #fff;
    }

    .shopMenu__item {
      display: inline-block;
      height: 0.88rem;
      line-height: 0.88rem;
    }
  }

  .shopMenuContent::-webkit-scrollbar {
    width: 0;
  }

  .shopMenuContent {
    width: calc(100% - 90px);
    height: 463px;
    overflow-y: scroll;
    background: #fff;

    .content__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.25rem;
      background-color: #f5f5f5;
      color: #333;

      .title__name {
        display: inline-block;
        height: 33px;
        line-height: 33px;
        font-size: 16px;
        color: #666;
        font-weight: bold;

        .title__description {
          font-size: 0.32rem;
          font-weight: 400;
          display: inline-block;
          height: 33px;
          line-height: 33px;
          padding-left: 10px;
          color: #999;
        }
      }
    }

    // 右边菜单内容主体
    .childrenContent {
      display: flex;
      position: relative;
      padding: 0.39rem 0.25rem;
      border-bottom: 1px solid #f8f8f8;
      overflow: hidden;

      .childrenContent__left {
        margin-right: 0.25rem;

        img {
          width: 1.23rem;
        }
      }

      .childrenContent__right {
        width: 100%;

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
            border: 1px solid currentColor;
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

          .buycat {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              padding: 0 0.27rem;
            }
          }
        }
      }
    }
  }

  /* 尾部结算 */
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

      .badge--icon {
        position: absolute;
        top: 0;
      }
    }

    .settlement__info--buying {
      background-color: #4d8ee1;
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

  .comments {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    width: 100%;
    // display: block !important;
  }

  .score {
    display: flex;
    flex: 1;
    padding: 18.7px 0.31rem;
    margin-bottom: 0.31rem;
    background-color: #fff;

    /* 商铺综合评价 */
    .score__left {
      width: 150px;
      text-align: center;

      .left__fs {
        font-size: 0.75rem;
        color: #f60;
      }

      .left__evaluation {
        font-size: 15px;
        color: #666;
        margin-bottom: 2.375px;
      }
    }

    .score__right {
      p {
        span:nth-of-type(1) {
          font-size: 15px;
          color: #666;
          margin-right: 11.7px;
        }

        span:nth-of-type(2) {
          font-size: 0.35rem;
          color: #f60;
          margin-right: 11.7px;
        }

        i {
          transform: scale(0.8);
        }

        .rating_time {
          color: #999 !important;
        }
      }
    }
  }

  /* 商铺标签 */
  .tab__list {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 0.29rem;

    li {
      font-size: 0.37rem;
      color: #6d7885;
      padding: 0.19rem;
      background-color: #ebf5ff;
      border-radius: 0.2rem;
      border: 1px;
      margin: 0 0.24rem 4.68px 0;
    }

    .unsatisfied {
      background-color: #f5f5f5;
      color: #aaa;
    }

    .tagActivity {
      background-color: #3190e8;
      color: #fff;
    }
  }

  /* 评论列表 */
  .rating_list_ul {
    padding: 0 0.29rem;
    width: 100%;
    background-color: #fff;

    .rating_list_li {
      border-top: 1px solid #f1f1f1;
      display: flex;
      flex: 1;
      padding: 0.37rem 0;

      .user_avatar {
        width: 0.93rem;
        height: 0.93rem;
        border: 0.025rem;
        border-radius: 50%;
        margin-right: 0.48rem;
      }

      .rating_list_details {
        flex: 1;

        header {
          display: flex;
          flex: 1;
          justify-content: space-between;
          margin-bottom: 0.19rem;

          .username_star {
            color: #666;

            .username {
              color: #666;
              margin-bottom: 0.2rem;
            }

            .star_desc {
              display: flex;
              align-items: center;

              .time_spent_desc {
                color: #666;
                margin-left: 0.09rem;
              }
            }
          }

          .rated_at {
            color: #999;
          }
        }

        .food_img_ul {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 0.4rem;

          li {
            img {
              width: 1.87rem;
              margin-right: 0.25rem;
              display: block;
            }
          }
        }

        .food_name_ul {
          display: flex;
          flex-wrap: wrap;

          li {
            font-size: 0.34rem;
            color: #999;
            width: 1.36rem;
            padding: 0.13rem;
            border: 0.586px solid #ebebeb;
            border-radius: 0.15rem;
            margin-right: 0.19rem;
            margin-bottom: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
