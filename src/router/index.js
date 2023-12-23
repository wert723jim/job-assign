import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
    // redirect: {
    //   name: 'AdminMemberGroup',
    // },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
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
  {
    path: '/admin/bulletinBoard',
    name: 'AdminBulletinBoard',
    component: () => import('../views/admin/AdminBulletinBoard.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router