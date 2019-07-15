import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home.vue";
import Feedback from "@/views/feedback/index.vue";
import addFeedback from "@/views/feedback/addFeedback.vue";
import feedbackResult from "@/views/feedback/feedbackResult.vue";
import Comments from "@/views/comments/index.vue";

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "新员工培训管理平台"
      }
    },
    {
      path: "/Feedback",
      name: "Feedback",
      component: Feedback,
      meta: {
        title: "学员反馈提交"
      }
    },
    {
      path: "/addFeedback",
      name: "addFeedback",
      component: addFeedback,
      meta: {
        title: "新增学员反馈"
      }
    },
    {
      path: "/feedbackResult",
      name: "feedbackResult",
      component: feedbackResult,
      meta: {
        title: "审批结果"
      }
    },
    {
      path: "/Comments",
      name: "Comments",
      component: Comments,
      meta: {
        title: "评语意见提交"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
