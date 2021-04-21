<template>
  <div class="container-fiuld team">
    <div class="teamCenter">
      <div class="row">
        <div class="title d-flex align-items-center p-5">
          <div class="circle">
            <img src="../../assets/image/shejituandui.png" alt="" />
          </div>
          <div class="content wow animate__animated animate__slideInUp">
            <div>WE ARE AWESOME TEAM</div>
            <div>专业设计团队 为您服务</div>
          </div>
        </div>
      </div>
      <div class="teamDetail">
        <div
          class="teamItem wow animate__animated animate__slideInUp"
          v-for="(item, index) in teamInfo"
          :key="item.name"
          @click="toTeam(teamInfo[index].id)"
        >
          <div class="personInfo">
            <div class="name">{{ item.name }}</div>
            <div>设计理念：</div>
            <div>{{ item.design_idea }}</div>
          </div>
          <div class="pic">
            <img :src="item.thumb" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["teamInfo"],
  methods: {
    toTeam(id) {
      this.$router.push(`designTeam/elite/detail?id=${id}`);
    },
  },
};
</script>
<style scoped>
.team {
  width: 100%;
  background: #f7f7f7;
  padding-bottom: 86px;
}
.teamCenter {
  width: 75%;
  margin: 0 auto;
  padding-top: 78px;
}
.title {
  padding: 0px !important;
  padding-bottom: 30px !important;
}
.title .content {
  display: flex;
  flex-direction: column;
  font-size: 22px;
}
.title .content div:nth-child(1) {
  color: #b04b4b;
}
.teamDetail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.teamItem {
  display: flex;
  width: calc((100% - 30px) / 2);
  margin-bottom: 30px;
  cursor: pointer;
}
.teamItem .personInfo {
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 23px;
  flex: 1;
  font-size: 16px;
}
.teamItem .personInfo .name {
  font-size: 18px;
}
.teamItem:nth-child(2) .personInfo {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 23px;
  flex: 1;
  order: 2;
}
.teamItem:nth-child(4) .personInfo {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 23px;
  flex: 1;
  order: 2;
}
.teamDetail .personInfo div:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.teamItem .pic {
  flex: 2;
}
.teamItem .pic img {
  width: 100%;
  max-width: 100%;
  height: 100%;
}
@media screen and (min-width: 1025px) and (max-width: 1900px) {
  .teamItem {
    height: inherit;
  }
}
@media screen and (max-width: 1024px) {
  .teamCenter .title .content {
    font-size: 18px;
  }
  .teamCenter .teamDetail {
    display: flex;
    flex-direction: column;
  }
  .teamCenter .teamDetail .teamItem {
    flex-direction: row;
    height: inherit;
    width: inherit;
  }
  .teamItem .personInfo {
    order: 2;
    text-align: left;
    padding-left: 23px;
  }
  .teamDetail .left .personInfo {
    padding-left: 23px;
    padding-right: 0;
  }
  .teamCenter .teamDetail .left .personInfo {
    order: 2;
    text-align: left;
    padding-top: 20px;
    line-height: 30px;
  }
}
@media screen and (max-width: 767px) {
  .team {
    padding-bottom: 20px;
  }
  .team .teamCenter {
    width: 90%;
    padding-top: 30px;
  }
  .team .teamCenter .title {
    margin: 0 auto;
  }
  .teamCenter .title .content {
    font-size: 16px;
  }
  .teamCenter .teamDetail .teamItem {
    flex-direction: row;
    height: auto;
    margin-bottom: 40px;
  }
  .teamDetail .left .personInfo {
    padding-left: 23px;
    padding-right: 0;
  }
  .teamItem .pic {
    flex: 1;
  }
}
</style>