<script setup>
import Navbar from './components/Navbar.vue'
import booksData from './data'
import { onMounted, provide, ref } from 'vue'

const allBooks = ref(booksData.booksData)
const availableBooks = ref()
const user = ref([])

onMounted( async () => {
  await getAvailBooks()

  console.log('User1:', user.value)
  // Getting user from local storage
  const storedUser = JSON.parse(localStorage.getItem('users'))
  if(storedUser){
    user.value = storedUser
  }

  console.log('User2:', user.value)
})

console.log('User3:', user.value)

// For registration user
const registerUser = (newUser) => {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  storedUsers.push({
    name: newUser.name,
    password: newUser.password,
    isAdmin: newUser.isAdmin
  });
  localStorage.setItem('users', JSON.stringify(storedUsers));
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
