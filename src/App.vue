<script setup>
import Navbar from './components/Navbar.vue'
import booksData from './data'
import { onMounted, provide, ref } from 'vue'

const allBooks = ref(booksData.booksData)
const availableBooks = ref()

// For available books only
const getAvailBooks = () => {
  availableBooks.value = allBooks.value.filter((book, i) => {
    return book.status === 'Available'
  })
  return availableBooks.value
}

onMounted(() => {
  getAvailBooks()
})

// Passing data to child components
provide('availableBooks', availableBooks)
</script>

<template>
  <header class="">
    <Navbar />
  </header>
  <main>
    <router-view> </router-view>
  </main>
</template>
