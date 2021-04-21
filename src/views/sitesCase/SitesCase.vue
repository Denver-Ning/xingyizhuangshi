<template>
  <div class="yanfa">
    <!-- 挑选 -->
    <div class="stylist">
      <div class="stylistItem stage">
        <div class="title">施工阶段：</div>
        <div class="list">
          <div
            :class="{ active: stageIndex == sitesCase.build_stage[index].id }"
            v-for="(item, index) in sitesCase.build_stage"
            :key="index"
            @click="stageActive(sitesCase.build_stage[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="stylistItem house">
        <div class="title">施工户型：</div>
        <div class="list">
          <div
            :class="{
              active: houseIndex == sitesCase.build_house_type[index].id,
            }"
            v-for="(item, index) in sitesCase.build_house_type"
            :key="index"
            @click="houseActive(sitesCase.build_house_type[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="stylistItem area">
        <div class="title">施工面积：</div>
        <div class="list">
          <div
            :class="{ active: areaIndex == sitesCase.search_area[index].id }"
            v-for="(item, index) in sitesCase.search_area"
            :key="index"
            @click="areaActive(sitesCase.search_area[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="listDetail">
      <div
        class="listItem"
        v-for="(item, index) in sitesCase.list"
        :key="item.id"
        @click="toDetail(sitesCase.list[index].id)"
      >
        <div>
          <img :src="item.thumb" alt="" />
        </div>
        <div class="content">
          <div class="title">{{ item.name }}</div>
          <p>施工阶段:{{ item.stage_name }}</p>
          <p>施工面积:{{ item.area }}㎡</p>
          <p>施工户型:{{ item.house_type_name }}</p>
          <div class="toDetail" @click="toDetail(sitesCase.list[index].id)">
            查看工地
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="zhiju_page" v-if="pageCount > 1">
      <div class="page">
        <div
          class="page_start"
          @click="pageStart"
          @mouseover="pageDoubleOver"
          @mouseleave="pageDoubleLeave"
        >
          <img :src="pageDoublePrev" alt="" />
        </div>
        <div class="page_num">
          <div
            class="page_prev"
            @click="pagePrev"
            @mouseover="pageOver"
            @mouseleave="pageLeave"
          >
            <img :src="pageOnePrev" alt="" />
          </div>
          <div
            v-for="(item, index) in pageCount"
            :key="index"
            @click="pageActive(index)"
            :class="{ active: pageBg == index }"
          >
            {{ index + 1 }}
          </div>
          <div
            class="page_next"
            @click="pageNext"
            @mouseover="pageNextOver"
            @mouseleave="pageNextLeave"
          >
            <img :src="pageOneNext" alt="" />
          </div>
        </div>
        <div
          class="page_end"
          @click="pageEnd"
          @mouseover="pageEndOver"
          @mouseleave="pageEndLeave"
        >
          <img :src="pageDoubleNext" alt="" />
        </div>
      </div>
      <div>
        跳至<input type="number" @keyup.enter="toPage" v-model="pageIndex" />页
      </div>
      <div class="confirm" @click="toPage">确定</div>
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
      sitesCase: [],
      stageIndex: 0,
      houseIndex: 0,
      areaIndex: 0,
      hid: null, //户型id
      stageid: null, //施工阶段id
      aid: null, //面积id
      pageCount: null, //分页数量
      page: 1, //分页 第几页
      pageIndex: null, //跳转到第几页
      pageBg: 0,
      pageDoublePrev: require("../../assets/image/page/shuangjiantouzuo.png"), //双箭头左
      pageDoubleNext: require("../../assets/image/page/shuangjiantouyou.png"),

      pageOnePrev: require("../../assets/image/page/zuojiantou.png"), // 单箭头左
      pageOneNext: require("../../assets/image/page/youjiantouo.png"),
    };
  },
  methods: {
    async getSitesInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/team/buildlist.html", {
          page: this.page,
          size: 8,
          hid: this.hid,
          stageid: this.stageid,
          aid: this.aid,
        })
        .then(({ data }) => {
          if (!Number.isInteger(data.total / 8)) {
            this.pageCount = parseInt(data.total / 8 + 1);
          } else {
            this.pageCount = data.total / 8;
          }
          data.build_stage.unshift({
            name: "全部",
            id: 0,
          });
          data.build_house_type.unshift({
            name: "全部",
            id: 0,
          });
          data.search_area.unshift({
            name: "全部",
            id: 0,
          });
          this.sitesCase = data;
        });
    },
    stageActive(id) {
      this.stageIndex = id;
      this.stageid = id;
      this.getSitesInfo();
    },
    houseActive(id) {
      this.houseIndex = id;
      this.hid = id;
      this.getSitesInfo();
    },
    areaActive(id) {
      this.areaIndex = id;
      this.aid = id;
      this.getSitesInfo();
    },
    // 鼠标移入切换图标
    pageDoubleOver() {
      this.pageDoublePrev = require("../../assets/image/page/shouye.png");
    },
    pageDoubleLeave() {
      this.pageDoublePrev = require("../../assets/image/page/shuangjiantouzuo.png");
    },
    pageEndOver() {
      this.pageDoubleNext = require("../../assets/image/page/weiye.png");
    },
    pageEndLeave() {
      this.pageDoubleNext = require("../../assets/image/page/shuangjiantouyou.png");
    },
    pageOver() {
      this.pageOnePrev = require("../../assets/image/page/shangyige.png");
    },
    pageLeave() {
      this.pageOnePrev = require("../../assets/image/page/zuojiantou.png");
    },
    pageNextOver() {
      this.pageOneNext = require("../../assets/image/page/xiayige.png");
    },
    pageNextLeave() {
      this.pageOneNext = require("../../assets/image/page/youjiantouo.png");
    },
    // 点击分页
    pageActive(index) {
      this.page = index + 1;
      this.pageBg = index;
      this.getSitesInfo();
    },
    // 分页上一个
    pagePrev() {
      if (this.page == 1) {
        return;
      } else {
        this.page = this.page - 1;
        this.pageBg = this.page - 1;
        this.getSitesInfo();
      }
    },
    // 分页下一个
    pageNext() {
      if (this.page == this.pageCount) {
        return;
      } else {
        this.page = this.page + 1;
        this.pageBg = this.page - 1;
        this.getSitesInfo();
      }
    },
    // 首页
    pageStart() {
      this.page = 1;
      this.pageBg = 0;
      this.getSitesInfo();
    },
    // 尾页
    pageEnd() {
      this.page = this.pageCount;
      this.pageBg = this.pageCount - 1;
      this.getSitesInfo();
    },
    // 跳转到几页
    toPage() {
      if (this.pageIndex == 0) {
        layer.msg("没有此目录",{icon:5});
        return;
      }
      if (this.pageIndex > this.pageCount) {
        this.page = Number(this.pageCount);
        this.pageBg = Number(this.pageCount) - 1;
        this.getSitesInfo();
      } else {
        this.page = Number(this.pageIndex);
        this.pageBg = Number(this.pageIndex) - 1;
        this.getSitesInfo();
      }
    },
    toDetail(id) {
      this.$router.push(`/sites/case/detail?id=${id}`);
    },
  },
  mounted() {
    this.getSitesInfo();
  },
};
</script>
<style scoped>
.yanfa {
  width: 67.5%;
  margin: 0 auto;
  padding-top: 50px;
}
.stylist {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 30px;
}
.stylistItem {
  display: flex;
  margin-bottom: 15px;
}
.stylistItem .title {
  line-height: 45px;
  font-size: 14px;
}
.stylistItem .list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: calc((100% - 100px) / 1);
}
.stylistItem .list .active {
  background: #a15050;
  color: #fff;
}
.stylistItem .list div {
  padding: 0px 25px 0px 25px;
  text-align: center;
  line-height: 45px;
  font-size: 14px;
  cursor: pointer;
  min-width: 100px;
  min-height: 45px;
  max-height: 45px;
}

.listDetail {
  display: flex;
  flex-wrap: wrap;
}
.listDetail .listItem {
  padding: 15px 88px 15px 15px;
  border: 1px solid #eeeeee;
  display: flex;
  margin-bottom: 40px;
  width: calc((100% - 40px) / 2);
  margin-left: 40px;
}
.listDetail .listItem:nth-child(odd) {
  margin-left: 0;
}
.listDetail .listItem img {
  width: 100%;
}
.listDetail .listItem .content {
  padding-left: 45px;
  font-size: 14px;
  padding-top: 20px;
  width: 180px;
  max-width: 180px;
}
.listDetail .listItem .content .title {
  font-size: 18px;
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.listDetail .listItem .content .toDetail {
  width: 135px;
  height: 45px;
  background: #a15050;
  text-align: center;
  line-height: 45px;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 40px;
  cursor: pointer;
}
/* 分页 */
.zhiju_page {
  margin-top: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.zhiju_page .page {
  display: flex;
  padding-right: 30px;
}
.zhiju_page .page .page_start,
.zhiju_page .page .page_end {
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zhiju_page .page .page_start:hover,
.zhiju_page .page .page_end:hover {
  background: #b04b4b;
}
.zhiju_page .page .page_start img,
.zhiju_page .page .page_end img {
  padding: 0 5px;
}
.zhiju_page .page .page_end {
  margin-left: 10px;
}
.zhiju_page .page .page_num {
  display: flex;
}
.zhiju_page .page .page_num div {
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  line-height: 35px;
  text-align: center;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zhiju_page .page .page_num .active {
  background: #b04b4b;
  color: #fff;
}
.zhiju_page .page .page_num div:hover {
  background: #b04b4b;
  color: #fff;
}
.zhiju_page input {
  width: 76px;
  height: 35px;
  background: none;
  border: 1px solid #ccc;
  margin: 0 5px;
  outline: none;
  text-align: center;
}
.zhiju_page .confirm {
  width: 58px;
  height: 35px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 35px;
  margin-left: 20px;
  cursor: pointer;
}
.zhiju_page .confirm:hover {
  background: #b04b4b;
  color: #fff;
}
@media screen and (max-width: 1580px) {
  .listDetail .listItem {
    padding: 15px;
  }
  .listDetail .listItem .content {
    padding-left: 15px;
  }
  .listDetail .listItem .content p {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 1024px) {
  .yanfa {
    width: 75%;
  }
  .stylist .stylistItem .title {
    font-size: 14px;
  }
  .stylist .stylistItem .list div {
    padding: 0 10px 0 10px;
    font-size: 14px;
    height: 45px;
  }
  .listDetail .listItem .content .toDetail {
    width: 120px;
    font-size: 16px;
  }
}
@media screen and (max-width: 767px) {
  .yanfa {
    width: 90%;
  }
  .yanfa > img {
    width: 100%;
  }
  .stylist .stylistItem .list div {
    min-width: 70px;
    min-height: 35px;
    line-height: 35px;
    height: 35px;
  }
  .listDetail .listItem {
    width: 100%;
    height: inherit;
    flex-direction: column;
    margin-left: 0;
    padding: 15px;
  }
  .listDetail .listItem div {
    width: 100%;
  }
  .listDetail .listItem .content {
    padding-left: 13px;
    padding-top: 15px;
    max-width: 100%;
    width: 100%;
  }
  .listDetail .listItem .content .title {
    padding-bottom: 11px;
  }
  .listDetail .listItem .content p {
    margin-bottom: 0.4rem;
  }
  .listDetail .listItem .content .toDetail {
    margin-top: 20px;
  }
  .zhiju_page {
    margin-top: 0;
    margin-bottom: 30px;
  }
  .zhiju_page div:nth-child(2),
  .zhiju_page div:nth-child(3) {
    display: none;
  }
  .zhiju_page .page {
    padding-right: 0;
  }
}
</style>