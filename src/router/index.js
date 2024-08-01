import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
// 路由懒加载
const PlayList = () => import('@/views/PlayList')
const SongPage = () => import('@/views/SongPage')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 动态路由
    path: '/playlist/:id',
    name: 'playlist',
    component: PlayList,
    props: true
  },
  {
    path: '/songpage/:id/:title',
    name: 'songpage',
    component: SongPage,
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
