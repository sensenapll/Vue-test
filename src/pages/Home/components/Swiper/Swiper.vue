<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="福利站">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt="护理好物集">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
// 引入swiper组件
import Swiper from 'swiper'
// 引入swiper的样式
import 'swiper/css/swiper.css'
export default {
  name: 'Swiper',
  mounted (){
    this.$nextTick(()=>{
      /* eslint-disable */
    var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.page
  .swiper-container
    width 750px
    height 400px
    img
      width 100%
      height 100%
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
      width 100%
      height 4px
      bottom 50px
      .swiper-pagination-customs
        width 40px
        height 4px
        display inline-block
        margin-right 10px
        background-color rgba(255, 255, 255, .5)
      .swiper-pagination-customs-active
        width 40px
        height 4px
        display inline-block
        border-radius 2px
        background-color $red
</style>