import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
 1.git status
 2.git add .
 3.git commit -m '提交信息'
 4.git push
 */