<template>
  <div class="page-balance">
    <Header :tag="tag" />
    <div class="balance_wrap">
      <div class="moneynums">
        <div class="tips">
          <p>当前积分</p>
          <p class="nowMoney">
            <van-icon name="question" size="14" />
            <router-link to="/balance/detail" class="content_title_style" style="color: #3190e8">积分说明</router-link>
          </p>

        </div>
        <p class="number"><span>{{number}}</span> 分</p>
        <van-button size="large" class="tx">积分兑换商品</van-button>
      </div>
    </div>
    <p class="detail_titles">交易明细</p>
    <Nodata />
  </div>
</template>

<script>
  import Header from '@/components/header/';
  import Nodata from '@/components/nodata/';
  export default {
    components: {
      Header,
      Nodata
    },
    data() {
      return {
        tag: '我的积分',
        number: 1000,
      }
    },
  }
</script>

<style lang='scss' scoped>
  .page-balance {
    height: 100vh;
    background-color: #f5f5f5;

    .balance_wrap {
      padding: .19rem;
      background-color: #3190e8;

      .moneynums {
        padding: .25rem;
        background-color: #fff;
        border-radius: .09rem;

        .tips {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .34rem;

          .nowMoney {
            color: #3190e8;
          }
        }
      }

      .number {
        height: 1.33rem;
        color: #333;
        font-size: .43rem;

        span {
          font-size: 1.12rem;
          font-weight: 500;
        }
      }

      .tx {
        height: 1.23rem;
        margin-top: .61rem;
        border-radius: .11rem;
        background-color: #fe6d47;
        color: white;
        font-size: .5rem;
      }
    }

    .detail_titles {
      font-size: .37rem;
      color: #999;
      line-height: 1.23rem;
      padding-left: .29rem;
    }
  }
</style>