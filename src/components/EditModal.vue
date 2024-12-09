<script>
import { defineProps, ref } from 'vue';
import Dropdown from './Dropdown.vue';
import { useRouter } from 'vue-router';
import { useBookStore } from '@/stores/BookStore';

export default {
    components: {
        Dropdown
    },
    props: {
        index: Number,
        name: String,
        genre: String,
        status: String,
    },
    setup(props) {
        const bookStore = useBookStore();
        
        const isModalOpen = ref(false);
        
        const toggleModal = () => {
            isModalOpen.value = !isModalOpen.value;
        };

        const bookData = ref({
            name: props.name || '',
            genre: props.genre || '',
            status: props.status || '',
        })

        const handleEdit = (index) => {
            toggleModal();
        }
        
        const submitUpdate = () => {
            if(bookData.name === '' || bookData.genre === '' || bookData.status === ''){
                alert('Please fill in all fields');
                return;
            }else{
                bookStore.updateBookDetails(bookData.value, props.index);
                toggleModal();
            }
        }

        const updateStatus = (status) => {
            bookData.value.status = status;
        }

        return {
            isModalOpen,
            toggleModal,
            bookData,
            handleEdit,
            submitUpdate,
            updateStatus
        }
    }
}
</script>

<template>
    <button
    type="button"
    class="me-2 hover:cursor-pointer bg-blue-400 px-3 py-2 rounded"
    @click.prevent="handleEdit(index)"
    >
    Edit
</button>
<div v-if="isModalOpen"
class="fixed inset-0 bg-black bg-opacity-50 z-[80] flex items-center justify-center">
<form class=" bg-white p-4 shadow-lg rounded-lg">
    <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
            <h2 class="font-semibold text-gray-900 text-start text-2xl">Edit Book</h2>
            
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-4">
                    <label for="username" class="block text-sm/6 font-medium text-gray-900 text-start">Book Name</label>
                    <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input type="email" v-model="bookData.name" name="name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6">
                        </div>
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="username" class="block text-sm/6 font-medium text-gray-900 text-start">Genre</label>
                    <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input type="text" v-model="bookData.genre" name="genre" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6">
                        </div>
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="username" class="block text-sm/6 font-medium text-gray-900 text-start">Status</label>
                    <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ">
                            <Dropdown :status="bookData.status" @updateStatus="updateStatus"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" @click.prevent="toggleModal" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
        <button type="submit" @click.prevent="submitUpdate" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
</form>
</div>
</template>