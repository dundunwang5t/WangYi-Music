<template>
  <div>
    <!-- 1. 热歌榜图片 -->
    <div class="info">
      <img src="@/assets/images/hot_music_bg_2x.jpg" width="100%" />
    </div>
    <!-- 2. 热歌列表 -->
    <MusicList :list="list" :isShow="false">
      <template #code="obj">
        <div class="code" :class="{ 'code-red': obj.index < 3 }">
          {{ obj.index > 8 ? obj.index + 1 : '0' + (obj.index + 1) }}
        </div>
      </template>
    </MusicList>

  </div>
</template>

<script>
import MusicList from '@/components/MusicList.vue'
export default {
  components: {
    MusicList
  },
  data () {
    return {
      list: []// 音乐列表数据
    }
  },
  created () {
    this.getPlaylist()
  },
  methods: {
    // 获取热歌榜数据---------------------------
    async getPlaylist () {
      const res = await this.$api.getPlaylist()
      console.log('获取热歌榜数据-', res.data)
      this.list = res.data.playlist.tracks
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;

  .code {
    width: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 16px;
  }

  .code-red {
    color: #df3436;
  }
}

.list-item {
  border-bottom: 1px solid #eee;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  flex: 1;

  .left {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
  }

  .right {
    width: .9rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: .6rem;
      height: .6rem;

    }
  }

  .subtitle {
    font-size: 17px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;

    span {
      color: #888;
    }
  }

  .author {
    margin-top: 4px;
    font-size: 12px;
    color: #888;

    .ele {
      &::after {
        content: "/";
      }
    }

    .ele:last-child {
      &::after {
        content: "";
      }
    }
  }
}
</style>
