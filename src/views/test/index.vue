<template>
  <div class="test">
    <TestChild>
      <template v-slot:footer='father'>
        这是父组件尾部内容
        <p>{{father.msg.firstname}}</p>
      </template>
      <template v-slot:default="father">
        <p >{{father.msg.lastname}}</p>
      </template>

      <!-- <template v-slot:header v-slot:default="fatherProps">
        <p>{{fatherProps.msg}}</p>
      </template> -->
    </TestChild>

  </div>
</template>

<script>
  import TestChild from './children/head.vue';
  export default {
    components: {
      TestChild
    },
    data() {
      return {
        // msg: '这是父组件的内容'
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>