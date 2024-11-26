<script setup>
import Navbar from './components/Navbar.vue'
import booksData from './data'
import { onMounted, provide, ref } from 'vue'

const allBooks = ref(booksData.booksData)
const availableBooks = ref()
const user = ref([])

onMounted(() => {
  getAvailBooks()

  // Getting user from local storage
  const storedUser = JSON.parse(localStorage.getItem('user'))
  if(storedUser){
    user.value = storedUser
  }
})

// For registration user
const registerUser = (newUser) => {
  user.value.push({
    name: newUser.name,
    password: newUser.password,
    isAdmin: false
  })
  localStorage.setItem('users', JSON.stringify(user.value))
}

// For available books only
const getAvailBooks = () => {
  availableBooks.value = allBooks.value.filter((book, i) => {
    return book.status === 'Available'
  })
  return availableBooks.value
}

// Passing data to child components
provide('availableBooks', availableBooks)
provide('user', user)
provide('register', registerUser)

</script>

<template>
  <header class="">
    <Navbar />
  </header>
  <main>
    <router-view> </router-view>
  </main>
</template>
