<template>
  <div class="categoryList-container">
    <div class="searchInput">
      <i class="iconfont icon-search"></i>
      <span class="placeholder" @click="$router.push('/search')">搜索商品，共22717款好物</span>
    </div>
    <section class="categoryList-main">
      <div class="line"></div>
      <div class="categoryList-left">
        <ul>
          <li>
            <a href="javascript:void(0);">推荐专区</a>
          </li>
          <li>
            <a href="javascript:void(0);">冬季专区</a>
          </li>
          <li>
            <a href="javascript:void(0);">爆品专区</a>
          </li>
          <li>
            <a href="javascript:void(0);">新品专区</a>
          </li>
          <li>
            <a href="javascript:void(0);">居家</a>
          </li>
          <li>
            <a href="javascript:void(0);">鞋包配饰</a>
          </li>
          <li>
            <a href="javascript:void(0);">服装</a>
          </li>
          <li>
            <a href="javascript:void(0);">电器</a>
          </li>
          <li>
            <a href="javascript:void(0);">洗护</a>
          </li>
          <li>
            <a href="javascript:void(0);">饮食</a>
          </li>
          <li>
            <a href="javascript:void(0);">餐厨</a>
          </li>
          <li>
            <a href="javascript:void(0);">婴童</a>
          </li>
          <li>
            <a href="javascript:void(0);">文体</a>
          </li>
          <li>
            <a href="javascript:void(0);">特色区</a>
          </li>
        </ul>
      </div>
      <router-view />
    </section>
  </div>
</template>
<script>
// import BScroll from 'better-scroll';
export default {
  name: 'Category',
  mounted(){
    this.$nextTick(() => {
        /* eslint-disable no-new */
        // new BScroll('.categoryList-left', {
        //   click: true,
        //   // scrollY: true
        // });
  })
}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.categoryList-container
    height 100%
    padding-bottom 100px
    .searchInput
      height 56px
      width 90%
      margin 20px auto
      border-radius 10px
      background-color rgba(0,0,0,.1)
      text-align center
      line-height 56px
      i
        font-size 30px
      .placeholder
        font-size 30px
        color #666
    .line
      width 100%
      height 2px
      background-color #eee
    .categoryList-main
        height 100%
        position relative
      .categoryList-left
        position absolute
        top 0
        left 0
        height 100%
        padding 20px 0
        ul
          width 162px
          display flex
          flex-direction column
          li
            width 160px
            height 50px
            line-height 50px
            text-align center
            font-size 28px
            margin 15px 0
            border-left 6px solid #fff
            &.active
              border-left 6px solid $red
              a
                color $red
</style>