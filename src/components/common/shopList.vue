<template>
  <div class="shop_lsit">
    <p class="list_head">附近商家</p>
    <div class="shopswrap" v-for="(item, index) in bussineseList" :key="index" @click="gotoShopDetail(item.id)">
      <div class="shopswrap_left">
        <img :src="shopimgurl + item.image_path" alt="" />
      </div>
      <div class="shops_right">
        <div class="right_head">
          <h4>
            <span></span>
            <span>{{ item.name }}</span>
          </h4>
          <p>
            <span v-for="(item, index) in item.supports" :key="index">{{
            item.icon_name
            }}</span>
          </p>
        </div>
        <div class="right_center">
          <p>
            <van-rate v-model="item.rating" :size="9" color="#ff9a0d" gutter="0" allow-half readonly />
            <span class="rating">{{ item.rating }}</span>
            <span class="onSale"> 月售{{ item.recent_order_num }}单 </span>
          </p>
          <p>
            <span class="delivery_style delivery_left" v-if="item.delivery_mode">{{ item.delivery_mode.text }}</span>
            <span class="delivery_style delivery_right">准时达</span>
          </p>
        </div>
        <div class="right_bottom">
          <p class="fee">
            ¥{{ item.float_minimum_order_amount }}起送
            <span class="segmentation">/</span>
            {{ item.piecewise_agent_fee.tips }}
          </p>
          <p class="distance_time">
            <span v-if="Number(item.distance)">{{
            item.distance > 1000
            ? (item.distance / 1000).toFixed(2) + "km"
            : item.distance + "m"
            }}
              <span class="segmentation">/</span>
            </span>
            <span v-else>{{ item.distance }}</span>
            <span class="segmentation">/</span>
            <span class="order_time">{{ item.order_lead_time }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBuineseList } from "@/api/takeout.js";
export default {
  name: "shopLsit",
  data() {
    return {
      imgBaseUrl: "https://fuss10.elemecdn.com", //图片域名地址
      shopimgurl: "https://elm.cangdu.org/img/",
      bussineseList: [],
    };
  },
  props: {
    restaurant_category_ids: {
      default: "",
    },
    sortId: {
      default: "",
    },
  },
  watch: {
    //监听父级传来的restaurantCategoryIds，当值发生变化的时候重新获取餐馆数据，作用于排序和筛选
    restaurant_category_ids(value) {
      const rid = [];
      rid.push(value);
      let params = {
        latitude: "31.22967",
        longitude: "121.4762",
        restaurant_category_ids: rid,
      };
      this.getShops(params);
    },
    sortId(value) {
      const order_by = value;
      let params = {
        latitude: "31.22967",
        longitude: "121.4762",
        order_by,
      };
      this.getShops(params);
    },
    immediate: true,
  },
  methods: {
    getShops(arg) {
      // 获取商家列表
      let params = {
        latitude: "31.22967",
        longitude: "121.4762",
      };
      arg ? (params = arg) : params;
      getBuineseList(params)
        .then((res) => {
          this.bussineseList = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    gotoShopDetail(id) {
      //TODO: 网页关闭时清除这个缓存,推荐走vuex
      localStorage.setItem("shopid", id);
      this.$router.push("/shopDetail");
    }
  },
  mounted() {
    this.getShops();
  },
};
</script>

<style lang="scss" scoped>
// 商家列表
.shop_lsit {
  margin-top: 0.25rem;
  border-top: 0.01rem solid #e4e4e4;
  background-color: #fff;
  $blue: #3190e8;

  ._v-container {
    position: absolute;
    top: auto;
  }

  .list_head {
    color: #999;
    font-size: 0.34rem;
    height: 1.07rem;
    line-height: 1.07rem;
  }

  .shopswrap {
    display: flex;
    padding: 0.43rem 0.25rem;
    border-bottom: 0.025rem solid #f1f1f1;

    .shopswrap_left {
      img {
        width: 1.68rem;
        height: 1.68rem;
        padding-right: 0.25rem;
      }
    }

    .shops_right {
      flex: auto;

      .right_head {
        display: flex;
        justify-content: space-between;

        h4 {
          width: 5.31rem;
        }

        p {
          transform: scale(0.8);

          span {
            color: #999;
            border: 0.025rem solid #f1f1f1;
            padding: 0 0.04rem;
            border-radius: 0.01rem;
            margin-left: 0.03rem;
          }
        }
      }

      .right_center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.32rem;

        p {
          display: flex;
          align-items: center;

          .rating {
            display: inline-block;
            color: #ff6000;
            margin: 0 0.12rem;
          }

          .onSale {
            transform: scale(0.8);
            margin-left: 0.12rem;
            color: #666;
          }

          .delivery_style {
            padding: 0.025rem 0.05rem 0;
            border-radius: 0.05rem;
            margin-left: 0.05rem;
            border: 1px;
            transform: scale(0.8);
          }

          .delivery_left {
            color: #fff;
            background-color: $blue;
            border: 0.02rem solid $blue;
          }

          .delivery_right {
            color: $blue;
            border: 0.02rem solid $blue;
          }
        }
      }

      .right_bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 0.32rem;

        .fee {
          transform: scale(0.9);
          color: #666;
        }

        .distance_time {
          transform: scale(0.9);

          span {
            color: #999;
          }

          .order_time {
            color: $blue;
          }

          .segmentation {
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>
