<template>
  <button @click="getRouter">
    getRoutet
  </button>
  <button @click="push">
    push
  </button>
  <button @click="replace">
    replace
  </button>
  <button @click="go">
    go
  </button>
  <br>
  <p />
  <button @click="addRoute">
    路由建置
  </button>
</template>
<script>
export default {
  methods: {
    getRouter () {
      console.log(this.$route)
    },
    push () {
      this.$router.push({ name: 'a2b' })
    },
    replace () {
      this.$router.replace({ name: 'a2b' })
    },
    go () {
      this.$router.go(-1)
    },
    async addRoute () {
      await this.$router.addRoute({
        path: '/sabout',
        name: 'sAbout',
        component: () => import('./AboutStore.vue')
      })
      this.$router.push({ name: 'sAbout' })
    }
  }
}
</script>
