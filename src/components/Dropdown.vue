<script setup>
import { onMounted, ref } from 'vue';

const showDropdown = ref(false);
const dropdownOptions = ref('');

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
}

const props = defineProps({
    status: String,
});

const emit = defineEmits(['updateStatus']);

onMounted(() => {
    // Set the dropdown options based on the current status
    if (props.status === 'Available') {
        dropdownOptions.value = 'Not Available';
    } else {
        dropdownOptions.value = 'Available';
    }
});

const newOption = () => {
    // Emit the updated status to the parent
    emit('updateStatus', dropdownOptions.value);
    toggleDropdown();
}

</script>

<template>
    <div class="inline-block text-left">
        <div>
            <button @click.prevent="toggleDropdown" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button">
                {{ props.status }}
                <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div v-if="showDropdown" class="absolute bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div class="py-1" role="none">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0" @click.prevent="newOption">{{ dropdownOptions }}</a>
            </div>
        </div>
    </div>
</template>
