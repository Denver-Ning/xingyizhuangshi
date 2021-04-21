<template>
  <div class="container-fuild header">
    <div class="center">
      <div class="logo" @click="toHome">
        <img :src="commonList.logo" />
      </div>
      <div class="nav" v-if="navTrue">
        <ul class="navUl">
          <li class="nav_li">
            <a @click="toHome">首页</a>
          </li>
          <li class="nav_li">
            <a @click="toMarketing">营销活动</a>
          </li>
          <li class="nav_li">
            <a @click="toDesignTeam">设计团队</a>
            <ul class="tuanduiSub">
              <li class="active" @click="toDesignTeam">设计精英</li>
              <li @click="toStudy">设计研究</li>
            </ul>
          </li>
          <li class="nav_li">
            <a @click="todesignCase">设计案例</a>
            <ul class="anliSub">
              <li class="active" @click="todesignCase">精品案例</li>
              <li @click="toYanfa">户型研发</li>
            </ul>
          </li>
          <li class="nav_li">
            <a @click="tositesCase">在建工地</a>
          </li>
          <li class="nav_li">
            <a @click="toGygs">无忧服务</a>
            <ul class="fuwuSub">
              <li class="active" @click="toGygs">标准工艺</li>
              <li @click="huanbao">环保材料</li>
              <li @click="tousujianyi">投诉建议</li>
              <li @click="fuwubaozhang">服务保障</li>
              <li @click="fuwuliucheng">服务流程</li>
            </ul>
          </li>
          <li class="nav_li">
            <a @click="toStarsZz">星艺整装</a>
          </li>
          <li class="nav_li">
            <a @click="toXingyi">关于我们</a>
            <ul class="aboutSub">
              <li class="active" @click="toXingyi">星艺集团</li>
              <li @click="toYangzhou">扬州公司</li>
              <li @click="toGushi">品牌故事</li>
              <li @click="toHuojiang">获奖案例</li>
              <li @click="toDongtai">企业动态</li>
              <li @click="toZhaopin">人才招聘</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- 小导航 -->
      <div v-if="!navTrue" class="navSmall">
        <div class="btn" @click="navBtn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="navList">
          <div class="closeNavList" @click="closeNavList">
            <img src="../assets/image/closeSmall.png" alt="" />
          </div>
          <ul class="smallUl">
            <li>
              <a @click="toHome">首页</a>
            </li>
            <li>
              <a @click="toMarketing">营销活动</a>
            </li>
            <li>
              <a @click="tuandui">设计团队</a>
              <ul class="tuanduiSub row">
                <li class="active" @click="toDesignTeam">设计精英</li>
                <li @click="toStudy">设计研究</li>
              </ul>
            </li>
            <li>
              <a @click="anli">设计案例</a>
              <ul class="anliSub row">
                <li class="active" @click="todesignCase">精品案例</li>
                <li @click="toYanfa">户型研发</li>
              </ul>
            </li>
            <li>
              <a @click="tositesCase">在建工地</a>
            </li>
            <li>
              <a @click="fuwu">无忧服务</a>
              <ul class="fuwuSub row">
                <li class="active" @click="toGygs">标准工艺</li>
                <li @click="huanbao">环保材料</li>
                <li @click="tousujianyi">投诉建议</li>
                <li @click="fuwubaozhang">服务保障</li>
                <li @click="fuwuliucheng">服务流程</li>
              </ul>
            </li>
            <li>
              <a @click="toStarsZz">星艺整装</a>
            </li>
            <li>
              <a @click="about">关于我们</a>
              <ul class="aboutSub row">
                <li class="active" @click="toXingyi">星艺集团</li>
                <li @click="toYangzhou">扬州公司</li>
                <li @click="toGushi">品牌故事</li>
                <li @click="toHuojiang">获奖案例</li>
                <li @click="toDongtai">企业动态</li>
                <li @click="toZhaopin">人才招聘</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navTrue: true,
      commonList: [],
    };
  },
  methods: {
    async getCommonInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/index/baseconfig")
        .then(({ data }) => {
          this.commonList = data;
        });
    },
    watchChangeHeight() {
      let offHeight = $(document).scrollTop();
      if (offHeight > 300) {
        $(".header").css({ position: "fixed" });
      } else {
        $(".header").css({ position: "static" });
      }
    },
    watchWidth() {
      let offsetWid = window.screen.width;
      if (offsetWid < 768) {
        this.navTrue = false;
      }
      if (offsetWid > 768) {
        this.navTrue = true;
      }
    },
    watchWidthOne() {
      var offsetWid = document.documentElement.clientWidth;
      if (offsetWid >= 768) {
        this.navTrue = true;
      } else {
        this.navTrue = false;
      }
    },
    navBtn() {
      $(".navList").css({ transform: "translateX(0)", transition: "1s" });
    },
    closeNavList() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
    },
    tuandui() {
      $(".row").not(".tuanduiSub").slideUp();
      $(".tuanduiSub").slideToggle();
    },
    anli() {
      $(".row").not(".anliSub").slideUp();
      $(".anliSub").slideToggle();
    },
    fuwu() {
      $(".row").not(".fuwuSub").slideUp();
      $(".fuwuSub").slideToggle();
    },
    about() {
      $(".row").not(".aboutSub").slideUp();
      $(".aboutSub").slideToggle();
    },
    toHome() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/");
    },
    // 营销活动
    toMarketing() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/marketing/activity");
    },
    // 设计团队
    toDesignTeam() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/designTeam/elite");
    },
    // 设计研究
    toStudy() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/designTeam/study");
    },
    // 设计案例
    todesignCase() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/designCase/case");
    },
    // 设计研发
    toYanfa() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/designCase/yanfa");
    },
    //  工地案例
    tositesCase() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/sites/case");
    },
    // 星艺整装
    toStarsZz() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/stars/detail");
    },
    toGygs() {
      this.$router.push("/wuyoufuwu/gygs");
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
    },
    huanbao() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/huanbao/cailiao");
    },
    tousujianyi() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/tousujianyi/detail");
    },
    fuwubaozhang() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/fuwubaozhang/detail");
    },
    fuwuliucheng() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/fuwuliucheng/detail");
    },
    toXingyi() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/about/xingyi");
    },
    toYangzhou() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/about/yangzhou");
    },
    toHuojiang() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/about/huojiang");
    },
    toDongtai() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/about/dongtai");
    },
    toZhaopin() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/about/zhaopin");
    },
    toGushi() {
      $(".navList").css({ transform: "translateX(-100vw)", transition: "1s" });
      this.$router.push("/about/gushi");
    },
  },
  mounted() {
    this.getCommonInfo();
    this.watchWidthOne();
    window.onresize = () => {
      this.watchWidth();
    };
    window.onscroll = () => {
      this.watchChangeHeight();
    };
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  background: #fff;
  width: 100%;
  z-index: 99;
}
.center {
  width: 90%;
  height: 106px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center .logo {
  width: 292px;
  height: 70px;
}
.center .logo img {
  width: 100%;
}
ul {
  list-style: none;
}

.nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.navUl {
  display: flex;
  justify-content: flex-end;
  width: 80%;
}

.navUl .nav_li {
  position: relative;
  flex: 1;
  font-size: 18px;
  height: 106px;
  line-height: 106px;
  text-align: center;
  cursor: pointer;
}
.navUl .nav_li:hover ul {
  display: block;
}
.navUl a {
  text-decoration: none;
  color: #000;
  display: block;
  width: 100%;
  height: 100%;
}

.navUl .nav_li ul {
  width: 100%;
  position: absolute;
  z-index: 20;
  left: 20px;
  top: 80px;
  background: #fff;
  padding: 4px 0;
  display: none;
  box-shadow: 2px 0px 3px #f5f5f5;
}
.navUl .nav_li ul:nth-child(1) {
  display: block;
}
.navUl .nav_li .last {
  left: -20px;
}
.navUl .nav_li ul li {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.navUl .nav_li ul li:hover {
  background: #f5f5f5;
  color: #a57071;
}
.navUl .nav_li .aboutSub {
  left: -40px;
}
.navSmall {
  display: flex;
  align-items: center;
}

/* 小窗口 */
.btn {
  width: 40px;
  height: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.btn span {
  height: 2px;
  width: 80%;
  background: #ccc;
  display: block;
  margin: 0 auto;
}

.navList {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #2c2c2c;
  padding-top: 40px;
  z-index: 999;
  transform: translateX(-100vw);
}
.navList .closeNavList {
  position: absolute;
  right: 30px;
  top: 20px;
  color: #fff;
  cursor: pointer;
}
.navList .closeNavList img {
  width: 20px;
}
.navList .smallUl {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.navList .smallUl a {
  text-decoration: none;
  color: #fff;
}
.navList .smallUl > li {
  flex: 1;
  padding: 10px 0;
}
.navList .smallUl > li ul {
  color: #fff;
  display: none;
  margin-top: 15px;
  padding: 4px 0;
  background: #fff;
}
.navList .smallUl > li ul li {
  padding: 10px 0;
  font-size: 14px;
  color: #000;
}
.navList .smallUl > li ul li {
  color: #000;
}
.navList .smallUl > li ul li:hover {
  background: #eee;
}
.navList .tuanduiSub {
  display: none;
}
.navList .tuanduiSub li {
  color: #fff;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .navUl .nav_li {
    height: 70px;
    line-height: 70px;
  }
  .center {
    height: inherit;
    padding: 15px 0;
  }
  .logo img {
    width: 80%;
  }
  .navUl {
    width: 100%;
  }
  .navUl li a {
    font-size: 14px;
  }
  .navUl li ul {
    left: 15px;
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  .center .logo {
    width: auto;
    height: auto;
  }
  .center .logo img {
    width: 80%;
  }
  .center {
    padding: 10px 0;
    height: 70px;
  }
}
</style>