<template>
  <h2 @click="left='test'">
    路由命名
  </h2>
  <router-view />
  <router-view :name="left" />
  <router-view :name="right" />
</template>
<script>
export default {
  data () {
    return {
      left: 'left',
      right: 'right'
    }
  }
}
</script>
