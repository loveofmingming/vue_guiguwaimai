// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口js：创建Vue 实例

import Vue from 'vue'
import App from './App.vue'
import './main.css'

//zhuce luyou zujian
import router from './router'

import HeaderTop from './components/HeaderTop/HeaderTop.vue'
//注册全局组件标签
Vue.component('HeaderTop',HeaderTop)
//各组件不需再单独引用 在html中写入<HeaderTop>即可

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //将app组件渲染到index中去  映射成标签
  /*components: { App },    --->App 定义成标签
  template: '<App/>'*/    // --->映射成模板

  // render: h => h(App),

  // render: function (createElement) {
  //   return createElement(App)      //相当于return ‘<App/>’
  // }
  // 上sanzhong fangfa
  render: h => h(App),router
  // peizhi luyou qi 全局有了router route 属性
})
