<template>
  <div class="category-container">
    <div class="category-main">
      <img class="category-bigImg" src='https://yanxuan.nosdn.127.net/6512cf60c8d8b6e67825317cb2b42025.jpg?quality=75&type=webp&imageView&thumbnail=0x196'/>
      <ul>
        <li>
          <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" :alt="category.name" />
          <span>推荐专区</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.category-container
  height 100%
  overflow hidden

  .category-main
    height 100%
    margin-left 162px
    padding 30px 30px 120px

    .category-bigImg
      width 528px
      height 192px
      margin-bottom 30px

    ul
      display flex
      flex-wrap wrap
      width 100%

      li
        text-align center
        width 144px
        margin-right 30px

        img
          width 144px
          height 144px
</style>