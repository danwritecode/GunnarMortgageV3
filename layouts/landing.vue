<template>
  <div>
    <nav class="bg-[url('~/assets/img/cartographer.webp')]">
      <div class="max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center p-4">
        <div class="flex space-x-4">
          <img src="~/assets/img/logos/gm_circle.svg" alt="" class="h-14 w-14">
          <img src="~/assets/img/logos/mm_logo.svg" alt="" class="h-14 w-14">
        </div>
        <div class="bg-red-500 rounded-full p-7 w-[30rem]">

        </div>
      </div>
    </nav>
    <div>
      <slot />
    </div>
  </div>
</template>