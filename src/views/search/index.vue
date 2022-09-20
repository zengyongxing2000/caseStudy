<template>
  <div class="search">
    <Header :tag="tag"></Header>
    <form class="search_form">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="searchValue"
        @input="checkInput">
      <input type="submit" name="submit" class="search_submit" @click.prevent="searchTarget('')">
    </form>
    <h4 class="title_restaurant">搜索历史</h4>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
export default {
  data() {
    return {
      tag: "搜索",
    };
  },
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../../components/mixin.scss';

.search {
  background-color: #f5f5f6;
}

.search_form {
  background-color: #fff;
  padding: .29rem;
  display: flex;

  input {
    height: .93rem;
  }

  .search_input {
    flex: 4;
    border: 0.015rem solid $bc;
    @include sc(.4rem, #333);
    border-radius: 0.125rem;
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 0 .15rem;
  }

  .search_submit {
    flex: 1;
    border: 0.015rem solid $blue;
    margin-left: .12rem;
    @include sc(.4rem, #fff);
    border-radius: 0.125rem;
    background-color: $blue;
    font-weight: bold;
    padding: 0 0.15rem;
  }
}

.title_restaurant {
  font-size: .37rem;
  line-height: 1.23rem;
  text-indent: 0.35rem;
  font-weight: bold;
  color: #666;
}
</style>