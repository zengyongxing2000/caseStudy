<template>
  <div class="order">
    <Header :tag="tag"></Header>
    <van-swipe-cell>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
        <template #footer>
          <van-button size="mini">再来一单</van-button>
        </template>
      </van-card>
    </van-swipe-cell>

  </div>
</template>

<script>
import Header from '@/components/header.vue';
export default {
  data() {
    return {
      tag: "订单列表"
    };
  },
  components: { Header }
}
</script>

<style lang="scss" scoped>
.order {
  height: calc(100vh - 92px);
  background-color: #f5f5f5;

  .goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }

  .van-card__footer .van-button {
    margin-left: 5px;
    color: #3190E8;
    border-color: #3190E8;
  }
}
</style>