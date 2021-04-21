<template>
  <div class="xingyi">
    <div class="gongsi">
      <div class="content">
        <div class="title">{{ groupinfo.title }}</div>
        <div class="text" v-html="groupinfo.content"></div>
      </div>
      <div class="gongsiPic">
        <img :src="groupinfo.thumb" alt="" />
      </div>
    </div>
    <!-- 五星标准 -->
    <div class="wuxing">
      <div class="wuxingCenter">
        <div class="content">
          <div class="title">"五星标准"让装修装饰更简单更舒适</div>
          <div class="text">
            星艺装饰独家引入“星级设计”、“星级材料”、“星级配置”、“星级服务”、“星级品质”五大体系，在行业内首创“五星标准”，为家装质量保驾护航，让每位业主轻松拥有宜居星级家！
          </div>
        </div>
        <div class="cardList">
          <div
            class="listItem"
            v-for="(item, index) in xingyiInfo.five_stars"
            @mouseover="listOver(index)"
            @mouseleave="listLeave(index)"
            :key="item.title"
          >
            <img :src="item.thumb" alt="" />
            <div class="content">
              <span v-if="listOverIndex == index">{{ item.des }}</span>
              <span v-else class="listTitle">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 品牌 -->
    <div class="pinpai">
      <div class="content">
        <div class="title">"品牌+品牌"强强联手，打造品质家装新体验</div>
        <div class="text">
          凭借星艺集团强大的品牌实力，星艺装饰已与众多国内外一线家居建材品牌形成了长期稳定的战略伙伴关系，建立了“品牌+品牌”的双重信用保障体系，强强联手打造互联网品质家装新体验，势必全面引爆消费者热情！
        </div>
      </div>
      <div class="pinpaiSwiper">
        <div v-swiper:hezuoSwiper="pinpaiSwiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in xingyiInfo.brands"
              :key="index"
            >
              <div>
                <img :src="item.thumb" alt="" :title="item.title" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 服务地图 -->
    <div class="fuwu">
      <div class="fuwuCenter">
        <div class="fuwuTitle">服务千万家庭，开启整装新时代</div>
        <div class="pic">
          <img
            src="../../assets/image/guanyuwomen/xingyijituan/ditu.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo(){
    return{
      title:this.groupinfo.title+'-'+this.commonTitle
    }
  },
  data() {
    return {
      commonTitle: sessionStorage.getItem('title'),
      xingyiInfo: [],
      groupinfo: [], //星艺有限公司
      pinpaiSwiperOption: {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 30,
        slidesPerColumnFill: "row",
        autoplay: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 5,
            spaceBetween: 30,
            slidesPerColumn: 2,
          },
        },
      },
      listOverIndex: null,
    };
  },
  methods: {
    listOver(index) {
      console.log(1212);
      console.log();
      this.listOverIndex = index;
      if ($(window).width() > 767) {
        $(".listItem .content").eq(index).css({
          "align-items": "initial",
          padding: "20px",
          "text-overflow": "ellipsis",
          overflow: "hidden",
          display: "flex",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "10",
        });
      } else {
        $(".listItem .content").eq(index).css({
          "align-items": "initial",
          padding: "10px",
          "text-overflow": "ellipsis",
          overflow: "hidden",
          display: "flex",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "5",
        });
      }
    },
    listLeave(index) {
      this.listOverIndex = null;
      $(".listItem span").css({ transform: "rotate(-45deg)" });
      $(".listItem .content").css({
        "align-items": "center",
        display: "flex",
        padding: "0",
      });
    },
    async getXingYiInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/xygroup.html")
        .then(({ data }) => {
          console.log(data.groupinfo);
          this.xingyiInfo = data;
          this.groupinfo = data.groupinfo;
        });
    },
  },
  mounted() {
    this.getXingYiInfo();
  },
};
</script>
<style scoped>
.xingyi {
  width: 100%;
}
.gongsi {
  width: 75%;
  margin: 0 auto;
  padding-top: 35px;
  display: flex;
  padding-bottom: 66px;
}
.gongsi .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
}
.gongsi .content .title {
  font-size: 24px;
  padding-bottom: 38px;
}
.gongsi .content .text {
  font-size: 14px;
  line-height: 30px;
  color: #575757;
  text-indent: 15px;
}

/* 五星标准 */
.wuxing {
  width: 100%;
  background: #f7f7f7;
  padding-bottom: 77px;
}
.wuxing .wuxingCenter {
  width: 75%;
  margin: 0 auto;
}
.wuxingCenter .content {
  width: 58%;
  margin: 0 auto;
  height: 202px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.wuxingCenter .content .title {
  font-size: 22px;
  padding-bottom: 25px;
}
.wuxingCenter .content .text {
  text-align: center;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 14px;
}
.wuxingCenter .cardList {
  display: flex;
  justify-content: space-around;
}
.cardList .listItem {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.cardList .listItem .content {
  width: 105px;
  height: 105px;
  color: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  transform: rotateZ(45deg);
  transition: 0.8s;
}
.cardList .listItem .content .listTitle {
  transform: rotateZ(-45deg);
  font-size: 18px;
  transition: 0.8s;
}
.cardList .listItem:hover .content {
  transform: rotateZ(0deg);
  width: 100%;
  height: 100%;
}
.cardList .listItem:hover .listTitle {
  transform: rotateZ(0deg);
}
/* 品牌 */
.pinpai {
  width: 100%;
  padding-bottom: 77px;
}
.pinpai .content {
  width: 58%;
  margin: 0 auto;
  height: 202px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pinpai .content .title {
  font-size: 24px;
  padding-bottom: 25px;
}
.pinpai .content .text {
  text-align: center;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 14px;
}
.pinpaiSwiper {
  width: 75%;
  margin: 0 auto;
}
.pinpaiSwiper img {
  width: 100%;
}
.pinpaiSwiper .swiper-slide > div {
  text-align: center;
  border: 1px solid #ebebeb;
  width: 225px;
  height: 125px;
  max-width: 225px;
  max-height: 125px;
}
.pinpaiSwiper .swiper-slide > div img {
  width: 100%;
  height: 100%;
}
/* 服务地图 */
.fuwu {
  width: 100%;
  background: #f7f7f7;
}
.fuwuCenter {
  width: 75%;
  margin: 0 auto;
}
.fuwuCenter .fuwuTitle {
  height: 160px;
  text-align: center;
  line-height: 160px;
  font-size: 22px;
}
.fuwuCenter .pic {
  text-align: center;
  padding-bottom: 50px;
}
@media screen and (max-width: 1024px) {
  .xingyi img {
    width: 100%;
  }
  .xingyi .gongsi {
    flex-direction: column;
  }
  .xingyi .gongsi .content {
    order: 2;
    padding-top: 20px;
    padding-right: 0;
  }
  .xingyi .gongsi .content .title {
    text-align: center;
    padding-bottom: 20px;
  }

  .wuxingCenter .content {
    width: 100%;
  }
  .wuxingCenter .content .title {
    font-size: 24px;
    padding-top: 20px;
  }
  .wuxingCenter .content .text {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .cardList {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .cardList::after {
    content: " ";
    width: 250px;
  }
  .cardList .listItem {
    height: inherit;
    margin-bottom: 10px;
  }
  .cardList .listItem .content {
    width: 100px;
    height: 100px;
  }
  .cardList .listItem .content .listTitle span {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pinpai {
    width: 100%;
  }
  .pinpai .content .title {
    font-size: 20px;
    padding-top: 20px;
  }
  .pinpai .content .text {
    font-size: 14px;
  }
}
@media screen and (max-width: 767px) {
  .gongsi {
    width: 90%;
  }

  .wuxing {
    padding: 30px 0;
  }
  .wuxing .wuxingCenter {
    width: 90%;
  }
  .wuxingCenter .content .title {
    text-align: center;
  }
  .wuxingCenter .cardList {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .wuxingCenter .cardList div:nth-child(4) {
    margin-left: 0;
  }
  .cardList .listItem .content .listTitle {
    font-size: 14px;
  }
  .cardList .listItem {
    height: inherit;
    margin-bottom: 12px;
    margin-left: 15px;
    width: calc((100% - 30px) / 3);
  }
  .cardList .listItem .content {
    width: 60px;
    height: 60px;
  }
  .cardList .listItem .content .listTitle span {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cardList .listItem:nth-child(1) {
    margin-left: 0;
  }
  .pinpaiSwiper{
    width: 90%;
  }
  .pinpai .content {
    width: 90%;
  }
  .pinpai .content .title {
    text-align: center;
  }
  .pinpaiSwiper .swiper-slide > div {
    width: inherit;
    height: inherit;
  }
  .pinpaiSwiper .swiper-slide > div img {
    min-height: 82.77px;
    max-height: 82.77px;
  }
}
</style>