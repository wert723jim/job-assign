<template>
  <UserLayout>
    home page
    商品列表
    <UserProduct />
  </UserLayout>
</template>

<script setup>
// import ref from 'vue'
import UserLayout from '@/components/user/Layout.vue'
import UserProduct from '@/components/user/product.vue'

// const productList = ref(null)

// const getProducts = async () => {
//   const res = await fetch('https://dispatch-net.onrender.com/api/products')
//   const data = await res.json()
//   console.log(data)
//   productList.value = data
// }
// getProducts()

</script>