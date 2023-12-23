<template>
  <div class="p-2 border-b">
    {{ props.content }}
    <div class="flex justify-end m-2 text-gray-400">
      <span>{{ props.createdAt.slice(0, 10) }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['content', 'createdAt'])
</script>