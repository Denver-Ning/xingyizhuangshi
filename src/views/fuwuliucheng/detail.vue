<template>
  <div>
    <!-- 设计流程 -->
    <div class="sheji">
      <div class="shejiTitle">
        <div>星艺设计流程</div>
        <div class="circleBg"></div>
        <div>THIS IS OUR DESIGN FLOW</div>
      </div>
      <div class="shejiCenter">
        <div class="sheji-prev" @mouseover="prevOver" @mouseleave="prevLeave">
          <img :src="prev" alt="" />
        </div>
        <div class="content">
          <div class="line"></div>
          <div v-swiper:mySwiper="swiperOption" style="width: 100%">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in liuchengInfo.design"
                :key="item.title"
              >
                <div class="listItem">
                  <div class="text">
                    <span>{{ index + 1 }}</span>
                    <div>{{ item.title }}</div>
                  </div>
                  <div class="dashed">---</div>
                  <div class="pic">
                    <img :src="item.thumb" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sheji-next" @mousemove="nextOver" @mouseleave="nextLeave">
          <img :src="next" alt="" />
        </div>
      </div>
    </div>
    <!-- 施工流程 -->
    <div class="shigong">
      <div class="shigongTitle">
        <div>星艺施工流程</div>
        <div class="bg"></div>
        <div>THIS IS OUR CONSTRNTION PREASEI</div>
      </div>
      <div class="shigongCenter">
        <div
          class="shigong-prev"
          @mouseover="shigongPrevOver"
          @mouseleave="shigongPrevLeave"
        >
          <img :src="shigongPrev" alt="" />
        </div>
        <div class="content">
          <div class="shigongLine"></div>
          <div v-swiper:shigongSwiper="shigongOption" style="height: 100%">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide shigongItem"
                v-for="item in liuchengInfo.construction"
                :key="item.title"
              >
                <div class="item item_1">
                  <div class="pic">
                    <img :src="item.thumb" alt="" />
                  </div>
                  <div class="text">{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="shigong-next"
          @mousemove="shigongNextOver"
          @mouseleave="shigongNextLeave"
        >
          <img :src="shigongNext" alt="" />
        </div>
      </div>
    </div>
    <!-- 服务流程 -->
    <div class="fuwu">
      <div class="fuwuTitle">
        <div>星艺服务流程</div>
        <div class="bg"></div>
        <div>THIS IS OUR SADFJKLAS</div>
      </div>
      <div class="fuwuList">
        <div
          class="fuwuItem"
          v-for="(item, index) in liuchengInfo.service"
          :key="item.title"
        >
          <div>{{ index + 1 }}</div>
          <div>{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.commonTitle,
    };
  },
  props: ["liuchengInfo"],
  data() {
    return {
      commonTitle: sessionStorage.getItem("title"),
      prev: require("../../assets/image/wuyoufuwu/fuwuliucheng/s.png"),
      next: require("../../assets/image/wuyoufuwu/fuwuliucheng/x.png"),
      shigongPrev: require("../../assets/image/wuyoufuwu/fuwuliucheng/s.png"),
      shigongNext: require("../../assets/image/wuyoufuwu/fuwuliucheng/x.png"),
      swiperOption: {
        slidesPerView: 5,
        navigation: {
          nextEl: ".sheji-next",
          prevEl: ".sheji-prev",
        },
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
      },
      shigongOption: {
        slidesPerView: 2,
        direction: "vertical",
        navigation: {
          nextEl: ".shigong-next",
          prevEl: ".shigong-prev",
        },
      },
    };
  },
  methods: {
    nextLeave() {
      this.next = require("../../assets/image/wuyoufuwu/fuwuliucheng/x.png");
    },
    nextOver() {
      this.next = require("../../assets/image/wuyoufuwu/fuwuliucheng/xiayige.png");
    },
    prevLeave() {
      this.prev = require("../../assets/image/wuyoufuwu/fuwuliucheng/s.png");
    },
    prevOver() {
      this.prev = require("../../assets/image/wuyoufuwu/fuwuliucheng/shangyige.png");
    },
    shigongNextLeave() {
      this.shigongNext = require("../../assets/image/wuyoufuwu/fuwuliucheng/x.png");
    },
    shigongNextOver() {
      this.shigongNext = require("../../assets/image/wuyoufuwu/fuwuliucheng/xiayige.png");
    },
    shigongPrevLeave() {
      this.shigongPrev = require("../../assets/image/wuyoufuwu/fuwuliucheng/s.png");
    },
    shigongPrevOver() {
      this.shigongPrev = require("../../assets/image/wuyoufuwu/fuwuliucheng/shangyige.png");
    },
  },
};
</script>
<style scoped>
.sheji {
  width: 75%;
  margin: 0 auto;
  padding-bottom: 88px;
}
.shejiTitle {
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shejiTitle div:nth-child(1) {
  font-size: 24px;
}
.shejiTitle div:last-child {
  font-size: 14px;
  color: #c7c7c7;
}
.shejiTitle .circleBg {
  position: absolute;
  z-index: -1;
  width: 85px;
  height: 85px;
  background: #fff9f8;
  border-radius: 50%;
}
.shejiTitle div:last-child {
  font-size: 14px;
  color: #e7e7e7;
}
.shejiCenter {
  display: flex;
  align-items: center;
}
.sheji-prev,
.sheji-next {
  transform: translateY(-30%);
  outline: none;
}
.shejiCenter .content {
  position: relative;
  width: 95%;
  overflow: hidden;
  padding: 0 90px;
  display: flex;
}
.content .line {
  width: 1800px;
  height: 1px;
  background: #cacaca;
  position: absolute;
  top: 90px;
  left: 0;
}
.content .listItem {
  position: relative;
  height: 190px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
  transition: 1s;
}
.listItem .text {
  width: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.listItem .text span {
  font-size: 18px;
  color: #cacaca;
  font-weight: 600;
  padding-left: 5px;
  display: block;
}
.listItem .text div {
  font-size: 14px;
}
.listItem .dashed {
  position: absolute;
  top: 76px;
  left: 50%;
  color: #cacaca;
  transform: rotateZ(270deg) translateY(-50%);
  font-size: 20px;
}
.listItem .pic {
  position: relative;
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
}
.listItem .pic::before {
  content: " ";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: -38px;
  background-image: url("../../assets/image/wuyoufuwu/fuwuliucheng/d.png");
}
/* .listItem .pic::after {
  content: " ";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #cacaca;
  position: absolute;
  top: -34px;
} */
.listItem .pic img::before {
  content: "---";
  display: block;
  width: 20px;
  height: 20px;
}

/* 施工流程 */
.shigong {
  background: #f7f7f7;
  padding-bottom: 68px;
  position: relative;
  z-index: 0;
}
.shigongTitle {
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.shigongTitle div:nth-child(1) {
  font-size: 24px;
}
.shigongTitle .bg {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid #fef3f2;
  border-bottom: 50px solid transparent;
  transform: rotateZ(-45deg);
}
.shigongTitle div:last-child {
  font-size: 14px;
  color: #e7e7e7;
}
.shigongCenter {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.shigongCenter .shigong-prev,
.shigongCenter .shigong-next {
  outline: none;
}
.shigongCenter .shigong-prev img {
  transform: rotate(90deg);
}
.shigongCenter .shigong-next img {
  transform: rotate(90deg);
}

.shigongCenter .content {
  position: relative;
  overflow: hidden;
  height: 300px;
}
.content .shigongLine {
  position: absolute;
  left: 165px;
  width: 1px;
  height: 300px;
  background: #cacaca;
}
.content .item {
  display: flex;
  width: 300px;
  justify-content: space-between;
  padding: 30px 11px;
  align-items: center;
  margin-left: 30px;
  transition: 1s;
}
.item .pic {
  position: relative;
  width: 90px;
  height: 90px;
  border: 1px solid #cacaca;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item_1 .pic::before {
  content: " ";
  width: 50px;
  height: 1px;
  border: 1px dashed #cacaca;
  position: absolute;
  top: 42px;
  right: -58px;
}
.item_1 .pic::after {
  content: " ";
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: block;
  background: #cbcbcb;
  position: absolute;
  right: -41px;
  top: 39px;
}
.item_1 .text {
  position: relative;
  left: 7px;
  width: 133px;
  text-align: left;
}
.shigongItem:nth-child(even) .item_1 {
  margin-left: 2px;
}
.shigongItem:nth-child(even) .item_1 .text {
  width: 110px;
  text-align: right;
}
.shigongItem:nth-child(even) .item_1 .pic {
  position: relative;
  order: 2;
}
.shigongItem:nth-child(even) .item_1 .pic::before {
  content: " ";
  width: 50px;
  height: 1px;
  border: 1px dashed #cacaca;
  position: absolute;
  top: 42px;
  left: -60px;
}
.shigongItem:nth-child(even) .item_1 .pic::after {
  content: " ";
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: block;
  background: #cbcbcb;
  position: absolute;
  left: -41px;
  top: 39px;
}

/* 服务流程 */
.fuwu {
  width: 75%;
  margin: 0 auto;
}
.fuwuTitle {
  height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.fuwuTitle div:nth-child(1) {
  font-size: 24px;
}
.fuwuTitle .bg {
  position: absolute;
  z-index: -1;
  width: 88px;
  height: 88px;
  background: #fef3f2;
  transform: rotateZ(45deg);
}
.fuwuTitle div:last-child {
  font-size: 14px;
  color: #e7e7e7;
}
.fuwuList {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.fuwuItem {
  position: relative;
  width: 88px;
  min-width: 75px;
  min-height: 75px;
  height: 88px;
  border: 1px solid #cacaca;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 97px;
  margin-bottom: 20px;
}
.fuwuItem div:nth-child(1) {
  font-size: 20px;
  color: #c9c9c9;
}
.fuwuItem div:last-child {
  font-size: 14px;
}
.fuwuItem::after {
  content: "+";
  position: absolute;
  right: -47px;
  top: 32px;
  color: #c9c9c9;
}
.fuwuItem:last-child {
  margin-right: 0;
}
.fuwuItem:last-child::after {
  content: "";
}

@media screen and (max-width: 1024px) {
  .shejiCenter .content {
    padding: 0 80px;
  }
  .fuwuList {
    justify-content: flex-start;
  }
  .fuwuItem {
    margin-right: 54px;
  }
  .fuwuItem::after {
    content: "";
    display: none;
  }
  .fuwuItem:nth-child(4) {
    margin-right: 0;
  }
}
@media screen and (max-width: 767px) {
  .shejiCenter .content {
    padding: 0 40px;
  }
  .fuwu {
    width: 90%;
  }
  .fuwuList {
    justify-content: space-around;
  }
  .fuwuItem {
    width: 75px;
    height: 75px;
    margin-right: 0;
  }
  .fuwuItem::after {
    right: -19px;
    top: 24px;
  }
}
</style>