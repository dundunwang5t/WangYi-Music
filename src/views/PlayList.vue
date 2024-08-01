<template>
  <!-- 编辑推荐页面 -->
  <div>
    <div class="mark"> 播放界面--id---- {{ id }}</div>
    <!-- 信息头像 -->
    <div class="info">
      <img :src="imgUrl" alt="">
      <div class="name">{{ name }}</div>
    </div>

    <!-- 歌曲列表 -->
    <div class="content">
      <div class="desc">歌曲列表</div>
    </div>

    <!-- 引用公共列表组件 -->
    <!-- 2. 热歌列表 -->
    <MusicList :list="list">
      <!--
      使用插槽实现编辑页面的歌曲序号
          v-slot 有对应的简写 #，
          因此 <template v-slot:code>、<slot name='code'></slot> 可以简写为 <template #code>。
          其意思就是“将这部分模板片段传入子组件的 header 插槽中”。
           -->
      <template #code="obj">
        <div class="code">{{ obj.index + 1 }}</div>
      </template>
    </MusicList>

  </div>
</template>

<script>
import MusicList from '@/components/MusicList.vue'
export default {
  props: ['id'],
  components: {
    MusicList
  },
  data () {
    return {
      name: '', // 名称
      imgUrl: '', // 图片
      list: []// 歌曲列表
    }
  },
  // 生命周期-------------------------
  created () {
    this.musicplaylist()
  },
  methods: {
    async musicplaylist () {
      const res = await this.$api.musicplaylist()
      console.log('歌曲信息--', res.data)
      this.name = res.data.playlist.name
      this.imgUrl = res.data.playlist.coverImgUrl
      this.list = res.data.playlist.tracks
    }
  }

}
</script>

<style lang="less" scoped>
.info {
    padding: .3rem;
    background: #eee;
    display: flex;

    img {
        width: 2.5rem;
    }

    .name {
        flex: 1;
        padding-left: .2rem;
    }
}

.content {
    .desc {
        color: #888;
        font-size: 12px;
        padding: .1rem;
        background: #ddd;
    }
}

</style>
