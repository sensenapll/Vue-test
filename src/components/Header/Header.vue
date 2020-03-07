<template>
  <header class="header">
    <!-- <van-search v-model="value" placeholder="请输入搜索关键词" />
    <img class="header-img" src="./images/01.webp" alt="">
    <van-search class="header-search" v-model="value" placeholder="请输入搜索关键词" />
    <button class="header-btn">登录</button> -->
    <div class="header_img">
      <img src="./images/01.webp" width="75px" alt="">
      </div>
      <slot name="left"/>
      <van-search class="header-search" background="#fff" v-model="value" placeholder="请输入搜索关键词" />
      <slot name="right"/>
    <!-- <button class="header-btn">登录</button> -->
    <van-button class="header-btn" color="#f42929" size="mini">登录</van-button>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
    // background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_img
      position absolute
      left 10px
      top 50%
      transform translateY(-50%)
      height 50%
    .header-search
      position absolute
      top 50%
      left 55%
      width 60%
      transform translate(-50%, -50%)
      background-color rgb(246, 244, 236) 
    .header-btn
      position absolute
      top 25%
      right 2%

</style>