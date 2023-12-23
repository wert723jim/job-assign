<template>
  <header class="fixed w-full">
    <div class="flex justify-between bg-[#2DBBDB]">
      <div class="flex">
        <div class="text-xl font-bold px-10 py-2">
          管理後台
        </div>
        <div class="p-2 border-x-[1px] border-black cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 6.4V4H20V6.4H4ZM4 20V17.6H20V20H4ZM4 13.2V10.8H20V13.2H4Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div class="flex px-6 py-2 border-l-[1px] border-black">
        <div>
          <div class="h-7 w-7 mr-2 rounded-full bg-black"></div>
        </div>
        <div>
          Administrator
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const token = localStorage.getItem('token')
if (!token) {
  router.replace('/system')
}
</script>