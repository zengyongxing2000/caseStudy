<template>
  <div class="search">
    <Header :tag="tag">
      <template v-slot:header-right>
        <p class="header-right" @click="$router.push('/citys')">切换城市</p>
      </template>
    </Header>
    <div class="searchForm">
      <form action="" method="get">
        <div class="searchForm_input">
          <input
            type="text"
            autocomplete="on"
            v-model="address"
            placeholder="输入学校, 商务楼, 地址"
            required
          />
        </div>
        <div class="searchForm_button">
          <button type="submit" @click.prevent="searchSites()">提交</button>
        </div>
      </form>
    </div>
    <div class="SearchHistory" v-if="!sites">
      <h4 class="search_title">搜索历史</h4>
      //TODO: 完成搜索历史
    </div>
    <div
      class="addressContainer"
      v-for="(item, index) in sites"
      :key="index"
      @click="nextPage(item)"
    >
      <h5>{{ item.name }}</h5>
      <p>{{ item.address }}</p>
    </div>
  </div>
</template>

<script>
import Header from "../../../components/header.vue";
import { searchSite } from "../../../api/takeout";
export default {
  components: {
    Header,
  },
  data() {
    return {
      tag: this.$route.query.theCity,
      address: "",
      sites: [],
    };
  },
  methods: {
    searchSites(e) {
      let params = {
        city_id: this.$route.query.cityId,
        keyword: this.address,
        type: "search",
      };
      searchSite(params)
        .then((res) => {
          this.sites = res;
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    nextPage(item) {
      localStorage.setItem("latitude", item.latitude);
      localStorage.setItem("longitude", item.longitude);
      this.$router.push({ name: "take-out", query: { address: item.name } });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.search {
  min-height: 100vh;
  padding-top: 0.27rem;
  background-color: #f5f5f5;

  .searchForm {
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: 0.24rem;

    div {
      width: 90%;
      margin: 0 auto;
      text-align: center;

      input {
        border: 1px solid #e4e4e4;
        padding: 0 0.19rem;
        font-size: 0.4rem;
        color: #333;
        border-radius: 0.03rem;
        margin-bottom: 0.25rem;
        width: 100%;
        height: 0.85rem;
        box-sizing: border-box;
      }

      button {
        background-color: #3190e8;
        font-size: 0.4rem;
        color: #fff;
        border: none;
        border-radius: 0.05rem;
        margin-bottom: 0.25rem;
        width: 100%;
        height: 0.85rem;
        box-sizing: border-box;
      }
    }
  }

  .search_title {
    text-indent: 0.29rem;
    font-weight: 400;
    color: #333;
  }

  .addressContainer {
    padding: 0.4rem 0.5rem;
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;

    h5 {
      font-size: 0.4rem;
      color: #333;
      margin-bottom: 0.24rem;
      font-weight: 400;
    }

    p {
      color: #999;
    }
  }
}
</style>
