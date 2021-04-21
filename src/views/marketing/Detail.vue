<template>
  <div class="detail">
    <div class="title">
      <div>{{ detailInfo.title }}</div>
      <div>{{ detailInfo.posttime }}</div>
    </div>
    <div class="detailCenter" v-html="detailInfo.content"></div>
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.detailInfo.title+"-"+this.commonTitle,
      meta: [
        {
          name: "keywords",
          content: this.detailInfo.keyword,
        },
        {
          name: "description",
          content: this.detailInfo.description,
        },
      ],
    };
  },
  data() {
    return {
      detailInfo: [],
      id: null, // 活动详情id
      commonTitle: sessionStorage.getItem("title"),
    };
  },
  methods: {
    async getDetailInfo() {
      await this.$http
        .post(
          "http://xyzs.demo365day.cn/index.php/api/activity/activityinfo.html",
          {
            id: this.id,
          }
        )
        .then(({ data }) => {
          this.detailInfo = data.info;
        });
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getDetailInfo();
  },
};
</script>
<style>
.detail img {
  max-width: 100% !important;
  overflow: hidden;
}
</style>
<style scoped>
.detail {
  width: 100%;
  text-align: center;
}
.detailCenter {
  width: 800px;
  margin: 0 auto;
}
.title {
  padding-bottom: 30px;
  padding-top: 75px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.title div {
  line-height: 40px;
}
.title div:nth-child(1) {
  font-size: 22px;
  font-weight: 700;
}

.info > div {
  line-height: 40px;
  text-align: center;
}
.info > div:nth-child(3) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info > div:nth-child(3) span {
  display: block;
  background: #000;
  display: flex;
  margin-left: 2px;
}
.info > div:nth-child(3) span:nth-child(1) {
  width: 5px;
  height: 8px;
}
.info > div:nth-child(3) span:nth-child(2) {
  width: 5px;
  height: 6px;
}
.info > div:nth-child(3) span:nth-child(3) {
  width: 5px;
  height: 3px;
}
.info > div:nth-child(3) span:nth-child(4) {
  width: 5px;
  height: 6px;
}
.info > div:nth-child(3) span:nth-child(5) {
  width: 5px;
  height: 8px;
}
.detailItem {
  display: flex;
  flex-direction: column;
}
.copy {
  text-align: left;
  padding-left: 60px;
}
.detailFooter {
  width: 600px;
  background: #fdfcff;
  margin-left: 60px;
  margin-top: 10px;
}
.detailFooter .endTitle {
  font-size: 34px;
  font-weight: 800;
  width: 90%;
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom: 3px dashed #ccc;
  margin: 0 auto;
}
.detailFooter .endContent {
  display: flex;
  padding-bottom: 20px;
}
.endLeft {
  flex: 1;
  border-right: 3px dashed #ccc;
  padding-top: 28px;
}
.endLeft .leftCenter {
  width: 50%;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 800;
}
.endLeft .leftCenter .code {
  padding-top: 43px;
}
.endRight {
  flex: 1;
  padding-top: 28px;
  text-align: left;
  padding-left: 33px;
}
.endRight .site {
  font-size: 22px;
  font-weight: 800;
  padding-bottom: 50px;
  padding-top: 10px;
}
.endRight .site1 {
  display: flex;
  flex-direction: column;
}

.endRight .site1 .site1Title {
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
  padding-top: 10px;
}
.endRight .hot {
  font-weight: 700;
  padding-top: 10px;
}
@media screen and (max-width: 1024px) {
  .detail img {
    width: 100%;
  }
  .detail .detailCenter {
    width: 100%;
  }
  .contentHeader {
    width: 100%;
  }
  .detail .detailFooter {
    width: 100%;
    margin: 0;
  }
}
@media screen and (max-width: 767px) {
}
</style>