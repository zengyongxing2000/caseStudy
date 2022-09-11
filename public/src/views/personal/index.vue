<template>
  <div class="page-personal">
    <Header :tag="tag" />
    <div class="my_there" style="margin-top: .27rem;">
      <div class="there_wrap">
        <div class="there_item">
          <p class="there_p" style="height: 1.33rem">头像
            <span>
              <i class="iconfont icon-touxiang11" style="font-size: 1.23rem"></i>
              <van-icon name="arrow" size="0.61rem" color="#d8d8d8" />
            </span>
          </p>

        </div>
        <div class="there_item">
          <p class="there_p" @click="$router.push('/username')">用户名

            <span>
              {{username}}
              <van-icon name="arrow" size="0.61rem" color="#d8d8d8" />
            </span>

          </p>

        </div>
        <div class="there_item">
          <p class="there_p">收获地址
            <van-icon name="arrow" size="0.61rem" color="#d8d8d8" />
          </p>
        </div>
      </div>
    </div>

    <p class="title">账号绑定</p>
    <div class="my_there">
      <div class="there_wrap">
        <div class="there_item">
          <p class="there_p">
            <span>
              <img src="../../../public/images/bindphone.png" alt="">手机
            </span>
            <span>
              <van-icon name="arrow" size="0.61rem" color="#d8d8d8" />
            </span>
          </p>
        </div>
      </div>
    </div>

    <p class="title">安全设置</p>
    <div class="my_there">
      <div class="there_wrap">
        <div class="there_item">
          <p class="there_p">登录密码
            <span>
              修改
              <van-icon name="arrow" size="0.61rem" color="#d8d8d8" />
            </span>
          </p>

        </div>
      </div>
    </div>

    <van-button size="large" class="tx" @click="exit">退出登录</van-button>
  </div>
</template>

<script>
  import Header from '@/components/header';
  import {
    Dialog
  } from 'vant';
  export default {
    components: {
      Header,
      [Dialog.Component.name]: Dialog.Component,
    },
    data() {
      return {
        tag: '账户信息',
        username: ''
      }
    },
    methods: {
      exit() {
        var that = this

        function beforeClose(action, done) {
          if (action === 'confirm') {
            that.$router.push('/my');
            localStorage.removeItem('username');
            done();
          } else {
            done();
          }
        }

        Dialog.confirm({
          // title: '标题',
          message: '是否退出登录',
          'confirmButtonText': '退出登录',
          'cancelButtonText': '再等等',
          'confirmButtonColor': '#cf715b',
          'cancelButtonColor': '#c1c1c1',
          beforeClose,
        });

      }
    },
    mounted() {
      this.username = localStorage.getItem('username')
    },
  }
</script>

<style lang='scss' scoped>
  .page-personal {
    height: 100vh;
    background-color: #f5f5f5;

    .my_there {
      background-color: #fff;

      .there_wrap {

        .there_item {
          display: flex;
          align-items: center;
          height: 100%;
          width: 100%;

          .there_p {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: .85rem;
            border-bottom: 1px solid #ddd;
            padding: .19rem .24rem;
            font-size: .37rem;
            color: #333;
            font-weight: 500;

            span {
              display: flex;
              align-items: center;

              img {
                margin-right: .26rem;
              }

            }
          }
        }
      }

    }

    .title {
      padding: .25rem;
      color: #666;

    }

    .tx {
      width: 9.6rem;
      height: .93rem;
      margin: .8rem .2rem 0 .2rem;
      border-radius: .11rem;
      background-color: #d8584a;
      color: white;
      font-size: 0.37rem;
    }
  }
</style>