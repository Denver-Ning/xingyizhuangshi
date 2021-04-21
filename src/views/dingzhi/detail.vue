<template>
  <div>
    <!-- 设计定制 -->
    <div class="sheji">
      <div class="shejiTitle">
        <div>设计定制</div>
        <div class="circleBg"></div>
        <div>DESIGN CUSTOM</div>
      </div>
      <div class="shejiList">
        <div
          class="shejiItem"
          v-for="(item, index) in dingzhiInfo.design_custom"
          :key="index"
        >
          <div class="pic">
            <div>
              <img :src="item.thumb" alt="" />
            </div>
          </div>
          <div class="text">
            <div>{{ item.title }}</div>
            <div>{{ item.des }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 家具定制 -->
    <div class="jiaju">
      <div class="jiajuTitle">
        <div>家具定制</div>
        <div class="bg"></div>
        <div>HOSUSE ASDFKJ</div>
      </div>
      <div class="jiajuList">
        <div
          class="jiajuItem"
          v-for="(item, index) in dingzhiInfo.house_custom"
          :key="index"
        >
          <div>
            <img :src="item.thumb" alt="" />
          </div>
          <div>{{ item.title }}</div>
        </div>
      </div>
    </div>
    <!-- 传统定制 vs 星艺装饰 -->
    <div class="vs">
      <div class="vsTitle">
        <div>传统定制 VS 星艺装饰</div>
        <div class="bg"></div>
        <div>CUSTOM CONTRAST</div>
      </div>
      <div class="container vsInfo">
        <div class="row">
          <div class="col-md-5 vsInfoLeft">
            <div class="title">传统定制</div>
            <div v-html="vsInfo.tradition_des"></div>
          </div>
          <div class="col-md-2 img">
            <img src="../../assets/image/dingzhi/vs.png" alt="" />
          </div>
          <div class="col-md-5 vsInfoRight">
            <div class="title">星艺装饰</div>
            <div v-html="vsInfo.xy_des"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 获取定制 -->
    <div class="huoqu">
      <div class="huoquCenter">
        <div class="huoquTitle">
          <div>获取定制</div>
          <div class="bg"></div>
          <div>CUSTOMIZJKS</div>
        </div>
        <div class="zxInfo">
          <div class="name">
            <label>姓名</label>
            <input
              type="text"
              v-model="dingzhiForm.name"
              placeholder="请输入您的姓名"
              id=""
            />
          </div>
          <div class="phone">
            <label>电话</label>
            <input
              type="text"
              v-model="dingzhiForm.phone"
              placeholder="请输入您的电话号码"
              id=""
            />
          </div>
          <div class="type">
            <label>项目类型</label>
            <select v-model="dingzhiForm.type">
              <option value="null" disabled hidden>请选择</option>
              <option
                v-for="(item, index) in dingzhiInfo.project_types"
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
              v-model="dingzhiForm.area"
              placeholder="请输入项目面积"
              id=""
            />
          </div>
          <!-- 备注 -->
          <div class="remarks">
            <label>备注</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="选填"
              v-model="dingzhiForm.content"
            ></textarea>
          </div>
          <!-- 获取定制按钮 -->
          <div class="infoYuyue" @click="dingzhi">
            <span>获取定制</span>
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
      // 定制提交
      dingzhiForm: {
        name: "",
        phone: "",
        type: null,
        area: "",
        content: "",
      },
      dingzhiInfo: [],
      vsInfo: [],
    };
  },
  methods: {
    async dingzhi() {
      if (
        this.dingzhiForm.name == "" ||
        this.dingzhiForm.phone == "" ||
        this.dingzhiForm.area == "" ||
        this.dingzhiForm.type == null
      ) {
        layer.msg("请将信息填写完整", { icon: 5 });
        return;
      }
      var sj = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      var zj = /^(0[1-9]\d{1,2}-)\d{6,7}$/;
      if (
        !sj.test(this.dingzhiForm.phone) &&
        !zj.test(this.dingzhiForm.phone)
      ) {
        layer.msg("手机格式错误", { icon: 5 });
        return;
      }

      await this.$http
        .post(
          "http://xyzs.demo365day.cn/index.php/api/about/customSubmit.html",
          {
            name: this.dingzhiForm.name,
            tel: this.dingzhiForm.phone,
            area: this.dingzhiForm.area,
            project_type: this.dingzhiForm.type,
            content: this.dingzhiForm.content,
          }
        )
        .then(({ data }) => {
          if ((data.status = "success")) {
            layer.msg("定制成功", { icon: 6 });
            location.reload();
          } else {
            layer.msg("定制失败", { icon: 5 });
          }
        })
        .catch((err) => {
          console.log(err);
          layer.msg("定制失败", { icon: 5 });
        });
    },
    async getDingzhiInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/customized.html")
        .then(({ data }) => {
          this.dingzhiInfo = data;
          this.vsInfo = data.design_contrast;
        });
    },
  },
  mounted() {
    this.getDingzhiInfo();
  },
};
</script>
<style scoped>
.sheji {
  width: 75%;
  margin: 0 auto;
}
.sheji .shejiTitle {
  height: 197px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sheji .shejiTitle div:nth-child(1) {
  font-size: 24px;
}
.shejiTitle .circleBg {
  position: absolute;
  z-index: -1;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #fff9f8;
}
.shejiTitle div:last-child {
  font-size: 14px;
  color: #c7c7c7;
}

.shejiList {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 92px;
}
.shejiItem {
  width: calc((100% - 120px) / 5);
  height: 188px;
  background: #fff;
  box-shadow: 2px 2px 15px #f8f8f8;
  position: relative;
  text-align: center;
  border-radius: 4px;
  margin-right: 30px;
  margin-top: 30px;
}
.shejiItem:last-child {
  margin-right: 0;
}
.shejiItem .pic {
  width: 95px;
  height: 95px;
  background: #ffffff;
  box-shadow: 2px -8px 15px #f8f8f8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: -45px;
}
.shejiItem .pic > div {
  width: 68px;
  height: 68px;
  background: #a15050;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shejiItem .text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-top: 70px;
}
.shejiItem .text div:nth-child(1) {
  font-size: 18px;
}
.shejiItem .text div:last-child {
  color: #595959;
  font-size: 14px;
}

/* 家具定制 */
.jiaju {
  width: 100%;
  background: #f7f7f7;
  position: relative;
  z-index: 0;
}
.jiajuTitle {
  height: 197px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.jiajuTitle div:nth-child(1) {
  font-size: 24px;
}
.jiajuTitle .bg {
  position: absolute;
  z-index: -1;
  top: 76px;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid #fef3f2;
  border-bottom: 50px solid transparent;
  transform: rotateZ(-145deg);
}
.jiajuTitle div:last-child {
  font-size: 14px;
  color: #c9c9c9;
}
.jiajuList {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
}
.jiajuItem {
  width: calc((100% - 10%) / 5);
  text-align: center;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 50px;
}
/* vs */

.vs {
  width: 75%;
  margin: 0 auto;
  padding-bottom: 70px;
}
.vsInfo {
  max-width: 1200px;
  width: 1200px;
}
.vsTitle {
  height: 197px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.vsTitle div:nth-child(1) {
  font-size: 24px;
}
.vsTitle .bg {
  position: absolute;
  z-index: -1;
  width: 70px;
  height: 70px;
  background: #fef3f2;
  transform: rotateZ(45deg);
}
.vsTitle div:last-child {
  font-size: 14px;
  color: #c7c7c7;
}
.vsInfo .title {
  color: #b04b4b;
  font-size: 18px;
  padding-bottom: 10px;
}

.vsInfo img {
  width: 100%;
}
.vsInfoLeft {
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.vsInfoLeft div:last-child,
.vsInfoRight div:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 30px;
  font-size: 16px;
}
.vsInfoRight {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* 获取定制 */
.huoqu {
  width: 100%;
  margin: 0 auto;
  background: #f7f7f7;
  position: relative;
  z-index: -1;
}
.huoquCenter {
  width: 75%;
  margin: 0 auto;
}
.huoquTitle {
  height: 197px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.huoquTitle div:nth-child(1) {
  font-size: 24px;
}
.huoquTitle .bg {
  position: absolute;
  z-index: -1;
  width: 88px;
  height: 88px;
  background: #fef3f2;
  transform: rotateZ(45deg);
}
.huoquTitle div:last-child {
  font-size: 14px;
  color: #c7c7c7;
}
.zxInfo {
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
  padding: 0 20px;
  outline: none;
  background: #f7f7f7;
}
.zxInfo .type select {
  width: 80%;
  border: 1px solid #e1e1e1;
  padding: 0 20px;
  outline: none;
  background: #f7f7f7;
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
  padding-left: 20px;
  padding-top: 22px;
  border: 1px solid #e1e1e1;
  background: #f7f7f7;
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
@media screen and (max-width: 1024px) {
  .sheji {
    width: 88%;
  }
  .shejiItem {
    margin-bottom: 30px;
  }
  .jiajuList {
    width: 85%;
  }
  .huoqu {
    width: 85%;
  }
  .zxInfo {
    padding: 0;
  }
}
@media screen and (max-width: 768px) {
  .shejiList {
    justify-content: center;
  }
  .shejiList::after {
    content: "";
    width: 265px;
    height: 0;
    margin-right: 35px;
  }
  .shejiItem:last-child {
    margin-right: 35px;
  }
  .zxInfo div input,
  .zxInfo .type select {
    width: 74%;
  }
  .zxInfo .remarks textarea {
    width: 87%;
  }
}
@media screen and (max-width: 767px) {
  .shejiList {
    justify-content: flex-start;
  }

  .shejiItem {
    margin-right: 0;
    width: calc((100% - 20px) / 2);
    margin-left: 20px;
  }
  .shejiItem:nth-child(odd) {
    margin-left: 0;
  }
  .shejiItem:last-child {
    margin-right: 0;
  }
  .jiajuList {
    width: 90%;
    justify-content: flex-start;
  }
  .jiajuItem {
    width: 33.3%;
  }
  .vs {
    width: 90%;
  }
  .vsInfo {
    max-width: 100%;
  }
  .vsInfo .img {
    text-align: center;
    order: 2;
  }
  .vsInfo img {
    width: 55%;
  }
  .vsInfoLeft {
    text-align: left;
    order: 3;
  }
  .vsInfoRight{
    order: 1;
  }
  .vsInfoLeft div:last-child,
  .vsInfoRight div:last-child {
    text-overflow: inherit;
    white-space: inherit;
  }
  .vsInfo .title:last-child {
    margin-top: 10px;
  }
  .huoqu {
    width: 100%;
    padding-bottom: 30px;
  }
  .zxInfo {
    flex-direction: column;
    border: none;
  }
  .zxInfo .infoYuyue {
    width: 100%;
  }
  .zxInfo div {
    width: 100%;
    margin-top: 30px;
  }
  .zxInfo div label {
    margin-right: 17px;
  }
  .remarks {
    position: relative;
  }
  .zxInfo .remarks textarea {
    width: calc(100% - 82px);
  }
}
</style>