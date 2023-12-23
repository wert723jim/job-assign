<template>
  <UserLayout>
    <div class="flex justify-center mt-[40px]">
      <form @submit.prevent>
        <div :class="fieldGroupClass">
          <label
            for="username"
            class="text-primary"
          >帳號</label>
          <input
            type="text"
            id="username"
            :class="inputClass"
            v-model="formData.username"
            disabled
          >
        </div>
        <!-- <div :class="fieldGroupClass">
          <label
            for="password"
            class="text-primary"
          >密碼</label>
          <input
            type="text"
            id="password"
            :class="inputClass"
            v-model="formData.password"
          >
        </div> -->
        <div :class="fieldGroupClass">
          <label
            for="nickname"
            class="text-primary"
          >姓名</label>
          <input
            type="text"
            id="nickname"
            :class="inputClass"
            v-model="formData.nickname"
            disabled
          >
        </div>
        <div :class="fieldGroupClass">
          <label
            for="phone"
            class="text-primary"
          >電話</label>
          <input
            type="text"
            id="phone"
            :class="inputClass"
            v-model="formData.phone"
            disabled
          >
        </div>
      </form>
    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from '@/components/user/Layout.vue'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const fieldGroupClass = 'flex flex-col mt-8 justify-center'
const inputClass = 'border rounded-md w-[330px] outline-primary h-10 px-2 mt-2 text-gray-400'

const formData = reactive({
  username: '',
  password: '',
  nickname: '',
  phone: '',
})

const router = useRouter()
onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.replace('/login')
    return
  }
  const res = await fetch('/api/users/me?fields[0]=username&fields[1]=nickname&fields[2]=phone', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const data = await res.json()
  formData.username = data.username
  formData.nickname = data.nickname
  formData.phone = data.phone
})
</script>