<template>
  <div class="w-full md:h-[100px] h-[70px] border-b flex items-center px-4 md:px-[67px]">
    <MobileMenu />
    <img
      src="@/assets/logo.svg"
      alt="logo"
      class="cursor-pointer"
      @click="() => router.push('/')"
    >
    <div class="ml-10 hidden md:block">
      <UserSearchInput />
    </div>

    <div class="ml-auto flex gap-5">
      <div class="hidden md:flex gap-5">
        <CustomButton
          text="登入"
          @click="() => router.push('/login')"
        />
        <CustomButton
          text="註冊"
          secondary
          @click="connectCustomService"
        />
        <span
          class="text-gray-400 my-auto cursor-pointer"
          @click="connectCustomService"
        >
          業主專區
        </span>
      </div>
      <img
        src="@/assets/bell.svg"
        class="w-6 cursor-pointer"
        alt="bell"
      >
    </div>
  </div>
</template>

<script setup >
import UserSearchInput from '@/components/user/SearchInput.vue'
import CustomButton from '@/components/CustomButton.vue'
import MobileMenu from '@/components/user/MobileMenu.vue'
import { inject } from 'vue'

const connectCustomService = inject('connectCustomService')

import { useRouter } from 'vue-router'

const router = useRouter()
</script>