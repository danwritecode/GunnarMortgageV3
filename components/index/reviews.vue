<template>
  <div class="py-20 bg-[url('~/assets/img/topography_light.webp')] overflow-hidden">
    <div class="max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex-shrink-0 mb-5">
          <div class="mr-3 relative bg-red-500 h-12 w-12 rounded-md">
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-zinc-900 text-red-500 left-1 bottom-1">
              <svg class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="15" y1="8" x2="15.01" y2="8" />
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
              </svg>
            </div>
          </div>
      </div>
      <div class="relative">
        <h3 id="learn-more" class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-1">
          Let's see what former customers have to say
        </h3>
        <p class="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-600">
          Every mortgage comes with a t-shirt, photo opp, and if you're lucky, a hug.
        </p>
      </div>

      <div class="mt-10">
        <div class="relative h-96">
          <div :key="n" v-for="n in [1,2,3,4,5]" class="item absolute p-16 bg-zinc-500 text-white font-black">
            {{ n }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.item {
  animation: slide-item 20s infinite;
  animation-timing-function: linear;
  opacity: 0;
}

.item:nth-child(1) { animation-delay: 4s; }
.item:nth-child(2) { animation-delay: 8s; }
.item:nth-child(3) { animation-delay: 12s; }
.item:nth-child(4) { animation-delay: 16s; }

@keyframes slide-item {
    0% { left: -50%; opacity: 1; }
  100% { left: 300%; }
}

@media (min-width: 640px) {
  @keyframes slide-item {
      0% { left: -50%; opacity: 1; }
    100% { left: 250%; }
  }
}

@media (min-width: 768px) {
  @keyframes slide-item {
      0% { left: -50%; opacity: 1; }
    100% { left: 225%; }
  }
}

@media (min-width: 1024px) {
  @keyframes slide-item {
      0% { left: -50%; opacity: 1; }
    100% { left: 155%; }
  }
}

@media (min-width: 1280px) {
  @keyframes slide-item {
      0% { left: -50%; opacity: 1; }
    100% { left: 125%; }
  }
}

@media (min-width: 1536px) {
  @keyframes slide-item {
      0% { left: -50%; opacity: 1; }
    100% { left: 125%; }
  }
}

</style>