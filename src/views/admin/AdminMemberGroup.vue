<template>
  <AdminHeader></AdminHeader>
  <AdminSider></AdminSider>

  <main class="pl-40 h-full flex flex-col pt-11">
    <div>
      <h2 class="font-semibold text-lg px-3 py-2">員工群組</h2>
    </div>
    <div class="px-3 pb-11 flex-1">
      <div class="h-full border-[1px] border-gray-400 p-2">
        <div>
          <button class="bg-[#2055A5] text-white px-5 py-1">
            新增員工群組
          </button>
        </div>
        <div>
          <table>
            <thead>
              <tr class="bg-[#7B7B7B] text-white">
                <th>
                  編號
                </th>
                <th>
                  員工群組名稱
                </th>
                <th>
                  人數
                </th>
                <th>
                  預設群組
                </th>
                <th>
                  門檻點數設定
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center">
                <td>
                  1
                </td>
                <td>
                  新進
                </td>
                <td>
                  10
                </td>
                <td>
                  <input
                    name="defaultGroup"
                    type="checkbox"
                  >
                </td>
                <td>
                  <div class="border-[1px] border-gray-400 text-center">
                    3000
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import AdminHeader from '../../components/admin/AdminHeader.vue'
import AdminSider from '../../components/admin/AdminSider.vue'
</script>

<style scoped>
th {
  padding: 8px;
}

td {
  padding: 4px
}

td,
th {
  border: 1px solid;
  @apply border-gray-400;
}
</style>