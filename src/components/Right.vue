<template>
  <div
    class="rightBox"
    id="rightBox"
    style="opacity: 0; transition: all 0.5s ease-in-out"
  >
    <div
      class="erweima"
      @mouseover="erweima = true"
      @mouseout="erweima = false"
    >
      <div>
        <img src="../assets/image/cebianlan/sideRight_01.png" alt="" />
      </div>
      <div v-show="erweima">
        <img :src="commonList.qrcode" alt="" />
      </div>
    </div>
    <router-link class="div" to="/dingzhi/detail">
      <div class="chizi">
        <div>
          <img src="../assets/image/cebianlan/dingzhijiaju (1).png" alt="" />
        </div>
      </div>
    </router-link>
    <div class="qq">
      <div>
        <img src="../assets/image/cebianlan/sideRight_03.png" alt="" />
      </div>
    </div>
    <div class="wx">
      <div>
        <img src="../assets/image/right/wx.png" alt="" />
      </div>
    </div>
    <router-link class="div" to="/lianxiwomen/detail">
      <div class="phone">
        <div>
          <img src="../assets/image/cebianlan/dianhua.png" alt="" />
        </div>
      </div>
    </router-link>
    <div class="top" @click="top">
      <div>
        <img src="../assets/image/cebianlan/组 14.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "right",
  data() {
    return {
      erweima: false,
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
    top() {
      $("html,body").animate({ scrollTop: 0 }, 500);
    },
    fromTop() {
      if (document.documentElement.scrollTop > 300) {
        $(".rightBox").css({
          opacity: "1",
          display: "block",
        });
      } else {
        $(".rightBox").css({
          opacity: "0",
          display: "none",
        });
      }
    },
  },
  mounted() {
    this.getCommonInfo();
    window.addEventListener("scroll", this.fromTop);
  },
};
</script>
<style scoped>
.rightBox {
  position: fixed;
  right: 0;
  bottom: 126px;
  z-index: 101;
  text-align: center;
  /* opacity: 0; */
  display: none;
}
.rightBox > div,
.rightBox .div {
  width: 54px;
  height: 54px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 1px;
  cursor: pointer;
  line-height: 54px;
  display: block;
}
.rightBox div:hover {
  background: #b04b4b;
}
.rightBox div:last-child {
  color: #fff;
  text-align: center;
  line-height: 54px;
  font-size: 20px;
}
.erweima {
  position: relative;
}
.rightBox span {
  font-size: 28px;
  color: #fff;
  line-height: 50px;
}
.erweima div:last-child {
  position: absolute;
  left: -139px;
  top: 0;
}
</style>