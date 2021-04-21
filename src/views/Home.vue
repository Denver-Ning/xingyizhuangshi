<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="banner" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in homeInfo.banner"
          :key="item.title"
        >
          <img :src="item.thumb" alt="" :title="item.title" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 设计案例定制 -->
    <DesignCase />
    <!-- 服务 -->
    <Team :teamInfo="homeInfo.teams" />
    <!-- 方案 -->
    <Plan :planInfo="homeInfo.type" />
    <!-- 在建工地 -->
    <Sites :sitesInfo="homeInfo.build" />
    <!-- 星艺咨询 -->
    <Consult :consultInfo="homeInfo.news" :activity="homeInfo.activitys" />
  </div>
</template>

<script>
import DesignCase from "../components/Home/DesignCase";
import Team from "../components/Home/Team";
import Plan from "../components/Home/Plan";
import Sites from "../components/Home/Sites";
import Consult from "../components/Home/Consult";
export default {
  name: "Home",
  metaInfo() {
    return {
      title: this.commonTitle,
    };
  },
  data() {
    return {
      commonTitle: sessionStorage.getItem("title"),
      swiperOption: {
        loop: true,
        autoplay: true,
        disableOnInteraction: false,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      homeInfo: [],
      commonList: [],
    };
  },
  methods: {
    async getHomeInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/index/index.html")
        .then(({ data }) => {
          this.homeInfo = data;
        });
    },
    async getCommonInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/index/baseconfig")
        .then(({ data }) => {
          this.commonList = data;
        });
    },
  },
  watch: {},
  components: {
    DesignCase,
    Team,
    Plan,
    Sites,
    Consult,
  },
  mounted() {
    this.mySwiper.slideTo(1, 1000, false);
    this.getHomeInfo();
    this.getCommonInfo();
  },
};
</script>
<style scoped>
.banner {
  width: 100%;
  margin: 0 auto;
  height: calc((100vh - 106px));
  overflow: hidden;
}
.banner img {
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .banner {
    height: inherit;
  }
}
@media screen and (max-width: 767px) {
  .banner img {
    height: 200px;
  }
}
@import "../assets/style/home/sites.css";
</style>
<style>
.banner
  .swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  width: 18px !important;
  height: 18px !important;
}
</style>