<script>
import BooksTable from '@/components/BooksTable.vue';
import { useBookStore } from '@/stores/BookStore';
import { useUserStore } from '@/stores/UserStore';
import { computed } from 'vue';

export default{
    components: {
        BooksTable
    },
    setup(){
        const bookStore = useBookStore();
        const user = useUserStore();
        const isAdmin = user.isAdmin;

        const getAvailBooks = computed(() => bookStore.getAvailBooks);

        return {
            bookStore,
            isAdmin,
            getAvailBooks
        }
    }
}
</script>
<template>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-10">
        <div class=" my-5">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Available Books in System</h2>
            <p class="mt-2 text-lg/8 text-gray-600">If you want to request book <span class=" text-blue-500 underline hover:cursor-pointer">click here</span></p>
        </div>
        <BooksTable :books="getAvailBooks"/>
    </div>
</template>