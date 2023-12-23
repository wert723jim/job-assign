<template>
  <UserLayout>
    <div class="my-4 md:hidden">
      <UserSearchInput />
    </div>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-8 md:mt-[64px]">
      <UserProduct
        v-for="product in productList"
        :key="product.id"
        :product="product"
      />
    </div>
    <div
      v-if="!productList?.length"
      class="text-gray-400 text-center"
    >沒有商品</div>
  </UserLayout>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import UserLayout from '@/components/user/Layout.vue'
import UserProduct from '@/components/user/product.vue'
import UserSearchInput from '@/components/user/SearchInput.vue'

const route = useRoute()
const optionUrl = computed(() => route.query.search && `&filters[$and][1][name][$contains]=${route.query.search}`)

watch(() => route.query, () => getProducts(optionUrl.value))
const productList = ref(null)
const getProducts = async (optionUrl) => {
  const res = await fetch('/api/products?fields[0]=name&fields[1]=url&populate[image][fields]=url&filters[$and][0][isDisplay]=true' + optionUrl)
  const data = await res.json()
  productList.value = data.data
}
getProducts()

</script>