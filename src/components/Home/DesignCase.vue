<template>
  <div class="productBox">
    <div class="product">
      <!-- 设计案例 -->
      <div class="designCase">
        <div
          class="design wow animate__animated animate__slideInUp"
          @click="toSheji"
        >
          <img src="../../assets/image/homeSheJi.png" alt="" />
          <div class="content">
            <div>设计</div>
            <div>专业的室内设计师,一对一了解您的需求</div>
          </div>
        </div>
        <div
          class="case wow animate__animated animate__slideInUp"
          data-wow-delay="0.1s"
          @click="toAnli"
        >
          <img src="../../assets/image/homeAnLi.png" alt="" />
          <div class="content">
            <div>案例</div>
            <div>专业的室内设计师,一对一了解您的需求</div>
          </div>
        </div>
      </div>
      <!-- 定制 -->
      <div
        class="customize wow animate__animated animate__slideInUp"
        @click="toDingzhi"
      >
        <div>
          <img src="../../assets/image/homeDingZhi.png" alt="" />
          <div class="content">
            <div>定制</div>
            <div>专业的室内设计师,一对一了解您的需求</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toSheji() {
      this.$router.push("/designTeam/elite");
    },
    toAnli() {
      this.$router.push("/designCase/case");
    },
    toDingzhi() {
      this.$router.push("/dingzhi/detail");
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
.product {
  padding: 30px 15px 86px 15px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;
}
.designCase {
  display: flex;
}
.designCase div {
  position: relative;
}
.designCase .design {
  width: 50%;
  cursor: pointer;
  padding-right: 20px;
}
.designCase .case {
  width: 50%;
  cursor: pointer;
  padding-left: 20px;
}
.designCase .content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 15% 10% 0 10%;
  text-align: center;
}
.designCase .content div:nth-child(1) {
  font-weight: bolder;
  font-size: 37px;
}
.customize {
  position: relative;
  margin-top: 40px;
  cursor: pointer;
}
.customize .content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 10%;
  text-align: center;
}
.customize .content div:nth-child(1) {
  font-weight: bolder;
  font-size: 37px;
}
@media screen and (min-width: 1025px) and (max-width: 1900px) {
  .designCase .content div:nth-child(1),
  .customize .content div:nth-child(1) {
    font-size: 22px;
  }
}
/* ipad */
@media screen and (max-width: 1024px) {
  .product .designCase .content div:nth-child(1) {
    font-size: 16px;
  }
  .product .customize .content div:nth-child(1) {
    font-size: 16px;
  }
  .product .designCase .content div:nth-child(2) {
    font-size: 12px;
  }
  .product .customize .content div:nth-child(2) {
    font-size: 12px;
  }
  .product .designCase {
    display: flex;
    justify-content: space-between;
  }
  .product .designCase > div {
    width: 48%;
  }
}
/* 手机 */
@media screen and (max-width: 767px) {
  .productBox .product {
    width: 90%;
    padding-bottom: 40px;
    padding-left: 0;
    padding-right: 0;
  }
  .product .designCase > div {
    padding: 0;
    width: 48%;
  }
  .product .customize {
    margin-top: 13px;
  }
  .product .designCase .content div:nth-child(1) {
    font-size: 14px;
  }
  .product .customize .content div:nth-child(1) {
    font-size: 14px;
  }
}
</style>