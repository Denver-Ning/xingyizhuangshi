<template>
  <div class="gushi">
    <div class="pinpaiInfo">
      <div v-html="gushiInfo.brandStoryContent"></div>
    </div>
    <div class="gushiList">
      <div class="swiper-center" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide active"
            v-for="(item, index) in gushiInfo.hislist"
            :key="item.title"
          >
            <div class="info">
              <div class="pic">
                <img :src="item.thumb" alt="" />
              </div>
              <div class="content">
                <div class="title">{{ item.title }}</div>
                <div class="text" v-html="item.content"></div>
                <div class="page">
                  <span>{{ index + 1 }}</span
                  >/{{ gushiInfo.hislist.length }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="prevBox">
          <div class="swiper-button-prev prev">
            <span class="iconfont icon-jiantouzuo"></span>
          </div>
        </div>
        <div class="nextBox">
          <div class="swiper-button-next next">
            <span class="iconfont icon-jiantouyou"></span>
          </div>
        </div>
      </div>
      <div class="listBottom">
        <div
          class="bottomItem"
          v-for="(item, index) in gushiInfo.hislist"
          :key="item.title"
          @click="bottomItem(index)"
        >
          <div>
            <img class="bt_img" :src="item.image" alt="" />
          </div>
          <div class="bt_text">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <!-- 荣耀资质 -->
    <div class="zizhi">
      <div class="zizhiTitle">
        <div>荣耀资质</div>
        <div>HOADN ADSFJLKAFS</div>
      </div>
      <div class="zizhiSwiper">
        <div v-swiper:zizhiSwiper="zizhiOption">
          <div class="swiper-wrapper zizhiSwiperCenter">
            <div
              class="swiper-slide"
              v-for="item in gushiInfo.honnor"
              :key="item.title"
            >
              <div>
                <img :src="item.thumb" alt="" />
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo(){
    return{
      title:this.commonTitle
    }
  },
  data() {
    return {
      commonTitle: sessionStorage.getItem('title'),
      gushiInfo: [],
      zizhiOption: {
        slidesPerView: 4,
        spaceBetween: 25,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 4,
            spaceBetween: 25,
            slidesPerGroup: 4,
          },
        },
        navigation: {
          nextEl: ".zizhi-swiper-next",
          prevEl: ".zizhi-swiper-perv",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        },
      },
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        navigation: {
          nextEl: ".nextBox",
          prevEl: ".prevBox",
        },
        on: {
          // 监听下标
          slideChangeTransitionStart: () => {
            this.$nextTick(() => {
              let swiper = this.mySwiper;
              if (swiper.realIndex == 0) {
                $(".bt_img")
                  .eq(0)
                  .attr(
                    "src",
                    this.gushiInfo.hislist[swiper.realIndex].choice_icon
                  );
                $(".bt_img").eq(1).attr("src", this.gushiInfo.hislist[1].image);
                $(".bt_img").eq(2).attr("src", this.gushiInfo.hislist[2].image);
                $(".bt_img").eq(3).attr("src", this.gushiInfo.hislist[3].image);
                $(".bt_text").eq(0).css({ color: "#b04b4b" });
                $(".bt_text").eq(1).css({ color: "inherit" });
                $(".bt_text").eq(2).css({ color: "inherit" });
                $(".bt_text").eq(3).css({ color: "inherit" });
              }
              if (swiper.realIndex == 1) {
                $(".bt_img")
                  .eq(1)
                  .attr(
                    "src",
                    this.gushiInfo.hislist[swiper.realIndex].choice_icon
                  );
                $(".bt_img").eq(0).attr("src", this.gushiInfo.hislist[0].image);
                $(".bt_img").eq(2).attr("src", this.gushiInfo.hislist[2].image);
                $(".bt_img").eq(3).attr("src", this.gushiInfo.hislist[3].image);
                $(".bt_text").eq(1).css({ color: "#b04b4b" });
                $(".bt_text").eq(0).css({ color: "inherit" });
                $(".bt_text").eq(2).css({ color: "inherit" });
                $(".bt_text").eq(3).css({ color: "inherit" });
              }
              if (swiper.realIndex == 2) {
                $(".bt_img")
                  .eq(2)
                  .attr(
                    "src",
                    this.gushiInfo.hislist[swiper.realIndex].choice_icon
                  );
                $(".bt_img").eq(0).attr("src", this.gushiInfo.hislist[0].image);
                $(".bt_img").eq(1).attr("src", this.gushiInfo.hislist[1].image);
                $(".bt_img").eq(3).attr("src", this.gushiInfo.hislist[3].image);
                $(".bt_text").eq(2).css({ color: "#b04b4b" });
                $(".bt_text").eq(1).css({ color: "inherit" });
                $(".bt_text").eq(0).css({ color: "inherit" });
                $(".bt_text").eq(3).css({ color: "inherit" });
              }
              if (swiper.realIndex == 3) {
                $(".bt_img")
                  .eq(3)
                  .attr(
                    "src",
                    this.gushiInfo.hislist[swiper.realIndex].choice_icon
                  );
                $(".bt_img").eq(0).attr("src", this.gushiInfo.hislist[0].image);
                $(".bt_img").eq(1).attr("src", this.gushiInfo.hislist[1].image);
                $(".bt_img").eq(2).attr("src", this.gushiInfo.hislist[2].image);
                $(".bt_text").eq(3).css({ color: "#b04b4b" });
                $(".bt_text").eq(1).css({ color: "inherit" });
                $(".bt_text").eq(2).css({ color: "inherit" });
                $(".bt_text").eq(0).css({ color: "inherit" });
              }
            });
          },
        },
      },
    };
  },
  methods: {
    async getGushiInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/brandStory.html")
        .then(({ data }) => {
          this.gushiInfo = data;
        });
      $(".bt_img").eq(0).attr("src", this.gushiInfo.hislist[0].choice_icon);
      $(".bt_text").eq(0).css({ color: "#b04b4b" });
    },
    bottomItem(index) {
      if (index == 0) {
        this.mySwiper.slideToLoop(0, 1000, false);
        $(".bt_img")
          .eq(0)
          .attr("src", this.gushiInfo.hislist[index].choice_icon);
        $(".bt_img").eq(1).attr("src", this.gushiInfo.hislist[1].image);
        $(".bt_img").eq(2).attr("src", this.gushiInfo.hislist[2].image);
        $(".bt_img").eq(3).attr("src", this.gushiInfo.hislist[3].image);
        $(".bt_text").eq(0).css({ color: "#b04b4b" });
        $(".bt_text").eq(1).css({ color: "inherit" });
        $(".bt_text").eq(2).css({ color: "inherit" });
        $(".bt_text").eq(3).css({ color: "inherit" });
      }
      if (index == 1) {
        this.mySwiper.slideToLoop(1, 1000, false);
        $(".bt_img")
          .eq(1)
          .attr("src", this.gushiInfo.hislist[index].choice_icon);
        $(".bt_img").eq(0).attr("src", this.gushiInfo.hislist[0].image);
        $(".bt_img").eq(2).attr("src", this.gushiInfo.hislist[2].image);
        $(".bt_img").eq(3).attr("src", this.gushiInfo.hislist[3].image);
        $(".bt_text").eq(1).css({ color: "#b04b4b" });
        $(".bt_text").eq(0).css({ color: "inherit" });
        $(".bt_text").eq(2).css({ color: "inherit" });
        $(".bt_text").eq(3).css({ color: "inherit" });
      }
      if (index == 2) {
        this.mySwiper.slideToLoop(2, 1000, false);
        $(".bt_img")
          .eq(2)
          .attr("src", this.gushiInfo.hislist[index].choice_icon);
        $(".bt_img").eq(0).attr("src", this.gushiInfo.hislist[0].image);
        $(".bt_img").eq(1).attr("src", this.gushiInfo.hislist[1].image);
        $(".bt_img").eq(3).attr("src", this.gushiInfo.hislist[3].image);
        $(".bt_text").eq(2).css({ color: "#b04b4b" });
        $(".bt_text").eq(1).css({ color: "inherit" });
        $(".bt_text").eq(0).css({ color: "inherit" });
        $(".bt_text").eq(3).css({ color: "inherit" });
      }
      if (index == 3) {
        this.mySwiper.slideToLoop(3, 1000, false);
        $(".bt_img")
          .eq(3)
          .attr("src", this.gushiInfo.hislist[index].choice_icon);
        $(".bt_img").eq(0).attr("src", this.gushiInfo.hislist[0].image);
        $(".bt_img").eq(1).attr("src", this.gushiInfo.hislist[1].image);
        $(".bt_img").eq(2).attr("src", this.gushiInfo.hislist[2].image);
        $(".bt_text").eq(3).css({ color: "#b04b4b" });
        $(".bt_text").eq(1).css({ color: "inherit" });
        $(".bt_text").eq(2).css({ color: "inherit" });
        $(".bt_text").eq(0).css({ color: "inherit" });
      }
    },
  },
  mounted() {
    this.mySwiper.slideTo(0, 1000, false);
    this.zizhiSwiper.slideTo(0, 1000, false);
    this.getGushiInfo();
  },
};
</script>
<style scoped>
.gushi {
  width: 100%;
}
.pinpaiInfo {
  width: 75%;
  margin: 0 auto;
  padding-top: 37px;
  padding-bottom: 30px;
}
.pinpaiInfo div {
  padding-bottom: 30px;
  line-height: 30px;
}
.gushiList {
  width: 100%;
  background: #f7f7f7;
  padding-top: 62px;
  padding-bottom: 70px;
}
.swiper-center {
  position: relative;
}
/* .swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  font-size: 16px !important;
} */
.swiper-button-prev:after,
.swiper-button-next:after {
  display: none;
}
.gushiList .prevBox div .iconfont,
.gushiList .nextBox div .iconfont {
  font-size: 24px;
}
.swiper-center .swiper-wrapper > div {
  width: 60%;
  margin-left: 60px;
}
.swiper-center .info {
  display: flex;
  min-height: 435px;
}
.swiper-center .info .pic {
  width: 55%;
}
.swiper-center .info .pic img {
  width: 100%;
  height: 100%;
}
.swiper-center .info .content {
  background: #fff;
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  width: 45%;
}
.swiper-center .info .content .title {
  font-size: 20px;
  padding-bottom: 20px;
}
.swiper-center .info .content .title::after {
  content: "";
  display: block;
  height: 4px;
  width: 55px;
  background: #a15050;
  margin-top: 20px;
}
.swiper-center .info .content .text {
  height: 200px;
  overflow-y: scroll;
  padding-right: 20px;
}
.info .content .text::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.info .content .text::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #d6d6d6;
}
.info .content .text::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #f7f7f7;
}
.swiper-center .info .content .page {
  padding-top: 40px;
  text-align: right;
}
.swiper-center .info .content .page span {
  font-size: 22px;
  color: #a15050;
}
.swiper-center .prevBox {
  width: 56px;
  height: 56px;
  background: #d6d6d6;
  color: #fff;
  position: relative;
  left: 56.7%;
  top: -80px;
  z-index: 20;
}
.swiper-center .prevBox:hover,
.swiper-center .nextBox:hover {
  background: #a15050;
}
.swiper-center .nextBox {
  width: 56px;
  height: 56px;
  background: #d6d6d6;
  color: #fff;
  position: relative;
  left: 60.7%;
  top: -136px;
  z-index: 20;
}
.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  width: 100%;
  left: 0;
}

.gushiList .listBottom {
  width: 67.5%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: -40px;
  position: relative;
  z-index: 20;
}
.listBottom .bottomItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
}
.listBottom .bottomItem div:nth-child(1) {
  padding-bottom: 34px;
}

/* 荣耀资质 */
.zizhi {
  width: 75%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 60px;
}
.zizhi .zizhiTitle {
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
}
.zizhiTitle div:nth-child(1) {
  font-size: 24px;
  padding-bottom: 20px;
}
.zizhiTitle div:nth-child(2) {
  font-size: 14px;
  color: #575757;
}
.zizhiSwiperCenter {
  text-align: center;
  padding-bottom: 100px;
}
.zizhiSwiperCenter .swiper-slide > div {
  width: 283px;
  height: 382px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 2px 2px 15px #eee;
}
.swiper-pagination-bullet-active {
  background: #a04f4f;
}
.swiper-pagination-bullet {
  width: 15px;
  height: 15px;
}
@media screen and (max-width: 1024px) {
  .swiper-center .swiper-wrapper > div {
    width: 100%;
    margin-left: 40px;
  }
  .info .pic {
    width: 50%;
  }
  .info .content {
    width: 50%;
  }
  .gushiList .listBottom {
    width: 85%;
  }
  .swiper-center .nextBox {
    left: 69%;
  }

  .zizhiSwiper img {
    width: 100%;
  }
  .zizhiSwiperCenter .swiper-slide {
    width: calc((100% - 100px) / 4);
  }
  .zizhiSwiperCenter .swiper-slide > div {
    width: inherit;
    height: auto;
  }
}
@media screen and (max-width: 767px) {
  .pinpaiInfo {
    width: 90%;
  }
  .gushiList .swiper-center {
    width: 90%;
    margin: 0 auto;
  }
  .gushiList .swiper-wrapper {
    transform: none;
  }
  .swiper-center .prevBox,
  .swiper-center .nextBox {
    width: 40px;
    height: 40px;
  }
  .swiper-center .prevBox {
    top: -60px;
    left: 45px;
  }
  .swiper-center .nextBox {
    top: -100px;
    left: 25%;
  }
  .swiper-button-prev:after {
    font-size: 18px;
  }
  .swiper-button-next:after {
    font-size: 18px;
  }
  .swiper-center .swiper-wrapper > div {
    margin-left: 0px;
  }
  .swiper-center .info {
    flex-direction: column;
  }
  .swiper-center .info .pic img {
    width: 100%;
  }

  .swiper-center .info div {
    width: 100% !important;
  }
  .swiper-center .info .content {
    padding: 25px 15px;
  }
  .swiper-center .info .content .page {
    margin-bottom: 10px;
  }
  .zizhi {
    width: 90%;
  }
  .zizhi .zizhiTitle {
    margin-bottom: 0;
  }
  .zizhiSwiperCenter {
    padding-bottom: 50px;
  }
  .zizhiSwiperCenter .swiper-slide > div {
    width: inherit;
  }
  .listBottom .bottomItem div:nth-child(2) {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .gushiList .listBottom img {
    width: 60px;
  }
}
</style>