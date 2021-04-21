<template>
  <div id="app">
    <Right />
    <Header />
    <zhuangxiu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Right from "./components/Right";
import Header from "./components/Header";
import Footer from "./components/footer";
import zhuangxiu from "./components/zhuangxiu";
export default {
  metaInfo() {
    return {
      title: this.commonList.web_name,
      meta: [
        {
          name: "keywords",
          content: this.commonList.keyword,
        },
        {
          name: "description",
          content: this.commonList.description,
        },
      ],
    };
  },
  components: {
    Right,
    Footer,
    Header,
    zhuangxiu,
  },
  data() {
    return {
      commonList: [],
    };
  },
  methods: {
    async getCommonInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/index/baseconfig")
        .then(({ data }) => {
          this.commonList = data;
          sessionStorage.setItem("title", data.web_name);
        });
    },
  },
  mounted() {
    this.getCommonInfo();
  },
};
</script>
<style>
@import "./assets/style/iconfont/iconfont.css";
@import "./assets/style/common/style.css";
* {
  padding: 0;
  margin: 0;
  /* scroll-behavior: auto;
  scroll-behavior: smooth; */
}
/* chrome */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* 火狐浏览器 */
input[type="number"] {
  -moz-appearance: textfield;
}
.swiper-pagination-bullet-active {
  background: #b04b4b !important;
}
</style>
