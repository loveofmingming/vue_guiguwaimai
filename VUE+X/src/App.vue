<!--使用helloworld-->
<!-- //将todos传递给list显示，组件外向组件内传递，用标签属性props-->
<!-- 8  addTodo 方法定义在App中，Header调用-->
<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />

  </div>
 </template>

<script>
  // 1.引入组件
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {

  data (){
    return {
      todos:[
        {title:'吃饭',complete:false},
        {title:'睡觉',complete:false},
        {title:'xxx',complete:false}
      ]
    }
  },
  methods:{

  },
  //2.映射标签
  components: {
   FooterGuide
  }
}
</script>

  <style lang="stylus" rel="stylesheet/stylus">
   #app
      width 100%
      height 100%
  </style>
