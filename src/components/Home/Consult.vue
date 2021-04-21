<template>
  <div class="container-fuild consult">
    <div class="title d-flex justify-content-end">
      <div class="content text-right wow animate__animated animate__slideInUp">
        <div>NEWS IN FORMATION</div>
        <div>星艺资讯</div>
      </div>
      <div class="bgc">
        <img src="../../assets/image/xingyizixun.png" alt="" />
      </div>
    </div>
    <div class="contentBox">
      <div class="consultCard  wow animate__animated animate__slideInUp"  @click="toZixun(info_one.id)">
        <div>
          <img :src="info_one.thumb" alt="" />
        </div>
        <div class="cardContent">
          <div class="title">
            <div class="date">
              <span> 企业动态 | </span>{{ info_one.posttime }}
            </div>
          </div>
          <div class="cardContent_title">
            {{ info_one.title }}
          </div>
        </div>
      </div>
      <div class="consultCard  wow animate__animated animate__slideInUp" data-wow-delay="0.1s" @click="tohuodong(activitys.id)">
        <div>
          <img :src="activitys.thumb" alt="" />
        </div>
        <div class="cardContent">
          <div class="title">
            <div class="date">
              <span>营销活动 | </span>{{ activitys.posttime }}
            </div>
          </div>
          <div class="cardContent_title">
            {{ activitys.title }}
          </div>
        </div>
      </div>
      <div class="consultCard  wow animate__animated animate__slideInUp" data-wow-delay="0.2s" @click="toZixun(info_two.id)">
        <div>
          <img :src="info_two.thumb" alt="" />
        </div>
        <div class="cardContent">
          <div class="title">
            <div class="date">
              <span>企业动态 | </span>{{ info_two.posttime }}
            </div>
          </div>
          <div class="cardContent_title">
            {{ info_two.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["consultInfo", "activity"],
  data() {
    return {
      info_one: [],
      info_two: [],
      activitys: [],
    };
  },
  methods: {
    toZixun(id) {
      this.$router.push(`about/dongtai/detail?id=${id}`);
    },
    tohuodong(id) {
      this.$router.push(`/marketing/detail?id=${id}`);
    },
  },
  watch: {
    consultInfo(val) {
      this.info_one = val[0];
      this.info_two = val[1];
    },
    activity(val) {
      this.activitys = val[0];
    },
  },
};
</script>
<style scoped>
.consult {
  padding-bottom: 100px;
}
.title {
  width: 75%;
  margin: 0 auto;
  padding-top: 78px;
  align-items: center;
  margin-bottom: 30px;
}

.title .content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 22px;
}
.title .content div:nth-child(1) {
  color: #b04b4b;
}
.contentBox {
  display: flex;
  flex-wrap: wrap;
}

.consultCard {
  display: flex;
  flex-direction: column;
  width: 33.3%;
}
.cardContent_title {
  font-size: 18px;
}
.consultCard img {
  width: 100%;
  height: 100%;
}
.consultCard > div {
  height: inherit;
  max-height: 50%;
  height: 50%;
}
/* 三角 */
.angleB {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -60px;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-top: 30px solid #fff;
}
.angleT {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -60px;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-bottom: 30px solid #fff;
}
/* 三角 end */
.cardContent {
  position: relative;
  background: #fff;
  cursor: pointer;
  transition: 1s;
  padding: 75px 75px 240px 75px;
}
.cardContent::after {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -60px;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-bottom: 30px solid #fff;
}
.consultCard:nth-child(2) .cardContent::after {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -60px;
  top: 100%;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-top: 30px solid #fff;
}
.consultCard:nth-child(2) div:nth-child(1) {
  order: 2;
}
.cardContent:hover {
  background: #f5f5f5;
  transition: ease-in;
}
.cardContent:hover:after {
  border-bottom: 30px solid #f5f5f5;
}
.consultCard:nth-child(2) .cardContent:hover:after {
  border-top: 30px solid #f5f5f5;
}

.cardContent .title {
  font-size: 20px;
  padding-top: 0;
  padding-bottom: 15px;
  margin: inherit;
}
.cardContent .title .date {
  color: #c7c7c7;
  font-size: 14px;
}
.cardContent .title .date span {
  font-size: 16px;
  color: #000;
}
.cardContent .content {
  font-size: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
@media screen and (max-width: 1024px) {
  .consult .title .content {
    font-size: 18px;
  }
  .consult .consultCard {
    margin: 0 auto;
    display: flex;
    width: 90%;
    flex-direction: column;
  }
  .cardInfo {
    padding-bottom: 50px;
  }
  .cardContent {
    padding-bottom: 59px;
    order: 2;
  }
  .consultCard:nth-child(2) .cardContent::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -60px;
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-bottom: 30px solid #fff;
  }
}

@media screen and (max-width: 767px) {
  .consult {
    padding-bottom: 50px;
  }
  .consult .title {
    width: 90%;
    padding-top: 40px;
  }
  .consult .consultCard {
    width: 90%;
  }
  .consultCard .cardInfo {
    padding: 50px 10px;
  }
  .consultCard .cardInfo .content {
    font-size: 16px;
  }
  .cardContent {
    padding: 20px 20px 100px 20px;
  }
  .consultCard:nth-child(2) .cardContent {
    order: 2;
  }
}
</style>