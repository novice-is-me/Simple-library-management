<script setup>
import { inject } from 'vue';

const availableBooks = inject('availableBooks');
console.log(availableBooks.value);

// get the user and check if admin or not, then assigned it to the availableBooks, if admin then all books will be shown

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
                            <tr v-for="book in availableBooks" :key="book.name">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{{ book.name }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-black">{{ book.genre }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-black">{{ book.status }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <a class="me-2 hover:cursor-pointer bg-blue-400 px-3 py-2 rounded">View</a>
                                    <a class="me-2 hover:cursor-pointer bg-green-400 px-3 py-2 rounded">Edit</a>
                                    <a class=" hover:cursor-pointer bg-red-400 px-3 py-2 rounded">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>