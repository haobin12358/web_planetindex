// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.less';
import store from './vuex';
import axios from 'axios'
import promise from 'es6-promise';//解决axios在ie9下不生效的方法
promise.polyfill();
Vue.prototype.$http = axios;
// 超时时间
axios.defaults.timeout = 60000;


Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
