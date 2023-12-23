<template>
  <UserLayout>
    <div class="place-content-center w-full h-full my-[100px]">
      <div class="text-[18px] flex justify-center text-gray-400">
        目前錢包餘額
      </div>
      <div class="flex justify-center items-center gap-4 mt-4">
        <img
          src="@/assets/wallet.svg"
          alt="wallet"
          class="w-16"
        >
        <span class="text-[30px] text-primary">${{ main_point || 0 }}</span>

      </div>
    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from '@/components/user/Layout.vue'
import getTokenAndHeader from '@utils/getTokenAndHeader.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const main_point = ref(0)
const router = useRouter()
onMounted(async () => {
  const { token, headers } = getTokenAndHeader()
  if (!token) {
    router.replace('/login')
    return
  }
  const baseUrl = import.meta.env.VITE_BACKEND_HOST
  const res = await fetch(baseUrl + '/api/users/me?fields[0]=main_point', { headers })
  const data = await res.json()
  main_point.value = data.main_point
})

</script>