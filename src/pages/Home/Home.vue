<template>
  <div class="home-container">
    <!-- 头部 -->
    <Header/>
    <div class="home-main">
      <div style="padding-bottom: 260px">
        <!-- 轮播图 -->
        <Swiper ref="swiper"/>
        <ul class="wangyi-grow">
          <li>
            <i class="grow-icon"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <!-- 首页主导航区 -->
        <Nav/>
        <!-- 新人专享礼 -->
        <Gift/>
        <!-- 公共组件一根横线 -->
        <Split/>
        <!-- 品牌制造商 -->
        <Manufacturer/>
        <Split/>
        <!-- 类目热销榜 -->
        <Category/>
        <Split/>
        <!-- 人气推荐 -->
        <Recommended/>
        <Split/>
        <!-- 限时购 -->
        <FlashSale/>
      </div>
    </div>
  </div>
</template>
<script>
// 引入Header
import Header from '../../components/Header/Header'
// 引入轮播图
import Swiper from '../Home/components/Swiper/Swiper'
import Nav from '../Home/components/Nav/Nav'
import Gift from '../Home/components/Gift/Gift'
import Manufacturer from '../Home/components/Manufacturer/Manufacturer'
import Split from '../../components/Split/Split'
import Category from '../Home/components/Category/Category'
import Recommended from '../Home/components/Recommended/Recommended'
import FlashSale from '../Home/components/FlashSale/FlashSale'
export default {
  name: 'Home',
  // 注册组件
  components: {
    Header,
    Swiper,
    Nav,
    Gift,
    Manufacturer,
    Split,
    Category,
    Recommended,
    FlashSale
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.home-container
  padding-bottom 100px
  .home-main
    .wangyi-grow
      display flex
      justify-content space-around
      align-items center
      height 72px
      li
        display flex
        &:nth-of-type(1)
          i
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
        &:nth-of-type(2)
          i
            background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
        &:nth-of-type(3)
          i
            background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
        .grow-icon
          width 32px
          height 32px
          background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          background-size 32px 32px
          background-repeat no-repeat
          background-position center
          margin 0 10px 0 0
</style>