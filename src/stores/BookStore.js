import { defineStore } from "pinia";

export const useBookStore = defineStore('bookStore', {
    state: () => ({
        books: [
            {
                "index" : 0,
                "name": "The Great Gatsby",
                "genre": "Fiction",
                "status": "Available",
            },
            {
                "index" : 1,
                "name": "1984",
                "genre": "Dystopian",
                "status": "Not Available",
            },
            {
                "index": 2,
                "name": "To Kill a Mockingbird",
                "genre": "Classic",
                "status": "Available",
            },
            {
                "index": 3,
                "name": "The Catcher in the Rye",
                "genre": "Literature",
                "status": "Not Available",
            },
            {
                "index": 4,
                "name": "Harry Potter",
                "genre": "Fiction",
                "status": "Available",
            }
        ]
    }),
    getters: {
        getAvailBooks(){
            return this.books.filter(book => book.status === 'Available')
        },
        getAllBooks(){
            return this.books
        }
    },
    actions: {
        updateBookDetails(updatedInfo, bookId){
            for(let i = 0; i < this.books.length; i++){
                if(this.books[i].index === bookId){
                    this.books[i].name = updatedInfo.name
                    this.books[i].genre = updatedInfo.genre
                    this.books[i].status = updatedInfo.status 
                }
            }
        },
        deleteBook(bookId){
            return this.books = this.books.filter(book => book.index !== bookId)
        }
    }
})