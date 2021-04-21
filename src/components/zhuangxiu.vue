<template>
  <div>
    <!-- 计算器 -->
    <div v-if="small" class="leftBaojia">
      <div class="sidebar" @click="jisuanqiActive = !jisuanqiActive">
        <img src="../assets/image/lb.png" alt="" />
        装修报价<img src="../assets/image/hqdz.png" alt="" />
      </div>
      <div class="jisuanqi" v-if="jisuanqiActive">
        <div class="leftInfo">
          <div class="title">免费获取装修报价</div>
          <div class="city">
            <div>所在城市:</div>
            <input
              type="text"
              v-model="zxbj.city"
              placeholder="请输入所在城市"
            />
          </div>
          <div class="city">
            <div>小区名称:</div>
            <input type="text" v-model="zxbj.xq" placeholder="请输入小区名称" />
          </div>
          <div class="area">
            <div>房屋面积:</div>
            <input
              type="text"
              v-model="zxbj.area"
              placeholder="请输入所在房屋面积"
            />
            <div class="pingmi">㎡</div>
          </div>
          <div class="huxing">
            <div>房屋户型:</div>
            <div class="huxingForm">
              <input type="number" placeholder="室" v-model="zxbj.roomSum" />
              <input type="number" placeholder="厅" v-model="zxbj.ting" />
              <input type="number" placeholder="厨" v-model="zxbj.chu" />
              <input type="number" placeholder="卫" v-model="zxbj.weiSum" />
              <input type="number" placeholder="阳台" v-model="zxbj.yangtai" />
            </div>
          </div>
          <div class="phone">
            <div>联系电话:</div>
            <input
              type="text"
              v-model="zxbj.phone"
              placeholder="请输入您的电话"
            />
          </div>
          <div class="phoneCode">
            <div>验证码:</div>
            <input type="text" v-model="zxbj.code" placeholder="请输入验证码" />
            <div class="getCode">获取验证码</div>
          </div>
          <div class="agreeBox">
            <input
              class="agree"
              type="checkbox"
              name=""
              v-model="agree"
              id=""
            />
            <span>我已阅读并同意《服务须知》</span>
          </div>
        </div>
        <div class="centerJisuan">
          <div class="line"></div>
          <div>
            <div @click="jisuan">
              <div class="bosom">
                <p>开始</p>
                <p>计算</p>
              </div>
            </div>
          </div>
        </div>
        <div class="jieguo">
          <div class="sum">
            您家的装修预算为<span>{{ zxbj.sum.toFixed(2) }}</span
            >元
          </div>
          <div class="content">
            <div>目前已有<span class="color">452929</span>人获取装修报价</div>
            <div>
              装修预算数据由星艺装饰历史服务<span class="color">5000万</span>
              业主装修数据、各大城市装修公司合同数据经过大数据实时分析计算。
            </div>
          </div>
          <div class="quanyi">为了您的权益，我们将对您的信息严格保密</div>
        </div>
        <div class="close bg-close" @click="jisuanqiActive = false">
          <img src="../assets/image/close.png" alt="" />
        </div>
      </div>
    </div>
    <div v-else class="leftBaojia">
      <div class="sidebar" @click="jisuanqiActive = !jisuanqiActive">
        <img src="../assets/image/lb.png" alt="" />
        装修报价<img src="../assets/image/hqdz.png" alt="" />
      </div>
      <div class="small" v-if="jisuanqiActive">
        <div class="close" @click="jisuanqiActive = false">
          <img src="../assets/image/closeSmall.png" alt="" />
        </div>
        <div class="info">
          <h3 class="title">免费获取装修报价</h3>
          <div class="city">
            <div>所在城市：</div>
            <input
              type="text"
              v-model="smallForm.city"
              placeholder="请输入所在城市"
              required
            />
          </div>
          <div class="area">
            <div>房屋面积：</div>
            <input
              type="text"
              v-model="smallForm.area"
              placeholder="请输入所在房屋面积"
              required
            />
          </div>
          <div class="house_type">
            <div>房屋户型：</div>
            <select v-model="smallForm.type" name="" id="">
              <option value="" disabled selected>请选择</option>
              <option value="1室1厅1厨1卫1阳台">1室1厅1厨1卫1阳台</option>
              <option value="2室2厅2厨2卫2阳台">2室2厅2厨2卫2阳台</option>
              <option value="3室3厅3厨3卫3阳台">3室3厅3厨3卫3阳台</option>
              <option value="4室4厅4厨4卫4阳台">4室4厅4厨4卫4阳台</option>
              <option value="5室5厅5厨5卫5阳台">5室5厅5厨5卫5阳台</option>
            </select>
          </div>
          <div class="phone">
            <div>联系电话：</div>
            <input
              type="text"
              v-model="smallForm.phone"
              placeholder="请输入您的电话"
              required
            />
          </div>
          <div class="sub" @click="submit">立即提交</div>
          <div class="quanyi">为了您的权益，我们将对您的信息严格保密</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.small {
  width: 90%;
  background: #e8aaaa;
  position: fixed;
  left: 0;
  right: 0;
  top: 20%;
  z-index: 999;
  display: block !important;
  margin: 0 auto;
  padding: 20px 15px;
  border-radius: 15px;
}
.small .close {
  position: absolute;
  top: 10px;
  right: 10px;
}
.small .close img {
  width: 20px;
}
.small .info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.small .info .title {
  text-align: center;
  color: #893939;
  margin-bottom: 20px;
}
.small .info > div {
  display: flex;
  margin-bottom: 20px;
  height: 30px;
  line-height: 30px;
}
.small .info > div input,
.small .info > div select {
  border: none;
  border: 1px solid #ccc;
  font-size: 12px;
  height: 100%;
  padding-left: 10px;
  margin-left: 10px;
  max-width: 158px;
  min-width: 158px;
}

.small .sub {
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #893939;
  margin: 0 auto;
  border-radius: 5px;
}
.small .quanyi {
  color: red;
}
</style>
<script>
export default {
  data() {
    return {
      small: false,
      jisuanqiActive: false,
      agree: false, //服务须知

      // 计算器
      zxbj: {
        sum: 0, //总价
        city: "扬州",
        area: null, // 房屋面积,
        roomSum: null, // 室
        weiSum: null, // 卫生间
        phone: "",
        ting: null,
        chu: null,
        yangtai: null,
        code: "", //验证码
      },
      smallForm: {
        smallSum: 0,
        city: "",
        area: "",
        xq: "",
        type: "",
        phone: "",
      },
    };
  },
  methods: {
    // 计算器
    async jisuan() {
      if (this.agree == false) {
        layer.msg("请先同意服务须知", { icon: 5 });
      }
      if (this.zxbj.code == "") {
        layer.msg("请填写验证码", { icon: 5 });
      }
      if (
        this.zxbj.city == null ||
        this.zxbj.area == null ||
        this.zxbj.phone == null
      ) {
        layer.msg("请将信息填写完整", { icon: 5 });
        return;
      }
      var sj = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      var zj = /^(0[1-9]\d{1,2}-)\d{6,7}$/;
      if (!sj.test(this.zxbj.phone) && !zj.test(this.zxbj.phone)) {
        layer.msg("手机格式错误", { icon: 5 });
        return;
      }
      await this.$http
        .post(
          "http://xyzs.demo365day.cn/index.php/api/design/postdesign.html",
          {
            city: this.zxbj.city,
            house_area: this.zxbj.area,
            house_type:
              this.zxbj.roomSum +
              this.zxbj.weiSum +
              this.zxbj.ting +
              this.zxbj.chu +
              this.zxbj.yangtai,
            contact: this.zxbj.phone,
          }
        )
        .then(({ data }) => {
          if (data.status == "success") {
            layer.msg("计算成功", { icon: 6 });
          } else {
            layer.msg("计算失败", { icon: 5 });
          }
        });
      let areas = Number(this.zxbj.area);
      if (areas == 70) {
        this.zxbj.sum = 109800;
        let roomSumCount = Number(this.zxbj.roomSum);
        if (this.zxbj.roomSum == "2") {
          let more = 2999;
          this.zxbj.sum += more;
        } else if (roomSumCount > 2) {
          let more = 2999;
          this.zxbj.sum += more * roomSumCount;
        }
        if (this.zxbj.weiSum == "2") {
          let more = 9999;
          this.zxbj.sum += more;
        } else if (this.zxbj.weiSum == "3") {
          let more = 9999;
          this.zxbj.sum += more * 2;
        }
      } else if (areas > 70) {
        let more = areas - 70;
        this.zxbj.sum = more * 899 + 109800;
        if (this.zxbj.roomSum == "2") {
          let more = 2999;
          this.zxbj.sum += more;
        } else if (this.zxbj.roomSum == "3") {
          this.zxbj.sum += more * 2;
        }
        if (this.zxbj.weiSum == "2") {
          let more = 9999;
          this.zxbj.sum += more;
        } else if (this.zxbj.weiSum == "3") {
          let more = 9999;
          this.zxbj.sum += more * 2;
        }
      } else if (areas < 70) {
        let more = 70 - areas;
        let few = more * 400;
        this.zxbj.sum = 109800 - few;
        if (this.zxbj.roomSum == "2") {
          let more = 2999;
          this.zxbj.sum += more;
        } else if (this.zxbj.roomSum == "3") {
          this.zxbj.sum += more * 2;
        }
        if (this.zxbj.weiSum == "2") {
          let more = 9999;
          this.zxbj.sum += more;
        } else if (this.zxbj.weiSum == "3") {
          let more = 9999;
          this.zxbj.sum += more * 2;
        }
      }
    },
    // 移动端计算价格
    async submit() {
      if (
        this.smallForm.city == "" ||
        this.smallForm.area == "" ||
        this.smallForm.phone == "" ||
        this.smallForm.type == ""
      ) {
        layer.msg("请将信息填写完整", { icon: 5 });
        return;
      }
      var sj = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      var zj = /^(0[1-9]\d{1,2}-)\d{6,7}$/;
      if (!sj.test(this.smallForm.phone) && !zj.test(this.smallForm.phone)) {
        layer.msg("手机格式错误", { icon: 5 });
        return;
      }
      await this.$http
        .post(
          "http://xyzs.demo365day.cn/index.php/api/design/postdesign.html",
          {
            city: this.smallForm.city,
            house_area: this.smallForm.area,
            house_type: this.smallForm.type,
            contact: this.smallForm.phone,
          }
        )
        .then(({ data }) => {
          if (data.status == "success") {
            let areas = Number(this.smallForm.area);
            let roomSum = this.smallForm.type.slice(0, 1);
            let weiSum = this.smallForm.type.slice(6, 7);
            if (areas == 70) {
              this.smallForm.smallSum = 109800;
              if (roomSum == "2") {
                let more = 2999;
                this.smallForm.smallSum += more;
              } else if (roomSum == "3") {
                this.smallForm.smallSum += more * 2;
              } else if (roomSum == "4") {
                this.smallForm.smallSum += more * 3;
              } else if (roomSum == "5") {
                this.smallForm.smallSum += more * 4;
              }
              if (weiSum == "2") {
                let more = 9999;
                this.smallForm.smallSum += more;
              } else if (weiSum == "3") {
                let more = 9999;
                this.smallForm.smallSum += more * 2;
              } else if (weiSum == "4") {
                let more = 9999;
                this.smallForm.smallSum += more * 3;
              } else if (weiSum == "5") {
                let more = 9999;
                this.smallForm.smallSum += more * 4;
              }
            } else if (areas > 70) {
              let more = areas - 70;
              this.smallForm.smallSum = more * 899 + 109800;
              if (roomSum == "2") {
                let more = 2999;
                this.smallForm.smallSum += more;
              } else if (roomSum == "3") {
                this.smallForm.smallSum += more * 2;
              } else if (roomSum == "4") {
                this.smallForm.smallSum += more * 3;
              } else if (roomSum == "5") {
                this.smallForm.smallSum += more * 4;
              }
              if (weiSum == "2") {
                let more = 9999;
                this.smallForm.smallSum += more;
              } else if (weiSum == "3") {
                let more = 9999;
                this.smallForm.smallSum += more * 2;
              } else if (weiSum == "4") {
                let more = 9999;
                this.smallForm.smallSum += more * 3;
              } else if (weiSum == "5") {
                let more = 9999;
                this.smallForm.smallSum += more * 4;
              }
            } else if (areas < 70) {
              let more = 70 - areas;
              let few = more * 400;
              this.smallForm.smallSum = 109800 - few;
              if (roomSum == "2") {
                let more = 2999;
                this.smallForm.smallSum += more;
              } else if (roomSum == "3") {
                this.smallForm.smallSum += more * 2;
              } else if (roomSum == "4") {
                this.smallForm.smallSum += more * 3;
              } else if (roomSum == "5") {
                this.smallForm.smallSum += more * 4;
              }
              if (weiSum == "2") {
                let more = 9999;
                this.smallForm.smallSum += more;
              } else if (weiSum == "3") {
                let more = 9999;
                this.smallForm.smallSum += more * 2;
              } else if (weiSum == "4") {
                let more = 9999;
                this.smallForm.smallSum += more * 3;
              } else if (weiSum == "5") {
                let more = 9999;
                this.smallForm.smallSum += more * 4;
              }
            }
            layer.alert(`预估价为:${this.smallForm.smallSum}`, { icon: 6 });
            this.smallForm.city = "";
            this.smallForm.area = "";
            this.smallForm.type = "";
            this.smallForm.phone = "";
          } else {
            layer.msg("计算失败", { icon: 5 });
          }
        });
    },
  },
  mounted() {
    if ($(window).width() >= 768) {
      $(".sidebar").css({ bottom: "50%" });
      this.small = true;
    } else {
      $(".sidebar").css({ bottom: "12%" });
      this.small = false;
    }
  },
};
</script>
<style scoped>
.huxingForm input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #000;
  /* placeholder位置  */
  text-align: right;
  padding-right: 5px;
}
/* 计算器 start */
.sidebar {
  position: fixed;
  left: 0;
  bottom: 50%;
  transform: translateY(50%);
  cursor: pointer;
  width: 197px;
  height: 60px;
  line-height: 60px;
  background: #a15050;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
  z-index: 999;
  border-radius: 0 30px 30px 0;
}
.sidebar:hover {
  background: #893939;
}
.sidebar img:nth-child(1) {
  padding-right: 10px;
}
.sidebar img:nth-child(2) {
  padding-left: 10px;
}
.jisuanqi {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: 0 auto;
  width: 65%;
  height: fit-content;
  background: #fff;
  box-shadow: 2px 2px 15px #c9c9c9;
  border-radius: 20px;
  display: flex;
  padding-bottom: 30px;
}

.leftInfo {
  width: 50%;
  padding-top: 28px;
  padding-left: 100px;
}
.leftInfo .title {
  font-size: 32px;
  color: #a15050;
  padding-bottom: 50px;
  justify-content: flex-start;
  margin-left: -50px;
  font-weight: 600;
}
.leftInfo > div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  width: 346px;
}
.leftInfo div input {
  width: 286px;
  height: 45px;
  outline: none;
  padding-left: 10px;
  border: 1px solid #eeeeee;
}
.leftInfo .huxing > div:nth-child(1) {
  margin-top: -65px;
}
.leftInfo .huxing .huxingForm {
  display: flex;
  flex-wrap: wrap;
  width: 286px;
  justify-content: space-between;
}
.huxing .huxingForm input {
  height: 45px;
  width: 85px;
  outline: none;
  border: 1px solid #eeeeee;
}
.huxing .huxingForm input:nth-child(1) {
  margin-right: 12px;
}
.huxing .huxingForm input:nth-child(1),
.huxing .huxingForm input:nth-child(2) {
  width: 135px;
  margin-bottom: 20px;
}
.quanyi {
  color: #9c595d;
  margin-left: 145px;
  margin-top: 30px;
}
.centerJisuan {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 167px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.centerJisuan .line {
  height: 100%;
  width: 1px;
  border-left: 1px solid #a15050;
  position: absolute;
}
.centerJisuan div:last-child {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #e6d2cf;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation: box1 1s infinite linear;
  position: relative;
  z-index: 20;
}
.leftInfo .agreeBox {
  justify-content: flex-start;
  margin-left: 60px;
}
.leftInfo .agreeBox .agree {
  width: auto;
  height: auto;
}
.leftInfo .agreeBox .agree {
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.getCode {
  color: #9e534e;
  position: absolute;
  right: 10px;
  height: 45px;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.pingmi {
  position: absolute;
  right: 10px;
}
@keyframes box1 {
  0% {
    width: 120px;
    height: 120px;
    background: #e6d2cf;
  }
  25% {
    width: 130px;
    height: 130px;
    background: #e6d2cf;
  }
  50% {
    width: 140px;
    height: 140px;
    background: #e6d2cf;
  }
  75% {
    width: 130px;
    height: 130px;
    background: #e6d2cf;
  }
  100% {
    width: 120px;
    height: 120px;
    background: #e6d2cf;
  }
}
.centerJisuan div:last-child > div {
  width: 118px;
  height: 118px;
  background: #e2c5c4;
  border-radius: 50%;
  animation: box2 1s infinite linear;
  position: relative;
  z-index: 22;
}
@keyframes box2 {
  0% {
    width: 98px;
    height: 98px;
    background: #e2c5c4;
  }
  25% {
    width: 108px;
    height: 108px;
    background: #e2c5c4;
  }
  50% {
    width: 118px;
    height: 118px;
    background: #e2c5c4;
  }
  75% {
    width: 108px;
    height: 108px;
    background: #e2c5c4;
  }
  100% {
    width: 98px;
    height: 98px;
    background: #e2c5c4;
  }
}
.centerJisuan div:last-child > div .bosom {
  width: 98px;
  height: 98px;
  background: #a15050;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 30;
  animation: box3 1s infinite linear;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bosom p {
  margin: 0 !important;
  font-size: 22px;
}
@keyframes box3 {
  0% {
    width: 78px;
    height: 78px;
    background: #a15050;
  }
  25% {
    width: 88px;
    height: 88px;
    background: #a15050;
  }
  50% {
    width: 98px;
    height: 98px;
    background: #a15050;
  }
  75% {
    width: 88px;
    height: 88px;
    background: #a15050;
  }
  100% {
    width: 78px;
    height: 78px;
    background: #a15050;
  }
}
.jieguo {
  width: 50%;
  height: 100%;
  margin: auto;
  position: relative;
}
.jieguo .color {
  color: #a15050;
}
.jieguo .sum {
  font-size: 22px;
  text-align: center;
  padding-bottom: 25px;
}
.jieguo .sum span {
  font-size: 24px;
  color: #a15050;
}
.jieguo .content {
  padding-left: 145px;
  padding-right: 74px;
  padding-top: 30px;
  font-size: 14px;
}
.bg-close {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
/* 计算器 end */
@media screen and (max-width: 1680px) {
  .leftInfo {
    padding-left: 50px;
  }
  .leftInfo .title {
    margin-left: 0;
  }
  .jieguo .content {
    width: 336px;
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1480px) {
  .jisuanqi {
    width: 80%;
  }
}
@media screen and (max-width: 767px) {
  .sidebar {
    font-size: 16px;
    width: 170px;
    display: none;
  }
  .sidebar img:first-child {
    width: 40px;
  }
  .sidebar img:nth-child(2) {
    width: 17px;
  }
}
</style>