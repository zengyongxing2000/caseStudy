<template>
  <div class="page-my">
    <Header :tag="tag" />
    <!-- 登录模块 -->
    <div class="my_login" @click="goWhere">
      <div class="login_wrap">
        <div class="userInfo">
          <i
            class="iconfont"
            :class="username !== '登录注册' ? 'icon-touxiang11' : ''"
          ></i>
        </div>
        <div class="login">
          <p class="login_p">{{ username }}</p>
          <p class="login_phone">
            <i class="iconfont icon-shouji"></i> {{ phone }}
          </p>
        </div>
        <van-icon name="arrow" size="0.27rem" />
      </div>
    </div>

    <!-- 我的余额,优惠,积分模块 -->
    <div class="my_assets">
      <div class="assets_wrap">
        <div class="assets_item" @click="$router.push('balance')">
          <p>
            <span class="item_balance">{{ balance }}</span
            >元
          </p>
          <p class="assets_p">我的余额</p>
        </div>
        <div class="assets_item" @click="$router.push('/coupons')">
          <p>
            <span class="item_coupon">{{ coupon }}</span
            >个
          </p>
          <p class="assets_p">我的优惠券</p>
        </div>
        <div class="assets_item" @click="$router.push('/integral')">
          <p>
            <span class="item_integral">{{ integral }}</span
            >分
          </p>
          <p class="assets_p">我的积分</p>
        </div>
      </div>
    </div>

    <!-- 我的订单,积分商场，饿了么会员卡模块 -->
    <div class="my_there">
      <div class="there_wrap">
        <div class="there_item">
          <p><i class="iconfont icon-dingdan"></i></p>
          <p class="there_p">
            我的订单
            <van-icon name="arrow" size="0.27rem" color="#555" />
          </p>
        </div>
        <div class="there_item">
          <p><i class="iconfont icon-gouwudai1"></i></p>
          <p class="there_p">
            积分商场
            <van-icon name="arrow" size="0.27rem" color="#555" />
          </p>
        </div>
        <div class="there_item">
          <p><i class="iconfont icon-huangguan"></i></p>
          <p class="there_p" style="border: none">
            饿了么会员卡
            <van-icon name="arrow" size="0.27rem" color="#555" />
          </p>
        </div>
      </div>
    </div>

    <!-- 服务中心,下载app-->
    <div class="my_there">
      <div class="there_wrap">
        <div class="there_item" @click="$router.push('/serviceCenter')">
          <p><i class="iconfont icon-fuwuzhongxin"></i></p>
          <p class="there_p">
            服务中心
            <van-icon name="arrow" size="0.27rem" color="#555" />
          </p>
        </div>
        <div class="there_item" @click="$router.push('/downloadApp')">
          <p><i class="iconfont icon-eliaomo"></i></p>
          <p class="there_p" style="border: none">
            饿了么会员卡
            <van-icon name="arrow" size="0.27rem" color="#555" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      username: "登录注册",
      phone: "暂无绑定手机号",
      balance: "0.00",
      coupon: "0",
      integral: "0",
      tag: "我的",
    };
  },
  methods: {
    goWhere() {
      this.username === "登录注册"
        ? this.$router.push("/login")
        : this.$router.push("/personal");
    },
  },
  mounted() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
  },
};
</script>

<style lang="scss" scoped>
.page-my {
  height: calc(100vh - 1.22rem);
  background-color: #f5f5f5;

  /* 登录注册按钮 模块
---------------------------------------------------------------- */
  .my_login {
    padding: 0.4rem 0.37rem;
    background-color: #3190e8;
    color: white;

    .login_wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .userInfo {
        i {
          font-size: 1.55rem;
        }
      }

      .login {
        width: 7.09rem;
        text-align: left;

        &_p {
          font-size: 0.5rem;
          font-weight: 700;
        }

        &_phone {
          font-size: 0.37rem;
        }
      }
    }
  }

  /* 我的余额,优惠,积分 模块
---------------------------------------------------------------- */
  .my_assets {
    height: 2.3rem;
    background-color: #fff;

    .assets_wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;

      .assets_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        &:nth-child(2),
        &:nth-child(1) {
          border-right: 1px solid #f1f1f1;
        }

        .assets_p {
          font-size: 0.35rem;
          color: #666;
          font-weight: 400;
        }

        p {
          span {
            font-size: 0.75rem;
            font-weight: 700;
          }
        }

        .item_balance {
          color: #f90;
        }

        .item_coupon {
          color: #ff5f3e;
        }

        .item_integral {
          color: #6ac20b;
        }
      }
    }
  }

  /* 我的订单,积分商场，饿了么会员卡 模块
---------------------------------------------------------------- */
  .my_there {
    margin-top: 0.27rem;
    background-color: #fff;

    .there_wrap {
      .there_item {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;

        p {
          i {
            display: inline-block;
            padding: 0 0.11rem 0 0.48rem;
          }
        }

        .there_p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          border-bottom: 1px solid #f1f1f1;
          padding: 0.27rem 0.16rem 0.27rem 0;
          font-size: 0.43rem;
          color: #333;
        }
      }
    }
  }
}
</style>
