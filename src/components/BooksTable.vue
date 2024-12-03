<script>
import { useBookStore } from '@/stores/BookStore';
import Modal from './Modal.vue';
import DeleteModal from './DeleteModal.vue';
import EditModal from './EditModal.vue';

export default {
    components: {
        Modal,
        DeleteModal,
        EditModal
    },
    setup(){
        const bookStore = useBookStore();
        
        const { getAvailBooks } = bookStore;
        
        return {
            bookStore,
            getAvailBooks
        }
    }
}
</script>

<template>
    <div class="">
        <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="border rounded-lg overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead>
                            <tr>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-blue-500 uppercase">Book Name</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-blue-500 uppercase">Genre</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-blue-500 uppercase">Status</th>
                                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-blue-500 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                            <tr v-for="book in getAvailBooks" :key="book.name">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{{ book.name }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-black">{{ book.genre }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-black">{{ book.status }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <Modal :name="book.name" :genre="book.genre" :status="book.status"/>
                                    <EditModal :index="book.index" :name="book.name" :genre="book.genre" :status="book.status"/>
                                    <DeleteModal />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>