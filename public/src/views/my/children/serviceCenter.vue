<template>
  <div class="page-serviceCenter">
    <Header :tag="tag" />
    <div class="service">
      <div class="service_item bl">
        <i class="iconfont icon-kefu1"></i>
        <p>在线客服</p>
      </div>
      <div class="service_item">
        <i class="iconfont icon-dianhua"></i>
        <p>在线客服</p>
      </div>
    </div>

    <h4 class="hostQuestuon">热门问题</h4>

    <div class="questions" v-for="(item,index) in questions" :key="index" @click="godetail(item)">
      <p>{{item.name}}</p>
      <van-icon name="arrow" size="0.27rem" color="#555" />
    </div>
  </div>
</template>

<script>
  import {
    questions
  } from '@/data/mydata.js';
  import Header from '@/components/header';
  export default {
    components: {
      Header
    },
    data() {
      return {
        tag: '服务中心',
        questions: '',
      }
    },
    methods: {
      godetail(item){
        localStorage.setItem('article',item.article)
        localStorage.setItem('tag',item.name)
        this.$router.push('/detail');
      }
    },
    created() {
      this.questions = questions;
    },
  }
</script>

<style lang="scss" scoped>
  .service {
    display: flex;

    .service_item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 2.45rem;
      border-bottom: 1px solid #f5f5f5;

      i {
        font-size: .61rem;
      }

      p {
        margin-top: .24rem;
        font-size: .37rem;
        color: #666;
      }
    }

    .bl {
      border-right: 1px solid #f5f5f5;
    }
  }

  .hostQuestuon {
    padding-left: .43rem;
    height: 1.89rem;
    line-height: 1.89rem;
    color: #333;
    font-size: .45rem;
    font-weight: 400;
  }

  .questions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.23rem;
    font-size: .43rem;
    color: #666;
    padding: 0 .43rem;
    border-top: 1px solid #f5f5f5;
  }
</style>