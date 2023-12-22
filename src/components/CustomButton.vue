<template>
  <button :class="`${bgColor} text-white px-4 py-1.5 rounded-full text-sm`">
    <!-- @click="emit('clickFn')" -->
    {{ props.text }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['text', 'secondary'])
// const emit = defineEmits(['clickFn'])

const bgColor = computed(() => props.secondary !== undefined ? 'bg-secondary' : 'bg-primary')
</script>