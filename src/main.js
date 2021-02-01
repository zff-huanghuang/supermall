import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 全局引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)*/


Vue.config.productionTip = false


Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
