<template>
  <div class="category">
    <div class="category__type">
      <template v-for="categoryItem in typeList" ::key="categoryItem.id">
        <div
          class="type__title"
          :class="{ colorWhite: colorItem == categoryItem.id }"
          @click="getSubList(categoryItem)"
        >
          <p>
            <img
              class="title__img"
              :src="getImgPath(categoryItem.image_url)"
              alt=""
            />
            <span>{{ categoryItem.name }}</span>
          </p>
          <p>
            <span class="title__count">{{ categoryItem.count }}</span>
            <van-icon name="arrow" />
          </p>
        </div>
      </template>
    </div>
    <div class="category__content">
      <template v-for="contentItem in subList" ::key="contentItem.id">
        <p
          class="content__main"
          @click.stop="submitCategory(contentItem.name, contentItem.id)"
        >
          <span>{{ contentItem.name }}</span>
          <span>{{ contentItem.count }}</span>
        </p>
      </template>
    </div>
  </div>
</template>

<script>
import { storeList, restaurants } from "@/api/takeout";
import { getImgPath } from "@/components/mixin.js";
export default {
  data() {
    return {
      keyword: "",
      colorItem: "",
      typeList: [],
      subList: [],
    };
  },
  mixins: [getImgPath],
  methods: {
    shoplist() {
      let params = {
        latitude: localStorage.getItem("latitude"),
        longitude: localStorage.getItem("longitude"),
      };
      storeList().then((res) => {
        // console.log(res);
        this.typeList = res;
      });
    },
    getSubList(data) {
      this.colorItem = data.id;
      this.subList = data.sub_categories;
    },
    submitCategory(name, id) {
      this.$emit("changeTitle", name, id);
    },
  },
  mounted() {
    this.shoplist();
  },
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;

  .colorWhite {
    background-color: #fff;
  }

  .category__type {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    // height: 375px;
    // // overflow: auto;
    color: #666;
    background-color: #f1f1f1;

    .type__title {
      display: flex;
      width: 100%;
      height: 42px;
      padding: 0 12px;
      justify-content: space-between;
      align-items: center;

      .title__img {
        width: 18px;
        margin-right: 4.68px;
      }

      .title__count {
        color: #fff;
        background-color: #ccc;
        padding: 2.3px;
        border: 0.586px solid #ccc;
        border-radius: 14px;
        margin-right: 5.8px;
      }
    }
  }
  .category__type::-webkit-scrollbar {
    opacity: 0 !important;
  }

  .category__content {
    width: 50%;
    padding: 0 12px;
    height: 375px;
    overflow: auto;
    .content__main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 41px;
      border-bottom: 0.025rem solid #e4e4e4;
    }
  }
  .category__content::-webkit-scrollbar {
    opacity: 0 !important;
  }
}
</style>
