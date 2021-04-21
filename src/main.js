import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import MetaInfo from "vue-meta-info"

import axios from "axios"
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'ZWGFW0emLB9AFm6C60xVuZzr2y2QXZBo'
})

Vue.prototype.$http = axios
Vue.use(MetaInfo)
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");