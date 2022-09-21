<template>
  <div>
    <Header :tag="tag"> </Header>
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="value1" :options="option1" :title="vdmTitle ? vdmTitle : '分类'" ref="vdm">
        <template>
          <Category @changeTitle="setTtile"></Category>
        </template>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" title="排序" ref="vdm2">
        <template>
          <Sort @changeSort="setSort"></Sort>
        </template>
      </van-dropdown-item>
      <van-dropdown-item title="筛选">
        <!--TODO: 优化样式和接口逻辑 -->
        <template>
          <div class="headr-peison">
            <div class="filter_header_style">配送方式</div>
            <div class="headr-peison-item">
              <i class="iconfont icon-yepian  zhuanson"></i>蜂鸟专送
            </div>
            <div class="filter_header_style">商家属性 &nbsp;&nbsp;&nbsp;&nbsp;(可以多选)</div>
            <div class="headr-peison-item2">
              <template v-for="(footItem,index) in list" ::key="footItem.id">
                <div class="headr-peison-item2-list" @click="listItem(footItem,index)">
                  <span class="list-item" :style="{
                    color: '#' + footItem.icon_color,
                    border: `1px solid #${footItem.icon_color}`,
                  }">{{ footItem.icon_name }}</span>
                  <span class="list-name">{{ footItem.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
    <ShopList :restaurant_category_ids="restaurant_category_ids" :sortId="sortIds"></ShopList>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import ShopList from "@/components/common/shopList.vue";
import { foodActivity } from "@/api/takeout";
import Category from "./components/category.vue";
export default {
  components: { Header, ShopList, Category },
  created() { },
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
      isShow: "",
      iconList: [],
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
      this.vdmTitle = val;
      this.restaurant_category_ids = sortId;
      this.$refs.vdm.toggle();
    },
    setSort(val) {
      this.sortIds = val;
      this.$refs.vdm2.toggle();
    },
    listItem(footItem, index) {
      this.iconList.push(index)
      this.iconList = Array.from(new Set(this.iconList))
      this.iconList.sort()
      if (this.iconList.indexOf(index)) {
        console.log(1)
      }


    }
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

  .filter_header_style {
    font-size: .32rem;
    color: #333;
    line-height: .85rem;
    height: .85rem;
    text-align: left;
    background-color: #fff;
  }

  .filter_header_style {
    height: 35px;
    font-size: 12px;
  }

  .headr-peison-item {
    width: 30%;
    border: 1px solid #e5e5e5;
    padding: 4px;

    .zhuanson {
      padding-right: 5px;
    }
  }

  .headr-peison-item2 {
    display: flex;
    flex-wrap: wrap;

    .headr-peison-item2-list {
      width: 33%;
      box-sizing: border-box;

      .active {
        color: #4d8ee1;
      }

      .list-item {
        padding: 0 3px;
      }

      .list-name {
        margin-left: 3px;
      }

      padding: 5px;
    }
  }
}
</style>
