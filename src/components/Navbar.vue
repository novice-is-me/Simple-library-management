<script >
import { useUserStore } from '@/stores/UserStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

export default{
    setup(){
        const user = useUserStore();
        const isAdmin = user.isAdmin;
        const logout = user.logoutUser;
        const loginUser = user.getUser;
        const router = useRouter();
        const toast = useToast();
        const isLogin = computed(() => user.getLoginUser);

        const links = [
            { name: 'Home', path: '/'},
            { name: 'Books', path: '/books'},
        ]

        const handleLogout = () => {
            if(localStorage.getItem('loginUser') === null){
                router.push('/login')
            }else{
                logout();
                toast.success('Logged out successfully');
                router.push('/login')
            }
        }

        return {
            links,
            isAdmin,
            handleLogout,
            loginUser,
            isLogin
        }
        
    }
}
</script>

<template>
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex shrink-0 items-center">
                        <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <router-link v-for="link in links" :key="link.name" :to="link.path" class="rounded-md px-3 py-2 text-sm font-medium text-white" active-class=" bg-gray-900"  aria-current="page">
                                {{ link.name }}
                            </router-link>
                            <router-link :to="'/admin'" v-if="isAdmin" class="rounded-md px-3 py-2 text-sm font-medium text-white" active-class=" bg-gray-900"  aria-current="page">Manage</router-link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <!-- Profile dropdown -->
                    <div class="relative ml-3">
                        <div >
                            <button v-if="isLogin" type="button" class="relative flex rounded-full text-sm   text-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true" @click.prevent="handleLogout">
                               Logout
                            </button>

                            <button v-if="isLogin === null" type="button" class="relative flex rounded-full text-sm   text-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true" @click.prevent="handleLogout">
                               Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>