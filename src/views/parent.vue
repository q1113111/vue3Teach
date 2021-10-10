<template>
  我是父層roter
  <router-link :to="{name:'A'}">
    A
  </router-link>
  |
  <router-link :to="{name:'B'}">
    B
  </router-link>
  |
  <router-link :to="{name:'a2b',query:{id:123}}">
    nameRouter
  </router-link>
  <br>
  <router-view />
</template>
