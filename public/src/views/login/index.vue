<template>
  <div class="page-login">
    <Header :tag="tag" />
    <van-form @submit="onSubmit" class="form">
      <van-field v-model="username" name="账户" placeholder="账户" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" :type="types" name="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]">
        <template #right-icon>
          <van-switch v-model="checked" size="24" @change="toggle" />
        </template>
      </van-field>
      <van-field v-model="yzms" name="验证码" placeholder="验证码" :rules="[{ validator, message: '请填写验证码' }]">
        <template #right-icon>
          <div class="yzm">{{yzm}}</div>
          <div @click="validationYzm">
            <p>看不清</p>
            <p style="color: #3b95e9">换一张</p>
          </div>
        </template>
      </van-field>
      <p class="tip">温馨提示: 未注册过的账号,登录时自动注册</p>
      <p class="tip">注册过的用户可凭账户密码登录</p>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <router-link to="#" class="reset">重置密码</router-link>

  </div>
</template>

<script>
  import Header from '@/components/header';
  export default {
    components: {
      Header
    },
    data() {
      return {
        tag: '登录',
        username: '',
        password: '',
        yzms: '',
        show: true,
        types: 'password',
        checked: false,
        yzm: '',
      }
    },
    methods: {
      onSubmit(values) {
        localStorage.setItem('username', this.username);
        this.$router.push('/my');
      },

      validator(val) {
        if (this.yzm !== this.yzms) {
          return false
        }
      },

      toggle() {
        if (this.checked === false) {
          this.types = 'password'
        } else {
          this.types = 'text'
        }
      },

      validationYzm() {
        this.getCode();
      }
    },

    mounted() {
      var that = this;
      const codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      // 用来生成随机整数
      function getRandom(n, m) { // param: (Number, Number)
        n = Number(n);
        m = Number(m);
        if (n > m) { // 确保 m 始终大于 n
          var temp = n;
          n = m;
          m = temp;
        }
        // 下有详细说明
        return Math.floor(Math.random() * (m - n) + n);
      }
      that.getCode = function () {
        var str = '';
        // 验证码有几位就循环几次
        for (var i = 0; i < 4; i++) {
          var ran = getRandom(0, 62);
          str += codeStr.charAt(ran);
        }
        that.yzm = str
      }
      that.getCode();
    },
  }
</script>

<style lang='scss' scoped>
  .page-login {
    height: 100vh;
    background-color: #f5f5f5;

    .form {
      margin-top: .37rem;
    }

    ::v-deep input::-webkit-input-placeholder {
      color: #666;
    }

    ::v-deep .van-field__right-icon {
      display: flex;
      align-items: center;

      .yzm {
        font-size: .59rem;
        letter-spacing: .13rem;
      }

      p {
        font-size: .34rem;
        color: #666;
      }
    }

    .tip {
      font-size: .32rem;
      color: #ff0000;
      padding: .24rem .37rem;
    }

    .reset {
      float: right;
      font-size: .37rem;
      color: #3b95e9;
      margin-right: .19rem;
    }
  }
</style>