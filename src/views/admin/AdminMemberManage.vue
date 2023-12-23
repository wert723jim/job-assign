<template>
  <AdminLayout>
    <template v-slot:header>
      <h2 class="font-semibold text-lg px-3 py-2">員工管理</h2>
      <AdminModal @confirm="addMember">
        <template v-slot:buttonContent>
          <span
            class="inline-block text-white px-5 py-1 bg-[#2055A5]"
          >
            新增員工
          </span>
        </template>
        <template v-slot:header>
          新增員工
        </template>
        <template v-slot:content>
          <div>
            <form>
              <table>
                <tr>
                  <td>
                    <label for="memberUserName">
                      員工帳號
                    </label>
                  </td>
                  <td>
                    <input type="text" id="memberUserName" v-model="memberDetail.username">
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="memberPassword">
                      登入密碼
                    </label>
                  </td>
                  <td>
                    <input type="text" id="memberPassword" v-model="memberDetail.password">
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="memberNickName">
                      員工姓名
                    </label>
                  </td>
                  <td>
                    <input type="text" id="memberNickName" v-model="memberDetail.nickname">
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="memberPhone">
                      電話
                    </label>
                  </td>
                  <td>
                    <input type="text" id="memberPhone" v-model="memberDetail.phone">
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="memberGroup">
                      員工群組
                    </label>
                  </td>
                  <td>
                    <select name="" id="memberGroup" v-model="memberDetail.group">
                      <option disabled value="0">
                        請選擇
                      </option>
                      <option value="1">
                        新進
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="memberLineId">
                      Line ID
                    </label>
                  </td>
                  <td>
                    <input type="text" id="memberLineId" v-model="memberDetail.line_id">
                  </td>
                </tr>
                <tr>
                  <td class="flex justify-end">
                    <label for="memberNote">
                      備註
                    </label>
                  </td>
                  <td>
                    <textarea
                      type="text"
                      id="memberNote"
                      class="resize-none"
                      v-model="memberDetail.note"
                    >
                    </textarea>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </template>
        <template v-slot:confirmButtonContent>
          新增
        </template>
      </AdminModal>
    </template>
    <template v-slot:content>
      <div class="flex flex-col gap-2">
        <div class="border-[1px] border-gray-400 px-6 py-4">
          <div>
            <form id="memberForm">
              <div>
                <label for="memberInfo">
                  帳號/姓名/電話
                </label>
                <input name="memberInfo" id="memberInfo" type="text" v-model="memberInfo.containString">
              </div>
              <div>
                <label for="memberGroup">
                  員工群組
                </label>
                <select name="memberGroup" id="memberGroup" v-model="memberInfo.group">
                  <option value="新進">新進</option>
                  <option value="試用期">試用期</option>
                </select>
              </div>
              <div>
                <label for="memberState">
                  員工狀態
                </label>
                <select name="memberState" id="memberState" v-model="memberInfo.state">
                  <option value="全部">全部</option>
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
          <table class="filter-table w-full">
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
              <tr v-for="member in members" :key="member.id" class="text-center">
                <td>
                  {{ member.id }}
                </td>
                <td>
                  {{ member.username}}
                </td>
                <td>
                  {{ member.nickname}}
                </td>
                <td>
                  {{ member.phone }}
                </td>
                <td>
                  <span v-if="member.group">
                    {{ member.group.name }}
                  </span>
                </td>
                <td>
                  {{ member.main_point }}
                </td>
                <td>
                  {{ member.createdAt }}
                </td>
                <td>
                  
                </td>
                <td>
                  {{ member.note }}
                </td>
                <td>
                  <router-link class="bg-[#2055A5] text-white px-5 py-1" :to="{name: 'AdminMember', params: { memberId: member.id }}">
                    修改
                  </router-link>
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
import { ref, reactive } from 'vue'
import AdminLayout from '../../components/admin/AdminLayout.vue'
import AdminModal from '../../components/admin/AdminModal.vue'
const members = ref([])
const memberInfo = reactive({
  containString: '',
  group: '新進',
  state: '全部',
})

const memberDetail = reactive({
  username: '',
  password: '',
  nickname: '',
  phone: '',
  group: 0,
  line_id: '',
  note: '',
})

const fetchMembers = async () => {
  try {
    const response = await fetch('https://dispatch-net.onrender.com/api/users?fields[0]=username&fields[1]=nickname&fields[2]=phone&fields[3]=main_point&fields[4]=createdAt&fields[5]=note&populate[group][fields]=name&populate[login_logs][sort]=createdAt%3Adesc', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMzE1MjE1NywiZXhwIjoxNzA1NzQ0MTU3fQ.6MnItXMM70Ce-24W6x1TNSVsko7VR_GcmSZggMQjq9A',
      },
    })
    const data = await response.json()
    if (data?.error) throw new Error(data?.error?.message || 'fetch error')
    members.value = data
  } catch (err) {
    console.log(err)
  }
}

fetchMembers()

const addMember = async () => {
  try {
    let { username, password, nickname, phone, group, line_id, note} = memberDetail
    if (!username || !password || !nickname || !phone || group === 0) throw new Error('欄位不得為空白')
    group = Number(group)
    console.log(typeof group, group)
    const response = await fetch('https://dispatch-net.onrender.com/api/auth/local/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMzE1MjE1NywiZXhwIjoxNzA1NzQ0MTU3fQ.6MnItXMM70Ce-24W6x1TNSVsko7VR_GcmSZggMQjq9A',
      },
      body: JSON.stringify({
        username,
        password,
        nickname,
        phone,
        group,
        line_id,
        note,
      }),
    })
    const data = await response.json()
    console.log(data)
    if (data?.error) throw new Error(data.error.message)
    members.value.push({
      id: data?.user.id || 0,
      username,
      nickname,
      phone,
      group,
      main_point: 0,
      note,
      createdAt: data.user.createdAt,
    })
    Object.assign(memberDetail, {
      username: '',
      nickname: '',
      password: '',
      phone: '',
      group: 0,
      line_id: '',
      note: '',
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

<style scoped>
.filter-table th {
  padding: 8px;
}
.filter-table td {
  padding: 4px
}
.filter-table td, .filter-table th {
  border: 1px solid;
  @apply border-gray-400;
}

form td {
  @apply py-1;
}

form input, form textarea {
  @apply border-[1px];
  @apply border-gray-300;
  @apply h-8;
}

form table label {
  @apply pr-1;
  @apply inline-block;
  @apply text-right;
  @apply w-full;
}
</style>