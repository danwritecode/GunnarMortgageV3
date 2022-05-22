<template>
  <div class="overflow-hidden">
    <div class="relative h-96 bg-gray-100">
      <div :key="n" v-for="n in [1,2,3,4]" class="item absolute p-16 bg-zinc-500 text-white font-black">
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  background: null,
  rails: true
})

</script>

<style>
.item {
  animation: slide-item 10s infinite;
  /* animation-timing-function: cubic-bezier(1, 1, 1, 1); */
  animation-delay: 1s;
  opacity: 0;
}

/* .item:nth-child(n) { animation-delay: 1s; } */


@keyframes slide-item {
    0% { right: 150%; opacity: 1; }
   36% { right:  50%; opacity: 1; }
   72% { right: -50%; opacity: 1; }
  100% { right: -50%; }
}
</style>