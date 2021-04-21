<template>
  <div class="yangzhou">
    <div class="yangzhouInfo">
      <div v-html="yangzhouInfo.companyinfo"></div>
    </div>
    <div
      class="siwei"
      v-for="item in yangzhouInfo.about_list"
      :key="item.title"
    >
      <div class="siweiCenter">
        <div class="pic">
          <img :src="item.thumb" alt="" />
        </div>
        <div class="content">
          <div class="title">
            <div>{{ item.title }}</div>
            <div>{{ item.eng_title }}</div>
          </div>
          <div class="text" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <!-- <div class="siwei fuwu">
      <div class="siweiCenter">
        <div class="content">
          <div class="title">
            <div>用超前思维引导客户新生活</div>
            <div>XINGYI DECORATION</div>
          </div>
          <div class="text">
            扬州星艺装饰有限公司成立与2012年在扬子江路615-1号（崇文国际大厦）成立扬州星艺装饰有限公司成立与2012年在扬子江路615-1号（崇文国际大厦）成立扬州星艺装饰有限公司成立与2012年在扬子江路615-1号（崇文国际大厦）成立扬州星艺装饰有限公司成立与2012年在扬子江路615-1号（崇文国际大厦）成立
          </div>
          <div class="text">
            扬州星艺装饰有限公司成立与2012年在扬子江路615-1号（崇文国际大厦）成立扬州星艺装饰有限公司成立与2012年在扬子江路615-1号（崇文国际大厦）成立扬州星艺装饰有限公司成立与2012年在扬子江路615-1号（崇文国际大厦）成立扬州星艺装饰有限公司成立与2012年在扬子江路615-1号（崇文国际大厦）成立
          </div>
        </div>
        <div class="pic">
          <img
            src="../../assets/image/guanyuwomen/yangzhougongsi/siwei_1.png"
            alt=""
          />
        </div>
      </div>
    </div> -->
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
      yangzhouInfo: [],
    };
  },
  methods: {
    async getYangZhouInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/index.html")
        .then(({ data }) => {
          this.yangzhouInfo = data;
        });
    },
  },
  mounted() {
    this.getYangZhouInfo();
  },
};
</script>
<style scoped>
.yangzhou {
  width: 100%;
}
.yangzhouInfo {
  width: 75%;
  margin: 0 auto;
}
.yangzhouInfo div {
  margin-top: 30px;
}
.siwei {
  width: 100%;
  padding-bottom: 98px;
  background: #f7f7f7;
  padding-top: 66px;
}
.siweiCenter {
  width: 75%;
  margin: 0 auto;
  display: flex;
}
/* .siweiCenter div {
  width: 50%;
} */

.siweiCenter .pic {
  box-shadow: 30px 30px 0 #fff9f8;
}
.siweiCenter .content {
  padding-left: 98px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.siweiCenter .content .title {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  font-size: 22px;
  border-left: 4px solid #a1504f;
}
.siweiCenter .content .text {
  padding-top: 25px;
  line-height: 35px;
}
.siwei:last-child {
  background: #fff;
}
.siwei:last-child .pic {
  order: 2;
  box-shadow: -30px 30px 0 #fff9f8;
}
.siwei:last-child .content {
  order: 1;
  padding-right: 98px;
  padding-left: 0;
}
/* .fuwu {
  background: #fff;
}
.fuwu .content {
  padding-left: 0;
  padding-right: 98px;
}
.fuwu .pic {
  box-shadow: -30px 30px 0 #fff9f8;
} */

@media screen and (max-width: 1024px) {
  .yangzhou img {
    width: 100%;
  }
  .yangzhou .siweiCenter {
    flex-direction: column;
  }
  .yangzhou .siweiCenter .content {
    padding-left: 0;
    padding-right: 0;
    padding-top: 50px;
  }
  .yangzhou .shiwei:last-child .siweiCenter .content {
    order: 2;
  }
}

@media screen and (max-width: 767px) {
  .yangzhouInfo,
  .siweiCenter {
    width: 90%;
  }
  .fuwu .content {
    padding-right: 0;
  }
  .siwei:last-child .content {
    padding-top: 0 !important;
  }
}
</style>