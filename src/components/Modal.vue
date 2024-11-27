<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const props = defineProps({
    name: String,
    genre: String,
    status: String,
})

</script>

<template>
  <!-- Open Modal Button -->
  <button
    type="button"
    class="me-2 hover:cursor-pointer bg-blue-400 px-3 py-2 rounded"
    @click.prevent="toggleModal"
  >
    View
  </button>

  <!-- Modal Wrapper with backdrop -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-[80] flex items-center justify-center"
  >
    <!-- Modal Content -->
    <div class="bg-white sm:w-1/2 rounded-lg shadow-lg p-4">
      <!-- Modal Header with Close Button -->
      <div class="flex justify-between items-center  mb-8">
        <h3 class="font-bold text-gray-800 text-xl">Book Information</h3>
        <button
          type="button"
          class="text-red-500"
          @click="toggleModal"
        >
        <span class="sr-only">Close</span>
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="flex gap-4">
        <p class=" text-[16px] mt-1">Book Name:</p>
        <p class="mt-1 text-gray-800">
          {{ name }}
        </p>
      </div>
      <div class="flex gap-4">
        <p class=" text-[16px] mt-1">Book Genre:</p>
        <p class="mt-1 text-gray-800">
          {{ genre }}
        </p>
      </div>
      <div class="flex gap-4">
        <p class=" text-[16px] mt-1">Status:</p>
        <p class="mt-1 text-gray-800">
          {{ status }}
        </p>
      </div>
      <div class="mt-4 flex justify-end">
        <!-- Close Button -->
        <button
          @click="toggleModal"
          class="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
