<template>
  <div id="nav">
    <div class="box" />
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link> |
    <router-link :to="{name:'Parent'}">
      Parent
    </router-link> |
    <router-link :to="{name:'RouterNav'}">
      路由介紹
    </router-link> |
    <router-link :to="{name:'Suspense'}">
      Suspense介紹
    </router-link> |
    <router-link :to="{name:'ref'}">
      refs介紹
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  // height: 300vh;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.box{
  // height: 300vh;
}
</style>
