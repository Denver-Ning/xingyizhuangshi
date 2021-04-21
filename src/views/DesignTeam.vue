<template>
  <div class="container-fuild marketing">
    <div class="banner">
      <img :src="designBanner.image" alt="" />
      <div class="content">
        <div class="line"></div>
        <div class="title">{{ designBanner.title }}</div>
        <div>
          {{ designBanner.des }}
        </div>
      </div>
    </div>
    <!-- 当前位置 -->
    <div class="current">
      <div class="center">
        <span>
          <router-link to="/">首页</router-link>
        </span>
        > <a href="/designTeam/elite">设计团队</a>>
        <span>
          <a
            v-if="$route.path == 'designTeam/elite/detail'"
            href="/designTeam/elite"
            >{{ location }}</a
          >
          <a v-else>{{ location }}</a>
          {{ author }}</span
        >
      </div>
      <div class="bg"></div>
    </div>

    <div class="info">
      <div class="title">
        <div class="big">设</div>
        <div>
          <div>{{ location == "设计研究" ? "计研究" : "计精英" }}</div>
          <div>
            {{ location == "设计研究" ? "DESIGN RESEARCH" : "DESIGN ELITE" }}
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="infoCenter">
        <router-view @author="getAuthor" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      location: "设计精英",
      designBanner: [],
      author: "",
    };
  },
  methods: {
    getAuthor(val) {
      this.author = ">" + val;
    },
    async getDesignTeamInfo() {
      await this.$http
        .post(" http://xyzs.demo365day.cn/index.php/api/team/index.html")
        .then(({ data }) => {
          this.designBanner = data.banner;
        });
    },
    toHome() {
      this.$router.push("/");
    },
    path() {
      if (this.$route.path == "/designTeam/study") {
        this.location = "设计研究";
      } else if (this.$route.path == "/designTeam/elite") {
        this.author = "";
        this.location = "设计精英";
      } else {
        this.location = "设计精英";
      }
    },
  },
  watch: {
    $route(to) {
      if (to.path == "/designTeam/study") {
        this.author = "";
        this.location = "设计研究";
      } else if (to.path == "/designTeam/elite") {
        this.author = "";
        this.location = "设计精英";
      }
    },
  },
  mounted() {
    this.getDesignTeamInfo();
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

@media screen and (max-width: 767px) {
  .info {
    padding-bottom: 30px;
  }
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