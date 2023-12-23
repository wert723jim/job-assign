<template>
  <form
    id="memberForm"
    class="space-y-2"
    @submit.prevent="handleSubmit"
  >
    <div>
      <label for="memberInfo">
        帳號/姓名/電話
      </label>
      <input
        name="memberInfo"
        id="memberInfo"
        class="ml-3 px-2 h-8 border"
        type="text"
        v-model="queryData.info"
      >
    </div>
    <div>
      <label for="memberGroup">
        員工群組
      </label>
      <select
        name="memberGroup"
        id="memberGroup"
        class="mx-3 w-[70px] text-sm bg-gray-300 p-1 rounded-xl"
        v-model="queryData.group"
      >
        <option value="">全部</option>
        <option
          v-for="group in options.group"
          :key="group.id"
          :value="group.id"
        >{{ group.name }}</option>
      </select>
    </div>
    <div>
      <label for="memberState">
        員工狀態
      </label>
      <select
        name="memberState"
        id="memberState"
        class="mx-3 w-[70px] text-sm bg-gray-300 p-1 rounded-xl"
        v-model="queryData.isActive"
      >
        <option value="">全部</option>
        <option value="true">停用</option>
        <option value="false">啟用</option>
      </select>
    </div>
    <div>
      <button class="bg-[#2055A5] text-white px-5 py-1">查詢</button>
    </div>
  </form>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import getTokenAndHeader from '@utils/getTokenAndHeader.js'
import { useRouter } from 'vue-router'

const { headers } = getTokenAndHeader()

const queryData = reactive({
  info: undefined,
  groupId: undefined,
  isActive: undefined
})

const options = reactive({
  group: [],
})


onMounted(async () => {
  const baseUrl = import.meta.env.VITE_BACKEND_HOST
  const res = await fetch(baseUrl + '/api/groups?fields[0]=name', { headers })
  const { data } = await res.json()

  options.group = data?.map(group => ({ id: group.id, name: group.attributes.name }))
})

const router = useRouter()
const handleSubmit = () => {
  router.push({
    query: {
      info: queryData.info || undefined,
      group: queryData.group || undefined,
      isActive: queryData.isActive || undefined,
    }
  })

}

</script>