<template>
  <div class="sort">
    <div class="sort__main">
      <p :sortById="0" @click="changeSort($event)">
        <span class="main__left">
          <i class="iconfont icon-cangpeitubiao_paixuzhandianpaixu"></i>
          智能排序
        </span>
        <van-icon
          v-if="showSuccess === '0'"
          class="main__right"
          name="success"
          color="#4d8ee1"
          size="20"
        />
      </p>
      <p :sortById="5" @click="changeSort($event)">
        <span class="main__left">
          <i class="iconfont icon-didian"></i> 距离最近
        </span>
        <van-icon
          v-if="showSuccess === '5'"
          class="main__right"
          name="success"
          color="#4d8ee1"
          size="20"
        />
      </p>
      <p :sortById="6" @click="changeSort($event)">
        <span class="main__left">
          <i class="iconfont icon-daochu1024-07"></i> 销量最高
        </span>
        <van-icon
          v-if="showSuccess === '6'"
          class="main__right"
          name="success"
          color="#4d8ee1"
          size="20"
        />
      </p>
      <p :sortById="1" @click="changeSort($event)">
        <span class="main__left">
          <i class="iconfont icon-fukuan"></i> 起送价最低
        </span>
        <van-icon
          v-if="showSuccess === '1'"
          class="main__right"
          name="success"
          color="#4d8ee1"
          size="20"
        />
      </p>
      <p :sortById="2" @click="changeSort($event)">
        <span class="main__left">
          <i class="iconfont icon-shijianchuo"></i> 配送速度最快
        </span>
        <van-icon
          v-if="showSuccess === '2'"
          class="main__right"
          name="success"
          color="#4d8ee1"
          size="20"
        />
      </p>
      <p :sortById="3" @click="changeSort($event)">
        <span class="main__left">
          <i class="iconfont icon-pingfen"></i> 评分最高
        </span>
        <van-icon
          v-if="showSuccess === '3'"
          class="main__right"
          name="success"
          color="#4d8ee1"
          size="20"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSuccess: "",
    };
  },
  methods: {
    changeSort(e) {
      this.showSuccess = e.target.getAttribute("sortById");
      this.$emit("changeSort", e.target.getAttribute("sortById"));
    },
  },
};
</script>

<style lang="scss" scoped>
.sort__main {
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    padding-left: 18px;
    border-bottom: 0.025rem solid #e4e4e4;

    .main__left {
      .iconfont {
        margin-right: 7px !important;
      }
    }

    .main__right {
      margin-right: 14px;
    }
  }
}
</style>
