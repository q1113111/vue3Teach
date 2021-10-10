<template>
  <div class="home">
    <span
      v-for="item of 1000"
      :key="item"
    >
      <img
        alt="Vue logo"
        src="/未命名.png"
      >
    </span>
    <!-- <HelloWorld /> -->
  </div>
  <div class="box">
    123
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss" scoped>
img{
float: left;
width: 50px;
height: 50px;
}
</style>
