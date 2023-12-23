<template>
  <UserLayout>
    <AnnouncementContent
      :content="an.content"
      :createdAt="an.createdAt"
    />
  </UserLayout>
</template>

<script setup>
import UserLayout from '@/components/user/Layout.vue'
import AnnouncementContent from '@/components/user/AnnouncementContent.vue'

import { onMounted } from 'vue'

const an = {
  'title': '測試公告',
  'type': 'TOP',
  'start': '2023-12-22T16:00:00.000Z',
  'end': '2023-12-26T16:00:00.000Z',
  'content': '測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文測試公告內文',
  'createdAt': '2023-12-23T06:05:42.519Z',
  'updatedAt': '2023-12-23T06:06:53.903Z',
  'publishedAt': '2023-12-23T06:06:53.822Z'
}


onMounted(async () => {
  const res = await fetch('/api/announcements')
  const data = await res.json()
  console.log(data)

})
</script>