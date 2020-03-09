<template>
<footer class="footer_guide border-1px">
  <a href="javascript:;" class="guide_item" @click="goto('/home')" :class="{on:$route.path==='/home'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/categorylist')" :class="{on:$route.path==='/categorylist'}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/topic')" :class="{on:$route.path==='/topic'}">
      <span class="item_icon">
        <i class="iconfont icon-mairu"></i>
      </span>
      <span>值得买</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/cart')" :class="{on:$route.path==='/cart'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche2"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/user')" :class="{on:$route.path==='/user'}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
</footer>
</template>
<script>
export default {
  name: 'FooterTab',
  methods:{
    // 跳转相对应的路由组件
    goto (path) {
      // 判断当前的地址是否和选中的地址一样，一样的话就不用替换
      if(this.$route.path !== path){
        this.$router.replace(path)
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #ff003b
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 16px
</style>