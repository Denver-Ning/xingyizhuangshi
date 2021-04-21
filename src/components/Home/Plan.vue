<template>
  <div class="container-fuild plan">
    <div class="title d-flex justify-content-end">
      <div
        class="content text-right d-flex flex-column wow animate__animated animate__slideInUp"
      >
        <div>DECORATE SCHEME</div>
        <div>私人定制 装修方案</div>
      </div>
      <div class="pic">
        <img src="../../assets/image/sirendingzhi.png" alt="" />
      </div>
    </div>
    <!-- 方案图片 -->
    <div class="planPic row no-gutters">
      <div
        class="left col-sm-12 col-md-6 wow animate__animated animate__slideInUp"
      >
        <img src="../../assets/image/homeZhuagxiu1.png" alt="" />
        <div class="content">美式风格装修设计</div>
      </div>
      <div class="right col-sm-12 col-md-6 row no-gutters">
        <div
          class="rightItem col-sm-6 col-md-6 pl-3 wow animate__animated animate__slideInUp"
        >
          <img src="../../assets/image/homeZhuangxiu2.png" alt="" />
          <div class="content">现代风格装修设计</div>
        </div>
        <div
          class="rightItem col-sm-6 col-md-6 pl-3 wow animate__animated animate__slideInUp"
          data-wow-delay="0.1s"
        >
          <img src="../../assets/image/homeZhuangxiu3.png" alt="" />
          <div class="content">现代风格装修设计</div>
        </div>
        <div
          class="rightItem col-sm-6 col-md-6 pl-3 wow animate__animated animate__slideInUp"
          data-wow-delay="0.2s"
        >
          <img src="../../assets/image/homeZhuangxiu4.png" alt="" />
          <div class="content">现代风格装修设计</div>
        </div>
        <div
          class="rightItem col-sm-6 col-md-6 pl-3 wow animate__animated animate__slideInUp"
          data-wow-delay="0.3s"
        >
          <img src="../../assets/image/homeZhuangxiu5.png" alt="" />
          <div class="content">现代风格装修设计</div>
        </div>
      </div>
    </div>
    <!-- 方案列表 -->
    <div class="planList wow animate__animated animate__slideInUp">
      <div
        class="item"
        v-for="(item, index) in planInfo"
        :key="item.id"
        @click="toCase(planInfo[index].id)"
      >
        <div class="itemCircle">
          <div class="whiteBg">
            <div class="contentBox">
              <div class="bg"></div>
              <img :src="item.icons" alt="" />
            </div>
          </div>
        </div>
        <p>{{ item.name }}</p>
      </div>
      <div class="item">
        <div class="itemCircle" @click="toMore">
          <div class="whiteBg">
            <div class="contentBox">
              <div class="bg">+</div>
              <img src="../../assets/image/homeZhuangxiu11.png" alt="" />
            </div>
          </div>
        </div>
        <p>更多</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["planInfo"],
  data() {
    return {
      planRight: [
        {
          thumb: "../../assets/image/homeZhuangxiu2.png",
          title: "现代风格装修设计",
        },
        {
          thumb: "../../assets/image/homeZhuangxiu3.png",
          title: "现代风格装修设计",
        },
        {
          thumb: "../../assets/image/homeZhuangxiu4.png",
          title: "现代风格装修设计",
        },
        {
          thumb: "../../assets/image/homeZhuangxiu5.png",
          title: "现代风格装修设计",
        },
      ],
    };
  },
  methods: {
    toMore() {
      this.$router.push("/designCase/case");
    },
    toCase(id) {
      this.$router.push({
        path: "/designCase/case",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>
<style scoped>
.plan {
  padding-top: 86px;
  padding-bottom: 86px;
  width: 75%;
  margin: 0 auto;
}
.title {
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
}
.title .content {
  font-size: 22px;
}
.title .content div:nth-child(1) {
  color: #b04b4b;
}
.planPic {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.planPic .left .content {
  width: 100%;
}
.planPic .content {
  color: #fff;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.7);
  width: 95%;
  padding: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.planPic img {
  width: 100%;
  height: 100%;
}
.planPic .left {
  position: relative;
}
.planPic .left .content {
  position: absolute;
  bottom: 0;
  left: 0;
}

.planPic .right .rightItem {
  position: relative;
  overflow: hidden;
}
.planPic .right .rightItem:nth-child(3),
.planPic .right .rightItem:nth-child(4) {
  margin-top: 20px;
}
.planPic .right .rightItem .content {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.planList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.planList p {
  text-align: center;
  padding-top: 10px;
}
.planList .itemCircle {
  width: 100px;
  height: 100px;
  background: #400303;
  text-align: center;
  display: flex;
  border-radius: 50%;
  align-items: center;
}
.planList .itemCircle .whiteBg .bg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: #e3252a;
  font-size: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.planList .item .itemCircle div .bg {
  display: none;
}
.planList .item .itemCircle:hover .bg {
  display: flex;
}
.planList .itemCircle .whiteBg {
  width: 80px;
  height: 80px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.planList .itemCircle .whiteBg .contentBox {
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  overflow: hidden;
}
@media screen and (max-width: 1024px) {
  .plan .planPic {
    flex-direction: column;
  }
  .plan .planPic > div {
    width: 100%;
    max-width: 100%;
  }
  .plan .planPic .right {
    justify-content: space-between;
  }
  .plan .planPic .right .rightItem {
    width: 48%;
    flex: 0 0 48%;
    margin-bottom: 10px;
  }
  .planPic .right .rightItem .content {
    width: 100%;
  }
  .plan .planPic .content {
    font-size: 12px;
    padding: 5px;
  }
  .plan .planList {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .plan .planList .item {
    margin-left: 15px;
    width: calc((100% - 60px) / 4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .plan .title .content {
    font-size: 18px;
    width: 91%;
    padding: 5px;
  }
  .planPic .right .rightItem {
    padding-left: 0 !important;
  }
}
@media screen and (max-width: 767px) {
  .plan {
    width: 90%;
    padding-top: 30px;
    padding-bottom: 50px;
  }
  .plan .planPic .right {
    display: flex;
    justify-content: space-between;
  }
  .plan .planPic .right .rightItem {
    width: 48%;
    margin-top: 16px;
    padding: 0;
  }
  .pl-3 {
    padding-left: 0 !important;
  }
  .plan .planPic .content {
    font-size: 14px;
    width: 100%;
    padding: 5px;
  }
  .plan .planList .item {
    width: calc((100% - 0px) / 4);
    margin: 0;
    margin-bottom: 10px;
  }
  .plan .planList .itemCircle {
    width: 70px;
    height: 70px;
    margin: 0 auto;
  }
  .planList .itemCircle .whiteBg {
    width: 60px;
    height: 60px;
  }
  .planList .itemCircle .whiteBg img {
    width: 100%;
  }
  .planList .itemCircle .whiteBg .contentBox {
    width: 50px;
    height: 50px;
  }
}
</style>