<template>
  <button @click="count++">
    te
  </button>
</template>
<script setup>
import { computed, effectScope, ref, watch, watchEffect } from 'vue'
const count = ref(1)
const plusOne = computed(() => count.value + 1, {
  onTrack (e) {
    // debugger
  },
  onTrigger (e) {
    // debugger
  }
})
console.log(plusOne.value)
count.value++

// effectScope
const scope = effectScope()
const counter = ref(1)
scope.run(() => {
  const doubled = computed(() => counter.value * 2)
  watch(doubled, () => console.log(doubled.value))
  watchEffect(() => console.log('Count', doubled.value))
})
scope.stop()
counter.value++
</script>
