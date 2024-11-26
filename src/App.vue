<script setup>
import Navbar from './components/Navbar.vue'
  console.log('setup')
</script>

<template>
  <header class="">
    <Navbar />
  </header>
  <main>
    <router-view> </router-view>
  </main>
</template>
