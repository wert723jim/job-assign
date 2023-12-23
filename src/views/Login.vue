<template>
  <UserLayout>
    <div class="flex justify-center mt-[40px]">
      <form @submit.prevent="handleSubmit">
        <div :class="fieldGroupClass">
          <label
            for="username"
            class="text-primary"
          >帳號</label>
          <input
            type="text"
            id="username"
            placeholder="請輸入帳號"
            :class="usernameClass"
          >
        </div>
        <div :class="fieldGroupClass">
          <label
            for="password"
            class="text-primary"
          >密碼</label>
          <input
            type="password"
            id="password"
            placeholder="請輸入密碼"
            :class="usernameClass"
          >
        </div>
        <div :class="fieldGroupClass">
          <label
            for="captcha"
            class="text-primary"
          >驗證碼</label>
          <input
            type="text"
            id="captcha"
            placeholder="請輸入驗證碼"
            :class="usernameClass"
          >
        </div>
        captcha image
        <div class="mt-[40px] flex justify-center mx-auto">
          <CustomButton
            text="登入"
            class="w-[160px]"
          />
        </div>
      </form>
    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from '@/components/user/Layout.vue'
import CustomButton from '../components/CustomButton.vue'

const fieldGroupClass = 'flex flex-col mt-8 justify-center'
const usernameClass = 'border rounded-md w-[330px] outline-primary h-10 px-2 mt-2'

const handleSubmit = () => {
  alert('submit')

}
</script>