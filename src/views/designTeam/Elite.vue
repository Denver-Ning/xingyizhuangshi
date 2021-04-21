<template>
  <div class="elite">
    <!-- 挑选 -->
    <div class="stylist">
      <div class="stylistItem grade">
        <div class="title">设计级别：</div>
        <div class="list">
          <div
            :class="{ active: gradeIndex == eliteInfo.team_level[index].id }"
            v-for="(item, index) in eliteInfo.team_level"
            :key="index"
            @click="gradeActive(eliteInfo.team_level[index].id)"
          >
            {{ item.level_name }}
          </div>
        </div>
      </div>
      <div class="stylistItem style">
        <div class="title">擅长风格：</div>
        <div class="list">
          <div
            :class="{ active: styleIndex == eliteInfo.team_styles[index].id }"
            v-for="(item, index) in eliteInfo.team_styles"
            :key="index"
            @click="styleActive(eliteInfo.team_styles[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="stylistItem experience">
        <div class="title">设计经验：</div>
        <div class="list">
          <div
            :class="{
              active: experienceIndex == eliteInfo.team_experience[index].id,
            }"
            v-for="(item, index) in eliteInfo.team_experience"
            :key="index"
            @click="experienceActive(eliteInfo.team_experience[index].id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- 设计师详情 -->
    <div class="designList">
      <div
        class="designItem"
        v-for="(item, index) in eliteInfo.list"
        :key="item.id"
        @click="toDetail(eliteInfo.list[index].id)"
      >
        <div class="authorPic">
          <img :src="item.thumb" alt="" />
        </div>
        <div class="author">{{ item.name }}</div>
        <div class="designGrade">
          <div>
            {{ item.level_name }} <span>{{ item.experience }}年</span>
          </div>
          <div class="arrows">→</div>
        </div>
      </div>
      <!-- 勿删 -->
      <div class="designItem" style="height: 0; border: none"></div>
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
  metaInfo() {
    return {
      title: this.commonTitle,
    };
  },
  name: "Elite",
  data() {
    return {
      commonTitle: sessionStorage.getItem("title"),
      eliteInfo: [],
      gradeIndex: 0,
      styleIndex: 0,
      experienceIndex: 0,
      lid: null, //设计级别
      sid: null, //擅长风格
      eid: null, //筛选经验
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
    gradeActive(id) {
      this.gradeIndex = id;
      this.lid = id;
      this.page = 1;
      this.getDesignTeamInfo();
    },
    styleActive(id) {
      this.styleIndex = id;
      this.sid = id;
      this.page = 1;
      this.getDesignTeamInfo();
    },
    experienceActive(id) {
      this.experienceIndex = id;
      this.eid = id;
      this.page = 1;
      this.getDesignTeamInfo();
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
      this.getDesignTeamInfo();
    },
    // 分页上一个
    pagePrev() {
      if (this.page == 1) {
        return;
      } else {
        this.page = this.page - 1;
        this.pageBg = this.page - 1;
        this.getDesignTeamInfo();
      }
    },
    // 分页下一个
    pageNext() {
      if (this.page == this.pageCount) {
        return;
      } else {
        this.page = this.page + 1;
        this.pageBg = this.page - 1;
        this.getDesignTeamInfo();
      }
    },
    // 首页
    pageStart() {
      this.page = 1;
      this.pageBg = 0;
      this.getDesignTeamInfo();
    },
    // 尾页
    pageEnd() {
      this.page = this.pageCount;
      this.pageBg = this.pageCount - 1;
      this.getDesignTeamInfo();
    },
    // 跳转到几页
    toPage() {
      if (this.pageIndex == 0) {
        layer.msg("没有此目录", { icon: 5 });
        return;
      }
      if (this.pageIndex > this.pageCount) {
        this.page = Number(this.pageCount);
        this.pageBg = Number(this.pageCount) - 1;
        this.getDesignTeamInfo();
      } else {
        this.page = Number(this.pageIndex);
        this.pageBg = Number(this.pageIndex) - 1;
        this.getDesignTeamInfo();
      }
    },
    toDetail(id) {
      this.$router.push({
        path: "/designTeam/elite/detail",
        query: {
          id: id,
        },
      });
    },

    // 获取数据
    async getDesignTeamInfo() {
      await this.$http
        .post(" http://xyzs.demo365day.cn/index.php/api/team/index.html", {
          page: this.page,
          size: 8,
          lid: this.lid,
          sid: this.sid,
          eid: this.eid,
        })
        .then(({ data }) => {
          if (!Number.isInteger(data.total / 8)) {
            this.pageCount = parseInt(data.total / 8 + 1);
          } else {
            this.pageCount = data.total / 8;
          }
          data.team_experience.unshift({
            name: "全部",
            id: 0,
          });
          data.team_level.unshift({
            level_name: "全部",
            id: 0,
          });
          data.team_styles.unshift({
            name: "全部",
            id: 0,
          });
          this.eliteInfo = data;
        });
    },
  },
  mounted() {
    this.getDesignTeamInfo();
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
  line-height: 45px;
  font-size: 14px;
  cursor: pointer;
  min-width: 100px;
  min-height: 45px;
  max-height: 45px;
}

.designList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.designList .designItem {
  width: calc((100% - 90px) / 4);
  border: 1px solid #fefefe;
  box-sizing: border-box;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: linear 0.3s;
  cursor: pointer;
}
.designList .designItem:hover {
  background: #a15050;
  color: #fff;
  transition: ease-in 0.4s;
  border: none;
}
.designList .designItem:hover .arrows {
  color: #fff;
}
.designList .designItem:hover .authorPic img {
  transform: scale(1.2);
}
.designList .designItem:hover .authorPic::before {
  width: 100%;
  left: 0;
  opacity: 1;
  z-index: 2;
}
.designList .designItem:hover .authorPic::after {
  height: 100%;
  top: 0;
  opacity: 1;
  z-index: 2;
}
.designList .designItem .authorPic {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.designList .designItem .authorPic::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 10%;
  border-left: 4px solid #a15050;
  left: 0px;
  border-right: 4px solid #a15050;
  display: block;
  top: 45%;
  transition: all 0.6s;
  opacity: 0;
}
.designList .designItem .authorPic::before {
  content: "";
  position: absolute;
  width: 10%;
  height: 100%;
  border-top: 4px solid #a15050;
  left: 45%;
  border-bottom: 4px solid #a15050;
  display: block;
  top: 0;
  transition: all 0.6s;
  opacity: 0;
}
.designList .designItem .authorPic img {
  width: 100%;
  min-height: 100%;
  transition: linear 0.3s;
}
.designList .designItem .author {
  height: 57px;
  width: 90%;
  text-align: left;
  line-height: 57px;
  border-bottom: 1px dashed #ccc;
  font-size: 18px;
}
.designList .designItem .designGrade {
  display: flex;
  align-items: center;
  height: 65px;
  width: 90%;
  justify-content: space-between;
}
.designList .designItem .designGrade div:nth-child(1) {
  font-size: 14px;
}
.designList .designItem .designGrade .arrows {
  font-size: 38px;
  color: #ccc;
}
.designList::after {
  content: " ";
  width: calc((100% - 90px) / 4);
}
/* 分页 */
.zhiju_page {
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
  background: #c14444;
  color: #fff;
}
@media screen and (max-width: 1024px) {
  .elite {
    width: 75%;
  }
  .stylist .stylistItem .title {
    font-size: 14px;
    width: inherit;
    height: 45px;
  }
  .stylist .stylistItem .list div {
    padding: 0 10px 0 10px;
    font-size: 14px;
    height: 45px;
  }

  .elite .designList .designItem {
    width: calc((100% - 20px) / 2);
    height: inherit;
  }
}
@media screen and (max-width: 767px) {
  .infoCenter {
    width: 100%;
  }
  .elite {
    width: 90%;
  }
  .stylist .stylistItem .list div {
    min-width: 70px;
    min-height: 35px;
    line-height: 35px;
    height: 35px;
  }
  .stylistItem .title {
    width: inherit;
    line-height: 35px;
  }
  .designList .designItem {
    margin-bottom: 0px;
  }
  .designList .designItem .designGrade .arrows {
    display: none;
  }
  .elite .designList .designItem:last-child {
    height: 0;
  }
}
@media screen and (max-width: 767px) {
  .zhiju_page div:nth-child(2),
  .zhiju_page .confirm {
    display: none;
  }
  .zhiju_page .page {
    padding-right: 0;
  }
}
</style>