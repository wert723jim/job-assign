<template>
  <AdminLayout>
    <template v-slot:header>
      <h2 class="font-semibold text-lg px-3 py-2">公告欄</h2>
    </template>

    <template v-slot:content>
      <div class="border-[1px] border-gray-300 h-full">
        <div class="flex items-center gap-2 p-2 border-b-[1px] border-gray-300">
          <div>
            <AdminModal>
              <template v-slot:buttonContent>
                <span>
                  <span
                    class="inline-block text-white px-5 py-1 bg-[#2055A5]"
                  >
                    新增公告
                  </span>
                </span>
              </template>
              <template v-slot:header>
                新增公告
              </template>
              <template v-slot:content>
                <BulletinBoardForm></BulletinBoardForm>
              </template>
            </AdminModal>
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
              <tr v-for="announcement in announcements" :key="announcement.id">
                <td>
                  {{ announcement.id}}
                </td>
                <td>
                  {{ announcement.attributes.publishedAt}}
                </td>
                <td>
                  {{ announcement.attributes.title }}
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
import { ref } from 'vue'
import BulletinBoardForm from '../../components/admin/form/BulletinBoardForm.vue'
import AdminModal from '../../components/admin/AdminModal.vue'
import AdminLayout from '../../components/admin/AdminLayout.vue'

const announcements = ref([])

const fetchAnnouncements = async () => {
  try {
    const response = await fetch('https://dispatch-net.onrender.com/api/announcements')
    const { data } = await response.json()
    console.log(data)
    if (data?.error) throw new Error(data?.error?.message || 'fetch error')
    announcements.value = data
  } catch (err) {
    console.log(err)
  }
  
}
fetchAnnouncements()
</script>

<style scoped>
.filter-table td, .filter-table th, .filter-table {
  @apply border-[1px];
  @apply border-gray-400;
  @apply text-center;
}

</style>