<template>
  <nav class="bg-white shadow-md fixed top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="/src/assets/image/bo1.jpg" alt="Logo"
            class="w-[10%] bg-amber-300 m-2 rounded-[150%] object-contain" />
          <div class="text-xl font-bold text-blue-600">PHOEM SOMBO</div>
        </div>
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6">
          <a href="#home" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" class="text-gray-700 hover:text-blue-600">About US</a>
          <Menu as="div" class="relative inline-block">
            <MenuButton
              class="inline-flex w-full text-gray-900 hover:text-blue-600 cursor-pointer">
              Services
              <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
            </MenuButton>

            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                  <a href="#skills"
                    :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Myskill</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#Front_end"
                    :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Front-end</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#Back_end"
                    :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Back-end</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#databases"
                    :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Databases</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#os"
                    :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Operating systems</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <a href="#contacts" class="text-gray-700 hover:text-blue-600">Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white shadow">
      <a href="#" class="block text-gray-700 hover:text-blue-600">Home</a>
      <a href="#" class="block text-gray-700 hover:text-blue-600">About</a>
      <a href="#" class="block text-gray-700 hover:text-blue-600">Contact</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>