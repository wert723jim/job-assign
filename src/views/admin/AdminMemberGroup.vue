<template>
  <AdminHeader />
  <AdminSider />
  <main class="pl-40 h-full flex flex-col pt-11">
    <div>
      <h2 class="font-semibold text-lg px-3 py-2">員工群組</h2>
    </div>
    <div class="px-3 pb-11 flex-1">
      <div class="h-full border-[1px] border-gray-400 p-2">
        <AdminModal @confirm="addGroup">
          <template v-slot:buttonContent>
            <span
              class="inline-block text-white px-5 py-1 bg-[#2055A5]"
              @click="toGroupDetail('', 0, false)"
            >
              新增員工群組
            </span>
          </template>
          <template v-slot:header>
            新增員工群組
          </template>
          <template v-slot:content>
            <div>
              <form>
                <div class="flex flex-col">
                  <label for="groupName">
                    群組名稱:
                  </label>
                  <input
                    v-model="groupDetail.name"
                    type="text"
                    id="groupName"
                  >
                </div>
                <div class="flex flex-col">
                  <label for="pointBaseLine">
                    門檻點數設定:
                  </label>
                  <input
                    v-model="groupDetail.pointBaseLine"
                    type="number"
                    id="pointBaseLine"
                  >
                </div>
              </form>
            </div>
          </template>
          <template v-slot:confirmButtonContent>
            新增
          </template>
        </AdminModal>
        <div class="mt-4">
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
                <th>
                  功能
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="group in memberGroups"
                :key="group.id"
                class="text-center"
              >
                <td>
                  {{ group.id }}
                </td>
                <td>
                  {{ group.attributes.name }}
                </td>
                <td>
                  0
                </td>
                <td>
                  <input
                    name="defaultGroup"
                    type="checkbox"
                    v-model="group.attributes.isDefault"
                    @click.stop.prevent
                  >
                </td>
                <td>
                  <div class="border-[1px] border-gray-400 text-center">
                    {{ group.attributes.point_baseline }}
                  </div>
                </td>
                <td>
                  <div class="flex gap-2">
                    <AdminModal
                      :group-id="group.id"
                      @confirm="editGroup"
                    >
                      <template v-slot:buttonContent>
                        <span
                          class="inline-block text-white px-5 py-1 bg-[#2055A5]"
                          @click="toGroupDetail(group.attributes.name, group.attributes.point_baseline, group.attributes.isDefault)"
                        >
                          編輯
                        </span>
                      </template>
                      <template v-slot:header>
                        群組編輯
                      </template>
                      <template v-slot:content>
                        <div>
                          <form>
                            <div class="flex flex-col">
                              <label for="groupName">
                                群組名稱:
                              </label>
                              <input
                                v-model="groupDetail.name"
                                type="text"
                                id="groupName"
                              >
                            </div>
                            <div class="flex flex-col">
                              <label for="pointBaseLine">
                                門檻點數設定:
                              </label>
                              <input
                                v-model="groupDetail.pointBaseLine"
                                type="number"
                                id="pointBaseLine"
                              >
                            </div>
                            <div class="flex items-center gap-2">
                              <label for="groupDefault">
                                預設群組
                              </label>
                              <input
                                type="checkbox"
                                v-model="groupDetail.isDefault"
                              >
                            </div>
                          </form>
                        </div>
                      </template>
                      <template v-slot:confirmButtonContent>
                        編輯
                      </template>
                    </AdminModal>
                    <button
                      class="bg-red-600 text-white px-5 py-1"
                      @click.stop.prevent="removeGroup(group.id)"
                    >
                      刪除
                    </button>
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
import fetchWithToken from '@utils/fetchFn'

const memberGroups = ref([])
const groupDetail = reactive({
  name: '',
  pointBaseLine: 0,
  isDefault: false,
})

const fetchMemberGroup = async () => {
  const { data } = await fetchWithToken('/api/groups?fields[0]=name&fields[1]=isDefault&fields[2]=point_baseline&populate[users][count]=1')
  memberGroups.value = data
}

fetchMemberGroup()

const addGroup = async () => {
  try {
    if (!groupDetail.name) {
      throw new Error('員工群組名稱不能為空白')
    }
    const response = await fetch('https://dispatch-net.onrender.com/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMzE1MjE1NywiZXhwIjoxNzA1NzQ0MTU3fQ.6MnItXMM70Ce-24W6x1TNSVsko7VR_GcmSZggMQjq9A',
      },
      body: JSON.stringify({
        data: {
          name: groupDetail.name,
          point_baseline: groupDetail.pointBaseLine
        }
      })
    })
    const { data } = await response.json()
    const { id } = data
    const { name, point_baseline, isDefault } = data.attributes

    if (!data) {
      throw new Error('新增群組失敗')
    }

    memberGroups.value.push({
      id,
      attributes: {
        name,
        point_baseline,
        isDefault,
        users: {
          data: {
            attributes: {
              count: 0,
            },
          },
        },
      },
    })
  } catch (err) {
    console.log(err)
  }

}

const toGroupDetail = (name, pointBaseLine, isDefault) => {
  console.log('click')
  groupDetail.name = name
  groupDetail.pointBaseLine = pointBaseLine
  groupDetail.isDefault = isDefault
}

const editGroup = async (id) => {
  try {
    const response = await fetch(`https://dispatch-net.onrender.com/api/groups/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMzE1MjE1NywiZXhwIjoxNzA1NzQ0MTU3fQ.6MnItXMM70Ce-24W6x1TNSVsko7VR_GcmSZggMQjq9A',
      },
      body: JSON.stringify({
        data: {
          name: groupDetail.name,
          point_baseline: groupDetail.pointBaseLine,
          isDefault: groupDetail.isDefault
        }
      })
    })

    const { data } = await response.json()
    if (!data) throw new Error('更新群組失敗')
    const { name, point_baseline, isDefault } = data.attributes

    memberGroups.value = memberGroups.value.map(group => {
      if (group.id === id) {
        group.attributes.name = name
        group.attributes.point_baseline = point_baseline
        group.attributes.isDefault = isDefault
      }
      return group
    })
  } catch (err) {
    console.log(err)
  }

}

const removeGroup = async (id) => {
  try {
    const confirmRemove = confirm('確定刪除群組?')

    if (!confirmRemove) return

    const response = await fetch(`https://dispatch-net.onrender.com/api/groups/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMzE1MjE1NywiZXhwIjoxNzA1NzQ0MTU3fQ.6MnItXMM70Ce-24W6x1TNSVsko7VR_GcmSZggMQjq9A',
      }
    })
    console.log(response)
    const { data } = await response.json()
    if (!data) throw new Error('群組刪除失敗')

    memberGroups.value = memberGroups.value.filter(group => group.id !== id)

  } catch (err) {
    console.log(err)
  }
}
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

form input {
  @apply border-[1px];
  @apply border-gray-300;
  @apply h-8;
}
</style>