<template>
  <h1>customRef</h1>
  <input v-model="text">
  <br>
  <h1>shallowRef</h1>
  <button @click="shallowSet">
    修改
  </button>
  {{ foo }}
</template>
<script setup>
import { customRef, shallowRef, triggerRef } from 'vue'

const useRef = (value, delay = 2000) => {
  let timeout
  return customRef((track, trigger) => {
    return {
      get () {
        track()
        return value
      },
      set (newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue + 'API'
          trigger()
        }, delay)
      }
    }
  })
}
const text = useRef('hello')

const foo = shallowRef({ name: 'sam' })
const shallowSet = () => {
  foo.value.name = 'AS'
  triggerRef(foo)
}
</script>
