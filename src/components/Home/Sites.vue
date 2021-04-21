<template>
  <div class="container-fuild sites">
    <div class="sitesCenter">
      <div class="title d-flex">
        <div class="bgc">
          <img src="../../assets/image/zaijiangongdi.png" alt="" />
        </div>
        <div class="content wow animate__animated animate__slideInUp">
          <div>CONSTRUCTION SITE</div>
          <div>在建工地</div>
        </div>
      </div>
      <div class="carousel wow animate__animated animate__slideInUp">
        <div
          @mouseenter="jiantoujin"
          @mouseleave="jiantouli"
          class="carouselSwiper"
          v-swiper:mySwiper="swiperOption"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide item"
              @click="toSites(sitesInfo[index].id)"
              v-for="(item, index) in sitesInfo"
              :key="item.id"
            >
              <img :src="item.thumb" alt="" />
              <div class="content">
                <div>{{ item.name }}</div>
                <div>{{ item.stage_name }}</div>
              </div>
            </div>
          </div>
          <div v-show="jiantouTrue" class="jiantou prev">
            <div class="swiper-button-prev">
              <img src="../../assets/image/shangyige.png" alt="" />
            </div>
          </div>
          <div v-show="jiantouTrue" class="jiantou next">
            <div class="swiper-button-next">
              <img src="../../assets/image/xiayige.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sites",
  props: ["sitesInfo"],
  data() {
    return {
      jiantouTrue: false,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 1,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 2,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    toSites(id) {
      this.$router.push(`sites/case/detail?id=${id}`);
    },
    jiantoujin() {
      this.jiantouTrue = true;
    },
    jiantouli() {
      this.jiantouTrue = false;
    },
  },
  mounted() {
    this.mySwiper.slideTo(0, 1000, false);
  },
};
</script>
<style scoped>
.sites {
  background: #f7f7f7;
}
.sitesCenter {
  width: 75%;
  margin: 0 auto;
  padding-top: 78px;
  padding-bottom: 80px;
}
.title {
  padding-bottom: 30px;
  align-items: center;
}
.title .content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 22px;
}
.title .content div:nth-child(1) {
  color: #b04b4b;
}

.carousel .item {
  position: relative;
  cursor: pointer;
  max-height: 315.21px;
}
.carousel .item img {
  width: 100%;
  height: 100%;
}
.carousel .item .content {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: 18px;
  padding: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.3);
}
.carousel .item .content div:nth-child(1) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}
.carouselSwiper {
  position: relative;
}
.carouselSwiper .jiantou {
  width: 45px;
  height: 47px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
}
.carouselSwiper .prev {
  position: absolute;
  left: 2%;
  top: 43%;
  z-index: 10;
}
.carouselSwiper .iconfont {
  font-size: 22px;
  line-height: 47px;
}
.carouselSwiper .next {
  position: absolute;
  right: 2%;
  top: 43%;
  z-index: 10;
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: "";
}
.swiper-button-prev,
.swiper-button-next {
  color: #000;
  font-size: 20px;
}
</style>