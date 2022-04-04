<template>
  <div class="testChild">
    <slot name="footer" :msg='msg'>
    </slot>
    <slot :msg="msg">
      <p>{{msg.firstname}}</p>
    </slot>
    <!-- <slot name="header" >测试</slot> -->
  </div>
</template>

<script>
  export default {
    name: 'TestChild',
    data() {
      return {
        msg: {
          firstname: 'John',
          lastname: 'Doe'
        }
      }
    },

  }
</script>

<style lang="scss" scoped>
  .testChild {
    color: red;
  }
</style>