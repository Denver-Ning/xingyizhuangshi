<template>
  <div class="bancai">
    <div class="youzhi" v-if="listTitle">
      <div class="title">
        <div>{{ listTitle[4].name }}</div>
        <div class="circleBg"></div>
        <div>{{ listTitle[4].eng_name }}</div>
      </div>
    </div>
    <div v-html="listInfo.content"></div>
  </div>
</template>
<script>
export default {
  metaInfo(){
    return{
      title:this.commonTitle
    }
  },
  props: ["listTitle"],
  data() {
    return {
      commonTitle: sessionStorage.getItem('title'),
      listInfo: [],
    };
  },
  methods: {
    // 各类内容介绍
    async getEveryInfo(id) {
      await this.$http
        .post(
          "http://xyzs.demo365day.cn/index.php/api/service/materialInfo.html",
          { nid: id }
        )
        .then(({ data }) => {
          this.listInfo = data;
          this.$emit("location", data.name);
        });
    },
  },
  mounted() {
    let id = window.location.href.split("id=")[1];
    this.getEveryInfo(id);
  },
};
</script>
<style>
.bancai img {
   max-width: 100% !important;
  overflow: hidden;
}
</style>
<style scoped>
.bancai {
  width: 67.5%;
  margin: 0 auto;
  padding-top: 50px;
}
.youzhi .title {
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.youzhi .title div:nth-child(1) {
  font-size: 24px;
}
.youzhi .title .circleBg {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #fff9f8;
  position: absolute;
  z-index: -1;
}
.youzhi .title div:last-child {
  font-size: 14px;
  color: #c7c7c7;
}

.youzhi .content .contentTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
}
.youzhi .content .contentTitle div {
  line-height: 30px;
}
.content .pic {
  text-align: center;
  padding-bottom: 30px;
}
.content .contentText {
  line-height: 30px;
  color: #595959;
  padding-bottom: 20px;
}

.content .liyou {
  text-align: center;
  padding-bottom: 40px;
}
.content .liyou .liyouTitle {
  font-size: 16px;
  float: left;
}

/* 原料优点 */
.youdian {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
}
.youdian .youdianTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
}
.youdian .youdianTitle div:nth-child(1) {
  font-size: 22px;
}
.youdian .youdianTitle .bg {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 90px solid #fef3f2;
  border-bottom: 35px solid transparent;
  transform: rotateZ(20deg);
  position: absolute;
  z-index: -1;
}
.youdian .youdianTitle div:last-child {
  font-size: 14px;
}
.youdianContent {
  display: flex;
}
.youdianContent .text {
  padding-left: 88px;
}
.youdianContent .text div {
  line-height: 40px;
  margin-top: 20px;
  position: relative;
}
.youdianContent .text div::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  position: absolute;
  left: -30px;
  top: 15px;
}
.bottomText {
  padding-left: 40px;
}
.bottomText div {
  position: relative;
  line-height: 40px;
  margin-top: 20px;
}
.bottomText div::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  position: absolute;
  left: -30px;
  top: 15px;
}

/* 细木工板 */
.gongban {
  width: 100%;
  margin: 0 auto;
}
.gongbanTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 106px;
}
.gongbanTitle div:nth-child(1) {
  font-size: 22px;
}
.gongbanTitle .bg {
  position: absolute;
  width: 90px;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: #fef8f7 transparent;
  z-index: -1;
  transform: translateY(12px) rotateZ(-10deg);
}
.gongbanTitle .bg::before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent #fef8f7;
}
.gongbanTitle div:last-child {
  font-size: 14px;
}

.gongbanContent .contentTitle {
  padding-bottom: 30px;
  line-height: 30px;
  color: #565656;
  font-size: 16px;
}
.gongbanContent .youdianTitle {
  font-size: 18px;
  text-align: left;
}
.gongbanContent .picText {
  display: flex;
}
.gongbanContent .picText .text {
  padding-left: 88px;
}
.gongbanContent .picText .text div {
  position: relative;
  line-height: 40px;
  margin-top: 20px;
}
.gongbanContent .picText .text div::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  position: absolute;
  left: -30px;
  top: 15px;
}
.gongbanContent .youdianBottomText {
  padding-left: 40px;
  padding-bottom: 20px;
}
.gongbanContent .youdianBottomText div {
  position: relative;
  line-height: 40px;
  margin-top: 20px;
}
.gongbanContent .youdianBottomText div::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  position: absolute;
  left: -30px;
  top: 15px;
}
.gongbanContent .jiemi {
  text-align: center;
}
.gongbanContent .jiemi .jiemiTitle {
  font-size: 16px;
  padding-bottom: 10px;
}
.gongbanContent .bottomText {
  position: relative;
  line-height: 40px;
  margin-top: 20px;
  padding-bottom: 40px;
}
.gongbanContent .bottomText div::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  position: absolute;
  left: -30px;
  top: 15px;
}
/* 生态板 */
.shengtai {
  width: 100%;
  margin: 0 auto;
}
.shengtaiTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 106px;
}
.shengtaiTitle div:nth-child(1) {
  font-size: 22px;
}
.shengtaiTitle .bg {
  position: absolute;
  width: 90px;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: #fef8f7 transparent;
  z-index: -1;
  transform: translateY(12px) rotateZ(-10deg);
}
.shengtaiTitle .bg::before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent #fef8f7;
}
.shengtaiTitle div:last-child {
  font-size: 14px;
}
.shengtai .pic {
  text-align: center;
  padding-bottom: 35px;
}
.shengtai .shengtaiDetail {
  padding-bottom: 50px;
}
.shengtai .shengtaiDetail div {
  line-height: 30px;
  color: #585858;
}
.shengtai .liyou {
  padding-bottom: 40px;
}
.shengtai .liyou .liyouTitle {
  padding-bottom: 40px;
}
.shengtai .liyou .liyouContent {
  display: flex;
  padding-bottom: 30px;
}
.shengtai .liyou .liyouContent .text {
  padding-left: 90px;
}
.shengtai .liyou .liyouContent .text div {
  line-height: 30px;
  padding-top: 20px;
}

.shengtai .liyou .liyouContent2 {
  display: flex;
  padding-bottom: 40px;
}
.shengtai .liyou .liyouContent2 .text {
  padding-right: 90px;
}
.shengtai .liyou .liyouContent2 .text div {
  line-height: 30px;
  padding-top: 20px;
}

/* 夹板 */

.jiaban {
  width: 100%;
  margin: 0 auto;
}
.jiabanTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 106px;
}
.jiabanTitle div:nth-child(1) {
  font-size: 22px;
}
.jiabanTitle .bg {
  position: absolute;
  width: 90px;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: #fef8f7 transparent;
  z-index: -1;
  transform: translateY(12px) rotateZ(-10deg);
}
.jiabanTitle .bg::before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent #fef8f7;
}
.jiabanTitle div:last-child {
  font-size: 14px;
}

.jiaban .content {
  display: flex;
  padding-bottom: 20px;
}
.jiaban .content .text {
  padding-left: 88px;
}
.jiaban .content .text div {
  color: #595959;
  margin-top: 35px;
}
.jiaban .content .text div:nth-child(1) {
  margin-top: 0;
}
.jiaban .pic {
  text-align: center;
  padding-bottom: 120px;
}

/* 装饰板 */
.zhuangshi {
  width: 100%;
  margin: 0 auto;
}
.zhuangshiTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 106px;
}
.zhuangshiTitle div:nth-child(1) {
  font-size: 22px;
}
.zhuangshiTitle .bg {
  position: absolute;
  width: 90px;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: #fef8f7 transparent;
  z-index: -1;
  transform: translateY(12px) rotateZ(-10deg);
}
.zhuangshiTitle .bg::before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent #fef8f7;
}
.zhuangshiTitle div:last-child {
  font-size: 14px;
}
.zhuangshi .content {
  padding-bottom: 40px;
}
.zhuangshi .content .contentTitle {
  padding-bottom: 20px;
}
.content .contentInfo {
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;
}
.content .contentInfo .text {
  padding-right: 75px;
}
.content .contentInfo .text div {
  margin-top: 30px;
  font-size: 14px;
}
.content .contentInfo .text div:nth-child(1) {
  margin-top: 0;
}
.contentInfo2 .text {
  padding-left: 75px;
  font-size: 14px;
}
.contentInfo2 .text div {
  position: relative;
}
.contentInfo2 .text .textTitle {
  font-size: 16px;
}
.contentInfo2 .text div::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  border-radius: 50%;
  position: absolute;
  left: -20px;
  top: 8px;
}

.noText {
  padding-bottom: 60px;
  font-size: 14px;
  color: #565656;
}
.noText .noTitle {
  font-size: 16px;
  padding-bottom: 20px;
}
.noText .bottomInfo {
  padding-left: 40px;
}
.noText .bottomInfo div {
  line-height: 40px;
  position: relative;
}
.noText .bottomInfo div::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  position: absolute;
  left: -30px;
  top: 15px;
}

/* 健康饰面板 */
.mianban {
  width: 100%;
  margin: 0 auto;
}
.mianban .title {
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mianban .title div:nth-child(1) {
  font-size: 20px;
}
.mianban .title .circleBg {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #fff9f8;
  position: absolute;
  z-index: -1;
}
.mianban .title div:last-child {
  font-size: 14px;
}

.mianban .mianbanContent {
  padding-bottom: 20px;
}
.mianban .mianbanInfo {
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
}
.mianban .mianbanInfo .mianbanText {
  padding-right: 75px;
  padding-left: 20px;
}
.mianban .mianbanInfo .mianbanText .tedian {
  font-size: 16px;
  margin-left: -20px;
}
.mianban .mianbanInfo .mianbanText p {
  line-height: 40px;
  margin-top: 20px;
  position: relative;
  font-size: 14px;
}
.mianban .mianbanInfo .mianbanText p::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  border-radius: 50%;
  position: absolute;
  left: -20px;
  top: 17px;
}

/* 木方 */
.mufang {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
}
.mufang .mufangTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
}
.mufang .mufangTitle div:nth-child(1) {
  font-size: 22px;
}
.mufang .mufangTitle .bg {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 90px solid #fef3f2;
  border-bottom: 35px solid transparent;
  transform: rotateZ(20deg);
  position: absolute;
  z-index: -1;
}
.mufang .mufangTitle div:last-child {
  font-size: 14px;
}
.mufang .content {
  padding-bottom: 40px;
}
.content .infoCommon {
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.content .infoCommon .text p {
  position: relative;
}
.content .info_1 .text {
  padding-left: 90px;
  padding-top: 40px;
}
.content .infoCommon .text p::before {
  content: " ";
  display: block;
  width: 5px;
  height: 5px;
  background: #9d9d9d;
  border-radius: 50%;
  position: absolute;
  left: -20px;
  top: 10px;
}

.content .info_2 .text {
  padding-top: 40px;
  padding-left: 30px;
}
.content .info_2 .text .mufangTedian {
  font-size: 16px;
  margin-left: -30px;
  padding-bottom: 15px;
}
.content .pic {
  padding-top: 40px;
}

/* 地板 */
.diban {
  width: 100%;
  margin: 0 auto;
}
.dibanTitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
}
.dibanTitle div:nth-child(1) {
  font-size: 22px;
}
.dibanTitle .bg {
  position: absolute;
  z-index: -1;
  width: 80px;
  height: 80px;
  background: #fff9f8;
  transform: rotateZ(45deg);
}
.dibanTitle div:last-child {
  font-size: 14px;
  color: #979797;
}

.diban .content {
  padding-bottom: 100px;
}
.content .common {
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
}
.content .content_1 .text {
  padding-right: 70px;
}
.content .common .text div {
  margin-top: 40px;
  font-size: 14px;
}
.content .common .text div:nth-child(1) {
  font-size: 18px;
}
@media screen and (max-width: 1024px) {
  .bancai img {
    width: 100%;
  }
  .bancai {
    font-size: 12px;
  }
  .mufang {
    padding-bottom: 0;
  }
  .youdianContent,
  .gongbanContent .picText,
  .shengtai .liyou .liyouContent,
  .shengtai .liyou .liyouContent2,
  .jiaban .content,
  .content .contentInfo,
  .mianban .mianbanInfo,
  .content .infoCommon,
  .content .common {
    flex-direction: column;
  }
  .youdianContent .text,
  .bottomText,
  .gongbanContent .picText .text,
  .gongbanContent .youdianBottomText,
  .shengtai .liyou .liyouContent .text,
  .jiaban .content .text {
    padding-left: 0;
    line-height: 0;
  }
  .youdianContent .text div,
  .bottomText div,
  .gongbanContent .picText .text div,
  .gongbanContent .youdianBottomText div,
  .jiaban .content .text {
    line-height: 20px;
  }
  .shengtai .liyou .liyouContent2 .text,
  .content .contentInfo .text,
  .mianban .mianbanInfo .mianbanText,
  .content .info_1 .text,
  .content .info_2 .text,
  .content .content_1 .text {
    order: 2;
    padding: 0;
    padding-top: 10px;
  }
  .jiaban .content .text div {
    margin-top: 20px;
  }
  .mianban .mianbanInfo .mianbanText .tedian,
  .content .info_2 .text .mufangTedian {
    margin-left: 0;
  }
  .content .contentInfo .text div::before,
  .mianban .mianbanInfo .mianbanText p::before,
  .content .infoCommon .text p::before {
    content: "";
    display: none;
  }
  .noText .bottomInfo {
    padding-left: 0;
  }
}
@media screen and (max-width: 767px) {
  .bancai {
    width: 90%;
  }
  .bancai img {
    width: 100%;
  }
  .bancai {
    font-size: 12px;
  }
  .mufang {
    padding-bottom: 0;
  }
  .youdianContent,
  .gongbanContent .picText,
  .shengtai .liyou .liyouContent,
  .shengtai .liyou .liyouContent2,
  .jiaban .content,
  .content .contentInfo,
  .mianban .mianbanInfo,
  .content .infoCommon,
  .content .common {
    flex-direction: column;
  }
  .youdianContent .text,
  .bottomText,
  .gongbanContent .picText .text,
  .gongbanContent .youdianBottomText,
  .shengtai .liyou .liyouContent .text,
  .jiaban .content .text {
    padding-left: 0;
    line-height: 0;
  }
  .youdianContent .text div,
  .bottomText div,
  .gongbanContent .picText .text div,
  .gongbanContent .youdianBottomText div,
  .jiaban .content .text {
    line-height: 20px;
  }
  .shengtai .liyou .liyouContent2 .text,
  .content .contentInfo .text,
  .mianban .mianbanInfo .mianbanText,
  .content .info_1 .text,
  .content .info_2 .text,
  .content .content_1 .text {
    order: 2;
    padding: 0;
    padding-top: 10px;
  }
  .jiaban .content .text div {
    margin-top: 20px;
  }
  .mianban .mianbanInfo .mianbanText .tedian,
  .content .info_2 .text .mufangTedian {
    margin-left: 0;
  }
  .content .contentInfo .text div::before,
  .mianban .mianbanInfo .mianbanText p::before,
  .content .infoCommon .text p::before {
    content: "";
    display: none;
  }
  .noText .bottomInfo {
    padding-left: 0;
  }
}
</style>