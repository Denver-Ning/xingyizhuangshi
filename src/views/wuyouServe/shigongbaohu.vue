<template>
  <div class="baohu">
    <div class="title" v-if="listTitle">
      <div>{{ listTitle[1].name }}</div>
      <div class="circleBg"></div>
      <div>{{ listTitle[1].eng_des }}</div>
    </div>
    <div class="baohuList">
      <div
        class="item"
        v-for="(item, index) in childInfo.stagelist"
        :key="index"
      >
        <div class="itemTitle">
          <div class="text">{{ item.title }}</div>
          <div class="circle"></div>
        </div>
        <div class="leftContent" v-html="item.content"></div>
        <div class="pic">
          <img :src="item.thumb" alt="" />
        </div>
      </div>
    </div>
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
      commonTitle: sessionStorage.getItem("title"),
      childInfo: [],
    };
  },
  methods: {
    // 施工个个子项数据
    async getEveryInfo(id) {
      await this.$http
        .post(
          "http://xyzs.demo365day.cn/index.php/api/service/constructionshow.html",
          { nid: id }
        )
        .then(({ data }) => {
          this.childInfo = data;
          this.$emit("location", data.nav_info.name);
        });
    },
  },
  mounted() {
    let id = window.location.href.split("id=")[1];
    this.getEveryInfo(id);
  },
};
</script>
<style scoped>
.baohu {
  width: 67.5%;
  margin: 0 auto;
}
.baohu .title {
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.title div:nth-child(1) {
  font-size: 24px;
}
.title .circleBg {
  width: 75px;
  height: 75px;
  background: #fff9f8;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
}
.title div:last-child {
  font-size: 14px;
  color: #979797;
}

/* 内容 */
.baohuList {
  display: flex;
  padding-bottom: 50px;
  flex-wrap: wrap;
}
.baohuList > div {
  width: 50%;
}
.baohuList .item .pic img {
  width: 100%;
}
.baohuList > div:nth-child(even) {
  padding-top: 100px;
}
.item {
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  padding-right: 74px;
  border-right: 4px solid #a6a6a6;
}
.item div {
  width: 100%;
}
.itemTitle {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 16px;
}
.itemTitle .text {
  font-size: 18px;
}
.itemTitle .circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #979797;
  position: relative;
  left: 15px;
}
.itemTitle .circle::after {
  content: " ";
  width: 12px;
  height: 12px;
  display: block;
  background: #979797;
  border-radius: 50%;
  position: relative;
  left: 63px;
  top: -5px;
  z-index: 10;
}
.itemTitle .circle::before {
  content: " ";
  width: 63px;
  height: 2px;
  display: block;
  background: #979797;
  position: relative;
  top: 3px;
}
.leftContent {
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
}
.leftContent div {
  line-height: 30px;
}
.pic img {
  width: 100%;
}
.item:nth-child(even) {
  padding-bottom: 155px;
  padding-left: 74px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  border-right: none;
  align-items: center;
}
.item:nth-child(even) .text {
  font-size: 18px;
  order: 2;
}
.item:nth-child(even) .circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #979797;
  position: relative;
  left: -16px;
}
.item:nth-child(even) .circle::before {
  content: " ";
  width: 12px;
  height: 12px;
  display: block;
  background: #979797;
  border-radius: 50%;
  position: relative;
  left: -66px;
  top: -3px;
  z-index: 10;
}
.item:nth-child(even) .circle::after {
  content: " ";
  width: 63px;
  height: 2px;
  display: block;
  background: #979797;
  position: relative;
  top: -9px;
  left: -58px;
}
@media screen and (max-width: 1024px) {
  .baohu {
    width: 75%;
  }
}
@media screen and (max-width: 767px) {
  .baohu {
    width: 90%;
  }
  .baohuList img {
    width: 100% !important;
  }
  .leftContent {
    width: 120%;
  }
  .rightContent {
    width: 110%;
  }
  .item {
    padding-right: 32px;
  }
  .itemTitle .circle::after {
    left: 27px;
  }
  .itemTitle .circle {
    left: 9px;
  }
  .itemTitle .circle::before {
    width: 30px;
    right: 0;
  }
  .item:nth-child(2n) {
    padding-left: 32px;
    padding-right: 0px;
  }
  .item:nth-child(2n) .circle {
    left: -8px;
  }
  .item:nth-child(2n) .circle::after {
    width: 30px;
    left: -24px;
  }
  .item:nth-child(2n) .circle:before {
    left: -32px;
  }
}
</style>