<template>
  <div class="w-full h-[100px] border-b flex items-center px-[67px]">
    <img
      src="@/assets/logo.svg"
      alt="logo"
    >
    <UserSearchInput />

    <div class="ml-auto flex gap-5">
      <CustomButton
        text="登入"
        @click="() => router.push('/login')"
      />
      <CustomButton
        text="註冊"
        secondary
        @click="() => isModalOpen = true"
      />
      <span
        class="text-gray-400 my-auto cursor-pointer"
        @click="() => isModalOpen = true"
      >
        業主專區
      </span>

      <img
        src="@/assets/bell.svg"
        class="w-6 cursor-pointer"
        alt="bell"
      >
    </div>
  </div>
  <Modal
    :isOpen="isModalOpen"
    @closeModal="closeModal"
  />
</template>

<script setup >
import UserSearchInput from '@/components/user/SearchInput.vue'
import CustomButton from '@/components/CustomButton.vue'
import Modal from '@/components/Modal.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const isModalOpen = ref(false)

const closeModal = () => {
  isModalOpen.value = false
}

</script>