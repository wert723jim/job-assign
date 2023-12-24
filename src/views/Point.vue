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
import fetchWithToken from '@utils/fetchFn'

const main_point = ref(0)
onMounted(async () => {
  const data = await fetchWithToken('/api/users/me?fields[0]=main_point')
  main_point.value = data.main_point
})

</script>