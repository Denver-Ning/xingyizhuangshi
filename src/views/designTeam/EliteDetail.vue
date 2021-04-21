<template>
  <div class="detail">
    <!-- 设计师描述 -->
    <div class="person">
      <div class="pic">
        <img :src="userInfo.thumb" alt="" />
      </div>
      <div class="content">
        <div class="name">{{ userInfo.name }}</div>
        <div class="info">
          <div><b>设计师级别：</b>{{ userInfo.level_name }}</div>
          <div><b>从业年限：</b>{{ userInfo.experience }}年</div>
          <div><b>设计理念：</b> {{ userInfo.design_idea }}</div>
          <div><b>擅长风格：</b> 现代简约，新中式，欧式</div>
          <div><b>经典案例：</b>{{ userInfo.case_des }}</div>
          <div><b>获奖情况：</b>{{ userInfo.award }}</div>
        </div>
        <a href="#yuyue" class="yuyue">立即预约</a>
      </div>
    </div>
    <!-- 案例展示 -->
    <div class="case">
      <div class="caseCenter">
        <div class="title">
          <div>案例展示</div>
          <div class="picbg"></div>
          <div>CASE SHOW</div>
        </div>
        <div class="caseList">
          <div
            class="caseItem"
            v-for="(item, index) in eliteDetailInfo.caselist"
            :key="item.id"
            @click="toCase(eliteDetailInfo.caselist[index].id)"
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
    <!-- 装修预约 -->
    <div class="zxYy" id="yuyue">
      <div class="zxTitle">
        <div>装修预约</div>
        <div class="circle"></div>
        <div>MAKE AN APPOINTMENT</div>
      </div>
      <div class="zxInfo">
        <div class="name">
          <label>姓名</label>
          <input
            type="text"
            v-model="yuyueForm.name"
            placeholder="请输入您的姓名"
            id=""
          />
        </div>
        <div class="phone">
          <label>电话</label>
          <input
            type="text"
            v-model="yuyueForm.phone"
            placeholder="请输入您的电话号码"
            id=""
          />
        </div>
        <div class="type">
          <label>项目类型</label>
          <select v-model="yuyueForm.type">
            <option disabled value="null" hidden>请选择</option>
            <option
              v-for="(item, index) in eliteDetailInfo.project_types"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="area">
          <label>项目面积</label>
          <input
            type="text"
            v-model="yuyueForm.area"
            placeholder="请输入项目面积"
            id=""
          />
        </div>
        <!-- 备注 -->
        <div class="remarks">
          <label>备注</label>
          <textarea
            v-model="yuyueForm.content"
            cols="30"
            rows="10"
            placeholder="选填"
          ></textarea>
        </div>
        <!-- 立即预约按钮 -->
        <div class="infoYuyue" @click="yuyue">
          <span>立即预约</span>
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
      commonTitle: sessionStorage.getItem('title'),
      eliteDetailInfo: [],
      userInfo: [], //用户的信息
      yuyueForm: {
        name: "",
        phone: "",
        type: null,
        area: "",
        content: "",
      },
      id: null, //详情id
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
    async getEliteDetail() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/team/teaminfo.html", {
          page: this.page,
          id: this.id,
          size: 6,
        })
        .then(({ data }) => {
          this.$emit("author", data.info.name);
          if (!Number.isInteger(data.total / 6)) {
            this.pageCount = parseInt(data.total / 6 + 1);
          } else {
            this.pageCount = data.total / 6;
          }
          this.eliteDetailInfo = data;
          this.userInfo = data.info;
        });
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
      this.getEliteDetail();
    },
    // 分页上一个
    pagePrev() {
      if (this.page == 1) {
        return;
      } else {
        this.page = this.page - 1;
        this.pageBg = this.page - 1;
        this.getEliteDetail();
      }
    },
    // 分页下一个
    pageNext() {
      if (this.page == this.pageCount) {
        return;
      } else {
        this.page = this.page + 1;
        this.pageBg = this.page - 1;
        this.getEliteDetail();
      }
    },
    // 首页
    pageStart() {
      this.page = 1;
      this.pageBg = 0;
      this.getEliteDetail();
    },
    // 尾页
    pageEnd() {
      this.page = this.pageCount;
      this.pageBg = this.pageCount - 1;
      this.getEliteDetail();
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
        this.getEliteDetail();
      } else {
        this.page = Number(this.pageIndex);
        this.pageBg = Number(this.pageIndex) - 1;
        this.getEliteDetail();
      }
    },
    toCase(id) {
      this.$router.push(`/designCase/case/detail?id=${id}`);
    },
    async yuyue() {
      if (
        this.yuyueForm.name == "" ||
        this.yuyueForm.phone == "" ||
        this.yuyueForm.area == "" ||
        this.yuyueForm.type == null
      ) {
        layer.msg("请将信息填写完整", { icon: 5 });
        return;
      }
      var sj = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      var zj = /^(0[1-9]\d{1,2}-)\d{6,7}$/;
      if (!sj.test(this.yuyueForm.phone) && !zj.test(this.yuyueForm.phone)) {
        layer.msg("手机格式错误", { icon: 5 });
        return;
      }
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/message/appoint.html", {
          name: this.yuyueForm.name,
          tel: this.yuyueForm.phone,
          tid: this.id,
          area: this.yuyueForm.area,
          project_type: this.yuyueForm.type,
          content: this.yuyueForm.content,
        })
        .then(({ data }) => {
          if ((data.status = "success")) {
            layer.msg("预约成功", { icon: 6 });
            location.reload();
          } else {
            layer.msg("预约失败", { icon: 5 });
          }
        })
        .catch((err) => {
          console.log(err);
          layer.msg("预约失败", { icon: 5 });
        });
    },
  },
  mounted() {
    let id = Number(this.$route.query.id);
    this.id = id;
    this.getEliteDetail();
  },
};
</script>
<style scoped>
.detail {
  padding-top: 50px;
  width: 100%;
  margin: 0 auto;
}
.person {
  display: flex;
  padding-bottom: 76px;
  width: 67.5%;
  margin: 0 auto;
}
.person > div{
  width: 50%;
}
.person .pic {
  width: inherit;
}
.person .pic img {
  width: 100%;
  max-width: 100%;
}
.person .content {
  display: flex;
  flex-direction: column;
  padding-left: 70px;
  padding-top: 30px;
}
.person .content .name {
  padding-bottom: 30px;
  width: 100%;
  font-size: 24px;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
}
.person .content .info {
  padding-top: 30px;
  line-height: 35px;
  padding-bottom: 42px;
}
.person .content .info div {
  font-size: 14px;
}
.person .content .yuyue {
  width: 150px;
  height: 47px;
  border-radius: 5px;
  background: #a15050;
  line-height: 47px;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
}
.case {
  background: #f7f7f7;
  position: relative;
  z-index: 1;
}
.caseCenter {
  width: 67.5%;
  margin: 0 auto;
  padding-bottom: 70px;
}
.caseCenter .title {
  width: 67.5%;
  height: 168px;
  margin: 0 auto;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.caseCenter .title .picbg {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 80px solid #fff9f8;
  transform: rotateZ(20deg);
}
.caseCenter .title div:last-child {
  font-size: 14px;
  color: #e7e7e7;
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

/* 装修预约 */
.zxYy {
  width: 67.5%;
  margin: 0 auto;
}
.zxYy .zxTitle {
  justify-content: center;
  height: 207px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.zxYy .circle {
  position: absolute;
  z-index: -1;
  height: 88px;
  width: 88px;
  background: #fff9f8;
  border-radius: 50%;
}
.zxYy .zxTitle div {
  line-height: 30px;
}
.zxYy .zxTitle div:nth-child(1) {
  font-size: 24px;
}
.zxYy .zxTitle div:last-child {
  color: #e7e7e7;
}

.zxYy .zxInfo {
  border: 1px solid #e1e1e1;
  padding-bottom: 115px;
  padding-left: 120px;
  padding-right: 150px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.zxInfo div {
  margin-top: 60px;
  height: 60px;
  display: flex;
  width: 50%;
  justify-content: flex-end;
}
.zxInfo div label {
  margin-right: 20px;
  line-height: 60px;
}
.zxInfo div input {
  width: 80%;
  border: 1px solid #e1e1e1;
  padding-left: 20px;
  outline: none;
}
.zxInfo .type select {
  width: 80%;
  border: 1px solid #e1e1e1;
  padding-left: 20px;
  outline: none;
}
.zxInfo .remarks {
  width: 100%;
  height: 180px;
}
.zxInfo .remarks label {
  line-height: 50px;
}
.zxInfo .remarks textarea {
  width: 90%;
  outline: none;
  padding: 22px 20px;
  border: 1px solid #e1e1e1;
  max-block-size: 180px;
}
.zxInfo .infoYuyue {
  width: 200px;
  height: 60px;
  background: #a15050;
  margin: 0 auto;
  margin-top: 60px;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
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
@media screen and (max-width: 1545px) {
  .detail .person {
    justify-content: center;
    align-items: center;
  }
  .person .content {
    padding-top: 0;
  }
  .person .content .name {
    padding-bottom: 10px;
  }
  .person .content .info {
    padding: 15px 0;
  }
}
@media screen and (max-width: 1024px) {
  .detail .person {
    flex-direction: column;
    align-items: inherit;
    width: 75%;
  }
  .caseCenter {
    width: 75%;
  }
  .detail .person .pic {
    width: 100%;
    height: 100%;
  }
  .detail .person .content {
    padding: 10px 0;
  }
  .detail .person .content .yuyue {
    margin-top: 20px;
  }
  .detail .caseCenter .caseList .caseItem {
    width: calc((100% - 20px) / 2);
  }
  .detail .zxYy {
    padding-bottom: 20px;
    width: 75%;
  }
  .detail .zxYy .zxInfo {
    flex-direction: column;
    padding-left: 38px;
    padding-right: 38px;
  }
  .detail .zxYy .zxInfo div {
    width: 100%;
  }
  .detail .zxInfo .remarks label {
    width: 78px;
    text-align: right;
  }
}
@media screen and (max-width: 767px) {
  .caseList {
    width: 90%;
    margin: 0 auto;
  }
  .detail .person {
    width: 90%;
    padding-top: 0px;
    padding-bottom: 30px;
  }

  .caseCenter .caseList .caseItem .caseContent div:last-child {
    display: none;
  }
  .person .content .yuyue {
    margin: 0 auto;
    margin-top: 20px;
  }
  .person .content .info {
    padding-bottom: 20px;
  }
  .caseCenter {
    width: 100%;
    padding-bottom: 30px;
  }
  .caseCenter .caseList .caseItem .pic img {
    height: 109px;
  }
  .zhiju_page div:nth-child(2),
  .zhiju_page div:nth-child(3) {
    display: none;
  }
  .detail .caseCenter .caseList .caseItem .pic {
    height: inherit;
  }
  .detail .caseCenter .caseList .caseItem {
    height: inherit;
  }

  .detail .zxYy {
    width: 90%;
  }
  .zxInfo div {
    margin-top: 30px;
  }
  .zxInfo div label {
    margin-right: 12px;
    font-size: 12px;
  }
  .zxInfo .remarks textarea {
    width: 100%;
  }
  .detail .zxYy .zxInfo {
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 60px;
    border: none;
  }
  .zxInfo .type select,
  .zxInfo div input {
    font-size: 12px;
  }
  .detail .zxYy .zxInfo .name {
    margin-top: 0;
  }
  .zhiju_page .page {
    padding-right: 0;
  }
}
</style>