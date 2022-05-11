<template>
  <!-- <div class="relative grid grid-cols-2 min-h-screen">
    <div class="absolute w-full pt-6">
      <h1 class="left-8 top-10 font-black text-9xl text-white mix-blend-difference text-center">So who is Gunnar, really?</h1>
    </div>
    <div class="bg-white flex justify-end">
      <div class="h-full w-[768px] px-4 sm:px-6 lg:px-8">

      </div>
    </div>
    <div class="bg-[url('~/assets/img/cartographer.webp')] mix-blend-difference ">
      <div class="h-full w-[768px] px-4 sm:px-6 lg:px-8">

      </div>
    </div>
  </div> -->

  <!-- <div class="grid grid-cols-2 min-h-[90vh]">
    <div class="relative bg-white">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-[url('~/assets/img/cartographer.webp')]"></div>
      <div class="h-full w-[768px] px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <h1 class="left-8 top-10 font-black text-9xl text-white mix-blend-difference text-center max-w-xs">So who is Gunnar, really?</h1>
      </div>
    </div>
    <div>
      <div class="h-full w-[768px] px-4 sm:px-6 lg:px-8">

      </div>
    </div>
  </div> -->

<div class="relative">
  <div class="absolute inset-x-0 bottom-0 h-1/2 bg-[url('~/assets/img/cartographer.webp')]"></div>
  <div class="grid grid-cols-6 min-h-[90vh] max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-start bg-white col-span-2">
      <h1 class="left-8 top-10 font-black text-9xl text-white mix-blend-difference text-center max-w-xs">So who is Gunnar, really?</h1>
    </div>
    <div class="relative col-span-4 grid grid-cols-1">
      <div class="bg-blue-500">

      </div>
      <div class="bg-red-500">

      </div>
    </div>
  </div>
</div>
</template>

<script setup>
definePageMeta({
  background: null,
  rails: false
})

</script>