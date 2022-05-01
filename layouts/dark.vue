<template>
  <div class="bg-[url('~/assets/img/cartographer.webp')]">
    <nav>
      <div class="max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center p-4">
        <div class="flex space-x-4">
          <img src="~/assets/img/logos/gm_circle.svg" alt="" class="h-14 w-14">
          <img src="~/assets/img/logos/mm_logo.svg" alt="" class="h-14 w-14">
        </div>
        <div class="hidden bg-red-500 rounded-full py-4 px-10 w-[30rem] md:flex items-center justify-around">
          <nuxt-link to="/" class="text-turq-500 font-medium">Home</nuxt-link>
          <nuxt-link to="/" class="text-turq-500 font-medium">About</nuxt-link>
          <nuxt-link to="/" class="text-turq-500 font-medium">Contact</nuxt-link>
          <nuxt-link to="/" class="text-turq-500 font-medium">Get Started</nuxt-link>
        </div>
        <div class="flex items-center md:hidden">
          <button @click="showMobileNav = true" type="button" class="rounded-md p-2 inline-flex items-center justify-center text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 transition-hover-300" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Nav -->
      <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="showMobileNav" class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg bg-zinc-900 ring-2 ring-zinc-100 ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div class="flex space-x-4">
                <img src="~/assets/img/logos/gm_circle.svg" alt="" class="h-14 w-14">
                <img src="~/assets/img/logos/mm_logo.svg" alt="" class="h-14 w-14">
              </div>
              <div class="-mr-2">
                <button @click="showMobileNav = false" type="button" class="p-2 rounded-md inline-flex items-center justify-center text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 transition-hover-300">
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-turq-600 hover:text-turq-500 hover:bg-zinc-800 transition-hover-300">Product</a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-turq-600 hover:text-turq-500 hover:bg-zinc-800 transition-hover-300">Features</a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-turq-600 hover:text-turq-500 hover:bg-zinc-800 transition-hover-300">Marketplace</a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-turq-600 hover:text-turq-500 hover:bg-zinc-800 transition-hover-300">Company</a>
            </div>
          </div>
        </div>
      </transition>
    </nav>
    <div class="max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMobileNav = ref(false)


</script>