<template>
  <div class="detail">
    <div class="detailTitle">
      <div>{{ info.title }}</div>
      <div class="date">
        <span>{{ info.posttime_date }} </span>
        <span>{{ info.hits }}人浏览</span>
      </div>
    </div>
    <div class="info">
      <div class="infoText" v-html="info.content"></div>
    </div>
    <div class="bottom">
      <div class="content">
        <div class="up" @click="upTo(prve.id)">上一篇：{{ prve.title }}</div>
        <div class="next" @click="nextTo(next.id)">
          下一篇：{{ next.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.info.title + "-" + this.commonTitle,
    };
  },
  data() {
    return {
      commonTitle: sessionStorage.getItem("title"),
      id: null, // 动态详情id
      detailInfo: [], //总数据
      info: [],
      prve: [],
      next: [],
    };
  },
  methods: {
    upTo(id) {
      if (id == undefined || id == "") {
        return;
      } else {
        window.location.href = `/about/dongtai/detail?id=${id}`;
      }
    },
    nextTo(id) {
      if (id == undefined || id == "") {
        return;
      } else {
        window.location.href = `/about/dongtai/detail?id=${id}`;
      }
    },
    async getDongtaiDetail() {
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/about/newsinfo.html", {
          id: this.id,
        })
        .then(({ data }) => {
          this.detailInfo = data;
          this.info = data.info;
          this.prve = data.prve_page;
          this.next = data.next_page;
        });
    },
  },
  mounted() {
    this.id = window.location.href.split("id=")[1];
    this.getDongtaiDetail();
  },

  // watch: {
  //   $route(to, from) {
  //     //监听路由是否变化
  //     console.log(to);
  //     if (to.query.id == "") {
  //       return;
  //     }
  //     if (to.query.id != from.query.id) {
  //       this.id = to.query.id;
  //       this.getDongtaiDetail(); //重新加载数据
  //     }
  //   },
  // },

  // beforeRouteUpdate(to, from) {
  //   if (to.fullPath !== from.fullPath) {
  //     this.id = from.query.id;
  //     this.getDongtaiDetail();
  //   }
  // },
};
</script>
<style>
.infoText img {
  max-width: 100% !important;
  overflow: hidden;
}
</style>
<style scoped>
.detail {
  width: 75%;
  margin: 0 auto;
}
.detailTitle {
  height: 157px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ebebeb;
}
.detailTitle div:nth-child(1) {
  font-size: 22px;
  padding-bottom: 25px;
}
.detailTitle .date {
  color: #aaaaaa;
}
.detailTitle .date span {
  margin-left: 30px;
}
.info {
  padding-top: 48px;
  text-align: center;
  padding-bottom: 67px;
  border-bottom: 1px solid #ebebeb;
}
.info .infoText {
  padding-top: 40px;
  padding-bottom: 30px;
}
.bottom {
  padding-top: 40px;
  height: 90px;
  padding-bottom: 100px;
}
.bottom .content {
  display: flex;
  justify-content: space-between;
}
.bottom .content div {
  cursor: pointer;
}
.bottom .content div:hover {
  color: #b04a76;
}
@media screen and (max-width: 1024px) {
  .info .infoText img {
    width: 100%;
  }
}
@media screen and (max-width: 767px) {
  .detail {
    width: 90%;
  }
  .detail img {
    width: 100%;
  }
  .bottom .content {
    flex-direction: column;
  }
  .bottom .content div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
}
</style>