import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
        loginUserData: null
    }),
    getters: {
        getUser(){
            return this.users
        },
        getLoginUser(){
            return this.loginUserData = JSON.parse(localStorage.getItem('loginUser'))
        },
        isAdmin(){
            const isAdmin = JSON.parse(localStorage.getItem('loginUser'))
            console.log(isAdmin)
            if(isAdmin != null){
                if(isAdmin.isAdmin === true){
                    console.log(isAdmin)
                    return this.users
                }else{
                    this.users.isAdmin = false
                }
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
        },
        logoutUser(){
            localStorage.removeItem('loginUser')
        }
    }
})