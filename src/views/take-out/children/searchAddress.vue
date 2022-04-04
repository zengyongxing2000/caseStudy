<template>
  <div class="search">
    <Header :tag="tag">
      <template v-slot:header-right>
        <p class="header-right" @click="$router.push('/citys')">切换城市</p>
      </template>
    </Header>
    <div class="searchForm">
      <div class="searchForm_input">
        <input type="text" autocomplete="on" placeholder="输入学校, 商务楼, 地址">
      </div>
      <div class="searchForm_button">
        <button>提交</button>
      </div>
    </div>
    <h4 class="search_title">搜索历史</h4>
  </div>
</template>

<script>
  import Header from '../../../components/header.vue';
  export default {
    components: {
      Header
    },
    data() {
      return {
        tag: this.$route.query.theCity
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    min-height: 100vh;
    padding-top: .27rem;
    background-color: #f5f5f5;

    .searchForm {
      background-color: #fff;
      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      padding-top: .24rem;

      div {
        width: 90%;
        margin: 0 auto;
        text-align: center;

        input {
          border: 1px solid #e4e4e4;
          padding: 0 .19rem;
          font-size: .4rem;
          color: #333;
          border-radius: .03rem;
          margin-bottom: .25rem;
          width: 100%;
          height: .85rem;
          box-sizing: border-box;
        }

        button {
          background-color: #3190e8;
          font-size: .4rem;
          color: #fff;
          border: none;
          border-radius: .05rem;
          margin-bottom: .25rem;
          width: 100%;
          height: .85rem;
          box-sizing: border-box;
        }

      }
    }

    .search_title{
      text-indent: .29rem;
      font-weight: 400;
      color: #333;
    }

  }
</style>