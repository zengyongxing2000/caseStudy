<template>
  <div>
    <van-address-edit :show-area=false show-delete show-set-default :search-result="searchResult" @save="onSave"
      @delete="onDelete">
    </van-address-edit>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
  },
}
</script>

<style lang="scss" scoped>

</style>