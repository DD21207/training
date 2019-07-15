<template>
  <div id="home_div" style="height:100%;">
    <div class="img_box">
      <img src="../../static/img/banner.jpg" alt />
    </div>
    <div class="router_box">
      <router-link to>学员学习目标</router-link>
      <router-link to>学员信息查询</router-link>
      <router-link to="Feedback">学员反馈提交</router-link>
      <router-link to="Comments">评语意见提交</router-link>
      <router-link to>抄写反馈查阅</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  filters: {},
  mounted: function() {
    // this.$store.commit('changeBtn', 'home');
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang="less">
@import "../assets/less/common.less";
#home_div {
  .img_box {
    width: 100%;
    text-align: center;
    img {
      width: 80%;
    }
  }
  .router_box {
    border-top: 1px solid lightgray;
    margin-top: 20px;
    a {
      display: block;
      width: 100%;
      text-align: center;
      line-height: 3;
      color: black;
      border-bottom: 1px solid lightgray;
      cursor: pointer;
    }
  }
}
</style>
