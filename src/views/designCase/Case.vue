<template>
  <div class="elite">
    <!-- 挑选 -->
    <div class="stylist">
      <div class="stylistItem style">
        <div class="title">设计风格：</div>
        <div class="list">
          <div
            :class="{ active: styleIndex == caseInfo.design_style[index].id }"
            v-for="(item, index) in caseInfo.design_style"
            :key="index"
            @click="styleActive(caseInfo.design_style[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="stylistItem houseType">
        <div class="title">案例户型：</div>
        <div class="list">
          <div
            :class="{ active: houseIndex == caseInfo.house_type[index].id }"
            v-for="(item, index) in caseInfo.house_type"
            :key="index"
            @click="houseActive(caseInfo.house_type[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>

      <div class="stylistItem area">
        <div class="title">建筑面积：</div>
        <div class="list">
          <div
            :class="{ active: areaIndex == caseInfo.search_area[index].id }"
            v-for="(item, index) in caseInfo.search_area"
            :key="index"
            @click="areaActive(caseInfo.search_area[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="stylistItem bearCase">
        <div class="title">获奖案例：</div>
        <div class="list">
          <div
            :class="{ active: caseIndex == caseInfo.awards[index].id }"
            v-for="(item, index) in caseInfo.awards"
            :key="index"
            @click="caseActive(caseInfo.awards[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- 精品案例 -->
    <div class="case">
      <div class="caseCenter">
        <div class="caseList">
          <div
            class="caseItem"
            v-for="(item, index) in caseInfo.list"
            :key="item.id"
            @click="toCaseDetail(caseInfo.list[index].id)"
          >
            <div class="pic">
              <img :src="item.thumb" alt="" />
            </div>
            <div class="caseContent">
              <div>{{ item.name }}</div>
              <div>→</div>
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
            跳至<input
              type="number"
              @keyup.enter="toPage"
              v-model="pageIndex"
            />页
          </div>
          <div class="confirm" @click="toPage">确定</div>
        </div>
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
  name: "Elite",
  data() {
    return {
      commonTitle: sessionStorage.getItem('title'),
      caseInfo: [],
      houseIndex: 0,
      styleIndex: 0,
      areaIndex: 0,
      caseIndex: 0,
      hid: null, //户型id
      sid: null, //设计风格id
      aid: null, //面积id
      wid: null, //奖项id
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
    async getDesignCaseInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/team/caselist.html", {
          page: this.page,
          size: 6,
          hid: this.hid,
          sid: this.sid,
          aid: this.aid,
          wid: this.wid,
        })
        .then(({ data }) => {
          if (!Number.isInteger(data.total / 6)) {
            this.pageCount = parseInt(data.total / 6 + 1);
          } else {
            this.pageCount = data.total / 6;
          }
          data.design_style.unshift({
            name: "全部",
            id: 0,
          });
          data.house_type.unshift({
            name: "全部",
            id: 0,
          });
          data.search_area.unshift({
            name: "全部",
            id: 0,
          });
          data.awards.unshift({
            name: "全部",
            id: 0,
          });
          this.caseInfo = data;
        });
    },
    houseActive(id) {
      this.houseIndex = id;
      this.hid = id;
      this.page = 1;
      this.getDesignCaseInfo();
    },
    styleActive(id) {
      this.styleIndex = id;
      this.sid = id;
      this.page = 1;
      this.getDesignCaseInfo();
    },
    areaActive(id) {
      this.areaIndex = id;
      this.aid = id;
      this.page = 1;
      this.getDesignCaseInfo();
    },
    caseActive(id) {
      this.caseIndex = id;
      this.wid = id;
      this.page = 1;
      this.getDesignCaseInfo();
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
      this.getDesignCaseInfo();
    },
    // 分页上一个
    pagePrev() {
      if (this.page == 1) {
        return;
      } else {
        this.page = this.page - 1;
        this.pageBg = this.page - 1;
        this.getDesignCaseInfo();
      }
    },
    // 分页下一个
    pageNext() {
      if (this.page == this.pageCount) {
        return;
      } else {
        this.page = this.page + 1;
        this.pageBg = this.page - 1;
        this.getDesignCaseInfo();
      }
    },
    // 首页
    pageStart() {
      this.page = 1;
      this.pageBg = 0;
      this.getDesignCaseInfo();
    },
    // 尾页
    pageEnd() {
      this.page = this.pageCount;
      this.pageBg = this.pageCount - 1;
      this.getDesignCaseInfo();
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
        this.getDesignCaseInfo();
      } else {
        this.page = Number(this.pageIndex);
        this.pageBg = Number(this.pageIndex) - 1;
        this.getDesignCaseInfo();
      }
    },
    // 跳转到详情
    toCaseDetail(id) {
      this.$router.push(`/designCase/case/detail?id=${id}`);
    },
  },
  mounted() {
    if (this.$route.query.id == undefined || this.$route.query.id == null) {
      this.getDesignCaseInfo();
    } else {
      this.styleIndex = this.$route.query.id;
      this.sid = this.$route.query.id;
      this.getDesignCaseInfo(this.sid);
    }
  },
};
</script>
<style scoped>
.elite {
  margin: 0 auto;
  padding-top: 50px;
  width: 67.5%;
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

.case {
  position: relative;
  z-index: 1;
}

.caseCenter .caseList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.caseCenter .caseList .caseItem {
  width: calc((100% - 60px) / 3);
  margin-bottom: 20px;
}
.caseCenter .caseList .caseItem .pic {
  width: 100%;
  overflow: hidden;
  max-height: 254px;
  cursor: pointer;
}
.caseCenter .caseList .caseItem .pic img {
  width: 100%;
  min-height: 100%;
  height: 100%;
}
.caseCenter .caseList .caseItem .caseContent {
  display: flex;
  width: 90%;
  height: 45px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.caseCenter .caseList .caseItem .caseContent div:last-child {
  font-size: 38px;
  color: #ccc;
}
.caseCenter .caseList::after {
  content: "";
  width: calc((100% - 60px) / 3);
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
@media screen and (max-width: 1024px) {
  .elite {
    width: 75%;
  }
  .stylist .stylistItem .title {
    font-size: 14px;
    line-height: 45px;
  }
  .stylist .stylistItem .list div {
    padding: 0 10px 0 10px;
    font-size: 14px;
    height: 45px;
  }

  .caseCenter .caseList .caseItem {
    width: calc((100% - 20px) / 2);
    height: inherit;
  }
  .caseCenter .caseList .caseItem .pic {
    height: inherit;
  }
}
@media screen and (max-width: 767px) {
  .elite {
    width: 90%;
  }
  .stylist .stylistItem .title {
    line-height: 35px;
  }
  .stylist .stylistItem .list div {
    min-width: 70px;
    min-height: 35px;
    line-height: 35px;
    height: 35px;
  }
  .stylistItem .title {
    width: inherit;
  }
  .caseCenter .caseList .caseItem .caseContent div:last-child {
    display: none;
  }
  .caseCenter {
    padding-bottom: 50px;
  }
  .caseCenter .title {
    height: 100px;
    font-size: 24px;
  }
  .caseCenter .title .picbg {
    top: -14px;
  }
  .caseCenter .caseList .caseItem {
    height: inherit;
  }
  .caseCenter .caseList .caseItem .pic {
    height: inherit;
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