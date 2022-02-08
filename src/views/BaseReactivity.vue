<template>
  789
</template>
<script setup>
import { readonly, reactive, ref, isReactive, toRaw, markRaw, shallowReactive, shallowReadonly, isReadonly } from 'vue'
const original = reactive({ count: 0 })
const copy = readonly(original)
original.count++
copy.count++ // 會報錯

// 也可以複製ref
const raw = {
  count: ref(123)
}
const copy2 = readonly(raw)
console.log(raw.count.value) // 123
console.log(copy2.count) // 123

// isReactive
const state = reactive({ name: 'Sam' })
const plain = readonly({ name: 'mary' })
console.log(isReactive(plain)) // -> false
const stateCopy = readonly(state)
console.log(isReactive(stateCopy)) // -> true

// toRaw
const toraw = { name: 'ss' }
const reactiveRaw = reactive(toraw)
console.log(toRaw(reactiveRaw) === toraw) // true

// markRaw
const mark = markRaw({})
console.log(isReactive(reactive(mark))) // false
const bar = reactive({ mark })
console.log(isReactive(bar.mark))// false

// shallowReactive
const reactiveShallow = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})
console.log(isReactive(reactiveShallow.foo))

// shallowReadonly
const readonlyShallow = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2
  }
})
readonlyShallow.foo++ // error
console.log(isReadonly(readonlyShallow))
readonlyShallow.nested.bar++ // work
</script>
