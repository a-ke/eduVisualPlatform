// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'reset-css'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Row,
  Col,
  Progress,
  Scrollbar,
  Carousel,
  CarouselItem,
  Message,
  Loading
} from "element-ui"
import echarts from "echarts"
import ajaxUrl from "../static/js/url"
import axios from "axios"
import utils from './assets/utils'

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Progress);
Vue.use(Scrollbar);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Loading);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

window.ajaxUrl = ajaxUrl;
Vue.prototype.axios = axios;
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
