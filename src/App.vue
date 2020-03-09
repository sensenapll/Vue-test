<template>
  <div>
  <!-- 对应的组件视图 -->
  <keep-alive>
    <router-view/>
  </keep-alive>
  <!-- 组件 -->
  <FooterTab/>
  </div>
</template>

<script>
// 引入FooterTab组件
import FooterTab from './components/FooterTab/FooterTab'
export default {
  // name: 'App',
  // 注册组件
  components: {
    FooterTab
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
