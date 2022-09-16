<template>
  <div class="page-city">
    <Header>
      <template v-slot:header-right v-if="!username">
        <p class="header-right" @click="$router.push('/login')">
          {{ "登录|注册" }}
        </p>
      </template>
      <template v-slot:header-right v-else>
        <van-icon
          class="header-right"
          name="manager-o"
          size="0.61rem"
          @click="$router.push('/personal')"
        />
      </template>
    </Header>
    <div class="city_title">
      <p class="right">当前定位城市</p>
      <p class="left">定位不准时,请在城市列表中选择</p>
    </div>
    <div class="city_title bor" @click="toSearchCity">
      <p class="city_left">{{ theCity }}</p>
      <van-icon name="arrow" size="0.61rem" color="#999" />
    </div>

    <h4>热门城市</h4>
    <span class="citywrap" v-for="(item, index) in hots" :key="index">
      <span>{{ item.name }}</span>
    </span>
    <div
      v-for="(value, key, index) in sortCity"
      :key="key"
      class="letter_classify_li"
    >
      <h4 class="city_title">
        {{ key }}
        <span v-if="index == 0">（按字母排序）</span>
      </h4>
      <!-- <router-link v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis"> -->
      <span class="citywrap color99" v-for="item in value" :key="item.id">
        <span class="city">{{ item.name }} </span>
      </span>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/takeout";
import Header from "@/components/header/";
export default {
  components: {
    Header,
  },
  data() {
    return {
      username: "",
      theCity: "",
      cityId: "",
      hots: [],
      citys: [],
      l: "",
      d: "",
    };
  },
  methods: {
    hot() {
      // 获取热门的城市
      let params = {
        type: "hot",
      };
      getList(params)
        .then((res) => {
          this.hots = res;
        })
        .catch((res) => {
          alert("获取失败");
        });
    },
    getLists() {
      // 获取当前所在的城市
      let params = {
        type: "guess",
      };
      getList(params)
        .then((res) => {
          this.theCity = res.name;
          this.cityId = res.id;
        })
        .catch((res) => {
          alert("获取失败");
        });
    },
    getGroupLists() {
      // 获取所有的城市
      let params = {
        type: "group",
      };
      getList(params)
        .then((res) => {
          this.citys = res;
        })
        .catch((res) => {
          alert("获取失败");
        });
    },

    toSearchCity() {
      this.$router.push({
        name: "searchCity",
        query: {
          cityId: this.cityId,
          theCity: this.theCity,
        },
      });
    },
  },
  computed: {
    sortCity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.citys[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.citys[String.fromCharCode(i)];
        }
      }
      return sortobj;
    },
  },
  mounted() {
    this.getLists();
    this.hot();
    this.getGroupLists();
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
  },
};
</script>

<style lang="scss" scoped>
.page-city {
  background-color: #f5f5f5;

  .city_title {
    padding: 0 0.27rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.91rem;
    background-color: #fff;

    .right {
      font-size: 0.34rem;
      color: #666;
    }

    .left {
      color: #9f9f9f;
      font-weight: 900;
    }

    .city_left {
      font-size: 0.47rem;
      color: #3190e8;
    }
  }

  .bor {
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    margin-bottom: 0.24rem;
  }

  h4 {
    // margin-bottom: .25rem;
    height: 0.88rem;
    line-height: 0.88rem;
    color: #666;
    font-weight: 400;
    font-size: 0.34rem;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
  }

  .citywrap {
    display: inline-block;
    width: 24.8%;
    height: 1.07rem;
    line-height: 1rem;
    font-size: 0.37rem;
    border-bottom: 0.02rem solid #e4e4e4;
    border-right: 0.02rem solid #e4e4e4;
    background-color: #fff;
    text-align: center;
    color: #3190e8;

    .city {
      display: inline-block;
      width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .color99 {
    color: #999;
  }
}
</style>
