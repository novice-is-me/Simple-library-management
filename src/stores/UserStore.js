import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    }),
    getters: {
        getUser(){
            return this.users
        },
        isAdmin(){
            const isAdmin = JSON.parse(localStorage.getItem('loginUser'))
            if(isAdmin.isAdmin === true){
                console.log(isAdmin)
                return this.users
            }
        }
    },
    actions: {
        loginUser(value){
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].name === value.email && this.users[i].password === value.password){
                    console.log('Login successful')
                    localStorage.setItem('loginUser', JSON.stringify(this.users[i]))
                }
            }
        },
        registerUser(userInfo){
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            storedUsers.push({
                name: userInfo.name,
                password: userInfo.password,
                isAdmin: false
            });
            localStorage.setItem('users', JSON.stringify(storedUsers));
            console.log('User registered')
        }
    }
})