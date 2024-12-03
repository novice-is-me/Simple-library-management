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

        const getAllBooks = computed(() => bookStore.getAllBooks);

        return {
            bookStore,
            isAdmin,
            getAllBooks
        }
    }
}
</script>

<template>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-10">
        <div class=" my-5">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">All Books in System</h2>
            <h4 class="mt-2 text-lg/8 text-gray-600">Admin Side</h4>
        </div>
        <BooksTable :books="getAllBooks"/>
    </div>
</template>