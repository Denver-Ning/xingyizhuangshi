<template>
  <div class="huojiang">
    <div class="jiangbei prev">
      <img
        src="../../assets/image/guanyuwomen/huojianganli/jiangbei.png"
        alt=""
      />
    </div>
    <div class="info">
      <div>
        <div class="infoItem" v-for="item in huojiangInfo" :key="item.title">
          <div class="content">
            <div class="pic">
              <img :src="item.thumb" alt="" />
            </div>
            <div class="text">
              <div class="date">{{ item.made_time }}</div>
              <div class="contentText">
                <div v-html="item.des"></div>
                <div>
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="next"
      @click="zhankai"
      @mousemove="xiaOver"
      @mouseleave="xiaLeave"
    >
      <div>
        <img :src="xia" alt="" />
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
      huojiangInfo: [],
      xia: require("../../assets/image/guanyuwomen/huojianganli/x.png"),
    };
  },
  methods: {
    zhankai() {
      $(".info").css({ height: "auto" });
    },
    async getHuojiangInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/awardlist.html")
        .then(({ data }) => {
          this.huojiangInfo = data;
        });
    },
    xiaOver() {
      this.xia = require("../../assets/image/guanyuwomen/huojianganli/xa.png");
    },
    xiaLeave() {
      this.xia = require("../../assets/image/guanyuwomen/huojianganli/x.png");
    },
  },
  mounted() {
    this.getHuojiangInfo();
  },
};
</script>
<style scoped>
.huojiang {
  width: 75%;
  margin: 0 auto;
  padding-bottom: 75px;
}
.jiangbei {
  text-align: center;
  padding-top: 45px;
}
.info {
  width: 75%;
  margin: 0 auto;
  height: 1144px;
  overflow: hidden;
}
.info .content {
  display: flex;
  justify-content: center;
}
.info .content .pic {
  width: 50%;
  padding-right: 39px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-right: 1px solid #ffb8b4;
}
.info .content .pic img {
  width: 100%;
  max-width: 100%;
  height: 100%;
}
.info .content .text {
  width: 50%;
  padding-left: 39px;
  padding-top: 60px;
  font-size: 14px;
}
.info .content .text .date {
  font-size: 16px;
  color: #ffb8b4;
  padding-bottom: 25px;
  position: relative;
}
.info .content .text .date::before {
  content: " ";
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffb8b4;
  position: absolute;
  left: -48px;
  top: 5px;
}
.info .content .text .date::after {
  content: " ";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #9c504d;
  position: absolute;
  left: -44px;
  top: 9px;
}

.info .infoItem:nth-child(even) .content {
  display: flex;
  justify-content: center;
}
.info .infoItem:nth-child(even) .content .pic {
  width: 50%;
  padding-left: 39px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-right: none;
  order: 2;
}
.info .infoItem:nth-child(even) .content .pic img {
  width: 100%;
  max-width: 100%;
  height: 100%;
}
.info .infoItem:nth-child(even) .content .text {
  width: 50%;
  padding-right: 39px;
  padding-top: 60px;
  font-size: 14px;
  text-align: right;
  border-right: 1px solid #ffb8b4;
}
.info .infoItem:nth-child(even) .content.text .date {
  font-size: 16px;
  color: #ffb8b4;
  padding-bottom: 25px;
  position: relative;
}
.info .infoItem:nth-child(even) .content .text .date::before {
  content: " ";
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffb8b4;
  position: absolute;
  left: calc((100% + 32px));
  top: 5px;
}
.info .infoItem:nth-child(even) .content .text .date::after {
  content: " ";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #9c504d;
  position: absolute;
  left: calc((100% + 36px));
  top: 9px;
}
.info .next {
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0 auto;
}
.infoItem {
  height: 100% !important;
}
@media screen and (min-width: 1025px) and (max-width: 1900px) {
  .huojiang {
    width: 100%;
  }
}
@media screen and (max-width: 1024px) {
  .huojiang {
    width: 100%;
  }
  .info .content .pic,
  .info .infoItem:nth-child(even) .content .pic {
    padding-top: 80px;
  }
  /* .info .content .text .contentText,
  .info .infoItem:nth-child(even) .content.text .contentText {
    overflow: scroll;
    height: 129px;
  } */
}

@media screen and (max-width: 767px) {
  .info {
    width: 90%;
  }
  .info .content .pic img,
  .info .infoItem:nth-child(2n) .content .pic img {
    height: inherit;
  }
  .info .infoItem:nth-child(2n) .content .text {
    padding-left: 0;
  }
  .info .infoItem:nth-child(2n) .content .pic {
    padding-right: 0;
  }
}
</style>