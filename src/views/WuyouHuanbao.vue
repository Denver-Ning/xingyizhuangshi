<template>
  <div class="container-fuild marketing">
    <div class="banner">
      <img :src="wuyouBanner.image" alt="" />
      <div class="content">
        <div class="line"></div>
        <div class="title">{{ wuyouBanner.title }}</div>
        <div>
          {{ wuyouBanner.des }}
        </div>
      </div>
    </div>
    <!-- 当前位置 -->
    <div class="current">
      <div class="center">
        <span @click="toHome">首页</span>>
        <span>无忧服务</span>
        >
        <span>环保材料</span>>
        <span>{{ location }}</span>
      </div>
      <div class="bg"></div>
    </div>

    <div class="info">
      <div class="title">
        <div class="left">
          <div class="big">环</div>
          <div>
            <div>保材料</div>
            <div>MARKETING ACTIVITIES</div>
          </div>
        </div>
        <div class="tabList">
          <div
            :class="{ active: tabIndex == wuyouNavList.nav_list[index].id }"
            @click="tabActive(index, wuyouNavList.nav_list[index].id)"
            v-for="(item, index) in wuyouNavList.nav_list"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="infoCenter">
        <router-view
          :listTitle="wuyouNavList.nav_list"
          :listInfo="listInfo"
          @location="getLocation"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wuyouhuanbao",
  data() {
    return {
      wuyouBanner: [],
      wuyouNavList: [],
      listInfo: [], //各类内容介绍
      tabIndex: 0,
      location: "材料概述",
    };
  },
  methods: {
    getLocation(val) {
      this.location = val;
    },
    // 环保材料 banner
    async getWuyouBanner() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/service/banner.html")
        .then(({ data }) => {
          this.wuyouBanner = data;
        });
    },
    // 环保材料 nav
    async getWuyouNav() {
      await this.$http
        .post(
          " http://xyzs.demo365day.cn/index.php/api/service/materialNavList.html"
        )
        .then(({ data }) => {
          data.nav_list.unshift({
            name: "材料概述",
            id: 0,
            eng_des: "MARKETING Description",
          });
          this.wuyouNavList = data;
        });
    },
    tabActive(index, id) {
      this.tabIndex = id;
      if (index == 0) {
        this.$router.push(`/huanbao/cailiao`);
      } else if (index == 1) {
        this.$router.push(`/huanbao/bancai?id=${id}`);
      } else if (index == 2) {
        this.$router.push(`/huanbao/huagong?id=${id}`);
      } else if (index == 3) {
        this.$router.push(`/huanbao/shuicai?id=${id}`);
      } else if (index == 4) {
        this.$router.push(`/huanbao/diancai?id=${id}`);
      } else if (index == 5) {
        this.$router.push(`/huanbao/wujin?id=${id}`);
      } else if (index == 6) {
        this.$router.push(`/huanbao/baohu?id=${id}`);
      } else if (index == 7) {
        this.$router.push(`/huanbao/peisong?id=${id}`);
      }
    },
    toHome() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.getWuyouBanner();
    this.getWuyouNav();
    let id = window.location.href.split("id=")[1];
    if (id) {
      this.tabIndex = id;
    }
  },
};
</script>
<style scoped>
.banner {
  position: relative;
  width: 100%;
}
.banner img {
  width: 100%;
  height: 100%;
}
.banner .content {
  position: absolute;
  z-index: 10;
  color: #fff;
  top: 220px;
  left: 320px;
}
.banner .content .line {
  width: 136px;
  height: 1px;
  background: #fff;
}
.banner .content .title {
  font-size: 28px;
  font-weight: 800;
  margin-top: 25px;
}
.banner .content div:last-child {
  margin-top: 5px;
}

.current {
  height: 125px;
  width: 100%;
}
.current .bg {
  height: 57px;
  width: 100%;
  background-image: linear-gradient(#f5f5f5, #fff);
}
.current .center {
  width: 75%;
  margin: 0 auto;
  line-height: 68px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.current .center span {
  cursor: pointer;
}

.info {
  width: 100%;
  margin: 0 auto;
}
.info .title {
  display: flex;
  width: 75%;
  margin: 0 auto;
  position: relative;
  justify-content: space-between;
}
.info .title .left {
  padding-left: 40px;
}
.info .title .left .big {
  position: absolute;
  top: -6px;
  left: 0;
  font-size: 40px;
  color: #a14f54;
}
.info .title .left > div:last-child {
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  line-height: 20px;
  padding-top: 5px;
}
.infoCenter {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;
}

.tabList {
  display: flex;
  width: 75%;
  justify-content: flex-end;
}
.tabList div {
  line-height: 45px;
  padding: 0 15px 0 15px;
  text-align: center;
  color: #000;
  cursor: pointer;
}
.tabList .active {
  background: #a14f54;
  color: #fff;
}
@media screen and (min-width: 1025px) and (max-width: 1900px) {
  .tabList {
    height: 45px;
  }
}
@media screen and (max-width: 1024px) {
  .info .title {
    flex-direction: column;
  }
  .tabList {
    width: 100%;
    align-items: center;
    margin-top: 40px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 767px) {
  .info .title,
  .current .center {
    width: 90%;
  }
  .info .tabList {
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 103%;
  }
  .info .title .left .big {
    font-size: 32px;
    left: 4px;
    top: -3px;
  }
  .banner {
    height: 150px;
  }
  .banner .content {
    top: 22%;
    left: 10%;
    padding-right: 7%;
  }
  .banner .content .title {
    font-size: 14px;
    margin-top: 8px;
  }
  .banner .content div:last-child {
    margin-top: 0;
    font-size: 12px;
  }
}
</style>