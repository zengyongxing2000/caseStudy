<template>
  <div>
    <Header :tag="tag"> </Header>
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item
        v-model="value1"
        :options="option1"
        :title="vdmTitle ? vdmTitle : '分类'"
        ref="vdm"
      >
        <template>
          <Category @changeTitle="setTtile"></Category>
        </template>
      </van-dropdown-item>
      <van-dropdown-item
        v-model="value2"
        :options="option2"
        title="排序"
        ref="vdm2"
      >
        <template>
          <Sort @changeSort="setSort"></Sort>
        </template>
      </van-dropdown-item>
      <van-dropdown-item title="筛选">
        <template>
          <div class="headr-peison">
            <div>配送方式</div>
            <div class="headr-peison-item">
              <i class="iconfont icon-yepian"></i>蜂鸟专送
            </div>
            <div>商家属性(可以多选)</div>
            <div class="headr-peison-item2">
              <template v-for="footItem in list" ::key="footItem.id">
                <div class="headr-peison-item2-list">
                  <span
                    :style="{
                      color: '#' + footItem.icon_color,
                      border: `1px solid #${footItem.icon_color}`,
                    }"
                    >{{ footItem.icon_name }}</span
                  >{{ footItem.name }}
                </div></template
              >
            </div>
          </div>
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
    <ShopList
      :restaurant_category_ids="restaurant_category_ids"
      :sortId="sortIds"
    ></ShopList>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import ShopList from "@/components/common/shopList.vue";
import { foodActivity } from "@/api/takeout";
import Category from "./components/category.vue";
import Sort from "./components/sort.vue";
export default {
  components: { Header, ShopList, Category, Sort },
  created() {},
  data() {
    return {
      tag: "商超便利",
      vdmTitle: "",
      value1: "",
      value2: "",
      list: [],
      option1: [],
      option2: [],
      restaurant_category_ids: "",
      sortIds: "",
    };
  },
  methods: {
    shopstatus() {
      foodActivity().then((res) => {
        this.list = res;
        // console.log(this.list);
      });
    },
    setTtile(val, sortId) {
      // console.log(val, sortId);
      this.vdmTitle = val;
      this.restaurant_category_ids = sortId;
      this.$refs.vdm.toggle();
    },
    setSort(val) {
      this.sortIds = val;
      this.$refs.vdm2.toggle();
    },
  },
  mounted() {
    this.shopstatus();
  },
};
</script>

<style lang="scss" scoped>
::v-deep .van-dropdown-item__content {
  position: absolute;
  max-height: 375px;
  overflow-y: hidden;
}

.headr-peison {
  padding: 10px 20px;
  .headr-peison-item {
    width: 30%;
    border: 1px solid #e5e5e5;
  }
  .headr-peison-item2 {
    display: flex;
    flex-wrap: wrap;
    .headr-peison-item2-list {
      width: 30%;
      span {
      }
    }
  }
}
</style>
