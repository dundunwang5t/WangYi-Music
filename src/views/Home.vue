<template>
  <div>
    <!-- 1. 公共的顶部logo区域 -->
    <div class="header">
      <img src="@/assets/images/logo.jpg" alt="">
    </div>
    <div>
      <van-tabs v-model="activeName">
        <van-tab title="推荐音乐" name="a">
          <music></music>
        </van-tab>
        <van-tab title="热歌榜" name="b">
          <HotMusic></HotMusic>
        </van-tab>
        <van-tab title="搜索" name="c">
          <Search></Search>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import music from './music.vue'
import HotMusic from './HotMusic.vue'
import Search from './Search.vue'
export default {
  name: 'HomeView',
  components: {
    music,
    HotMusic,
    Search
  },
  data () {
    return {
      activeName: 'a'
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  background: #d43c33;
  height: 1.68rem;
}

//vant库 里面 tab样式
/deep/ .van-tabs--line .van-tabs__wrap {
  border-bottom: 1px solid #dbdbdb;

  .van-tab {
    font-size: 16px;
  }
}
</style>
