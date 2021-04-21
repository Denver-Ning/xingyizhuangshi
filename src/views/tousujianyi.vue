<template>
  <div class="container-fuild marketing">
    <div class="banner">
      <img src="../assets/image/yingxiao/banner.png" alt="" />
      <div class="content">
        <div class="line"></div>
        <div class="title">以优秀的设计定义未来，以优秀的施工决定未来</div>
        <div>
          DEFINE FUTURE WITH EXCELLENT DESIGN DECIDE THE FUTURE WITH EXCELLENT
          CONSTRUCTION!
        </div>
      </div>
    </div>
    <!-- 当前位置 -->
    <div class="current">
      <div class="center">
        <span @click="toHome">首页</span>>
        <span>无忧服务</span>
        >
        <span>投诉建议</span>
      </div>
      <div class="bg"></div>
    </div>

    <div class="info">
      <div class="title">
        <div class="big">投</div>
        <div>
          <div>诉建议</div>
          <div>COMPLAINTS SUGGESTIONS</div>
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
  name: "Marketing",
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
  mounted() {},
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
  width: 67.5%;
  margin: 0 auto;
}

@media screen and (max-width: 1024px) {
  .infoCenter {
    width: 75%;
    margin-top: 20px;
  }
}
@media screen and (max-width: 767px) {
  .infoCenter {
    width: 90%;
    margin-top: 20px;
  }
  .info {
    padding-bottom: 30px;
  }
  .info .title,
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