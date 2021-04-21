<template>
  <div class="gygs">
    <div class="menuList">
      <div
        class="menuItem"
        v-for="item in gygsInfo.technology_icon"
        :key="item.title"
      >
        <div class="pic">
          <div class="bg">
            <img :src="item.thumb" alt="" :title="item.title" />
          </div>
        </div>
        <div class="content">
          <div>{{ item.title }}</div>
        </div>
      </div>
    </div>
    <!-- 工艺细节 -->
    <div class="xijie">
      <div class="xijieTitle">
        <div>工艺细节</div>
        <div class="circleBg"></div>
        <div>PROCESS ASDEW</div>
      </div>
      <div class="xijieImg" v-if="xijieList.left">
        <div class="xijieLeft">
          <img :src="xijieList.left.thumb" alt="" />
          <div class="xijieBottom">{{ xijieList.left.title }}</div>
        </div>
        <div class="xijieCenter">
          <div v-for="item in xijieList.middle" :key="item.title">
            <img :src="item.thumb" alt="" />
            <div class="xijieBottom">{{ item.title }}</div>
          </div>
        </div>
        <div class="xijieRight">
          <img :src="xijieList.right.thumb" alt="" />
          <div class="xijieBottom">{{ xijieList.right.title }}</div>
        </div>
      </div>
    </div>
    <!-- 施工监管 -->
    <div class="jianguan">
      <div class="jianguanCenter">
        <div class="title">
          <div>施工监管</div>
          <div class="titleBg"></div>
          <div>CONSDFJA DAKSJAGLKD</div>
        </div>
        <div class="list">
          <div v-for="item in gygsInfo.supervise" :key="item.title">
            <div class="jgItem">
              <div class="pic">
                <img :src="item.thumb" alt="" />
              </div>
              <div class="content">{{ item.title }}</div>
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
      xijieList: [],
      gygsInfo: [],
    };
  },
  methods: {
    // 工艺概述
    async getGygs() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/service/technology.html")
        .then(({ data }) => {
          this.gygsInfo = data;
          this.$emit("location", "工艺概述");
        });
    },
  },
  mounted() {
    this.getGygs();
  },
  watch: {
    gygsInfo(val) {
      this.xijieList = val.details;
    },
  },
};
</script>
<style scoped>
.gygs {
  width: 100%;
  margin: 0 auto;
}
.menuList {
  width: 67.5%;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  flex-wrap: wrap;
}
.menuList .menuItem {
  width: 210px;
  height: 250px;
  box-shadow: 1px 1px 24px #eee;
  border-radius: 3px;
  text-align: center;
}
.menuItem .pic {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 55px;
  padding-bottom: 35px;
}
.menuItem .pic .bg {
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
}

/* 工艺细节 */
.xijie {
  width: 67.5%;
  margin: 0 auto;
  padding-bottom: 66px;
}
.xijie img {
  width: 100%;
  height: 100%;
}
.xijieTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 160px;
  font-size: 14px;
}
.xijieTitle div:nth-child(1) {
  font-size: 24px;
}
.xijieTitle div:last-child {
  font-size: 14px;
  color: #c7c7c7;
}
.xijieTitle .circleBg {
  position: absolute;
  z-index: -1;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #fef9f8;
}

.xijieImg {
  display: flex;
}
.xijieImg .xijieLeft,
.xijieImg .xijieRight {
  position: relative;
  width: 25%;
}
.xijieLeft .xijieBottom,
.xijieRight .xijieBottom {
  position: absolute;
  bottom: 0;
  height: 56px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  color: #fff;
  text-align: center;
  line-height: 56px;
  font-size: 16px;
}
.xijieImg .xijieCenter {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
}
.xijieImg .xijieCenter > div {
  position: relative;
  width: 50%;
}
.xijieImg .xijieCenter > div div {
  position: absolute;
  bottom: 0;
  height: 56px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  color: #fff;
  text-align: center;
  line-height: 56px;
  font-size: 18px;
}
.xijieImg .xijieCenter > div:nth-child(1),
.xijieImg .xijieCenter > div:nth-child(3) {
  border-left: 8px solid #ffffff;
  border-right: 4px solid #ffffff;
}
.xijieImg .xijieCenter > div:nth-child(2),
.xijieImg .xijieCenter > div:nth-child(4) {
  border-right: 8px solid #ffffff;
  border-left: 4px solid #ffffff;
}
.xijieImg .xijieCenter > div:nth-child(1),
.xijieImg .xijieCenter > div:nth-child(2) {
  border-bottom: 4px solid #ffffff;
}
.xijieImg .xijieCenter > div:nth-child(3),
.xijieImg .xijieCenter > div:nth-child(4) {
  border-top: 4px solid #ffffff;
}
/* 施工监管 */
.jianguan {
  width: 100%;
  margin: 0 auto;
  background: #f7f7f7;
  padding-bottom: 90px;
}
.jianguan .jianguanCenter {
  width: 67.5%;
  margin: 0 auto;
  padding-top: 75px;
}
.jianguan .title {
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  font-size: 14px;
}
.jianguan .title div:nth-child(1) {
  font-size: 24px;
}
.jianguan .title .titleBg {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid #fef3f2;
  border-bottom: 50px solid transparent;
  transform: rotateZ(20deg);
  position: absolute;
  z-index: -1;
}
.jianguan .title div:last-child {
  font-size: 14px;
  color: #c7c7c7;
}

.jianguan .list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list > div {
  width: 25%;
}
.list .jgItem {
  width: 185px;
  height: 185px;
  border: 1px solid #a8a8a8;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 47px;
}
.list .jgItem div {
  height: 50%;
}
.jgItem .pic {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
}
.jgItem .pic img {
  max-width: 100%;
}
.jgItem .content {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1600px) {
  .menuList .menuItem {
    width: 170px;
    height: 210px;
  }
  .menuItem .pic {
    padding-top: 29px;
  }
}
@media screen and (max-width: 1024px) {
  .menuList {
    width: 80%;
    flex-wrap: wrap;
  }
  .menuList .menuItem {
    width: calc((100% - 200px) / 3);
    margin-bottom: 30px;
  }
  .menuList .menuItem {
    font-size: 12px;
    height: inherit;
    padding: 0 5px;
  }
  .menuList .menuItem .pic {
    padding: 20px 0;
  }
  .menuItem .content {
    padding-bottom: 20px;
  }
  .xijie {
    width: 75%;
  }
  .xijie .xijieImg {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .xijie .xijieImg .xijieCenter div img {
    padding-bottom: 0;
  }
  .xijie .xijieImg .xijieLeft {
    order: 1;
    width: 48%;
  }
  .xijie .xijieImg .xijieCenter > div div {
    width: 100%;
  }
  .xijie .xijieImg .xijieCenter {
    order: 3;
    margin-top: 20px;
    justify-content: space-between;
  }
  .xijie .xijieImg .xijieCenter > div {
    width: 48%;
    margin: 0;
    margin-bottom: 20px;
  }
  .xijie .xijieImg .xijieRight {
    order: 2;
    width: 48%;
  }
  .xijie img {
    width: 100%;
    height: 100%;
  }
  .jianguan .list {
    justify-content: start;
  }
  .list .jgItem {
    height: 100px;
    padding-top: 20px;
    font-size: 12px;
    width: 100px;
    margin-left: 20px;
  }
  .jgItem .pic {
    padding-bottom: 5px;
    padding-top: 0;
  }
}
@media screen and (max-width: 767px) {
  .jianguan {
    padding-bottom: 40px;
  }

  .menuList .menuItem {
    width: calc((100% - 30px) / 2);
    height: fit-content;
  }
  .menuItem .pic .bg img {
    width: 70px;
  }
  .xijie {
    width: 90%;
  }
  .xijieLeft .xijieBottom,
  .xijieRight .xijieBottom {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .xijie .xijieImg .xijieCenter {
    margin-top: 8px;
  }
  .xijieImg .xijieCenter > div div {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .xijieImg .xijieCenter {
    width: 100%;
  }
  .xijie .xijieImg .xijieCenter > div {
    width: 50%;
    margin-bottom: 0px;
  }
  .xijie .xijieImg .xijieLeft {
    width: 50%;
    border-right: 4px solid #fff;
  }
  .xijie .xijieImg .xijieRight {
    width: 50%;
    border-left: 4px solid #fff;
  }
  .xijieImg .xijieCenter > div:first-child,
  .xijieImg .xijieCenter > div:nth-child(3) {
    border-left: none;
  }
  .xijieImg .xijieCenter > div:nth-child(2),
  .xijieImg .xijieCenter > div:nth-child(4) {
    border-right: none;
  }
  .gygs .menuList {
    width: 90%;
    flex-wrap: wrap;
    padding-bottom: 0;
  }
  .gygs .menuList::after {
    content: " ";
    width: 114.19px;
  }
  .gygs .menuList .menuItem {
    margin-bottom: 30px;
  }

  .jianguan .jianguanCenter {
    width: 90%;
  }
  .jianguan .title {
    height: 130px;
  }
  .jianguan .list {
    justify-content: center;
  }
  .list .jgItem {
    height: 64px;
    width: 64px;
    padding-top: 10px;
    margin-top: 20px;
  }
  .list .jgItem div {
    height: 41%;
  }
  .list .jgItem {
    margin-left: 0;
  }
}
</style>