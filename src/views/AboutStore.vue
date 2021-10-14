<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>mapState {{ num }}</p>
    <p>mapGetter {{ getNum }}</p>
  </div>
</template>
<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

// mapState
const { num } = toRefs(store.state)

// mapGetters
const { getNum } = toRefs(store.getters)

console.log(store._mutations)
// mapMutation
const { NUM_MUTAION: [NUM_MUTAION], NUM_MUTAION2: [NUM_MUTAION2] } = store._mutations
NUM_MUTAION(456)
NUM_MUTAION2(789)

// mapAction
const { numAction: [numAction] } = store._actions
numAction(789)
</script>
