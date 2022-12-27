<template>
  <div :class="getRouteBg()">
    <nav>
      <div class="max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center p-4">
        <div class="z-10 flex space-x-4">
          <img src="~/assets/img/logos/gm_circle.svg" alt="" class="h-12 w-12 sm:h-14 sm:w-14">
          <img src="~/assets/img/logos/mm_logo.svg" alt="" class="h-12 w-12 sm:h-14 sm:w-14">
        </div>
        <div class="flex items-center md:hidden">
          <button @click="showMobileNav = true" type="button" class="z-10 rounded-md p-2 inline-flex items-center justify-center text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 transition-hover-300" aria-expanded="false">
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
                <img src="~/assets/img/logos/gm_circle.svg" alt="" class="h-12 w-12">
                <img src="~/assets/img/logos/mm_logo.svg" alt="" class="h-12 w-12">
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
              <NuxtLink @click="showMobileNav = false" to="/" class="block px-3 py-2 rounded-md text-base font-medium text-turq-600 hover:text-turq-500 hover:bg-zinc-800 transition-hover-300">Home</NuxtLink>
              <NuxtLink @click="showMobileNav = false" to="https://calendly.com/gunnarmortgage/15min?month=2022-12" target="_blank" class="block px-3 py-2 rounded-md text-base font-medium text-turq-600 hover:text-turq-500 hover:bg-zinc-800 transition-hover-300">Get Started</NuxtLink>
            </div>
          </div>
        </div>
      </transition>
    </nav>

    <div :class="getRouteRails()">
      <slot />
    </div>

    <footer class="bg-zinc-800 w-full">
      <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center space-x-6 md:order-3">
          <NuxtLink to="https://facebook.com/GunnarFinancial" target="_blank" class="text-white hover:text-gb-600 transition ease-in-out duration-300">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
          <NuxtLink to="https://instagram.com/gunnar_mortgage" target="_blank"  class="text-white hover:text-gb-600 transition ease-in-out duration-300">
            <span class="sr-only">Instagram</span>
            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
        <div class="mt-8 md:mt-0 md:order-1 flex-col items-center">
          <div class="flex justify-center sm:justify-start items-center text-white">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <NuxtLink to="mailto:gunnar.bolf@movement.com" class="font-medium ml-2">Gunnar.bolf@movement.com</NuxtLink>
          </div>
          <div class="mt-1 flex justify-center sm:justify-start items-center text-white">
            <svg class="h-5 w-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <NuxtLink to="tel:2158708724" class="font-medium ml-2">(215) 870-8724</NuxtLink>
          </div>
        </div>
        <div class="flex items-center justify-center md:order-2 mt-8 md:mt-0">
          <div class="mr-4">
            <p class="text-center text-base leading-6 text-white font-medium">
              NMLS Individual 1368590
            </p>
          </div>
          <div>
            <img src="~/assets/img/logos/nmls.png" alt="" class="w-auto h-12">
          </div>
      </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMobileNav = ref(false)

const curRouteColor = useState('routeColor')
const curRouteRails = useState('routeRails')

const getRouteBg = () => {
  if(curRouteColor.value === 'dark') return "bg-[url('~/assets/img/cartographer.webp')]"
  if(curRouteColor.value === 'light') return "bg-[url('~/assets/img/topography_light.webp')]"
}

const getRouteRails = () => {
  if(curRouteRails.value === true) return "max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
}

</script>
