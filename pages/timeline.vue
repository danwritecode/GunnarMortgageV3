<template>
  <div class="min-h-[91.3vh] flex items-center pb-16 sm:pb-0">
    <!-- <Transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    > -->
    <div>
      <Transition name="fade" mode="out-in">
        <div :key="curStepIndex" class="md:flex items-center md:space-x-16 lg:space-x-20 2xl:space-x-32 sm:py-24">
          <div class="hidden bg-lime-500 h-14 w-14 sm:h-40 sm:w-40 md:h-64 md:w-64 lg:h-72 lg:w-72 2xl:h-96 2xl:w-96 rounded-full shrink-0 md:flex items-center justify-center">
            <span class="text-4xl sm:text-6xl md:text-9xl font-black text-turq-500">{{ steps[curStepIndex].step }}</span>
          </div>
          <div class="mt-4 sm:mt-8 md:mt-0">
            <div class="flex items-center">
              <div class="mr-4 md:hidden bg-lime-500 h-14 w-14 sm:h-16 sm:w-16 rounded-full shrink-0 flex items-center justify-center">
                <span class="text-4xl sm:text-4xl font-black text-turq-500">{{ steps[curStepIndex].step }}</span>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl 2xl:text-9xl font-black text-turq-500">{{ steps[curStepIndex].title }}</h1>
            </div>
            <p class="mt-4 text-zinc-300 lg:text-lg 2xl:text-xl text-justify">{{ steps[curStepIndex].description }}</p>
            <div class="mt-6 flex items-center space-x-10">
              <div>
                <span class="text-xs uppercase text-zinc-400">Difficulty</span>
                <div class="flex space-x-1">
                  <div v-if="steps[curStepIndex].difficulty >= 1" class="h-6 w-4 bg-green-500"></div>
                  <div v-if="steps[curStepIndex].difficulty >= 2" class="h-6 w-4 bg-yellow-500"></div>
                  <div v-if="steps[curStepIndex].difficulty >= 3" class="h-6 w-4 bg-lime-500"></div>
                </div>
              </div>
              <div>
                <span class="text-xs uppercase text-zinc-400">TIME</span>
                <div class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-zinc-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-turq-500 font-semibold">{{ steps[curStepIndex].time_desc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Mobile Step Buttons -->
      <div class="mt-20 sm:mt-0 md:hidden grid grid-cols-2 gap-4">
        <button v-if="curStepIndex !== 0" @click="curStepIndex--" type="button" class="text-center px-4 py-2 border border-lime-500 shadow-sm text-sm font-medium rounded-md text-lime-500 hover:text-lime-600 hover:border-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600 ring-offset-zinc-900 transition-hover-300">Previous</button>
        <button v-else disabled type="button" class="text-center px-4 py-2 border border-zinc-500 shadow-sm text-sm font-medium rounded-md text-zinc-500">Previous</button>
        <button v-if="curStepIndex + 1 < steps.length" @click="curStepIndex++" type="button" class="text-center px-4 py-2 border border-lime-500 shadow-sm text-sm font-medium rounded-md text-lime-500 hover:text-lime-600 hover:border-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600 ring-offset-zinc-900 transition-hover-300">Next</button>
        <button v-else disabled type="button" class="text-center px-4 py-2 border border-zinc-500 shadow-sm text-sm font-medium rounded-md text-zinc-500">Next</button>
      </div>
    </div>

    <!-- Arrows -->
    <div class="hidden md:absolute w-full h-1/4 inset-x-0 top-0 md:flex items-center justify-center">
      <button v-if="curStepIndex !== 0" @click="curStepIndex--" class="text-lime-500 hover:text-lime-600 transition-hover-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>

    <div class="hidden md:absolute w-full h-1/4 inset-x-0 bottom-0 md:flex items-center justify-center">
      <button v-if="curStepIndex + 1 < steps.length" @click="curStepIndex++" class="text-lime-500 hover:text-lime-600 transition-hover-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <!-- Airplane -->
    <div class="opacity-75 absolute w-2/3 h-1/2 sm:w-2/3 sm:h-2/3 md:w-1/2 md:h-1/2 xl:w-1/3 xl:h-1/2 top-0 right-0 flex items-center justify-center z-0 pb-40 sm:pb-24 lg:pb-0 2xl:pb-24">
      <img src="~/assets/img/airplane_02.svg" alt="" class="w-full h-full">
    </div>
  </div>
</template>

<script setup lang="ts">
import 'animate.css';

definePageMeta({
  background: 'dark',
  rails: true
})

const curStepIndex = ref(0)

const steps = [
  { step: 1, title: "Pre-approval", time_desc: "2-3 days", difficulty: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { step: 2, title: "Home Appraisal", time_desc: "4-5 days", difficulty: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
]
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>