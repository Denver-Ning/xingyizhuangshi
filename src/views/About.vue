<template>
  <div class="container-fuild marketing">
    <div class="banner">
      <img :src="commonBanner.image" alt="" />
      <div class="content">
        <div class="line"></div>
        <div class="title">{{ commonBanner.title }}</div>
        <div>
          {{ commonBanner.des }}
        </div>
      </div>
    </div>
    <!-- 当前位置 -->
    <div class="current">
      <div class="center">
        <span @click="toHome">首页</span> >
        <a href="/about/xingyi">关于我们</a>>
        <span>
          <a
            v-if="$route.path == '/about/dongtai/detail'"
            href="/about/dongtai"
          >
            {{ location }}</a
          >
          <a v-else> {{ location }}</a>
        </span>
      </div>
      <div class="bg"></div>
    </div>

    <div class="info">
      <div class="title">
        <div class="big">{{ locationBig }}</div>
        <div>
          <div>{{ locationSmall }}</div>
          <div>{{ locationEng }}</div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="infoCenter">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      location: "",
      locationEng: "",
      locationBig: "",
      locationSmall: "",
      commonBanner: [],
      user: "",
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    async getBanner() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/banner.html")
        .then(({ data }) => {
          this.commonBanner = data;
        });
    },
    path() {
      if (this.$route.path == "/about/xingyi") {
        this.location = "星艺集团";
        this.locationBig = "星";
        this.locationSmall = "艺集团";
        this.locationEng = "DESIGN ELITE";
      } else if (this.$route.path == "/about/yangzhou") {
        this.location = "扬州公司";
        this.locationBig = "扬";
        this.locationSmall = "州公司";
        this.locationEng = "XINGYI DECORATION";
      } else if (this.$route.path == "/about/gushi") {
        this.location = "品牌故事";
        this.locationBig = "品";
        this.locationSmall = "牌故事";
        this.locationEng = "XINGYI DECORATION";
      } else if (this.$route.path == "/about/huojiang") {
        this.location = "获奖案例";
        this.locationBig = "获";
        this.locationSmall = "奖案例";
        this.locationEng = "WINNING CASE";
      } else if (this.$route.path == "/about/dongtai") {
        this.location = "企业动态";
        this.locationBig = "企";
        this.locationSmall = "业动态";
        this.locationEng = "XINGYI DECORATION";
      } else if (this.$route.path == "/about/dongtai/detail") {
        this.location = "企业动态 > 正文";
        this.locationBig = "企";
        this.locationSmall = "业动态";
        this.locationEng = "BUSINESS MOVEMENT";
      } else {
        this.location = "人才招聘";
        this.locationBig = "人";
        this.locationSmall = "才招聘";
        this.locationEng = "TALENT RECRUITMENT";
      }
    },
  },
  watch: {
    $route(to) {
      if (to.path == "/about/xingyi") {
        this.location = "星艺集团";
        this.locationBig = "星";
        this.locationSmall = "艺集团";
        this.locationEng = "DESIGN ELITE";
        this.$router.push("/about/xingyi");
      } else if (to.path == "/about/yangzhou") {
        this.location = "扬州公司";
        this.locationBig = "扬";
        this.locationSmall = "州公司";
        this.locationEng = "XINGYI DECORATION";
        this.$router.push("/about/yangzhou");
      } else if (to.path == "/about/gushi") {
        this.location = "品牌故事";
        this.locationBig = "品";
        this.locationSmall = "牌故事";
        this.locationEng = "XINGYI DECORATION";
        this.$router.push("/about/gushi");
      } else if (to.path == "/about/huojiang") {
        this.location = "获奖案例";
        this.locationBig = "获";
        this.locationSmall = "奖案例";
        this.locationEng = "WINNING CASE";
        this.$router.push("/about/huojiang");
      } else if (to.path == "/about/dongtai") {
        this.location = "企业动态";
        this.locationBig = "企";
        this.locationSmall = "业动态";
        this.locationEng = "XINGYI DECORATION";
        this.$router.push("/about/dongtai");
      } else if (to.path == "/about/dongtai/detail") {
        this.location = "企业动态 > 详情";
        this.locationBig = "企";
        this.locationSmall = "业动态";
        this.locationEng = "XINGYI DECORATION";
        this.$router.push("/about/dongtai/detail");
      } else {
        this.location = "人才招聘";
        this.locationBig = "人";
        this.locationSmall = "才招聘";
        this.locationEng = "XINGYI DECORATION";
        this.$router.push("/about/zhaopin");
      }
    },
  },
  mounted() {
    this.getBanner();
    this.path();
  },
};
</script>
<style scoped>
.banner {
  position: relative;
  width: 100%;
}
.banner img {
  width: 100%;
  height: 100%;
}
.banner .content {
  position: absolute;
  z-index: 10;
  color: #fff;
  top: 220px;
  left: 320px;
}
.banner .content .line {
  width: 136px;
  height: 1px;
  background: #fff;
}
.banner .content .title {
  font-size: 28px;
  font-weight: 800;
  margin-top: 25px;
}
.banner .content div:last-child {
  margin-top: 5px;
}

.current {
  height: 125px;
  width: 100%;
}
.current .bg {
  height: 57px;
  width: 100%;
  background-image: linear-gradient(#f5f5f5, #fff);
}
.current .center {
  width: 75%;
  margin: 0 auto;
  line-height: 68px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.current .center a {
  color: #000;
  text-decoration: none;
}
.current .center span {
  cursor: pointer;
}

.info {
  width: 100%;
  margin: 0 auto;
}
.info .title {
  display: flex;
  width: 75%;
  margin: 0 auto;
  position: relative;
  padding-left: 40px;
}
.info .title .big {
  position: absolute;
  top: -6px;
  left: 0;
  font-size: 40px;
  color: #a14f54;
}
.info .title > div:last-child {
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  line-height: 20px;
  padding-top: 5px;
}
.infoCenter {
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 767px) {
  .current .center,
  .info .title {
    width: 90%;
  }
  .banner {
    height: 150px;
  }
  .banner .content {
    top: 22%;
    left: 10%;
    padding-right: 7%;
  }
  .banner .content .title {
    font-size: 14px;
    margin-top: 8px;
  }
  .banner .content div:last-child {
    margin-top: 0;
    font-size: 12px;
  }
}
</style>