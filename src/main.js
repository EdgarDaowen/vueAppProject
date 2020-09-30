import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//解决移动端300ms延迟
FastClick.attach(document.body)
//使用懒加载插件
Vue.use(VueLazyload)

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


 https://nginx.org
 Mainline version :开发版本
 Stable version :稳定版本
 Legacy version :老版本稳定版


  响应式原理
  1.通过Object.defineProperty->监听对象属性的变化

  2.发布订阅者模式


const obj = {
  message:'dddd',
  name:"wsh"
}

Object.keys(obj).forEach(key=>{
  let value = obj[key]
  Object.defineProperty(obj,key,{
    set(newValue){
      //根据解析html代码，获取哪些在用这些属性
      value = newValue
    },
    get(){
      return value
    }
  })
})

//发布者
class Dep {
  constructor() {
    this.subscribes = []
  }

  addSubs(watcher){
    this.subscribes.push(watcher)
  }

  notify(){
    this.subscribes.forEach(item=>{
      item.update()
    })
  }
}

//订阅者
class Watcher {
  constructor(name) {
    this.name = name
  }
  update(){
    console.log(this.name+ "发生了update")
  }
}

const dep = new Dep()

const w1 = new Watcher('1111')
dep.addSubs(w1)
const w2 = new Watcher('2222')
dep.addSubs(w2)
const w3 = new Watcher('3333')
dep.addSubs(w3)

dep.notify()
 */
