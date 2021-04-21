<template>
  <div class="zhaopin">
    <div class="jiaju" v-for="(item, index) in zhaopinInfo" :key="item.id">
      <div class="title" @click="toggle(index)">
        <div>{{ item.title }}</div>
        <div style="font-size: 30px" class="jia">+</div>
        <div style="display: none" class="jian">—</div>
      </div>
      <div class="info">
        <div class="zhize">
          <div>
            <div>岗位职责：</div>
          </div>
          <div v-html="item.gwzz"></div>
        </div>
        <div class="yaoqiu">
          <div>
            <div>招聘要求：</div>
          </div>
          <div v-html="item.zpyq"></div>
        </div>
        <div class="lianxi">
          <div>
            <div>联系方式：</div>
          </div>
          <div>
            <p>联系电话：{{ item.contact }}</p>
            <p>邮箱：{{ item.email }}</p>
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
      zhaopinInfo: [],
    };
  },
  methods: {
    async getZhaopinInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/joblist.html")
        .then(({ data }) => {
          this.zhaopinInfo = data;
        });
    },
    toggle(index) {
      let i = index + 1;
      let el = $(`.info:eq(${i})`).css("display");
      if (el == "none") {
        $(`.info:eq(${i})`).slideToggle();
        $(`.jiaju:eq(${index}) .jia:eq(0)`).css({ display: "none" });
        $(`.jiaju:eq(${index}) .jian:eq(0)`).css({ display: "block" });
      } else {
        $(`.jiaju:eq(${index}) .jia:eq(0)`).css({ display: "block" });
        $(`.jiaju:eq(${index}) .jian:eq(0)`).css({ display: "none" });
        $(`.info:eq(${i})`).slideToggle();
      }
    },
  },
  mounted() {
    this.getZhaopinInfo();
  },
};
</script>
<style scoped>
.zhaopin {
  width: 67.5%;
  margin: 0 auto;
  padding-top: 55px;
  padding-bottom: 93px;
}
.zhaopin .title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  line-height: 50px;
  padding: 0 15px;
  font-size: 18px;
  padding-top: 70px;
  padding-bottom: 20px;
  cursor: pointer;
}
.zhaopin .title div:last-child {
  cursor: pointer;
}
.zhaopin .jiaju .title div:last-child,
.zhaopin .zhuli .title div:last-child,
.zhaopin .yewu .title div:last-child {
  font-size: 30px;
}
.info {
  display: none;
}
.info > div {
  display: flex;
  margin-top: 20px;
}
.title > div:nth-child(1) {
  width: 100%;
}
@media screen and (max-width: 767px) {
  .zhaopin {
    width: 90%;
  }
  .zhize div:nth-child(1) div,
  .yaoqiu div:nth-child(1) div,
  .lianxi div:nth-child(1) div {
    width: 80px;
  }
}
</style>