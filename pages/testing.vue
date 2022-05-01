<template>
  <div class="min-h-[91.3vh] flex items-center">
    <div class="md:flex items-center md:space-x-16 lg:space-x-20 2xl:space-x-32 sm:py-24">
      <div class="bg-red-500 h-24 w-24 sm:h-40 sm:w-40 md:h-64 md:w-64 lg:h-72 lg:w-72 2xl:h-96 2xl:w-96 rounded-full shrink-0 flex items-center justify-center">
        <span class="text-4xl sm:text-6xl md:text-9xl font-black text-turq-500">01</span>
      </div>
      <div class="mt-4 sm:mt-8 md:mt-0">
        <h1 class="text-4xl md:text-5xl lg:text-6xl 2xl:text-9xl font-black text-turq-500">Pre-approval</h1>
        <p class="mt-4 text-zinc-300 lg:text-lg 2xl:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="mt-6 flex items-center space-x-10">
          <div>
            <span class="text-xs uppercase text-zinc-400">Difficulty</span>
            <div class="flex space-x-1">
              <div class="h-6 w-4 bg-green-500"></div>
              <div class="h-6 w-4 bg-yellow-500"></div>
              <div class="h-6 w-4 bg-red-500"></div>
            </div>
          </div>
          <div>
            <span class="text-xs uppercase text-zinc-400">TIME</span>
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-zinc-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-turq-500 font-semibold">2-3 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Arrows -->
    <div class="hidden md:absolute w-full h-1/4 top-0 md:flex items-center justify-center">
      <button class="text-red-500 hover:text-red-600 transition-hover-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>

    <div class="hidden md:absolute w-full h-1/4 bottom-0 md:flex items-center justify-center">
      <button class="text-red-500 hover:text-red-600 transition-hover-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <!-- Airplane -->
    <!-- <div class="absolute w-1/6 h-full right-0 flex items-center justify-center">
      <img src="~/assets/img/airplane_01.svg" alt="" class="w-auto">
    </div> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dark'
})
</script>