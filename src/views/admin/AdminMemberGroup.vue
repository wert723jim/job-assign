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
              <tr v-for="group in memberGroups" :key="group.id" class="text-center">
                <td>
                  {{ group.id}}
                </td>
                <td>
                  {{ group.attributes.name }}
                </td>
                <td>
                  {{ group.attributes.users.data.attributes.count}}
                </td>
                <td>
                  <input
                    name="defaultGroup"
                    type="checkbox"
                    v-model="group.attributes.isDefault"
                  >                  
                </td>
                <td>
                  <div class="border-[1px] border-gray-400 text-center">
                    {{ group.attributes.point_baseline}}
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
import { ref } from 'vue'
import AdminHeader from '../../components/admin/AdminHeader.vue'
import AdminSider from '../../components/admin/AdminSider.vue'

const memberGroups = ref([])

const fetchMemberGroup = async () => {
  const response = await fetch('https://dispatch-net.onrender.com/api/groups?fields[0]=name&fields[1]=isDefault&fields[2]=point_baseline&populate[users][count]=1', {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMzE1MjE1NywiZXhwIjoxNzA1NzQ0MTU3fQ.6MnItXMM70Ce-24W6x1TNSVsko7VR_GcmSZggMQjq9A',
    },
  })
  const { data } = await response.json()
  memberGroups.value = data
}

fetchMemberGroup()
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