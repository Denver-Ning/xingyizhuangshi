<template>
  <div class="container-fuild marketing">
    <div class="banner">
      <img :src="designCaseBanner.image" alt="" />
      <div class="content">
        <div class="line"></div>
        <div class="title">{{ designCaseBanner.title }}</div>
        <div>
          {{ designCaseBanner.des }}
        </div>
      </div>
    </div>
    <!-- 当前位置 -->
    <div class="current">
      <div class="center">
        <span><router-link to="/">首页</router-link></span
        >> <a href="/designCase/case">设计案例</a>
        <span>
          <a
            v-if="$route.path == '/designCase/case/detail'"
            href="/designCase/case"
            >{{ fullLocation }}</a
          >
          <a v-else href="/designCase/yanfa">{{ fullLocation }}</a>
          {{ anliVal }}</span
        >
      </div>
      <div class="bg"></div>
    </div>

    <div class="info">
      <div class="title">
        <div class="big">{{ locationOne }}</div>
        <div>
          <div>{{ location }}</div>
          <div>
            {{ locationEng }}
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="infoCenter">
        <router-view @anli="getAnli" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullLocation: "",
      locationOne: "设",
      location: "计案例",
      designCaseBanner: [],
      locationEng: "CLASSIC CASE",
      anliVal: "",
    };
  },
  methods: {
    getAnli(val) {
      console.log(val);
      this.anliVal = val;
    },
    async getDesignCaseInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/team/caselist.html")
        .then(({ data }) => {
          this.designCaseBanner = data.banner;
        });
    },
    toHome() {
      this.$router.push("/");
    },
    path() {
      if (this.$route.path == "/designCase/case") {
        this.anliVal = "";
        this.locationOne = "精";
        this.location = "品案例";
        this.locationEng = "CLASSIC CASE";
        this.fullLocation = "> 精品案例";
      } else if (this.$route.path == "/designCase/yanfa") {
        this.anliVal = "";
        this.locationOne = "户";
        this.location = "型研发";
        this.locationEng = "DOOR MODEL";
        this.fullLocation = "> 户型研发";
      } else if (this.$route.path == "/designCase/case/detail") {
        this.locationOne = "案";
        this.location = "例详情";
        this.locationEng = "CLASSIC CASE";
        this.fullLocation = "> 精品案例 >";
      } else if (this.$route.path == "/designCase/yanfa/detail") {
        this.locationOne = "户";
        this.location = "型研发";
        this.locationEng = "DOOR MODEL";
        this.fullLocation = "> 户型研发 >";
      }
    },
  },
  watch: {
    $route(to) {
      if (to.path == "/designCase/case") {
        this.anliVal = "";
        this.locationOne = "精";
        this.location = "品案例";
        this.locationEng = "CLASSIC CASE";
        this.fullLocation = "> 精品案例";
      } else if (to.path == "/designCase/yanfa") {
        this.anliVal = "";
        this.locationOne = "户";
        this.location = "型研发";
        this.locationEng = "DOOR MODEL";
        this.fullLocation = "> 户型研发";
      } else if (to.path == "/designCase/case/detail") {
        this.locationOne = "案";
        this.location = "例详情";
        this.locationEng = "CLASSIC CASE";
        this.fullLocation = "> 精品案例 >";
      } else if (to.path == "/designCase/yanfa/detail") {
        this.locationOne = "户";
        this.location = "型研发";
        this.locationEng = "DOOR MODEL";
        this.fullLocation = "> 户型研发 >";
      }
    },
  },
  mounted() {
    this.getDesignCaseInfo();
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
.current .center span {
  cursor: pointer;
}

.info {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 111px;
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
.center a {
  color: #000;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .info {
    padding-bottom: 0;
  }
}
@media screen and (max-width: 767px) {
  .info .title {
    width: 90%;
  }
  .current .center {
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