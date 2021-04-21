<template>
  <div class="caseDetail">
    <div class="case">
      <div class="title">
        <h3>{{ caseinfo.title }}</h3>
        <div>设计理念:{{ caseinfo.des }}</div>
      </div>
      <!-- 视频介绍 -->
      <div class="videoInfo" v-if="video">
        <div class="videoTitle">
          <span>视频介绍</span>
        </div>
        <div class="video" id="video">
          <video controls>
            <source :src="caseinfo.video_file" type="video/mp4" />
          </video>
        </div>
        <div class="videoContent">
          {{ caseinfo.video_des }}
        </div>
      </div>
      <!-- 详情介绍 -->
      <div class="detailInfo">
        <div class="detailTitle">
          <span>详情介绍</span>
        </div>
        <div class="detailImg">
          <img :src="caseinfo.thumb" alt="" />
        </div>
        <div class="detailContent" v-html="caseinfo.content"></div>
      </div>
    </div>
    <!-- 右侧案例信息 -->
    <div class="caseInfo">
      <div class="infoTitle">案例信息</div>
      <div class="infoContent">
        <div>案例名称:{{ caseinfo.title }}</div>
        <div>案例风格:{{ caseinfo.design_style }}</div>
        <div>面积户室:{{ caseinfo.area }}㎡</div>
        <!--  <span class="ml-2">四室</span> -->
      </div>
      <!-- 设计师 -->
      <div class="designTeach">
        <div class="work">设计师</div>
        <div class="authorDetail">
          <div class="pic">
            <img :src="designer.thumb" alt="" />
          </div>
          <div class="info">
            <div class="name">{{ designer.name }}</div>
            <div>{{ designer.level_name }}</div>
            <div>从业{{ designer.experience }}年时间</div>
          </div>
        </div>
      </div>
      <!-- 装修预约 -->
      <div class="caseYuyue">
        <div class="title">
          <div>装修预约</div>
          <div>请填写您的真实信息</div>
        </div>
        <div class="yuyueInfo">
          <div>
            <input
              type="text"
              v-model="userForm.name"
              placeholder="请输入您的姓名"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="userForm.phone"
              placeholder="请输入您的联系电话"
            />
          </div>
          <div @click="yuyue">立即预约</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.caseinfo.title + '-'+this.commonTitle,
    };
  },
  data() {
    return {
      commonTitle: sessionStorage.getItem('title'),
      caseinfo: [],
      designer: [],
      id: null,
      userForm: {
        name: "",
        phone: "",
      },
      video: true,
    };
  },
  methods: {
    async getCaseDetailInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/team/caseinfo.html", {
          id: this.id,
        })
        .then(({ data }) => {
          this.$emit("anli", data.caseinfo.name);
          if (
            data.caseinfo.video_file == "" ||
            data.caseinfo.video_file == undefined ||
            data.caseinfo.video_file == null
          ) {
            this.video = false;
          } else {
            this.video = true;
            $("#video").html(
              `<video style="width:100%" controls><source src="${data.caseinfo.video_file}" type="video/mp4"></source></video>`
            );
          }
          this.caseinfo = data.caseinfo;
          this.designer = data.designer;
        });
    },
    fromTop() {
      if (
        $(window).scrollTop() >
        $(".header").height() + $(".banner").height() + $(".current").height()
      ) {
        let petct = $(window).scrollTop() - $(".caseDetail").offset().top;
        $(".caseInfo").css({ top: petct + 140 });
      } else {
        $(".caseInfo").css({ top: 0 });
      }
      let f =
        $(".header").height() +
        $(".banner").height() +
        $(".current").height() +
        $(".caseDetail").height() -
        $(".footer").height();
      if ($(".caseInfo").offset().top + 410 >= f) {
        $(".caseInfo").css({ top: 0 });
      }
    },
    async yuyue() {
      if (this.userForm.name == "" || this.userForm.phone == "") {
        layer.msg("姓名或手机号为空", { icon: 5 });
      } else {
        var sj = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        var zj = /^(0[1-9]\d{1,2}-)\d{6,7}$/;
        if (!sj.test(this.userForm.phone)) {
          layer.msg("手机号格式错误", { icon: 5 });
          return;
        }
        await this.$http
          .post(
            "http://xyzs.demo365day.cn/index.php/api/message/appoint.html",
            {
              name: this.userForm.name,
              tel: this.userForm.phone,
              tid: this.designer.id,
            }
          )
          .then(({ data }) => {
            if ((data.status = "success")) {
              layer.msg("预约成功", { icon: 6 });
              location.reload();
            } else {
              layer.msg("预约失败", { icon: 6 });
            }
          });
        this.userForm.name = "";
        this.userForm.phone = "";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.fromTop);
    let id = Number(this.$route.query.id);
    this.id = id;
    this.getCaseDetailInfo();
  },
};
</script>
<style>
.detailContent img {
  max-width: 100%;
}
</style>
<style scoped>
.caseDetail {
  position: relative;
  width: 67.5%;
  margin: 0 auto;
  display: flex;
}
.case {
  width: 70%;
  padding-top: 37px;
  padding-right: 37px;
  border-right: 1px solid #e0e0e0;
}
.case .title {
  text-align: center;
  padding-bottom: 35px;
}
.case .videoInfo {
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
}
.videoInfo .videoTitle {
  padding-bottom: 34px;
}
.videoInfo .videoTitle span {
  font-size: 18px;
  border-bottom: 3px solid #000;
  padding-bottom: 10px;
}
.videoInfo .video {
  width: 100%;
}
.videoInfo .video video {
  width: 100%;
  height: 100%;
}
.videoInfo .video video source {
  width: 100%;
  height: 100%;
}
.videoInfo .videoContent {
  padding-top: 20px;
}
/* 详情介绍 */
.case .detailInfo {
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
}
.detailInfo .detailTitle {
  padding-bottom: 34px;
}
.detailInfo .detailTitle span {
  font-size: 18px;
  border-bottom: 3px solid #000;
  padding-bottom: 10px;
}
.detailInfo .detailImg {
  width: 100%;
}
.detailInfo .detailImg img {
  width: 100%;
  height: 100%;
}
.detailInfo .detailContent {
  padding-top: 20px;
}

/* 右侧案例信息 */
.caseInfo {
  flex: 1;
  padding-left: 37px;
  width: 30%;
  position: absolute;
  z-index: 20;
  right: 0;
}
.caseInfo .infoTitle {
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 20px;
}
.caseInfo .infoContent {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  font-size: 14px;
}
.caseInfo .infoContent div {
  line-height: 30px;
}
.caseInfo .caseYuyue {
  width: 100%;
}
/* 设计师 */
.designTeach {
  display: flex;
  flex-direction: column;
}
.designTeach .work {
  font-size: 22px;
  font-weight: 600;
}
.designTeach .authorDetail {
  display: flex;
  padding-bottom: 30px;
  padding-top: 25px;
}
.authorDetail .pic {
  width: 135px;
}
.authorDetail .pic img {
  width: 100%;
}
.authorDetail .info {
  padding-left: 30px;
}
.authorDetail .info .name {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
}
.authorDetail .info div {
  display: flex;
  flex-direction: column;
  line-height: 30px;
  font-size: 14px;
}
.caseInfo .caseYuyue {
  border: 1px solid #e0e0e0;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
}
.caseYuyue .title {
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.caseYuyue .title div:nth-child(1) {
  font-size: 20px;
  color: #a15050;
}
.caseYuyue .title div:nth-child(2) {
  font-size: 14px;
  color: #c1c1c1;
}
.caseYuyue .yuyueInfo {
  display: flex;
  flex-direction: column;
}
.caseYuyue .yuyueInfo div {
  width: 100%;
  height: 40px;
}
.caseYuyue .yuyueInfo div input {
  width: 100%;
  height: 100%;
  outline: none;
  padding-left: 15px;
  border: 1px solid #e0e0e0;
  font-size: 12px;
}
.yuyueInfo div:nth-child(2) {
  margin-top: 26px;
  margin-bottom: 30px;
}
.yuyueInfo div:last-child {
  background: #a15050;
  text-align: center;
  color: #fff;
  line-height: 40px;
  border-radius: 5px;
  margin-bottom: 45px;
  font-size: 18px;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .case .title h3 {
    font-size: 20px;
  }
  .case .title div {
    font-size: 14px;
    padding-top: 10px;
  }
  .caseDetail {
    flex-direction: column;
    width: 75%;
  }
  .case {
    width: 100%;
    padding-right: 0;
    border: none;
  }
  .caseInfo {
    width: 100% !important;
    padding-bottom: 20px;
    padding-left: 0;
    position: static !important;
  }
  .case .videoInfo .video {
    height: inherit;
  }
  .caseInfo .infoTitle {
    font-size: 20px;
  }
  .caseInfo .infoContent {
    font-size: 12px;
    padding-bottom: 20px;
  }
  .caseInfo .caseYuyue {
    padding: 40px;
  }
  .designTeach .authorDetail {
    padding-top: 10px;
  }
  .designTeach .work {
    font-size: 20px;
  }
  .authorDetail .info {
    padding-left: 0;
    padding-top: 15px;
  }
  .authorDetail .info .name {
    font-size: 16px;
  }
  .authorDetail .info div {
    font-size: 14px;
  }
  /* .caseInfo .caseYuyue {
    padding-left: 23px;
    padding-right: 23px;
    width: 231px;
    margin-left: -14px;
  } */
}
@media screen and (max-width: 767px) {
  .caseDetail {
    flex-direction: column;
    width: 90%;
  }
  .case {
    width: 100%;
    padding-right: 0;
    border: none;
  }
  .caseInfo {
    width: 100% !important;
    padding-bottom: 20px;
    padding-left: 0;
    position: static !important;
  }
  .designTeach .authorDetail {
    flex-direction: row;
  }
  .designTeach .authorDetail .info {
    padding-top: 0;
    padding-left: 20px;
  }
  .caseDetail .caseInfo .caseYuyue {
    width: 100%;
    padding: 0 20px;
    margin-left: 0;
  }
  .case .title h3 {
    font-size: 20px;
  }
  .case .title div {
    font-size: 14px;
    padding-top: 10px;
  }
  /* .case .videoInfo .video {
    height: 205px;
  }
  .case .detailInfo .detailImg {
    height: 235px;
  } */
  .caseInfo .infoTitle {
    font-size: 20px;
  }
  .caseInfo .infoContent {
    font-size: 14px;
    padding-bottom: 20px;
  }
  .designTeach .work {
    font-size: 20px;
  }
  .authorDetail .info .name {
    font-size: 16px;
  }
  .authorDetail .info div {
    font-size: 14px;
  }
}
</style>
