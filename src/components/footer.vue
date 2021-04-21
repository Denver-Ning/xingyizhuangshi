<template>
  <div class="container-fuild footer">
    <div class="footerCenter row">
      <div class="aboutMe col-sm-12 col-md-12 col-lg-4">
        <div class="logo">
          <img :src="commonList.foot_logo" alt="" />
        </div>
        <div class="content">
          <div>星艺余工大家居整装馆：{{ commonList.address_all }}</div>
          <div class="tel">VIP热线：{{ commonList.address_all_tel }}</div>
          <div>崇文苑设计馆：{{ commonList.address_design }}</div>
          <div class="tel">VIP热线：{{ commonList.address_design_tel }}</div>
        </div>
        <div class="copy">
          版权所有：{{ commonList.copy_right }}
          <a href="https://beian.miit.gov.cn/" target="_blank" class="ml-4">{{
            commonList.icp
          }}</a>
        </div>
      </div>
      <div class="waiter col-sm-12 col-md-12 col-lg-6">
        <div class="waiterTitle">
          <div class="title" @click="toAbout">关于我们</div>
          <div class="title" @click="toLianxiwomen">联系我们</div>
          <div class="title" @click="toGongdi">在建工地</div>
          <div class="title" @click="toXingyizhengzhuang">星艺整装</div>
        </div>
        <div class="waiterList">
          <div
            class="waiterItem"
            v-for="item in commonList.foot_icon"
            :key="item.title"
          >
            <div class="pic">
              <img :src="item.thumb" alt="" />
            </div>
            <div class="content">
              <div>{{ item.title }}</div>
              <div>{{ item.des }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="code col-sm-12 col-md-12 col-lg-2">
        <img :src="commonList.qrcode" alt="" />
        <p class="mt-2">扫一扫 关注我们</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
        });
    },
    toXingyizhengzhuang() {
      this.$router.push("/stars/detail");
    },
    toAbout() {
      this.$router.push("/about/xingyi");
    },
    toLianxiwomen() {
      this.$router.push("/lianxiwomen/detail");
    },
    toGongdi() {
      this.$router.push("/sites/case");
    },
  },
  mounted() {
    this.getCommonInfo();
  },
};
</script>
<style scoped>
.footer {
  background: #2c2c2c;
  padding-top: 60px;
}
.footerCenter {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 77px;
}
.tel {
  text-indent: 2rem;
}
/* 右侧 start */
.aboutMe {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  position: inherit;
  padding-left: 0;
}
.aboutMe .logo {
  padding-bottom: 30px;
}
.aboutMe .content {
  padding-bottom: 20px;
  line-height: 30px;
  font-size: 14px;
}
.aboutMe .copy {
  color: #9c9c9c;
}
.aboutMe .copy a {
  color: #9c9c9c;
  text-decoration: none;
}
/* 右侧 end */
/* 中间 start */
.waiter {
  display: flex;
  padding-top: 15px;
  justify-content: space-between;
  flex-direction: column;
}
.waiter .waiterList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
}
.waiter .waiterItem {
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  flex-wrap: wrap;
  width: calc((100% - 0px) / 4);
  margin-top: 50px;
}
.waiter .waiterItem .pic {
  margin-bottom: 10px;
}
.waiter .waiterTitle {
  display: flex;
  justify-content: space-between;
}
.waiter .title {
  cursor: pointer;
  color: #fff;
  width: calc((100% - 0px) / 4);
  text-align: center;
}
.waiter .waiterItem .content {
  text-align: center;
}
.waiter .waiterItem .content div:last-child {
  font-size: 14px;
  color: #9c9c9c;
  margin-top: 5px;
}
/* 中间 end */
/* 右侧 start */
.code {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: 14px;
}
/* 右侧 end */
@media screen and (max-width: 1024px) {
  .waiter .waiterList {
    margin-top: 50px;
  }
}
@media screen and (max-width: 991px) {
  .footer {
    position: relative;
  }
  .code {
    margin-top: 30px;
  }
  /* .copy {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
  } */
}
@media screen and (max-width: 767px) {
  .footer {
    padding-top: 30px;
  }
  .aboutMe {
    padding: 0 !important;
  }
  .footerCenter {
    display: block !important;
  }
  .waiter {
    margin-top: 0;
    padding-left: 0;
  }
  .waiter .title {
    text-align: left;
  }
  .waiter .waiterItem {
    width: calc((100% - 0px) / 2);
    margin-top: 20px;
  }
  .aboutMe .logo {
    padding-bottom: 10px;
  }
  .aboutMe .logo img {
    width: 168px;
  }
  .aboutMe .copy {
    width: 100%;
    text-align: center;
  }
  .aboutMe .copy {
    position: absolute;
    bottom: 0;
    margin-bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
