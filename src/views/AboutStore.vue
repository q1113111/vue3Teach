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

// mapMutation
const { NUM_MUTAION: [NUM_MUTAION] } = store._mutations
NUM_MUTAION(456)

// mapAction
const { numAction: [numAction] } = store._actions
numAction(789)
</script>
