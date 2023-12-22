<template>
  <UserHeader />
  <main class="px-[67px] min-h-screen ">
    <div class="flex-1">
      <slot></slot>
    </div>
  </main>
  <div class="h-10 w-full bg-[#5D6279] text-white flex justify-center items-center text-[10px]">
    2023 Dispatch Matching Platform 版權所有
  </div>
</template>


<script setup>
import UserHeader from '@/components/user/header.vue'
</script>
