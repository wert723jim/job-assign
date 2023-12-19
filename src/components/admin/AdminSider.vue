<template>
  <aside class="fixed bottom-0 top-11 h-full w-40 bg-[#C1C1C3] border-r-[1px] border-gray-500">
    <div>
      <div>
        <div class="text-xl tracking-[1em] pl-8 py-2 border-b-[1px] border-gray-500">
          員工
        </div>
        <ul>
          <li>
            <router-link to="/admin/membergroup" class="inline-block w-full h-full pl-8 py-1">
              >>員工群組
            </router-link>
          </li>
          <li>
            <router-link to="/admin/membermanage" class="inline-block w-full h-full pl-8 py-1">
              >>員工管理
            </router-link>
          </li>
          <li class="pl-8 py-1">
            >>點數管理
          </li>
        </ul>
      </div>

      <div>
        <div class="text-xl tracking-[1em] pl-8 py-2 border-t-[1px] border-b-[1px] border-gray-500">
          報表
        </div>
        <ul>
          <li class="pl-8 py-1">
            >>點數紀錄
          </li>
        </ul>
      </div>

      <div>
        <div class="text-xl tracking-[1em] pl-8 py-2 border-t-[1px] border-b-[1px] border-gray-500">
          工具
        </div>
        <ul>
          <li class="pl-8 py-1">
            >>商品上架
          </li>
          <li class="pl-8 py-1">
            >>公告欄
          </li>
        </ul>
      </div>

    </div>
  </aside>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #6F95B2;
}
</style>