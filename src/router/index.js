import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // 营销活动
  {
    path: "/marketing",
    name: "Marketing",
    component: () => import("../views/Marketing.vue"),
    children: [{
        path: "activity",
        component: () => import("../views/marketing/Activity.vue"),
      },
      {
        path: "detail",
        component: () => import("../views/marketing/Detail.vue"),
      },
    ],
  },
  // 设计团队
  {
    path: "/designTeam",
    name: "DesignTeam",
    component: () => import("../views/DesignTeam.vue"),
    children: [{
        path: "elite",
        component: () => import("../views/designTeam/Elite.vue"),
      },
      {
        path: "elite/detail",
        component: () => import("../views/designTeam/EliteDetail")
      },
      {
        path: "study",
        component: () => import("../views/designTeam/Study.vue"),
      },
    ],
  },
  // 设计案例
  {
    path: "/designCase",
    name: "DesignCase",
    component: () => import("../views/DesignCase.vue"),
    children: [{
        path: "case",
        component: () => import("../views/designCase/Case.vue"),
      },
      {
        path: "case/detail",
        component: () => import("../views/designCase/CaseDetail.vue")
      },
      {
        path: "yanfa",
        component: () => import("../views/designCase/Yanfa.vue")
      },
      {
        path: "yanfa/detail",
        component: () => import("../views/designCase/YanfaDetail.vue")
      },
    ],
  },
  // 无忧服务 工艺
  {
    path: "/wuyoufuwu",
    name: "Wuyoufuwu",
    component: () => import("../views/WuyouServe.vue"),
    children: [{
        path: 'gygs',
        component: () => import("../views/wuyouServe/GyDetail.vue")
      },
      {
        path: 'shigongbaohu',
        component: () => import("../views/wuyouServe/shigongbaohu.vue")
      },
      {
        path: 'nigong',
        component: () => import("../views/wuyouServe/nigong.vue")
      },
      {
        path: 'shuidian',
        component: () => import("../views/wuyouServe/shuidian.vue")
      },
      {
        path: 'mugong',
        component: () => import("../views/wuyouServe/mugong.vue")
      },
      {
        path: 'qigong',
        component: () => import("../views/wuyouServe/qigong.vue")
      },
      {
        path: 'shanhui',
        component: () => import("../views/wuyouServe/shanhui.vue")
      }
    ]
  },
  // 无忧服务 环保材料
  {
    path: '/huanbao',
    name: 'Wuyouhuanbao',
    component: () => import("../views/WuyouHuanbao.vue"),
    children: [{
        path: 'cailiao',
        component: () => import("../views/wuyouhuanbao/cailiao.vue")
      }, {
        path: 'bancai',
        component: () => import("../views/wuyouhuanbao/bancai.vue")
      },
      {
        path: 'huagong',
        component: () => import("../views/wuyouhuanbao/huagong.vue")
      },
      {
        path: 'shuicai',
        component: () => import("../views/wuyouhuanbao/shuicai.vue")
      },
      {
        path: 'diancai',
        component: () => import("../views/wuyouhuanbao/diancai.vue")
      },
      {
        path: 'wujin',
        component: () => import("../views/wuyouhuanbao/wujin.vue")
      },
      {
        path: 'baohu',
        component: () => import("../views/wuyouhuanbao/baohu.vue")
      },
      {
        path: 'peisong',
        component: () => import("../views/wuyouhuanbao/peisong.vue")
      },
    ]
  },
  // 无忧服务 投诉建议
  {
    path: '/tousujianyi',
    name: "tousujianyi",
    component: () => import("../views/tousujianyi.vue"),
    children: [{
      path: 'detail',
      component: () => import("../views/tousujianyi/Detail.vue")
    }]
  },
  // 无忧服务 服务保障
  {
    path: '/fuwubaozhang',
    name: 'fuwubaozhang',
    component: () => import("../views/fuwubaozhang.vue"),
    children: [{
      path: 'detail',
      component: () => import("../views/fuwubaozhang/Detail.vue")
    }]
  },
  // 服务流程
  {
    path: '/fuwuliucheng',
    name: 'fuwuliucheng',
    component: () => import("../views/fuwuliucheng.vue"),
    children: [{
      path: 'detail',
      component: () => import("../views/fuwuliucheng/detail.vue")
    }]
  },
  // 在建工地
  {
    path: "/sites",
    name: "Sites",
    component: () => import("../views/Sites.vue"),
    children: [{
      path: 'case',
      component: () => import("../views/sitesCase/SitesCase.vue")
    }, {
      path: 'case/detail',
      component: () => import("../views/sitesCase/SitesDetail.vue")
    }, ]
  },
  // 星艺整装
  {
    path: "/stars",
    name: "Stars",
    component: () => import("../views/Stars.vue"),
    children: [{
      path: 'detail',
      component: () => import("../views/stars/starsDetail")
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../views/About.vue"),
    children: [{
        path: 'xingyi',
        component: () => import("../views/about/xingyi.vue")
      },
      {
        path: 'yangzhou',
        component: () => import("../views/about/yangzhou.vue")
      },
      {
        path: 'gushi',
        component: () => import("../views/about/gushi.vue")
      },
      {
        path: 'huojiang',
        component: () => import("../views/about/huojiang.vue")
      },
      {
        path: 'dongtai',
        component: () => import("../views/about/dongtai.vue")
      },
      {
        path: 'dongtai/detail',
        component: () => import("../views/about/dongtaiDetail.vue")
      },
      {
        path: 'zhaopin',
        component: () => import("../views/about/zhaopin.vue")
      },
    ]
  },
  // 首页定制
  {
    path: "/dingzhi",
    name: "dingzhi",
    component: () => import("../views/dingzhi.vue"),
    children: [{
      path: 'detail',
      component: () => import("../views/dingzhi/detail.vue")
    }]
  },
  // 首页联系我们
  {
    path: "/lianxiwomen",
    name: "lianxiwomen",
    component: () => import("../views/lianxiwomen.vue"),
    children: [{
      path: "detail",
      component: () => import("../views/lianxiwomen/detail.vue")
    }]
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  mode: "history",
});

export default router;