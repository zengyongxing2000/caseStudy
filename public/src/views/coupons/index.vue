<template>
  <div class="page-balance">
    <Header :tag="tag" />
    <van-tabs v-model="active" animated swipeable color="#3190e8">
      <van-tab title="红包">
        <div class="crotainer">
          <div class="tips">
            <p>有<span> {{3}} </span>个红包即将到期</p>
            <p class="nowMoney">
              <van-icon name="question" size="14" />
              <router-link to="/balance/detail" class="content_title_style" style="color: #3190e8">紅包说明</router-link>
            </p>
          </div>
          <!-- 优惠券模块 -->
          <div class="yhqwrap" :class="{'nomb': yhqs.length === index+1}" v-for="(item,index) in yhqs" :key="index">
            <div class="yhq">
              <div class="yhq_left">
                <p class="left_price">¥<span class="price_int">{{(item.je.split('.'))[0]}}</span><span
                    class="price_float">.{{(item.je.split('.'))[1]}}</span></p>
                <p class="left_top">{{item.ky}}</p>
                <!-- 优惠券金额 /-->
              </div>
              <div class="yhq_center">
                <p class="center_type">{{item.type}}</p>
                <p>{{item.dq}}</p>
                <p>{{item.phone}}</p>
                <!-- 优惠类型,优惠时间,优惠手机 /-->
              </div>
              <div class="yhq_right">
                <p>{{item.daay}}</p>
              </div>
            </div>

          </div>
          <footer>
            <p data-v-841e3554="">限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
          </footer>
        </div>
      </van-tab>
      <van-tab title="商家代金券">

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Header from '@/components/header/';
  import {
    yhq
  } from '@/data/mydata.js';
  export default {
    components: {
      Header
    },
    data() {
      return {
        tag: '我的优惠',
        active: '',
        yhqs: [],
      }
    },
    created() {
      this.yhqs = yhq;
    },
  }
</script>

<style lang="scss" scoped>
  .page-balance {
    height: 100vh;
    background-color: #f5f5f5;

    .crotainer {
      padding: 0 .43rem;

      .tips {
        display: flex;
        height: 1.23rem;
        justify-content: space-between;
        align-items: center;
        color: #666;

        span {
          color: #ff5340
        }

        .nowMoney {
          color: #3190e8;
        }
      }

      .yhqwrap {
        background: #fff url('../../../public/images/hongbao.png') repeat-x;
        background-size: .29rem .12rem;
        margin-bottom: .29rem;
        border-radius: .15rem;

        .yhq {
          display: flex;
          justify-content: space-between;
          padding: .61rem .29rem .48rem .29rem;

          .yhq_left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            align-items: center;
            // border-right: 0.025rem dotted #ccc;

            // 优惠券金额
            .left_price {
              font-size: .45rem;
              color: #ff5340;
              font-weight: 700;
              font-family: Helvetica Neue, Tahoma, Arial;


              .price_int {
                font-size: .93rem;
                font-weight: 400;
              }

              .price_float {
                font-size: .5rem;

              }

            }

            .left_top {
              color: #999;
            }
          }

          .yhq_center {
            color: #999;

            .center_type {
              font-size: .43rem;
              color: #666;
            }
          }


          .yhq_right {
            font-size: 17px;
            color: #ff5340;
          }
        }
      }

      .nomb{
        margin-bottom: 0;
      }

      footer {
        padding: .25rem;
        background-color: #f9f9f9;
        color: #999;
        border-bottom-left-radius: .13rem;
        border-bottom-right-radius: .13rem;
      }
    }
  }
</style>