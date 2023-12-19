<template>
  <AdminHeader></AdminHeader>
  <AdminSider></AdminSider>
  <main class="pl-40 h-full flex flex-col pt-11">
    <div class="flex">
      <h2 class="font-semibold text-lg px-3 py-2">員工管理</h2>
      <button>新增員工</button>
    </div>
    <div class="px-3 flex flex-col gap-2">
      <div class="border-[1px] border-gray-400 px-6 py-4">
        <div>
          <form id="memberForm">
            <div>
              <label for="memberInfo">
                帳號/姓名/電話
              </label>
              <input name="memberInfo" id="memberInfo" type="text">
            </div>
            <div>
              <label for="memberGroup">
                員工群組
              </label>
              <select name="memberGroup" id="memberGroup">
                <option value="0" selected>全部</option>
              </select>
            </div>
            <div>
              <label for="memberState">
                員工狀態
              </label>
              <select name="memberState" id="memberState">
                <option value="0" selected>全部</option>
              </select>
            </div>
            <div>
              <button class="bg-[#2055A5] text-white px-5 py-1">查詢</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div class="flex p-2 border-[1px] border-gray-400">
          共
          <span>
            220
          </span>
          筆資料，總頁數
          <span>
            5
          </span>
          頁 每頁筆數:
          <div>
            <select name="itemsCount">
              <option value="50" selected>50</option>
            </select>
          </div>
          目前第:
          <div>
            <select name="chosenPage">
              <option value="1" selected>1</option>
            </select>
          </div>
          頁
        </div>
        <table class="w-full">
          <thead>
            <tr class="bg-[#7B7B7B] text-white">
              <th>
                編號
              </th>
              <th>
                員工帳號
              </th>
              <th>
                姓名
              </th>
              <th>
                電話
              </th>
              <th>
                群組
              </th>
              <th>
                主錢包餘額
              </th>
              <th>
                註冊日期
              </th>
              <th>
                最近登入IP
              </th>
              <th>
                備註
              </th>
              <th>
                功能
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <td>
                1
              </td>
              <td>
                DMP0001
              </td>
              <td>
                張三豐
              </td>
              <td>
                0937123456
              </td>
              <td>
                新進
              </td>
              <td>
                1000.00
              </td>
              <td>
                2023-12-16 12:00:02
              </td>
              <td>
                149.120.3.8
              </td>
              <td>

              </td>
              <td>
                <router-link class="bg-[#2055A5] text-white px-5 py-1" :to="{name: 'AdminMember', params: {memberId: 123}}">
                  修改
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
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
td, th {
  border: 1px solid;
  @apply border-gray-400;
}
</style>