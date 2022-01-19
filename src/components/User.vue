<template>
  <div>
    <h1>User:{{ user.name }}</h1>
    <h1>{{ user.age }}</h1>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    const state = false
    const error = '用户失败'
    setTimeout(() => {
      if (state) {
        resolve({ name: 'sam', age: 18 })
      } else { reject(error) }
    }, 3000)
  })
}
const user = ref()
user.value = await fetchUser()
</script>
