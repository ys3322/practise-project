import Vue from "vue";
import VueRouter from 'vue-router'

const Vote = () => import('../views/Vote')
const Rank = () => import('../views/Rank')
const Info = () => import('../views/Info')
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/vote'
  },
  {
    path: '/vote',
    component: Vote
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/info',
    component: Info
  }
]
const router = new VueRouter({
  routes,
  mode: 'hash'
})
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router


