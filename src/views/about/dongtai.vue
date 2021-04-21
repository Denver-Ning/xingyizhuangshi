<template>
  <div class="dongtai">
    <div class="list">
      <div
        class="listItem"
        v-for="(item, index) in dongtaiInfo"
        :key="item.id"
        @click="toDetail(dongtaiInfo[index].id)"
      >
        <div>
          <img :src="item.thumb" alt="" />
        </div>
        <div class="content">
          <div class="date">
            <div>{{ item.posttime }}</div>
            <div>→</div>
          </div>
          <div class="text">
            {{ item.title }}
          </div>
        </div>
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
      dongtaiInfo: [],
      pageCount: null, //分页数量
      page: 1, //分页 第几页
      pageIndex: null, //跳转到第几页
      pageBg: 0,
      pageDoublePrev: require("../../assets/image/page/shuangjiantouzuo.png"), //双箭头左
      pageDoubleNext: require("../../assets/image/page/shuangjiantouyou.png"),

      pageOnePrev: require("../../assets/image/page/zuojiantou.png"), // 单箭头左
      pageOneNext: require("../../assets/image/page/youjiantouo.png"),
    };
  },
  methods: {
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
    toDetail(id) {
      window.location.href = `/about/dongtai/detail?id=${id}`;
    },
    async getDongtaiInfo() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/newslist.html", {
          page: this.page,
          size: 6,
        })
        .then(({ data }) => {
          if (!Number.isInteger(data.total / 6)) {
            this.pageCount = parseInt(data.total / 6 + 1);
          } else {
            this.pageCount = data.total / 6;
          }
          this.dongtaiInfo = data.list.reverse();
        });
    },
    // 点击分页
    pageActive(index) {
      this.page = index + 1;
      this.pageBg = index;
      this.getDongtaiInfo();
    },
    // 分页上一个
    pagePrev() {
      if (this.page == 1) {
        return;
      } else {
        this.page = this.page - 1;
        this.pageBg = this.page - 1;
        this.getDongtaiInfo();
      }
    },
    // 分页下一个
    pageNext() {
      if (this.page == this.pageCount) {
        return;
      } else {
        this.page = this.page + 1;
        this.pageBg = this.page - 1;
        this.getDongtaiInfo();
      }
    },
    // 首页
    pageStart() {
      this.page = 1;
      this.pageBg = 0;
      this.getDongtaiInfo();
    },
    // 尾页
    pageEnd() {
      this.page = this.pageCount;
      this.pageBg = this.pageCount - 1;
      this.getDongtaiInfo();
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
        this.getDongtaiInfo();
      } else {
        this.page = Number(this.pageIndex);
        this.pageBg = Number(this.pageIndex) - 1;
        this.getDongtaiInfo();
      }
    },
  },
  mounted() {
    this.getDongtaiInfo();
  },
};
</script>
<style scoped>
.dongtai {
  width: 75%;
  margin: 0 auto;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.list .listItem {
  display: flex;
  flex-direction: column;
  height: inherit;
  margin-top: 35px;
  cursor: pointer;
  width: calc((100% - 132px) / 3);
  margin-left: 66px;
}
.list .listItem:nth-child(1),
.list .listItem:nth-child(4) {
  margin-left: 0;
}
.list .listItem > div:nth-child(1) {
  overflow: hidden;
  max-height: 245px;
  min-height: 245px;
}
.list .listItem img {
  width: 100%;
  transition: 0.7s;
  height: 100%;
}
.list .listItem img:hover {
  transform: scale(1.3);
}
.list .listItem .content {
  width: 100%;
  padding: 0 10px;
}
.list .listItem .content .date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #999999;
}
.list .listItem .content .date div:last-child {
  font-size: 38px;
  color: #ccc;
}
.list .listItem .content .text {
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  padding-right: 15px;
}
/* 分页 */
.zhiju_page {
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
input[type="number"] {
  -moz-appearance: textfield;
}
@media screen and (max-width: 1024px) {
  .dongtai {
    width: 90%;
  }
  .list {
    justify-content: space-between;
  }
  .list .listItem {
    width: calc((100% - 20px) / 2);
  }
  .list .listItem img {
    max-height: 231px;
  }
  .list .listItem div:first-child {
    flex: inherit;
  }
}
@media screen and (max-width: 767px) {
  .dongtai {
    width: 90%;
  }

  .dongtai > img {
    width: 100%;
  }

  .list .listItem {
    width: calc((100% - 20px) / 2);
    margin-left: 0px;
  }
  .list .listItem .content .date {
    height: 35px;
    font-size: 12px;
  }
  .list .listItem .content .text {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-size: 14px;
  }
  .list .listItem .content .date div:last-child {
    display: none;
  }
  .list .listItem img {
    max-height: 112px;
    min-height: 98px;
  }
  .zhiju_page div:nth-child(2),
  .zhiju_page div:nth-child(3) {
    display: none;
  }
  .zhiju_page .page {
    padding-right: 0;
  }
}
</style>