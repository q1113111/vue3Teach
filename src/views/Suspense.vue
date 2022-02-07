<template>
  <div class="home">
    <template v-if="error">
      {{ error }}
    </template>
    <Suspense v-else>
      <template #default>
        <User />
      </template>
      <template #fallback>
        <div>loading</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { onErrorCaptured, ref } from 'vue'
import User from '@/components/User.vue'

const error = ref(null)
onErrorCaptured(e => {
  console.log(e)
  error.value = e
  return true
})
</script>

<style lang="scss" scoped>
img{
float: left;
width: 50px;
height: 50px;
}
</style>
