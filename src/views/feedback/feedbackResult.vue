<template>
  <div class="addFeedback">
    <div class="content_box">
      <group :gutter="'20px'">
        <x-input
          title="*学员姓名"
          v-model="name"
          :text-align="'right'"
          :placeholder-align="'right'"
          placeholder="请输入"
          :readonly="true"
        ></x-input>
        <x-input
          title="*portal帐号"
          v-model="portalId"
          :text-align="'right'"
          :placeholder-align="'right'"
          placeholder="请输入"
          :readonly="true"
        ></x-input>
        <x-input
          title="*反馈类型"
          v-model="feedbackCategory"
          :text-align="'right'"
          :placeholder-align="'right'"
          placeholder="请输入"
          :readonly="true"
        ></x-input>
        <x-input
          title="*反馈标题"
          v-model="title"
          :text-align="'right'"
          :placeholder-align="'right'"
          placeholder="请输入"
          :readonly="true"
        ></x-input>
        <x-textarea
          title="*学习内容反馈"
          v-model="feedbackContent"
          placeholder="请输入"
          :autosize="true"
          :readonly="true"
        ></x-textarea>
        <x-textarea
          title="*评语意见"
          v-model="desc"
          placeholder="若导师/组长/主任未反馈此处为空"
          :autosize="true"
          :readonly="true"
        ></x-textarea>
      </group>
      <div class="button_box">
        <x-button class="edit_btn" @click.native="addSubmit">返回</x-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addFeedback",
  components: {},
  data() {
    return {
      title: "",
      feedbackContent: "",
      feedbackCategory: "",
      categoryList: [["日反馈", "周反馈", "月反馈"]],
      copyPerson: [],
      defaultPerson: "",
      name: "",
      portalId: "",
      desc: ""
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
@import "../../assets/less/common.less";

.addFeedback {
  .content_box {
    margin-top: 20px;
    .vux-cell-value {
      color: #333333;
    }
    .button_box {
      margin-top: 30px;
      width: 100%;

      .edit_btn {
        float: left;
        width: 60%;
        background: @common_color;
        color: white;
        margin-left: 20%;
      }
      .close_btn {
        float: left;
        width: 24%;
        background: white;
        border-color: @common_color;
        color: @common_color;
        margin-left: 3%;
        margin-top: 0px;
      }
    }
  }
  .check_box {
    width: calc(100% - 15px);
    border-top: 1px solid lightgray;
    margin-left: 15px;
    padding: 15px 0;
  }
  .demo5-item {
    width: 100px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
    float: right;
  }
  .demo5-item-selected {
    background: #ffffff
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDOEJBQ0E3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDOEJBQ0I3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkM4QkFDODc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkM4QkFDOTc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMGp3kAAAAJUExURf9KAP///////4Jqdw0AAAADdFJOU///ANfKDUEAAAAuSURBVHjaTMpBDgAABAPB5f+PlhLUpZMWuQcYMWLEyDN4ymqa5KS4+3G+KAEGACQmAGlKzr56AAAAAElFTkSuQmCC)
      no-repeat right bottom;
    border-color: #ff4a00;
  }
}
</style>