<template>
<AdminLayout>
  <template v-slot:header>
    <h2 class="font-semibold text-lg px-3 py-2">公告欄</h2>
  </template>

  <template v-slot:content>
    <div class="border-[1px] border-gray-300 h-full">
      <div class="flex items-center gap-2 p-2 border-b-[1px] border-gray-300">
        <div>
          <button class="bg-[#2055A5] text-white px-5 py-1">
            新增公告
          </button>
        </div>
      </div>
      <div class="p-2">
        顯示
        <select name="" id="listItemsCount">
          <option value="10" selected>10</option>
        </select>
        條目
      </div>
      <div>
        <table class="filter-table w-full">
          <thead>
            <tr class="bg-[#7B7B7B] text-white">
              <th>
                編號
              </th>
              <th>
                類別
              </th>
              <th>
                創建日期
              </th>
              <th>
                公告標題
              </th>
              <th>
                公告狀態
              </th>
              <th>
                跑馬燈顯示
              </th>
              <th>
                功能
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                置頂
              </td>
              <td>
                <div>2023-12-16</div>
                <div>12:00:02</div>
              </td>
              <td>
                平台使用注意事項
              </td>
              <td>
                <select name="bulletinState">
                  <option value="1" selected>啟用</option>
                </select>
              </td>
              <td>
                <select name="newsTickerState">
                  <option value="1" selected>啟用</option>
                </select>
              </td>
              <td>
                <div class="flex justify-center gap-1">
                  <button class="bg-[#2055A5] text-white px-5 py-1">
                    修改
                  </button>
                  <button class="bg-[#D92F14] text-white px-5 py-1">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
</AdminLayout>
</template>

<script setup>
import AdminLayout from '../../components/admin/AdminLayout.vue'

</script>

<style scoped>
.filter-table td, .filter-table th, .filter-table {
  @apply border-[1px];
  @apply border-gray-400;
  @apply text-center;
}

</style>