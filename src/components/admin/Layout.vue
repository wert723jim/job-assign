<template>
  <AdminHeader />
  <AdminSider />
  <main class="pl-40 h-full flex flex-col pt-11">
    <div class="flex items-center">
      <slot name="header"></slot>
    </div>


    <div class="px-3 flex-1 pb-2">
      <slot name="content"></slot>
    </div>
  </main>
</template>