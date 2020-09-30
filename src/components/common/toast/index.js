import Toast from "./Toast";

const obj = {}

obj.install = function (Vue){
  // document.body.appendChild(Toast.$el)
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2.new的方式，根据组件构造器可以创建出来一个组件对象
  const toast = new toastContrustor()
  //3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement("div"))
  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj

//移动端点击300ms延迟问题
// polyfill FastClick

//图片懒加载

// postcss-px-to-viewport 单位转换

