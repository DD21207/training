<template>
  <div class="comments_div">
    <div class="new_box">
      <span>*学生姓名</span>
      <input type="text" v-model="name" />
    </div>
    <div class="filter_box">
      <div>
        <span>*状 态：</span>
        <select v-model="status">
          <option value="全部">全部</option>
          <option value="待审阅">待审阅</option>
          <option value="已审阅">已审阅</option>
          <option value="草稿">草稿</option>
        </select>
      </div>
      <div>
        <span>*反馈类型：</span>
        <select v-model="feedbackCategory">
          <option value="全部">全部</option>
          <option value="日报">日报</option>
          <option value="周报">周报</option>
          <option value="月报">月报</option>
        </select>
      </div>
      <div class="check_box">
        <x-button class="btn" @click.native="gotoOverview">查询</x-button>
      </div>
    </div>
    <scroller lock-x scrollbar-y :bounce="false" height="-110" @on-scroll-bottom="loadMore">
      <div class="table_box">
        <x-table :full-bordered="true">
          <thead>
            <tr>
              <th>学生姓名</th>
              <th>反馈类型</th>
              <th>反馈标题</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody></tbody>
        </x-table>
      </div>
    </scroller>
  </div>
</template>

<script>
export default {
  name: "comments_div",
  components: {},
  data() {
    return {
      num: 30,
      isFetch: false,
      pageNo: 1,
      status: "全部",
      feedbackCategory: "全部"
    };
  },
  computed: {},
  watch: {},
  methods: {
    getList() {
      const { pageNo, status, feedbackCategory } = this;
      this.$fetch(
        `/queryLearningFeedbackByPage?pageNo=${pageNo}&status=${status}&feedbackCategory=${feedbackCategory}`
      ).then(res => {
        console.log(res);
      });
    },
    loadMore() {
      console.log("object");
      this.num = this.num + 10;
    },
    gotoAdd() {
      this.$router.push("/addFeedback");
    }
  },
  created() {},
  mounted() {
    // this.getList();
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/less/common.less";
.comments_div {
  padding: 10px;
  .btn {
    background: @common_color;
    width: 100px;
    color: white;
    float: left;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
  }
  .new_box {
    text-align: left;
    padding: 0;
    width: 100%;
    position: relative;
    height: 35px;
    input {
      padding: 4px;
      border-radius: 10px;
      border: 1px solid lightgray;
    }
  }
  .filter_box {
    height: 50px;
    position: relative;
    select {
      width: 100px;
      border: 1px solid lightgray;
    }
    .check_box {
      position: absolute;
      right: 0;
      top: 25px;
    }
  }
  .table_box /deep/ {
    margin-top: 20px;
    padding: 0;
    th {
      font-weight: thin;
      font-size: 12px;
    }
  }
}
</style>