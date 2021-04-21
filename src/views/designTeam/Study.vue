<template>
  <div class="study">
    <div class="title">
      <div>{{ studyInfo.title }}</div>
      <div class="circle"></div>
      <div>{{ studyInfo.eng_title }}</div>
    </div>
    <div class="content" v-html="studyInfo.content"></div>
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.studyInfo.title + "-" + this.commonTitle,
    };
  },
  data() {
    return {
      commonTitle: sessionStorage.getItem("title"),
      studyInfo: [],
    };
  },
  methods: {
    async getStudyInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/team/designinfo.html")
        .then(({ data }) => {
          this.studyInfo = data;
        });
    },
  },
  mounted() {
    this.getStudyInfo();
  },
};
</script>
<style>
.study .content img {
  max-width: 100% !important;
  overflow: hidden;
}
</style>
<style scoped>
.study {
  width: 62.5%;
  margin: 0 auto;
}
/* .study .content {
  width: 85%;
  margin: 0 auto;
} */
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 175px;
}
.title .circle {
  position: absolute;
  z-index: -1;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #fff9f8;
}
.title div {
  line-height: 30px;
}
.title div:nth-child(1) {
  font-size: 20px;
}
.title div:last-child {
  color: #c3c3c3;
}
.study .content img {
  max-width: 100%;
}
@media screen and (max-width: 1024px) {
  .study {
    width: 75%;
  }
  .study img {
    max-width: 100%;
  }
}
@media screen and (max-width: 767px) {
  .study img {
    max-width: 100%;
  }
  .info .title {
    width: 100%;
  }
  .study {
    width: 90%;
  }
}
</style>