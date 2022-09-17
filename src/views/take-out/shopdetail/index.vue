<template>
  <div class="apge-detail">
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
      <van-tab title="商品" name="a">
        <!-- 侧边导航栏 -->
        <ul class="shopMenu">
          <li
            v-for="(listItem, index) in shopList"
            :key="index"
            :class="{ liinex: index === lsIndex }"
            @click="lsIndex = index"
          >
            <span class="shopMenu__item">
              {{ listItem.name }}
            </span>
          </li>
        </ul>
        <div class="shopMenuContent">
          <template v-for="(ItemContent, index) in shopList" ::key="index">
            <p>
              {{ ItemContent.name }}
              {{ ItemContent.description }}
            </p>
            <template v-for="children in ItemContent.foods" ::key="children.id">
              <p>{{ children.name }}</p>
            </template>
          </template>
        </div>
      </van-tab>
      <van-tab title="评价" name="b">
        <van-tabs v-model="active" scrollspy sticky>
          <van-tab v-for="index in 8" :title="'选项 ' + index">
            内容 {{ index }}
          </van-tab>
        </van-tabs>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Header from "@/components/header";
import { shopDetails, shopLeftList } from "@/api/takeout.js";
export default {
  components: {
    Header,
  },
  data() {
    return {
      tag: "",
      headerData: {},
      shopList: [],
      lsIndex: "",
      shopimgurl: "https://elm.cangdu.org/img/",
      activeName: "a",
      active: "",
    };
  },
  methods: {
    initData() {
      const shopid = localStorage.getItem("shopid");
      shopDetails(shopid).then((res) => {
        this.headerData = res;
      });
      const params = { restaurant_id: shopid };
      shopLeftList(params).then((res) => {
        this.shopList = res;
        console.log(res);
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style lang="scss" scoped>
.apge-detail {
  margin-top: -1.23rem;
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
    height: 463px;
    overflow: hidden;
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
    width: 100%;
    height: 463px;
    overflow-y: scroll;
  }
}
</style>
