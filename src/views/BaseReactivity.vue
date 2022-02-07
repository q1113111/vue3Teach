<template>
  456
</template>
<script setup>
import { readonly, reactive, ref } from 'vue'
const original = reactive({ count: 0 })
const copy = readonly(original)
original.count++
copy.count++ // 會報錯

const raw = {
  count: ref(123)
}
const copy2 = readonly(raw)
console.log(raw.count.value) // 123
console.log(copy2.count) // 123
</script>
