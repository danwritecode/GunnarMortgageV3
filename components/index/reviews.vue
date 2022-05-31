<template>
  <div class="py-20 bg-[url('~/assets/img/topography_light.webp')] overflow-hidden">
    <div class="max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex-shrink-0 mb-5">
          <div class="mr-3 relative bg-red-500 h-12 w-12 rounded-md">
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-zinc-900 text-red-500 left-1 bottom-1">
              <svg class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="10" x2="9.01" y2="10" />
                <line x1="15" y1="10" x2="15.01" y2="10" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
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
          <div :key="n" v-for="n in [1,2,3,4,5]" class="absolute item mx-4 rounded-lg bg-white border border-gray-200 shadow-lg hover:shadow-xl w-72 sm:w-[30rem]">
            <div class="p-4 sm:p-8">
              <blockquote>
                <div>
                  <svg class="h-10 w-10 text-gb-600 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p id="reviewText" class="mt-6 text-sm sm:text-base font-medium text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </blockquote>
              <div class="mt-4">
                <div class="inline-flex items-center">
                  <div class="flex-shrink-0 flex">
                    <svg :key="rating" v-for="rating in 5" class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-0 w-full py-3 px-5 sm:py-4 sm:px-6 rounded-b-lg flex items-center bg-gradient-to-br from-red-600 via-red-400 to-indigo-400">
              <div>
                <img class="border-2 border-white w-10 h-10 flex-shrink-0 mx-auto bg-black rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="">
              </div>
              <div class="pl-3">
                <p class="font-black text-white leading-tight">Dan Nelson</p>
                <p class="text-gray-200 text-sm leading-tight">2 days ago</p>
              </div>
            </div>
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
    0% { left: -100%; opacity: 1; }
  100% { left: 350%; }
}

@media (min-width: 640px) {
  @keyframes slide-item {
      0% { left: -100%; opacity: 1; }
    100% { left: 350%; }
  }
}

@media (min-width: 768px) {
  @keyframes slide-item {
      0% { left: -75%; opacity: 1; }
    100% { left: 300%; }
  }
}

@media (min-width: 1024px) {
  @keyframes slide-item {
      0% { left: -50%; opacity: 1; }
    100% { left: 210%; }
  }
}

@media (min-width: 1280px) {
  @keyframes slide-item {
      0% { left: -50%; opacity: 1; }
    100% { left: 175%; }
  }
}

@media (min-width: 1536px) {
  @keyframes slide-item {
      0% { left: -50%; opacity: 1; }
    100% { left: 150%; opacity: 0.5}
  }
}

</style>