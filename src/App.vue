<template>
  <div id="app">
    <!--显示路由组件-->
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {mapActions} from 'vuex'
  export default {
    //全局加载完毕可以 做一些事情
    mounted () {
      //方式一
      // console.log('===测试1==')
      // this.$store.dispatch('getAddress')
      // console.log('===测试2==')
      // 方式二   配合下面的...mapActions(['getAddress'])
      this.getAddress()
      // this.getUserInfo()
    },
    methods: {
      ...mapActions(['getAddress', 'getUserInfo'])
    },
    //映射标签
    components: {
      FooterGuide
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
