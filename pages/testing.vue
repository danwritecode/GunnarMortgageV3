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
