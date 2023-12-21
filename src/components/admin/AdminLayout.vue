<template>
  <AdminHeader></AdminHeader>
  <AdminSider></AdminSider>
  <main class="pl-40 h-full flex flex-col pt-11">
    <div class="flex items-center">
      <slot name="header"></slot>
    </div>
    

    <div class="px-3 flex-1">
      <slot name="content"></slot>
    </div>
  </main>
</template>

<script setup>
import AdminHeader from '../../components/admin/AdminHeader.vue'
import AdminSider from '../../components/admin/AdminSider.vue'
</script>