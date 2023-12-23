<template>
  <div class="w-full md:h-[100px] h-[70px] border-b flex items-center px-4 md:px-[67px]">
    <MobileMenu />
    <img
      src="@/assets/logo.svg"
      alt="logo"
      class="cursor-pointer"
      :class="route.path === '/' ? 'block' : 'hidden md:block'"
      @click="() => router.push('/')"
    >
    <span
      v-if="isLogin"
      class="md:hidden text-base text-primary"
    >{{ title }}
    </span>
    <div class="ml-10 hidden md:block">
      <UserSearchInput />
    </div>

    <div class="ml-auto flex gap-5">
      <!-- show when not login -->
      <div
        class="hidden md:flex gap-5"
        v-if="route.path !== '/login' && !isLogin"
      >
        <!-- login -->
        <CustomButton
          text="登入"
          @click="() => router.push('/login')"
        />
        <!-- register -->
        <CustomButton
          text="註冊"
          secondary
          @click="connectCustomService"
        />
        <span
          class="text-gray-400 my-auto cursor-pointer whitespace-nowrap"
          @click="connectCustomService"
        >
          業主專區
        </span>
      </div>
      <!-- show when login -->
      <div
        v-if="isLogin"
        class="flex gap-4"
      >
        <!-- point -->
        <div
          class="bg-gray-100 p-2 px-3 gap-2 rounded-lg flex cursor-pointer"
          @click="router.push('/point')"
        >
          <img
            src="@/assets/wallet.svg"
            alt="wallet"
          >
          <span class="text-primary">${{ main_point }}</span>

        </div>
        <!-- profile -->
        <img
          src="@/assets/avatar.svg"
          alt="avatar"
          class="w-7 cursor-pointer  hidden md:block"
          @click="router.push('/profile')"
        >
      </div>
      <!-- announcement -->
      <img
        v-if="route.path !== '/login'"
        src="@/assets/bell.svg"
        class="w-6 cursor-pointer"
        alt="bell"
        @click="router.push('/announcement')"
      >
      <!-- logout -->
      <span
        v-if="isLogin"
        class="text-gray-400 my-auto cursor-pointer whitespace-nowrap hidden md:block"
        @click="logout"
      >
        登出
      </span>
    </div>
  </div>
</template>

<script setup >
import UserSearchInput from '@/components/user/SearchInput.vue'
import CustomButton from '@/components/CustomButton.vue'
import MobileMenu from '@/components/user/MobileMenu.vue'
import { computed, inject, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const connectCustomService = inject('connectCustomService')

const router = useRouter()
const route = useRoute()
const title = computed(() => route.path === '/point' ? '錢包'
  : route.path === '/profile' ? '個人資料' : '')

const token = localStorage.getItem('token')
const isLogin = !!token

const main_point = ref(0)
onMounted(async () => {
  if (isLogin) {
    const res = await fetch('/api/users/me?fields[0]=main_point', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = await res.json()
    if (data.id) [
      main_point.value = data.main_point
    ]
  }
})

const logout = () => {
  localStorage.setItem('token', '')
  router.replace('/login')
}
</script>