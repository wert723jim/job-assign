<template>
  <UserLayout>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-8 mt-[64px]">
      <UserProduct
        v-for="product in productList"
        :key="product.id"
        :product="product"
        @clickFn="clickFn"
      />
    </div>
    <div
      v-if="!productList?.length"
      class="text-gray-400 text-center"
    >沒有商品</div>
    <Modal
      :isOpen="isModalOpen"
      @closeModal="isModalOpen = false"
    />
  </UserLayout>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import UserLayout from '@/components/user/Layout.vue'
import UserProduct from '@/components/user/product.vue'
import Modal from '@/components/Modal.vue'

const isModalOpen = ref(false)
const clickFn = (url) => {
  if (url) {
    window.open(url)
  } else {
    isModalOpen.value = true
  }
}

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