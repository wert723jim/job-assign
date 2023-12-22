<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div
        v-show="props.isOpen"
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        "
        @click="emit('closeModal')"
      >
        <div
          class="w-[330px] h-[175px] p-6 mx-4 bg-white rounded-md shadow-xl -mt-10"
          @click.stop=""
        >
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">請注意</h3>
          </div>
          <div class="mt-4">
            <p class="mb-4 text-sm text-gray-400">
              請洽客服人員
            </p>
            <CustomButton
              text="我知道了"
              @click="emit('closeModal')"
              class="float-right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from './CustomButton.vue'

const props = defineProps(['isOpen'])
const emit = defineEmits(['closeModal'])
</script>