<template>
  <div class="cailiao">
    <!-- 选材标准 -->
    <div class="xuancai">
      <div class="title">
        <div>选材标准</div>
        <div class="circleBg"></div>
        <div>SELECTION CRITESA</div>
      </div>
      <div class="xuancaiCard">
        <div
          class="cardItem"
          v-for="(item, index) in cailiaoInfo.standard"
          @mouseleave="cardItemLeave(index)"
          @mouseover="cardItemOver(index)"
          :key="item.title"
        >
          <img :src="item.thumb" alt="" />
          <div class="content">
            <span v-if="cardOverIndex == index">{{ item.des }}</span>
            <span v-else class="cardTitle">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 材料配送 -->
    <div class="peisong">
      <div class="center">
        <div class="title">
          <div>材料配送</div>
          <div class="bg"></div>
          <div>WERIADSF WEARE</div>
        </div>
        <div class="content">
          <div class="leftImg">
            <img :src="peisong.thumb" alt="" />
          </div>
          <div class="contentText" v-html="peisong.content"></div>
        </div>
      </div>
    </div>
    <!-- 产业体系 -->
    <div class="tixi">
      <div class="tixiTitle">
        <div>产业体系</div>
        <div class="bg"></div>
        <div>INSDFSAF DSAFLK</div>
      </div>
      <div class="content">
        <div class="contentText" v-html="tixi.content"></div>
        <div class="rightImg">
          <img :src="tixi.thumb" alt="" />
        </div>
      </div>
    </div>
    <!-- 合作品牌 -->
    <div class="hezuo">
      <div class="hezuoCenter">
        <div class="hezuoTitle">
          <div>合作品牌</div>
          <div class="bg"></div>
          <div>INSDFSAF DSAFLK</div>
        </div>
        <!-- 轮播 -->
        <div class="hezuoSwiper">
          <div v-swiper:hezuoSwiper="hezuoSwiperOption">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="item in cailiaoInfo.brands"
                :key="item"
              >
                <div>
                  <img :src="item" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 材料优势 -->
    <div class="youshi">
      <div class="youshiTitle">
        <div>材料优势</div>
        <div class="bg"></div>
        <div>INSDFSAF DSAFLK</div>
      </div>
      <div class="content">
        <div class="center">
          <img src="../../assets/image/wuyoufuwu/cailiaoyoushi_1.png" alt="" />
        </div>
        <div class="leftItem left_1"><span>行业领导品牌，国际标准</span></div>
        <div class="leftItem left_2"><span>品质高，双重信用保障</span></div>
        <div class="leftItem left_3"><span>知名度高，最受消费者信赖</span></div>
        <div class="leftItem left_4"><span>专业化生产，拥有完善的之狼保障体系</span></div>
        <div class="rightItem right_1"><span>严格按照国家标准,环保值得信赖</span></div>
        <div class="rightItem right_2"><span>行业领先研发能力,强大的研发团队</span></div>
        <div class="rightItem right_3"><span>星艺品牌,双重品牌保障</span></div>
        <div class="rightItem right_4"><span>性价比高，合理控制您的装修预算</span></div>
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
      peisong: [],
      tixi: [],
      cailiaoInfo: [],
      hezuoSwiperOption: {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 30,
        slidesPerColumnFill: "row",
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 10,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 20,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 5,
            slidesPerColumn: 2,
            spaceBetween: 30,
          },
        },
      },
      cardOverIndex: null,
    };
  },
  methods: {
    // 材料概述
    async getCailiao() {
      await this.$http
        .post(
          "http://xyzs.demo365day.cn/index.php/api/service/materialSummary.html"
        )
        .then(({ data }) => {
          this.cailiaoInfo = data;
          this.tixi = data.industrialSystem;
          this.peisong = data.distribution;
          this.$emit("location", "材料概述");
        });
    },
    cardItemLeave(index) {
      this.cardOverIndex = null;
      $(".cardItem span").css({ transform: "rotate(-45deg)" });
      $(".cardItem .content").css({
        "align-items": "center",
        display: "flex",
        padding: "0",
      });
    },
    cardItemOver(index) {
      this.cardOverIndex = index;
      $(".cardItem .content").eq(index).css({
        "align-items": "center",
        padding: "20px",
        "text-overflow": "ellipsis",
        overflow: "hidden",
        display: "flex",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": "10",
      });
    },
  },
  mounted() {
    this.hezuoSwiper.slideTo(0, 1000, false);
    this.getCailiao();
  },
};
</script>
<style scoped>
.cailiao {
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
}
.xuancai {
  width: 67.5%;
  margin: 0 auto;
}
.xuancai .title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 180px;
}
.xuancai .title div {
  line-height: 30px;
}
.xuancai .title div:nth-child(1) {
  font-size: 24px;
}
.xuancai .title .circleBg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff9f8;
  position: absolute;
  z-index: -1;
}
.xuancai .title div:last-child {
  font-size: 14px;
  color: #979797;
}

.xuancaiCard {
  display: flex;
  padding-bottom: 88px;
}
.xuancaiCard .cardItem {
  width: calc((100% - 30px) / 4);
  height: 420px;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
}
.xuancaiCard .cardItem:nth-child(1) {
  margin-left: 0;
}
.xuancaiCard .cardItem img {
  width: 100%;
  height: 100%;
}
.xuancaiCard .cardItem .content {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 120px;
  height: 120px;
  background: rgba(0, 0, 0, 0.5);
  transform: rotateZ(45deg);
  transition: 0.8s;
}
.xuancaiCard .cardItem .content .cardTitle {
  transform: rotateZ(-45deg);
  font-size: 18px;
  transition: 0.8s;
}
.xuancaiCard .cardItem:hover .content {
  transform: rotate(0deg);
  width: 100%;
  height: 100%;
}
.xuancaiCard .cardItem:hover .cardTitle {
  transform: rotate(0deg);
}
/* 材料配送 */
.peisong {
  width: 100%;
  background: #f7f7f7;
  padding-bottom: 90px;
  position: relative;
  z-index: 0;
}
.peisong .center {
  width: 67.5%;
  margin: 0 auto;
}
.peisong .center .title {
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.peisong .center .title div:nth-child(1) {
  font-size: 24px;
}
.peisong .center .title .bg {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 80px solid #fff9f8;
  transform: rotateZ(20deg);
}
.peisong .center .title div:last-child {
  font-size: 14px;
  color: #979797;
}

.center .content {
  display: flex;
}
.center .content .contentText {
  font-size: 16px;
  color: #585858;
  line-height: 35px;
  padding-left: 50px;
}
.peisong .center .content div {
  width: 50%;
}
.peisong .center .content div img {
  width: 100%;
}
/* 产业体系 */
.tixi {
  width: 67.5%;
  margin: 0 auto;
  padding-bottom: 90px;
}
.tixi .tixiTitle {
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tixi .tixiTitle div:nth-child(1) {
  font-size: 24px;
}
.tixi .tixiTitle .bg {
  position: absolute;
  width: 90px;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: #fef8f7 transparent;
  z-index: -1;
  transform: translateY(12px) rotateZ(-10deg);
}
.tixi .tixiTitle .bg:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent #fef8f7;
}
.tixi .tixiTitle div:last-child {
  font-size: 14px;
  color: #979797;
}
.tixi .content {
  display: flex;
}
.tixi .content div {
  width: 50%;
}
.tixi .content div img {
  width: 100%;
}
.tixi .content .contentText {
  font-size: 16px;
  color: #585858;
  line-height: 35px;
  padding-right: 50px;
  text-align: left;
}

/* 合作品牌 */
.hezuo {
  width: 100%;
  background: #f7f7f7;
  padding-bottom: 80px;
}
.hezuo .hezuoCenter {
  width: 67.5%;
  margin: 0 auto;
}
.hezuoCenter .hezuoTitle {
  height: 195px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 80;
}
.hezuoCenter .hezuoTitle div:nth-child(1) {
  font-size: 24px;
}
.hezuoCenter .hezuoTitle .bg {
  position: absolute;
  width: 90px;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: #fef8f7 transparent;
  z-index: -1;
  transform: translateY(12px) rotateZ(-10deg);
}
.hezuoCenter .hezuoTitle .bg:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent #fef8f7;
}
.hezuoCenter .hezuoTitle div:last-child {
  font-size: 14px;
  color: #979797;
}
.hezuoSwiper .swiper-slide > div {
  text-align: center;
  background: #fff;
}
/* 材料优势 */
.youshi {
  width: 67.5%;
  margin: 0 auto;
  padding-bottom: 200px;
}
.youshi .youshiTitle {
  height: 195px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.youshi .youshiTitle div:nth-child(1) {
  font-size: 24px;
}
.youshi .youshiTitle .bg {
  position: absolute;
  z-index: -1;
  width: 80px;
  height: 80px;
  background: #fef8f7;
  transform: rotateZ(45deg);
}
.youshi .youshiTitle div:last-child {
  font-size: 14px;
  color: #979797;
}
.youshi .content {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 2px 2px 10px #ccc;
  margin: 0 auto;
  position: relative;
}
.youshi .content .center {
  width: 288px;
  height: 288px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto;
  line-height: 300px;
}
.youshi .content .leftItem {
  text-align: center;
  height: 55px;
  width: 255px;
  border: 1px solid #979797;
  border-radius: 5px;
  line-height: 55px;
  font-size: 14px;
}
.youshi .content .leftItem::after {
  content: " ";
  display: block;
  width: 70px;
  height: 1px;
  background: #c9c9c9;
  position: absolute;
  right: -70px;
  top: 23px;
}
.youshi .content .leftItem::before {
  content: " ";
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #c9c9c9;
  position: absolute;
  right: -70px;
  top: 16px;
}
.content .left_1 {
  position: absolute;
  top: 0;
  left: -390px;
}
.content .left_2 {
  position: absolute;
  top: 122px;
  left: -445px;
}
.content .left_3 {
  position: absolute;
  top: 243px;
  left: -390px;
}
.content .left_4 {
  position: absolute;
  top: 365px;
  left: -160px;
}
.youshi .content .leftItem span,
.youshi .content .rightItem span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.youshi .content .rightItem {
  text-align: center;
  height: 55px;
  width: 255px;
  border: 1px solid #979797;
  border-radius: 5px;
  line-height: 55px;
  font-size: 14px;
}
.youshi .content .rightItem::after {
  content: " ";
  display: block;
  width: 70px;
  height: 1px;
  background: #c9c9c9;
  position: absolute;
  right: 253px;
  top: 23px;
}
.youshi .content .rightItem::before {
  content: " ";
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #c9c9c9;
  position: absolute;
  right: 320px;
  top: 16px;
}
.content .right_1 {
  position: absolute;
  top: 0;
  left: 440px;
}
.content .right_2 {
  position: absolute;
  top: 122px;
  left: 495px;
}
.content .right_3 {
  position: absolute;
  top: 243px;
  left: 440px;
}
.content .right_4 {
  position: absolute;
  top: 340px;
  left: 210px;
}
@media screen and (min-width: 1025px) and (max-width: 1500px) {
  .center .content {
    flex-direction: column;
  }
  .center .content div {
    width: 100%;
  }
  .center .content .leftImg {
    text-align: center;
  }
  .center .content .contentText {
    padding-left: 0;
  }
  .hezuoSwiper img {
    width: 90%;
  }
}
@media screen and (max-width: 1024px) {
  .xuancai {
    width: 75%;
  }
  .xuancaiCard .cardItem .content {
    width: 60px;
    height: 60px;
  }
  .xuancaiCard .cardItem .content span {
    font-size: 12px;
  }
  .xuancaiCard .cardItem {
    height: inherit;
  }

  .peisong img {
    width: 100%;
  }
  .center .content {
    flex-direction: column;
  }
  .center .content .contentText {
    font-size: 12px;
    padding-left: 0;
    text-indent: 23px;
  }

  .tixi img {
    width: 100%;
  }
  .tixi .content {
    flex-direction: column;
  }
  .tixi .content div {
    width: 100%;
  }
  .tixi .content .contentText {
    order: 2;
    padding-top: 20px;
    font-size: 12px;
  }

  .hezuoSwiper img {
    width: 100%;
  }

  .youshi img {
    width: 100%;
  }
  .youshi .content {
    width: 200px;
    height: 200px;
  }
  .youshi .content .center {
    width: 188px;
    height: 188px;
    line-height: 200px;
  }
  .youshi .content .leftItem {
    width: 197px;
    font-size: 12px;
  }
  .content .left_1 {
    top: -20px;
    left: -244px;
  }
  .content .left_2 {
    top: 70px;
    left: -280px;
  }
  .content .left_3 {
    top: 160px;
    left: -260px;
  }
  .content .left_4 {
    top: 260px;
    left: -230px;
  }
  .youshi .content .rightItem {
    width: 197px;
    font-size: 12px;
  }
  .content .right_1 {
    top: -20px;
    left: 244px;
  }
  .content .right_2 {
    top: 70px;
    left: 280px;
  }
  .content .right_3 {
    top: 160px;
    left: 260px;
  }
  .content .right_4 {
    top: 260px;
    left: 230px;
  }
  .youshi .content .rightItem::after {
    right: 195px;
  }
  .youshi .content .rightItem::before {
    right: 255px;
  }
}
@media screen and (max-width: 767px) {
  .xuancai {
    width: 90%;
  }

  .xuancai .title {
    height: 130px;
  }
  .xuancaiCard {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .xuancaiCard .cardItem {
    height: inherit;
    width: calc((100% - 40px) / 2);
    margin-bottom: 20px;
    margin-left: 0;
  }
  .xuancaiCard .cardItem .content {
    width: 60px;
    height: 60px;
  }
  .xuancaiCard .cardItem .content .cardTitle {
    font-size: 14px;
  }
  .peisong {
    padding-bottom: 0;
  }
  .peisong .center {
    width: 90%;
  }
  .peisong .center .content div {
    width: 100%;
  }
  .tixi {
    width: 90%;
    padding-bottom: 0;
  }

  .tixi .content .contentText {
    padding-right: 0;
  }

  .hezuo .hezuoCenter {
    width: 90%;
  }
  .hezuoSwiper .swiper-slide > div {
    padding: 0 12px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .hezuoCenter .hezuoTitle {
    height: 150px;
  }

  .youshi {
    padding-bottom: 350px;
  }
  .content .left_1 {
    top: 220px;
    left: -100px;
  }
  .content .left_2 {
    top: 300px;
    left: -100px;
  }
  .content .left_3 {
    top: 380px;
    left: -100px;
  }
  .content .left_4 {
    top: 460px;
    left: -100px;
  }
  .youshi .content .rightItem {
    width: 197px;
    font-size: 12px;
    padding: 0 10px;
  }
  .content .right_1 {
    top: 220px;
    left: 100px;
  }
  .content .right_2 {
    top: 300px;
    left: 100px;
  }
  .content .right_3 {
    top: 380px;
    left: 100px;
  }
  .content .right_4 {
    top: 460px;
    left: 100px;
  }
  .youshi .content .leftItem::after,
  .youshi .content .leftItem::before,
  .youshi .content .rightItem::after,
  .youshi .content .rightItem::before {
    content: "";
    display: none;
  }

  .youshi .content .leftItem {
    width: 80%;
    padding: 0 10px;
  }
  .youshi .content .rightItem {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content .left_1 {
    left: -70px;
  }
  .content .left_2 {
    left: -70px;
  }
  .content .left_3 {
    left: -70px;
  }
  .content .left_4 {
    left: -70px;
  }
  .content .left_5 {
    left: -70px;
  }
}
</style>