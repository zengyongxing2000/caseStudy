<template>
  <div class="page-username">
    <Header :tag="tag" />
    <div class="wrap">
      <div class="form">
        <input
          type="text"
          :class="{ 'input-orange': flag }"
          v-model="username"
          placeholder="输入用户名"
          @input="sure"
        />
        <p :class="{ orange: flag }">{{ message }}</p>

        <div class="btnSure">
          <button :class="{ btnSure: !flag }" @click="setName">确认修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      flag: "",
      tag: "修改用户名",
      message: "用户名只能修改一次（5-24字符之间）",
      username: "",
    };
  },
  methods: {
    sure() {
      if (this.username.length >= 5 && this.username.length <= 24) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },

    setName() {
      this.sure();
      localStorage.setItem("username", this.username);
      this.$router.push("/my");
    },
  },
};
</script>

<style lang="scss">
.page-username {
  height: 100vh;
  background-color: #f5f5f5;

  .wrap {
    margin: 0.29rem 0.24rem;
  }

  .form {
    input {
      background: none;
      width: 9.31rem;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0.12rem 0.06rem;
      line-height: 0.75rem;
      font-size: 0.43rem;
      display: block;
    }

    p {
      padding: 0.24rem 0 0.63rem;
      color: #666;
    }

    .btnSure {
      width: 9.49rem;
      height: 1.23rem;
      background-color: #3199e8;
    }

    button {
      border: none;
      font-size: 0.43rem;
      color: #fff;
      width: 100%;
      height: 100%;
      background: transparent;
      opacity: 0.6;
      transition: all 1s;
    }

    .orange {
      color: #ea3106;
    }

    .btnSure {
      transition: all 1s;
      opacity: 1;
    }

    .input-orange {
      border: 1px solid #ea3106;
    }
  }
}
</style>
