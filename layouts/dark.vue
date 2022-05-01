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
      </div>
    </nav>
    <div class="max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <slot />
    </div>
  </div>
</template>