<template>
  <div
    class="w-max-[300px] h-max-[300px] rounded-lg overflow-hidden flex justify-center items-end cursor-pointer"
    @click="emit('clickFn', props.product.attributes.url)"
  >
    <img
      :src="imageUrl"
      alt="product img"
    >
    <div class="absolute flex flex-col gap-3 mb-10">
      <span class="text-white font-extralight text-center">{{ props.product.attributes.name }}</span>
      <CustomButton
        text="開始訂單"
        secondary
      />
    </div>
  </div>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue'

const props = defineProps(['product'])
const emit = defineEmits(['clickFn'])

const backendUrl = import.meta.env.VITE_BACKEND_HOST
const imageUrl = backendUrl + props.product.attributes.image.data.attributes.url
</script>