<template>
  <div class="baozhang">
    <div class="jianguan">
      <div class="center">
        <div class="info" v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide item"
              v-for="(item, index) in baozhangDetail.list"
              :key="item.title"
            >
              <div>
                <img :src="item.thumb" alt="" />
              </div>
              <div class="content">
                <div class="title">{{ item.title }}</div>
                <div v-html="item.content"></div>
                <div class="page">
                  <span>{{ index + 1 }}</span
                  >/{{ baozhangDetail.list.length }}
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="left prev">
              <span class="iconfont icon-jiantouzuo"></span>
            </div>
            <div class="right next">
              <span class="iconfont icon-jiantouyou"></span>
            </div>
          </div>
          <div class="swiper-pagination navPag"></div>
        </div>
      </div>
    </div>
    <div class="tixi">
      <div class="tixiTitle">
        <div>星艺售后体系</div>
        <div class="bg"></div>
        <div>STR-RATED</div>
      </div>
      <div v-swiper:tixi="tixiOption" class="smallTixi">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide menuItem"
            v-for="item in baozhangDetail.afterSales"
            :key="item.title"
          >
            <div class="pic">
              <div class="bg">
                <img :src="item.thumb" alt="" :title="item.thumb" />
              </div>
            </div>
            <div class="content">
              <div>{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tixi" class="menuList">
        <div
          class="menuItem"
          v-for="item in baozhangDetail.afterSales"
          :key="item.title"
        >
          <div class="pic">
            <div class="bg">
              <img :src="item.thumb" alt="" :title="item.thumb" />
            </div>
          </div>
          <div class="content">
            <div>{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 物流 -->
    <div class="wuliu">
      <div class="content">
        <div class="pic">
          <img
            src="../../assets/image/wuyoufuwu/fuwubaozhang/liucheng_1.png"
            alt=""
          />
        </div>
        <div class="text">
          <div class="title">全球工厂直购</div>
          <div>
            <p>供应链FC集采</p>
            <p>提出中间环节，严控材料质量</p>
          </div>
          <div>
            <p>星艺严选大品牌供应商</p>
            <p>直接与品牌生产方达成合作</p>
            <p>材料由工厂经过物流公司</p>
            <p>直接送达业主工地</p>
          </div>
          <div>
            <p>12个大型分拨中心</p>
            <p>528家自营网点</p>
            <p>覆盖全国1600个城区</p>
            <p>工厂直送入户</p>
          </div>
        </div>
      </div>
      <div class="liuchengList">
        <div>PdA扫描技术</div>
        <div>GPS全球定位系统</div>
        <div>智能车辆调度系统</div>
        <div>NIS系统</div>
        <div>CRM系统</div>
      </div>
      <div class="liuchengImg">
        <img
          src="../../assets/image/wuyoufuwu/fuwubaozhang/liucheng.png"
          alt=""
        />
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
  props: ["baozhangDetail"],
  data() {
    return {
      commonTitle: sessionStorage.getItem('title'),
      tixi: false,
      swiperOption: {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      tixiOption: {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        slidesPerView: 1,
        autoplay: true,
      },
    };
  },
  mounted() {
    if ($(window).width() >= 767) {
      this.tixi = true;
      $(".smallTixi").css({ display: "none" });
    } else {
      this.tixi = false;
      $(".smallTixi").css({ display: "block" });
    }
  },
};
</script>
<style scoped>
/* 小屏幕 start */
.smallTixi {
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
}
.smallTixi .menuItem {
  background: #fff;
  border-radius: 15px;
  height: 302px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.smallTixi .menuItem .pic {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 30px;
}
.smallTixi .menuItem .pic .bg {
  width: 100px;
  height: 100px;
  background: #a15050;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.smallTixi .menuItem .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding-bottom: 40px;
}
/* 小屏幕 end */
.info .swiper-pagination-bullet-active {
  background: #b04b4b !important;
}
.baozhang {
  width: 100%;
  padding-top: 35px;
}
.jianguan {
  width: 67.5%;
  margin: 0 auto;
  padding-bottom: 88px;
}
.jianguan .center {
  position: relative;
  width: 100%;
  height: 527px;
  box-shadow: 2px 2px 15px #ccc;
  padding-top: 60px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 78px;
  display: flex;
}
.jianguan .center .info {
  flex: 1;
  padding-top: 30px;
}
.jianguan .center .info .item {
  display: flex;
}
.jianguan .center .content {
  padding-bottom: 45px;
  position: relative;
  width: 100%;
  padding-left: 80px;
  padding-top: 20px;
}
.jianguan .center .page {
  position: absolute;
  right: 10%;
  bottom: 5%;
}
.jianguan .center .page span {
  color: #a04f4f;
  font-size: 22px;
}
.jianguan .center .content .title {
  font-size: 24px;
  padding-bottom: 15px;
}
.jianguan .center .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 34%;
  z-index: 30;
}
.jianguan .center .bottom div {
  width: 56px;
  height: 56px;
  border: 1px solid #eeeeee;
  font-size: 38px;
  color: #979797;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  outline: none;
}
.jianguan .center .bottom div:hover {
  color: #fff;
  background: #a04f4f;
}
.jianguan .center .bottom div .iconfont {
  font-size: 24px;
}
.jianguan .center .navPag {
  display: flex;
  justify-content: space-around;
  width: 40%;
  position: absolute;
  left: 50%;
  top: 3%;
  height: 1px;
  align-items: center;
  background: #e9e9e9;
}
.jianguan .center .navPag .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
}
.swiper-pagination-bullet-active {
  background: #9f4f50 !important;
}

.tixi {
  width: 100%;
  background: #f7f7f7;
  position: relative;
  z-index: 0;
  padding-bottom: 104px;
  padding-top: 20px;
}
.tixi .tixiTitle {
  height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.tixi .tixiTitle div:nth-child(1) {
  font-size: 24px;
}
.tixi .tixiTitle div:last-child {
  font-size: 14px;
  color: #c7c7c7;
}
.tixi .tixiTitle .bg {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid #fef3f2;
  border-bottom: 50px solid transparent;
  transform: rotateZ(20deg);
  position: absolute;
  z-index: -1;
}
.menuList {
  width: 67.5%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.menuList .menuItem {
  width: calc((100% - 100px) / 5);
  background: #fff;
  border-radius: 15px;
  margin-right: 20px;
}
.menuItem .pic {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 30px;
}
.menuItem .pic .bg {
  width: 95px;
  height: 95px;
  background: #a15050;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menuItem .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding-bottom: 40px;
}
.wuliu {
  width: 67.5%;
  margin: 0 auto;
  padding-top: 20px;
}
.wuliu .content {
  display: flex;
  padding-bottom: 20px;
}
.wuliu .content .pic {
  height: 424px;
  width: 920px;
}
.wuliu .content .pic img {
  height: 100%;
  max-width: 100%;
  width: 100%;
}
.wuliu .content .text {
  padding-left: 100px;
  padding-top: 30px;
  font-size: 16px;
}
.wuliu .content .text .title {
  font-size: 20px;
}
.wuliu .content .text div {
  padding-bottom: 10px;
}
.wuliu .content .text div p {
  line-height: 20px;
}
.wuliu .liuchengList {
  padding-bottom: 55px;
  display: flex;
  justify-content: space-around;
}
.wuliu .liuchengList div {
  width: 186px;
  height: 48px;
  border: 1px solid #a15050;
  border-radius: 5px;
  text-align: center;
  line-height: 48px;
}
.wuliu .liuchengImg {
  text-align: center;
}
.wuliu .liuchengImg img {
  width: 90%;
}
@media screen and (max-width: 1024px) {
  .jianguan {
    width: 75%;
  }
  .jianguan .center {
    flex-direction: column;
    height: inherit;
  }
  .jianguan .center img {
    width: 100%;
  }
  .jianguan .center .info {
    padding-left: 0;
    padding-top: 50px;
    padding-bottom: 40px;
    width: 100%;
  }
  .jianguan .center .info .item {
    flex-direction: column;
  }
  .jianguan .center .content {
    padding-left: 15px;
    padding-top: 0px;
  }
  .jianguan .center .page {
    right: 0%;
    bottom: -4%;
    text-align: end;
  }
  .jianguan .center .navPag {
    top: 52%;
    width: 70%;
    display: none;
  }

  /* tixi */
  .menuList {
    justify-content: flex-start;
    padding-top: 0;
    width: 75%;
  }
  .menuList .menuItem {
    height: inherit;
    width: calc((100% - 80px) / 3);
    margin-right: 40px;
    margin-bottom: 40px;
  }
  .menuList .menuItem:nth-child(3) {
    margin-right: 0;
  }

  .menuItem .pic .bg {
    width: 50px;
    height: 50px;
  }
  .menuItem .pic .bg img {
    width: 88%;
  }

  /* wuliu */
  .wuliu {
    width: 75%;
  }
  .wuliu img {
    width: 100%;
  }
  .wuliu .content .pic {
    width: 100%;
    height: inherit;
  }
  .wuliu .content {
    flex-direction: column;
  }
  .wuliu .content .text {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0px;
    justify-content: space-between;
  }
  .wuliu .content .text .title {
    width: 100%;
  }
  .wuliu .content .text div {
    margin-left: 20px;
  }
  .wuliu .liuchengList {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .wuliu .liuchengList div {
    width: calc((100% - 45px) / 3);
    margin-right: 15px;
    font-size: 14px;
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 767px) {
  .jianguan {
    width: 90%;
  }
  .jianguan .center {
    padding: 0 15px;
  }
  .jianguan .center .content {
    padding-left: 15px;
    padding-top: 15px;
  }
  .jianguan .center .content .title {
    font-size: 16px;
  }
  .jianguan .center .navPag {
    top: 38%;
    width: 70%;
  }
  .menuList {
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 0;
    width: 90%;
  }
  .menuList::after {
    content: " ";
    width: 117.53px;
  }
  .menuList .menuItem {
    width: calc((100% - 30px) / 2);
    margin-right: 0px;
    margin-top: 30px;
    height: inherit;
    margin-bottom: 0;
    margin-left: 30px;
  }
  .menuItem .pic {
    padding: 25px 0;
  }
  .menuList .menuItem:nth-child(odd) {
    margin-left: 0;
  }
  .menuItem .content {
    padding-bottom: 10px;
  }
  .menuItem .content div {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    padding: 0 10px;
    text-align: center;
  }
  .wuliu {
    width: 90%;
  }
  .wuliu .liuchengList {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .wuliu .liuchengList div {
    width: calc((100% - 20px) / 2);
    margin-left: 20px;
    margin-right: 0;
  }
  .wuliu .liuchengList div:nth-child(odd) {
    margin-left: 0;
  }
  .liuchengList::after {
    content: "";
    width: 88px;
  }
  .liuchengList div {
    margin-right: 0px;
    margin-top: 20px;
  }
  .jianguan .center .info .item {
    flex-direction: column;
  }
  .tixi .tixiTitle {
    height: auto;
    margin-top: 56px;
  }
}
@media screen and (max-width: 414px) {
  .jianguan .center .navPag {
    top: 42%;
    width: 70%;
  }
}
</style>