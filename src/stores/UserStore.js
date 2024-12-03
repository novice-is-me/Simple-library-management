import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: [],
    }),
    getters: {
        getUser(){
            return this.users
        },
        isAdmin(){
            if(this.users.isAdmin === true){
                return this.users
            }
        }
    },
    actions: {
        loginUser(value){
            for(let i = 0; i < this.users.length; i++){
                if(value[i].name === this.users[i].name && value[i].password === this.users[i].password){
                    console.log('Login successful')
                    localStorage.setItem('loginUser', JSON.stringify(this.users[i]))
                }else{
                    console.log('Login failed')
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