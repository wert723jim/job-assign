import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: {
      name: 'AdminMemberGroup',
    },
  },
  {
    path: '/admin/memberGroup',
    name: 'AdminMemberGroup',
    component: () => import('../views/admin/AdminMemberGroup.vue'),
  },
  {
    path: '/admin/memberManage/:memberId',
    name: 'AdminMember',
    component: () => import('../views/admin/AdminMember.vue'),
  },
  {
    path: '/admin/memberManage',
    name: 'AdminMemberManage',
    component: () => import('../views/admin/AdminMemberManage.vue'),
  },
  {
    path: '/admin/pointManage',
    name: 'AdminPointManage',
    component: () => import('../views/admin/AdminPointManage.vue'),
  },
  {
    path: '/admin/pointRecord',
    name: 'AdminPointRecord',
    component: () => import('../views/admin/AdminPointRecord.vue'),
  },
  {
    path: '/admin/productLaunch',
    name: 'AdminProductLaunch',
    component: () => import('../views/admin/AdminProductLaunch.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router