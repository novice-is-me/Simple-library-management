<script setup>
import Navbar from './components/Navbar.vue'
import { onMounted, provide, ref } from 'vue'

// const allBooks = ref(booksData.booksData)
const availableBooks = ref()
const user = ref([])
const loginUser = JSON.parse(localStorage.getItem('loginUser'))
// const books = JSON.parse(localStorage.getItem('books'))


onMounted( async () => {
  // await getAvailBooks()
  
  console.log('User1:', user.value)
  // Getting user from local storage
  const storedUser = JSON.parse(localStorage.getItem('users'))

  if(storedUser){
    user.value = storedUser
  }

  // console.log('Books', books)
})

// For registration user
const registerUser = (newUser) => {
  console.log('Books:', booksData)
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  storedUsers.push({
    name: newUser.name,
    password: newUser.password,
    isAdmin: newUser.isAdmin
  });
  localStorage.setItem('users', JSON.stringify(storedUsers));
}

// For available books only
// const getAvailBooks = () => {

//   availableBooks.value = books.filter((book, i) => {
//     return book.status === 'Available'
//   })
//   return filteredBooks.value;

// }

// For updating the books
// const updateBookDetails = (updatedInfo, index) => {
//   console.log('App index', index)
//   availableBooks.value.name = updatedInfo.name;
//   availableBooks.value.genre = updatedInfo.genre;
//   availableBooks.value.status = updatedInfo.status;
// }

// Passing data to child components
// provide('availableBooks', availableBooks)
provide('user', user)
provide('register', registerUser)
provide('loginUser', loginUser)
// provide('updateBookDetails', updateBookDetails);

</script>

<template>
  <header class="">
    <Navbar />
  </header>
  <main>
    <router-view> </router-view>
  </main>
</template>
