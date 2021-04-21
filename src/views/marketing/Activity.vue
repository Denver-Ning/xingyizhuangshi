<template>
  <div class="yingxiaoBox">
    <div
      class="infoItem"
      v-for="(item, index) in infoList.list"
      :key="item.id"
      @click="toDetail(infoList.list[index].id)"
    >
      <div class="img">
        <img :src="item.thumb" alt="" />
      </div>
      <div class="content">
        <div class="contentTitle">{{ item.title }}</div>
        <div class="contentInfo">
          {{ item.description }}
        </div>
        <div class="product" @click="toDetail(infoList.list[index].id)">
          查看详情
        </div>
      </div>
      <div class="date">
        <span>{{ item.posttime }}</span>
      </div>
    </div>
    <!-- 分页 -->
    <div class="zhiju_page" v-if="pageCount > 1">
      <div class="page">
        <div
          class="page_start"
          @click="pageStart"
          @mouseover="pageDoubleOver"
          @mouseleave="pageDoubleLeave"
        >
          <img :src="pageDoublePrev" alt="" />
        </div>
        <div class="page_num">
          <div
            class="page_prev"
            @click="pagePrev"
            @mouseover="pageOver"
            @mouseleave="pageLeave"
          >
            <img :src="pageOnePrev" alt="" />
          </div>
          <div
            v-for="(item, index) in pageCount"
            :key="index"
            @click="pageActive(index)"
            :class="{ active: pageBg == index }"
          >
            {{ index + 1 }}
          </div>
          <div
            class="page_next"
            @click="pageNext"
            @mouseover="pageNextOver"
            @mouseleave="pageNextLeave"
          >
            <img :src="pageOneNext" alt="" />
          </div>
        </div>
        <div
          class="page_end"
          @click="pageEnd"
          @mouseover="pageEndOver"
          @mouseleave="pageEndLeave"
        >
          <img :src="pageDoubleNext" alt="" />
        </div>
      </div>
      <div>
        跳至<input type="number" @keyup.enter="toPage" v-model="pageIndex" />页
      </div>
      <div class="confirm" @click="toPage">确定</div>
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
      infoList: [],
      pageCount: null, //分页数量
      page: 1, //分页 第几页
      pageIndex: null, //跳转到第几页
      pageDoublePrev: require("../../assets/image/page/shuangjiantouzuo.png"), //双箭头左
      pageDoubleNext: require("../../assets/image/page/shuangjiantouyou.png"),

      pageOnePrev: require("../../assets/image/page/zuojiantou.png"), // 单箭头左
      pageOneNext: require("../../assets/image/page/youjiantouo.png"),
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: "/marketing/detail",
        query: {
          id: id,
        },
      });
    },
    async getMarketingInfo() {
      await this.$http
        .post(
          "http://xyzs.demo365day.cn/index.php/api/activity/activitylist.html",
          {
            page: this.page,
            size: 10,
          }
        )
        .then(({ data }) => {
          if (!Number.isInteger(data.total / 10)) {
            this.pageCount = parseInt(data.total / 10 + 1);
          } else {
            this.pageCount = data.total / 10;
          }
          this.infoList = data;
        });
    },
    // 鼠标移入切换图标
    pageDoubleOver() {
      this.pageDoublePrev = require("../../assets/image/page/shouye.png");
    },
    pageDoubleLeave() {
      this.pageDoublePrev = require("../../assets/image/page/shuangjiantouzuo.png");
    },
    pageEndOver() {
      this.pageDoubleNext = require("../../assets/image/page/weiye.png");
    },
    pageEndLeave() {
      this.pageDoubleNext = require("../../assets/image/page/shuangjiantouyou.png");
    },
    pageOver() {
      this.pageOnePrev = require("../../assets/image/page/shangyige.png");
    },
    pageLeave() {
      this.pageOnePrev = require("../../assets/image/page/zuojiantou.png");
    },
    pageNextOver() {
      this.pageOneNext = require("../../assets/image/page/xiayige.png");
    },
    pageNextLeave() {
      this.pageOneNext = require("../../assets/image/page/youjiantouo.png");
    },
    // 点击分页
    pageActive(index) {
      this.page = index + 1;
      this.pageBg = index;
      this.getMarketingInfo();
    },
    // 分页上一个
    pagePrev() {
      if (this.page == 1) {
        return;
      } else {
        this.page = this.page - 1;
        this.pageBg = this.page - 1;
        this.getMarketingInfo();
      }
    },
    // 分页下一个
    pageNext() {
      if (this.page == this.pageCount) {
        return;
      } else {
        this.page = this.page + 1;
        this.pageBg = this.page - 1;
        this.getMarketingInfo();
      }
    },
    // 首页
    pageStart() {
      this.page = 1;
      this.pageBg = 0;
      this.getMarketingInfo();
    },
    // 尾页
    pageEnd() {
      this.page = this.pageCount;
      this.pageBg = this.pageCount - 1;
      this.getMarketingInfo();
    },
    // 跳转到几页
    toPage() {
      if (this.pageIndex == 0) {
        layer.msg("没有此目录", { icon: 5 });
        return;
      }
      if (this.pageIndex > this.pageCount) {
        this.page = Number(this.pageCount);
        this.pageBg = Number(this.pageCount) - 1;
        this.getMarketingInfo();
      } else {
        this.page = Number(this.pageIndex);
        this.pageBg = Number(this.pageIndex) - 1;
        this.getMarketingInfo();
      }
    },
  },
  mounted() {
    this.getMarketingInfo();
  },
};
</script>
<style scoped>
.infoItem {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-top: 50px;
  padding-bottom: 30px;
  cursor: pointer;
}
.infoItem .img {
  width: 296px;
  max-width: 296px;
}
.infoItem .img img {
  width: 100%;
}
.infoItem .content {
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 33px;
  justify-content: space-between;
  line-height: 30px;
  padding-top: 20px;
}
.infoItem .content .contentTitle {
  font-size: 18px;
  font-weight: 700;
}
.infoItem .content .contentInfo {
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 15px;
}
.infoItem .content .product {
  width: 104px;
  height: 36px;
  display: block;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #000;
  line-height: 36px;
  cursor: pointer;
}
.infoItem .content .product:hover {
  background: #a15050;
  color: #fff;
  border: none;
}
.infoItem .date {
  flex: 1;
  padding-top: 33px;
  text-align: right;
}
/* 分页 */
.zhiju_page {
  margin-top: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.zhiju_page .page {
  display: flex;
  padding-right: 30px;
}
.zhiju_page .page .page_start,
.zhiju_page .page .page_end {
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zhiju_page .page .page_start:hover,
.zhiju_page .page .page_end:hover {
  background: #b04b4b;
}
.zhiju_page .page .page_start img,
.zhiju_page .page .page_end img {
  padding: 0 5px;
}
.zhiju_page .page .page_end {
  margin-left: 10px;
}
.zhiju_page .page .page_num {
  display: flex;
}
.zhiju_page .page .page_num div {
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  line-height: 35px;
  text-align: center;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zhiju_page .page .page_num .active {
  background: #b04b4b;
  color: #fff;
}
.zhiju_page .page .page_num div:hover {
  background: #b04b4b;
  color: #fff;
}
.zhiju_page input {
  width: 76px;
  height: 35px;
  background: none;
  border: 1px solid #ccc;
  margin: 0 5px;
  outline: none;
  text-align: center;
}
.zhiju_page .confirm {
  width: 58px;
  height: 35px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 35px;
  margin-left: 20px;
  cursor: pointer;
}
.zhiju_page .confirm:hover {
  background: #b04b4b;
  color: #fff;
}
@media screen and (max-width: 1024px) {
  .yingxiaoBox .infoItem {
    flex-direction: column;
  }
  .infoCenter {
    width: 75%;
  }
  .infoItem .img {
    width: 100%;
    max-width: 100%;
  }
  .infoItem .date {
    padding-left: 33px;
  }
  .infoItem .content {
    padding-bottom: 0;
  }
  .infoItem .content .contentTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .infoItem .content .product {
    margin-top: 40px;
  }
}
@media screen and (max-width: 767px) {
  .info .title {
    width: 85%;
  }
  .infoItem .content {
    padding: 20px 0;
  }
  .infoItem .date {
    padding-left: 0;
    padding-top: 0;
    margin-top: -50px;
  }
  .infoItem .content .product {
    margin-top: 8px;
  }

  .copy {
    padding-left: 10px;
    padding: 10px 0;
  }
  .endLeft .leftCenter {
    font-size: 14px;
  }
  .endRight .site {
    font-size: 16px;
    padding-bottom: 0px;
  }
  .endRight .site1 .site1Title {
    font-size: 14px;
  }
  .endRight .site1 div:nth-child(2) {
    font-size: 12px;
  }
  .endRight .hot {
    font-size: 14px;
  }
  .detailFooter {
    width: 90%;
    margin: 0 auto;
  }
  .zhiju_page .page {
    padding-right: 0;
  }
}
</style>