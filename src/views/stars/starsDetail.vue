<template>
  <div class="stars">
    <div class="title">
      <div>整装服务 一站式领包入住</div>
      <div class="bg"></div>
      <div>FULL SERVICE</div>
    </div>
    <div class="circle">
      <img src="../../assets/image/xingyizhuangshi/circle.png" alt="" />
    </div>
    <!-- 套餐 -->
    <div class="setMenu">
      <div class="bg">
        <img src="@/assets/image/xingyizhuangshi/taocan_bg.png" alt="" />
        <div></div>
      </div>
      <div class="setMenuCenter">
        <div class="setMenuTitle">
          <div>圆梦家2.0套餐计价方式</div>
          <div class="content">
            圆梦家2.0套餐计价方式改为按房产证建筑面积与建筑外框测量取最大值，按70㎡含一个客厅，一个餐厅，一个厨房，一个卫生间，一个阳台，两个卧室，包工包料精装修，超出70㎡每平方按999元/㎡计算（按新的套餐内容按月发送）
          </div>
        </div>
        <!-- 切换 -->
        <div class="setMenuItem">
          <ul class="itemGroup">
            <li
              v-for="(item, index) in starsInfo.price_method"
              :key="index"
              @click="tabActive(index)"
              :class="{ active: groupIndex == index }"
            >
              <span>{{ item.name }}</span>
            </li>
          </ul>
          <!-- 介绍 -->
          <div class="itemContent">
            <div class="common keting">
              <div>标准施工项目（所有项目包含人工及材料）</div>
              <div class="ketingContent" v-html="taocanDetail.content"></div>
              <div class="shuoming">说明：{{ taocanDetail.des }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司优势轮播 -->
    <div class="youshi">
      <div class="youshiTitle">
        <div>专注为家30年</div>
        <div class="bg"></div>
        <div>FOCUS ON HOME FOR</div>
      </div>
      <!-- 轮播 -->
      <div class="youshiPic" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide youshiImg"
            v-for="item in starsInfo.grades"
            :key="item.title"
          >
            <div class="bgBox">
              <img :src="item.thumb" alt="" />
              <div class="youshiContent">
                <div>{{ item.des }}</div>
                <div>{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 22项隐形增项全含 -->
    <div class="allImg">
      <div class="allTitle">
        <div>22项隐形增项全含</div>
        <div class="titleBg"></div>
        <div>FOCUS ON HOME FOR</div>
      </div>
      <div class="allPic">
        <div>
          <img src="../../assets/image/xingyizhuangshi/22_1.jpg" alt="" />
        </div>
        <div>
          <img src="../../assets/image/xingyizhuangshi/22_2.jpg" alt="" />
        </div>
        <div>
          <img src="../../assets/image/xingyizhuangshi/22_3.jpg" alt="" />
        </div>
        <div>
          <img src="../../assets/image/xingyizhuangshi/22_4.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- 严选全球一线中高端品牌 合作品牌 -->
    <div class="hezuo">
      <div class="hezuoTitle">
        <div>严选全球一线中高端品牌</div>
        <div class="circleBg"></div>
        <div>THE FIRST - RATE INTERN ATIONAL</div>
      </div>
      <div class="hezuoSwiper">
        <div v-swiper:hezuoSwiper="hezuoSwiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in starsInfo.brands"
              :key="item.title"
            >
              <div>
                <img :src="item.thumb" alt="" :title="item.title" />
              </div>
            </div>
          </div>
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
  data() {
    return {
      commonTitle: sessionStorage.getItem("title"),
      hezuoSwiperOption: {
        slidesPerView: 5,
        slidesPerColumn: 2,
        autoplay: true,
        spaceBetween: 30,
        slidesPerColumnFill: "row",
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 2,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 2,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
      },
      swiperOption: {
        slidesPerView: 4,
        autoplay: true,
        spaceBetween: 40,
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1900: {
            slidesPerView: 4,
          },
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      groupIndex: 0,
      taocanDetail: [],
      starsInfo: [],
    };
  },
  methods: {
    tabActive(index) {
      this.taocanDetail = this.starsInfo.price_method[index];
      this.groupIndex = index;
    },
    async getStarsInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/service/ymj.html")
        .then(({ data }) => {
          this.starsInfo = data;
          this.taocanDetail = data.price_method[0];
        });
    },
  },
  mounted() {
    this.mySwiper.slideTo(0, 1000, false);
    this.getStarsInfo();
  },
};
</script>
<style>
.common .ketingContent * {
  color: #fff !important;
}
</style>
<style scoped>
.stars {
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
}
.stars .title {
  width: 67.5%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
}
.stars .title div:nth-child(1) {
  font-size: 24px;
}
.stars .title div:last-child {
  font-size: 14px;
  color: #9e9998;
}
.stars .title .bg {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 80px solid #fff9f8;
  transform: rotateZ(20deg);
}

.circle {
  text-align: center;
  width: 67.5%;
  margin: 0 auto;
  padding-bottom: 100px;
}

/* 套餐 */
.setMenu {
  width: 100%;
  height: 785px;
  position: relative;
}
.setMenu .bg {
  width: 100%;
  height: 100%;
}
.setMenu .bg img {
  position: absolute;
  width: 100%;
  height: 100%;
}
.setMenu .bg div {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 10;
}
.setMenu .setMenuCenter {
  width: 75%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  z-index: 20;
  padding-top: 60px;
}
.setMenuCenter .setMenuTitle div:nth-child(1) {
  text-align: center;
  padding-bottom: 18px;
  font-size: 22px;
}
.setMenuCenter .setMenuTitle .content {
  padding-bottom: 50px;
  line-height: 25px;
  font-size: 14px;
}

/* tab切换 */
.setMenuCenter .setMenuItem {
  position: relative;
  width: 100%;
  padding-left: 60px;
  display: flex;
}
.setMenuCenter .setMenuItem .shuoming {
  position: absolute;
  bottom: -28px;
}
.setMenuItem .itemGroup {
  list-style: none;
  flex: 1;
  border-left: 1px solid #fff;
  padding-bottom: 20px;
  min-height: 470px;
  max-height: 470px;
}
.setMenuItem .itemGroup li {
  padding-left: 36px;
  position: relative;
  font-size: 16px;
  cursor: pointer;
  margin-top: 50px;
}
.setMenuItem .itemGroup li::before {
  content: " ";
  width: 18px;
  height: 18px;
  position: absolute;
  left: -9px;
  top: 4px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: block;
  cursor: pointer;
}
.setMenuItem .itemGroup li.active span::before {
  content: "";
  display: block;
  position: absolute;
  left: -6px;
  top: 7px;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.setMenuItem .itemContent {
  flex: 5;
  font-size: 14px;
}
.itemContent .common > div:nth-child(1) {
  font-size: 16px;
  padding-bottom: 24px;
}
.common .ketingContent {
  line-height: 30px;
}

/* 公司优势轮播 */
.youshi {
  width: 75%;
  margin: 0 auto;
  padding-bottom: 108px;
}
.youshi .youshiTitle {
  height: 206px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 14px;
}
.youshi .youshiTitle div:nth-child(1) {
  font-size: 24px;
}
.youshi .youshiTitle .bg {
  width: 80px;
  height: 80px;
  background: #fff9f8;
  position: absolute;
  z-index: -1;
  transform: rotateZ(45deg);
}
.youshi .youshiTitle div:last-child {
  font-size: 14px;
  color: #989898;
}

.youshi .youshiPic {
  width: 85%;
}
.youshi .youshiImg {
  position: relative;
}
.youshi .youshiImg .bgBox {
  width: 260px;
  height: 260px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  overflow: hidden;
}
.youshi .youshiImg img {
  width: 100%;
  height: 100%;
}
.youshi .youshiImg .youshiContent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
.youshi .youshiImg .youshiContent div {
  font-weight: 600;
}
.youshi .youshiImg .youshiContent div:nth-child(1) {
  font-size: 20px;
}
.youshi .youshiImg .youshiContent div:nth-child(2) {
  font-size: 22px;
}

/* 22项图片 */
.allImg {
  width: 100%;
  margin: 0 auto;
  background: #f7f7f7;
  position: relative;
  z-index: 0;
}
.allImg .allTitle {
  width: 75%;
  margin: 0 auto;
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.allTitle > div {
  line-height: 30px;
}
.allTitle > div:nth-child(1) {
  font-size: 24px;
}
.allTitle .titleBg {
  width: 100px;
  height: 55px;
  background: #fef3f2;
  position: absolute;
  z-index: -1;
}
.allTitle .titleBg:before {
  content: "";
  position: absolute;
  top: -25px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 25px solid #fef3f2;
}
.allTitle .titleBg:after {
  content: "";
  position: absolute;
  bottom: -25px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 25px solid #fef3f2;
}
.allTitle div:last-child {
  font-size: 14px;
  color: #9c9c9c;
}
.allImg .allPic {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 90px;
}
.allPic div {
  outline: 1px solid #fff;
  width: calc((100% - 0px) / 2);
}
.allPic img {
  width: 100%;
  height: 100%;
  min-width: 100%;
}

/* 合作品牌 */
.hezuo {
  width: 75%;
  margin: 0 auto;
}
.hezuoTitle {
  height: 187px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.hezuoTitle div:nth-child(1) {
  font-size: 24px;
}
.hezuoTitle .circleBg {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #fff9f8;
  position: absolute;
  z-index: -1;
}
.hezuoTitle div:last-child {
  font-size: 14px;
  color: #999999;
}
.hezuoSwiper img {
  width: 100%;
  /* box-sizing: border-box; */
  border: 1px solid #ccc;
  min-height: 149px;
  max-height: 149px;
}
@media screen and (max-width: 1024px) {
  .setMenu {
    height: 410px;
  }
  .setMenu .setMenuCenter {
    padding-top: 10px;
  }
  .setMenu .setMenuCenter .setMenuTitle div:nth-child(1) {
    font-size: 20px;
    padding-bottom: 0px;
  }
  .setMenu .setMenuCenter .setMenuTitle div:nth-child(2) {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 20px;
  }

  .setMenuCenter .setMenuItem {
    padding-left: 23px;
  }
  .setMenuItem .itemGroup li {
    margin-top: 25px;
    font-size: 14px;
  }
  .setMenuItem .itemContent {
    padding-top: 5px;
  }
  .itemContent .common > div:nth-child(1) {
    padding-bottom: 0px;
  }
  .common .ketingContent {
    line-height: 20px;
    padding-bottom: 5px;
  }

  .shuoming {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .allImg .allPic {
    justify-content: center;
  }
  .allPic div {
    width: 100%;
  }
  .hezuo .swiper-slide {
    margin-bottom: 15px;
  }
}
@media screen and (min-width: 768px) and (max-width: 768px) {
  .youshi .youshiImg .bgBox {
    width: 234px;
    height: 234px;
  }
}
@media screen and (max-width: 767px) {
  .stars .title,
  .circle,
  .hezuo {
    width: 90%;
  }
  .setMenuCenter .setMenuItem .shuoming {
    bottom: 0;
  }
  .circle img {
    width: 100%;
  }
  /* 套餐 */
  .setMenu {
    height: 570px;
  }
  .setMenu .setMenuCenter {
    width: 90%;
  }
  .setMenuItem .itemGroup {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .setMenuItem .itemGroup li {
    padding-left: 20px;
    font-size: 12px;
  }
  .setMenuItem .itemContent {
    padding-top: 0;
  }
  .itemContent .common > div:nth-child(1) {
    font-size: 14px;
  }
  .common {
    padding-left: 10px;
    padding-top: 10px;
  }

  .common .ketingContent {
    line-height: 20px;
    font-size: 12px;
    max-height: 360px;
    height: 360px;
    overflow-y: scroll;
    margin-bottom: 35px;
    position: relative;
    z-index: 100;
  }
  .common .ketingContent ::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .common .ketingContent ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: red;
  }
  .common .ketingContent ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: pink;
  }
  .common .ketingContent div {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .shuoming {
    font-size: 12px;
    bottom: 10px;
    -webkit-line-clamp: 2;
  }
  .allPic div {
    width: 100%;
  }
  .allImg .allPic {
    width: 90%;
    flex-direction: column;
  }
  .youshi {
    width: 90%;
  }
  .youshi .youshiPic {
    width: 100%;
  }
  .youshi .youshiImg .youshiContent {
    max-width: 100%;
    width: 100%;
  }
  .youshi .youshiImg .bgBox {
    width: 100%;
    height: auto;
  }
  .hezuo {
    width: 90%;
  }
}
</style>