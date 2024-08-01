/*
    公共的请求方法
*/
import base from './base'
import axios from '@/utils/request'

const api = {
  /*
          1. 获取推荐音乐--

      */
  getMusic () {
    return axios.get(base.musicUrl)
  },
  /*
          2. 获取最新音乐

      */
  getNewSong () {
    return axios.post(base.newsong, {
      params:
                'IZ+w5OfW3rRPTIqi7F/038d+jTtdXmo1vsWV2lMZ3nAHFK5h3Ac0fM1z2yK+4kTo',
      encSecKey:
                '14d91aef4f16e63d72081a7195fbdcf9158f946cb46a89ae51c2baf5b95b716e301513d7c70800c74dad1b20350f71c4320e4729b5e6c17f18351a48f85dc04674cc3508b45ce931e4ea2d9c58ce60e5668a1b147aafb7893eca8a5a066581463f4ae653e4ffa06bcafec0712442204676a63952f9d241b73da83ab087d4094b'
    })
  },
  /*
      3. 热歌榜列表数据
     */
  getPlaylist () {
    return axios.post(base.playlist, {
      params:
                'feVv4wQZEwTM9p67scRNYJPJwBYQ6q8/2I3qL8LomYwhZ5JFUKS+pluxWjdbBueI',
      encSecKey:
                '3c33c5f6ff92be3132aae4ba1f8a8e51d772a0cd3b904cfa6ae090822d634fb5a68f4d72d5058b0ef585111fcbea3b472c09a473cb25d433251e22c54b5ac02a8bc886641c59308ad06e7ba8c63bd9c8f256a7dee1fe34e844d184a2e9fe18f13fa122325e641dcffa8409c7f0a953a13ccea376f927e3309a518478ce3ba730'
    })
  },
  /*
      4. 搜索热词  hotSearch
     */
  hotSearch () {
    return axios.post(base.hotSearch, {
      params: 'S3xthdqH2ftJ0YFuKlVAvxEyy6PMVVnUAswrUo2sNbU=',
      encSecKey:
                '1c0d0da2a5e8e36ca20f1d88751e1663804d9c63a229bd540d4df2a0cb669159e1bb2e96dd2646fc7ad99bbc41d8bda2767dcbfc5f570084614e7237d342e996f30a816c7b3d2ac0ad64711c1eff233ba123d499b5e868f044e75ad965a01fa2d05f19f836cff1e89d86e6465761c89037ce21f158df8675fac2af8d3f26ca99'
    })
  },
  /*
       5. 搜索接
          请求方式get
          参数是keywords string关键字
          参数是typestring'mobile' 移动端
          params={ }
      */
  search (params) {
    return axios.get(base.search, {
      params
    })
  },
  /*
    6. 首页-推荐-列表歌曲
      进入推荐--列表界面的歌曲就是固定的内容了 不是随id参数变化的 因为加密没有处理
    */
  musicplaylist () { // params={id:xx }
    return axios.post(base.musicplaylist, {
      params: '/M4pWHovhxJeXzURzkxSxcKfIFFPaP7cvj3rZO7OD831sEicQ0c49kvBSHVQyqdZQxWuUxOC1T4q4RY0qS29j1inZL2JIj+Liral/cfL6sw=',
      encSecKey: '16ef1fe759409067c91db120f04b6a2b6ec494046c41ce4d2b56fe1cfe214775c192d3423e2f524bc7973c4f6f5f0be8ec9869c8ee5163d5b2e4b2e9ab2db73b55213e7c7703a0792dc3b3dcabfeb60211cc29184a80988ea566a775986e6e304cf2a4a51da39169e9a316fcd716da08c1e61d809a5f61359ff33318b07aff63'
    })
  },
  /*
    7. 音乐
      id：xxx

    */
  songUrl (params) {
    return axios.post(base.songUrl, {
      params: 'PnKw0+INQhIVSrLpM4Uq3zDIQBJoumOYJhjP6hseCLWIwEbplKzAy+JfEZPGU/6Bpb8BJLs6KsnobAut82JcefYGixb2k7A2jYue5n0ofgovuMpjsM6K7PX2xtsVxQ5LMm3wM5K1wa2FB6MUzumREx8VP8T05eiuIcJd2ocKycNK9ZUOSXJ3ak+aSdb67d/JlFT3wfWmNTUS3zfZHGf8cQ==',
      encSecKey: 'a7453090005ebe8fc5608e56f0d28dcae2b40000d3c9df8753ea01be2d9386b8ab7e63773752b3dacabe5b8ea1896725820675f78e960aeb6a2136ec01797690f706ef8590012d33c1c4174686282417f6a2771f54963e5bfeb582637fa063727918baef6f66e5d6723d65e0e73950d043727179ce33bbb4ae39ee7a4025e862'
    })
  },
  /*
    8. 歌词 id
    */
  getLyric (params) {
    return axios.get(base.lyric, {
      params
    })
  }

}

export default api
