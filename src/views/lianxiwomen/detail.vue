<template>
  <div class="lianxi">
    <!-- 地图 -->
    <baidu-map
      class="map"
      :center="{ lng: sites.lng, lat: sites.lat }"
      :zoom="20"
    >
      <bm-marker
        :position="{ lng: sites.lng, lat: sites.lat }"
        :dragging="true"
        @click="infoWindowOpen"
      >
        <bm-info-window
          :show="show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
        >
          {{ sites.name }}
          <p>{{ sites.address }}</p></bm-info-window
        >
      </bm-marker>
    </baidu-map>
    <!-- 地址 -->
    <div class="area">
      <div
        class="areaStyle"
        v-for="(item, index) in site"
        :key="index"
        @click="sitesActive(index)"
      >
        <div class="areaName">{{ item.name }}</div>
        <div class="phone">
          <div><span class="iconfont icon-shoujihao"></span></div>
          <div>电话：{{ item.contact_tel }}</div>
        </div>
        <div class="sites">
          <div><span class="iconfont icon-zuobiao1"></span></div>
          <div>地址：{{ item.address }}</div>
        </div>
      </div>
      <!-- <div class="areaStyle">
        <div class="areaName">星艺整装馆</div>
        <div class="phone">
          <div><span class="iconfont icon-shoujihao"></span></div>
          <div>电话：0514-85168686 0514-87996703</div>
        </div>
        <div class="sites">
          <div><span class="iconfont icon-zuobiao1"></span></div>
          <div>地址：润阳路邗江中学西门对面星耀天地E1栋9层整层</div>
        </div>
      </div> -->
    </div>
    <!-- 联系方式 -->
    <div class="fangshi">
      <div>人事招聘联系方式</div>
      <div>
        <p><span>联系人</span>：{{ others.contact_user }}</p>
        <p><span>电话</span>：{{ others.tel }}</p>
        <p><span>邮箱</span>：{{ others.email }}</p>
        <p><span>地址</span>：{{ others.address }}</p>
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
      banner: [],
      site: [],
      others: [],
      show: true,
      sites: [],
    };
  },
  methods: {
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
    sitesActive(index) {
      if (index == 1) {
        this.sites = this.site[1];
      }
      if (index == 0) {
        this.sites = this.site[0];
      }
    },
    async getSite() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/contact/index.html")
        .then(({ data }) => {
          this.sites = data.companys[0];
          this.banner = data.banner;
          this.site = data.companys;
          this.others = data.others;
        });
    },
  },
  mounted() {
    this.getSite();
  },
};
</script>
<style scoped>
.ditu {
  margin-top: 30px;
  overflow: hidden;
}
.ditu img {
  width: 100%;
  margin-top: -96px;
}
.map {
  width: 100%;
  height: 400px;
}
.lianxi {
  width: 67.5%;
  margin: 0 auto;
  padding-top: 30px;
}
.area {
  display: flex;
  flex-wrap: wrap;
}
.areaStyle {
  width: calc((100% - 160px) / 2);
  margin: 48px 40px 0;
  height: 346px;
  border: 1px solid #f0f0f0;
  padding: 0 52px;
  padding-top: 76px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  margin-top: 48px;
}
.areaStyle:hover {
  border: 1px solid #a0514f;
}
.areaStyle .areaName {
  font-size: 22px;
  padding-bottom: 50px;
}
.areaStyle .phone,
.areaStyle .sites {
  display: flex;
  padding-bottom: 20px;
  align-items: center;
}
.areaStyle .phone div:nth-child(1) .iconfont,
.areaStyle .sites div:nth-child(1) .iconfont {
  color: #a0514f;
  font-size: 28px;
  padding-right: 20px;
}
/* 联系方式 */
.fangshi {
  margin: 0 auto;
  padding-left: 58px;
  padding-top: 50px;
}
.fangshi div:nth-child(1) {
  font-size: 18px;
  padding-bottom: 28px;
  font-weight: 600;
}
.fangshi div span {
  font-weight: 600;
}

@media screen and (max-width: 1024px) {
  .area {
    flex-direction: column;
  }
  .areaStyle {
    flex: 1;
    width: 100%;
  }
}
@media screen and (max-width: 767px) {
  .lianxi {
    width: 90%;
  }
  .areaStyle {
    padding: 30px;
    margin: 20px 0;
  }
  .current .center,
  .info .title {
    width: 90%;
  }
  .map {
    height: auto;
  }
  .ditu img {
    width: auto;
    height: 100%;
    margin-left: -351px;
  }
}
</style>