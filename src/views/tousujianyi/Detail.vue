<template>
  <div>
    <div class="contentBox">
      <div class="tab">
        <div
          class="tousu"
          @click="tabActive = true"
          :class="tabActive ? 'active' : ''"
        >
          投诉
        </div>
        <div
          class="jianyi"
          @click="tabActive = false"
          :class="!tabActive ? 'active' : ''"
        >
          建议
        </div>
      </div>
      <div class="name">
        <label>姓名</label>
        <input type="text" v-model="form.name" placeholder="请输入您的姓名" />
      </div>
      <div class="phone">
        <label>电话</label>
        <input
          type="text"
          v-model="form.tel"
          placeholder="请输入您的电话号码"
        />
      </div>
      <div class="area">
        <label>地区</label>
        <input
          type="text"
          v-model="form.address"
          placeholder="请输入您所在的地区"
        />
      </div>
      <div class="content">
        <label>内容</label>
        <textarea
          cols="137"
          placeholder="请输入您要输入的内容"
          rows="10"
          v-model="form.content"
        ></textarea>
      </div>
      <div class="submit" @click="submit">立即提交</div>
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
  data() {
    return {
      commonTitle: sessionStorage.getItem('title'),
      tabActive: true,
      form: {
        name: "",
        tel: "",
        address: "",
        content: "",
      },
    };
  },
  methods: {
    submit() {
      if (this.tabActive == true) {
        this.tousu();
      } else {
        this.jianyi();
      }
    },
    async tousu() {
      if (
        this.form.name == "" ||
        this.form.tel == "" ||
        this.form.address == "" ||
        this.form.content == ""
      ) {
        layer.msg("请将信息填写完整", { icon: 5 });
        return;
      }
      var sj = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      var zj = /^(0[1-9]\d{1,2}-)\d{6,7}$/;
      if (!sj.test(this.form.tel) && !zj.test(this.form.tel)) {
        layer.msg("手机格式错误", { icon: 5 });
        return;
      }
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/message/index.html", {
          type: 1,
          name: this.form.name,
          tel: this.form.tel,
          address: this.form.address,
          content: this.form.content,
        })
        .then(({ data }) => {
          if ((data.status = "success")) {
            layer.msg("提交成功", { icon: 6 });
            location.reload();
          } else {
            layer.msg("提交失败", { icon: 5 });
          }
        })
        .catch((err) => {
          console.log(err);
          layer.msg("提交失败", { icon: 5 });
        });
    },
    async jianyi() {
      if (
        this.form.name == "" ||
        this.form.tel == "" ||
        this.form.address == "" ||
        this.form.content == ""
      ) {
        layer.msg("请将信息填写完整", { icon: 5 });
        return;
      }
      var sj = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      var zj = /^(0[1-9]\d{1,2}-)\d{6,7}$/;
      if (!sj.test(this.form.tel) && !zj.test(this.form.tel)) {
        layer.msg("手机格式错误", { icon: 5 });
        return;
      }
      await this.$http
        .post("http://xyzs.demo365day.cn/index.php/api/message/index.html", {
          type: 2,
          name: this.form.name,
          tel: this.form.tel,
          address: this.form.address,
          content: this.form.content,
        })
        .then(({ data }) => {
          if ((data.status = "success")) {
            layer.msg("提交成功", { icon: 6 });
            location.reload();
          } else {
            layer.msg("提交失败", { icon: 5 });
          }
        })
        .catch((err) => {
          console.log(err);
          layer.msg("提交失败", { icon: 5 });
        });
    },
  },
};
</script>
<style scoped>
.contentBox {
  width: 100%;
  margin-top: 50px;
  padding-top: 76px;
  padding-left: 107px;
  padding-right: 106px;
  padding-bottom: 88px;
  border: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.contentBox .tab {
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-left: 52px;
  align-items: center;
  cursor: pointer;
}
.contentBox .tab div {
  width: 180px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid #e1e1e1;
}
.contentBox .tab .active {
  border: 1px solid #a15050;
}

.contentBox label {
  padding-right: 20px;
}
.contentBox input {
  width: 400px;
  height: 58px;
  border: 1px solid #e1e1e1;
  padding: 0 20px;
  outline: none;
}
.contentBox .content textarea {
  width: calc((100% - 52px));
  outline: none;
  padding: 20px 20px;
  padding-top: 20px;
  margin-left: 50px;
  border: 1px solid #e1e1e1;
}
.contentBox .content {
  position: relative;
  width: 100%;
}
.contentBox .content label {
  position: absolute;
  top: 10px;
  left: 0;
}
.contentBox .submit {
  width: 200px;
  height: 60px;
  background: #a15050;
  line-height: 60px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  cursor: pointer;
}
.contentBox div {
  padding-bottom: 58px;
}

@media screen and (max-width: 1024px) {
  .contentBox {
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .contentBox .content textarea {
    width: 85%;
  }
}
@media screen and (max-width: 767px) {
  .contentBox {
    padding: 20px 0px;
    border: 0;
  }
  .contentBox .content {
    display: flex;
  }
  .contentBox .tab {
    margin-left: 0;
  }
  .contentBox .tab div {
    width: 48%;
  }
  .contentBox label {
    padding-right: 10px;
  }
  .contentBox input {
    width: 85%;
  }
  .contentBox div {
    width: 100%;
  }
  .contentBox .content label {
    position: static;
    padding-top: 10px;
  }
  .contentBox .content textarea {
    margin-left: 0;
    width: calc((100% - 48px));
  }
}
</style>