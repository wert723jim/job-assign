import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin/membergroup',
    name: 'AdminMemberGroup',
    component: () => import('../views/admin/AdminMemberGroup.vue'),
  },
  {
    path: '/admin/membermanage/:memberId',
    name: 'AdminMember',
    component: () => import('../views/admin/AdminMember.vue'),
  },
  {
    path: '/admin/membermanage',
    name: 'AdminMemberManage',
    component: () => import('../views/admin/AdminMemberManage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router