<template>
  <div class="relative bg-[url('~/assets/img/topography_light.webp')]">
    <div class="hidden lg:flex absolute inset-x-0 bottom-0 h-1/2 bg-[url('~/assets/img/cartographer.webp')]"></div>
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-10 min-h-[100vh] xl:min-h-[125vh] 2xl:min-h-[100vh] max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative lg:static flex items-center justify-center lg:justify-start lg:col-span-2 py-40 lg:py-0">
        <div class="lg:hidden absolute inset-x-0 bottom-0 h-1/2 bg-[url('~/assets/img/cartographer.webp')] -mx-4 sm:-mx-6 lg:-mx-8"></div>
        <h1 class="left-8 top-10 font-black text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white mix-blend-difference text-center max-w-xs">So who is Gunnar really?</h1>
      </div>
      <div class="grid grid-cols-1 gap-14 lg:gap-0 2xl:ml-16 lg:col-span-4">
        <div class="relative lg:flex lg:items-center">
          <div class="lg:hidden absolute inset-x-0 bottom-0 h-full -mx-4 sm:-mx-6 lg:-mx-8"></div>
          <div class="lg:absolute flex justify-between space-x-10">
            <div>
              <img src="~/assets/img/gun_headshot.jpg" alt="" class="h-56 w-full object-cover rounded-md">
              <div class="mt-3 flex items-center">
                <div class="mr-3 relative bg-lime-500 h-6 w-6 rounded-md">
                  <div class="absolute flex items-center justify-center h-6 w-6 rounded-md bg-zinc-800 text-lime-500 left-0.5 bottom-0.5">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                      <line x1="12" y1="12" x2="12" y2="12.01" />
                      <path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                  </div>
                </div>
                <h1 class="font-black text-lg text-zinc-800">Business Blah Blah</h1>
              </div>
              <p class="text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <img src="~/assets/img/gun_grad.jpg" alt="" class="h-56 w-full object-cover rounded-md">
              <div class="mt-3 flex items-center">
                <div class="mr-3 relative bg-lime-500 h-6 w-6 rounded-md">
                  <div class="absolute flex items-center justify-center h-6 w-6 rounded-md bg-zinc-900 text-lime-500 left-0.5 bottom-0.5">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
                      <circle cx="6" cy="14" r="3" />
                      <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
                    </svg>
                  </div>
                </div>
                <h1 class="font-black text-lg text-zinc-800">Degree Blah Blah</h1>
              </div>
              <p class="text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <img src="~/assets/img/gun_dogs.jpg" alt="" class="h-56 w-full object-cover rounded-md object-top">
              <div class="mt-3 flex items-center">
                <div class="mr-3 relative bg-lime-500 h-6 w-6 rounded-md">
                  <div class="absolute flex items-center justify-center h-6 w-6 rounded-md bg-zinc-900 text-lime-500 left-0.5 bottom-0.5">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" />
                      <path d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" />
                      <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z" />
                    </svg>
                  </div>
                </div>
                <h1 class="font-black text-lg text-zinc-800">Dedicated dog Dad</h1>
              </div>
              <p class="text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        <div class="relative lg:flex lg:items-center pt-5">
          <div class="lg:hidden absolute inset-x-0 bottom-0 h-full bg-[url('~/assets/img/cartographer.webp')] -mx-4 sm:-mx-6 lg:-mx-8"></div>
          <div class="lg:absolute flex justify-between space-x-10">
            <div>
              <img src="~/assets/img/gun_cool.jpg" alt="" class="h-56 w-full object-cover rounded-md">
              <div class="mt-3 flex items-center">
                <div class="mr-3 relative bg-turq-500 h-6 w-6 rounded-md">
                  <div class="absolute flex items-center justify-center h-6 w-6 rounded-md bg-lime-500 text-turq-500 left-0.5 bottom-0.5">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                    </svg>
                  </div>
                </div>
                <h1 class="font-black text-lg text-zinc-200">Gun's pretty cool</h1>
              </div>
              <p class="text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <img src="~/assets/img/gun_jits.jpg" alt="" class="h-56 w-full object-cover rounded-md">
              <div class="mt-3 flex items-center">
                <div class="mr-3 relative bg-turq-500 h-6 w-6 rounded-md">
                  <div class="absolute flex items-center justify-center h-6 w-6 rounded-md bg-lime-500 text-turq-500 left-0.5 bottom-0.5">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <circle cx="18" cy="4" r="1" />
                      <path d="M3 9l4.5 1l3 2.5" />
                      <path d="M13 21v-8l3 -5.5" />
                      <path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
                    </svg>
                  </div>
                </div>
                <h1 class="font-black text-lg text-zinc-200">He'll choke you</h1>
              </div>
              <p class="text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <img src="~/assets/img/gun_dogs.jpg" alt="" class="h-56 w-full object-cover rounded-md object-top">
              <div class="mt-3 flex items-center">
                <div class="mr-3 relative bg-turq-500 h-6 w-6 rounded-md">
                  <div class="absolute flex items-center justify-center h-6 w-6 rounded-md bg-lime-500 text-turq-500 left-0.5 bottom-0.5">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" />
                      <path d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" />
                      <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z" />
                    </svg>
                  </div>
                </div>
                <h1 class="font-black text-lg text-zinc-200">Dedicated dog Dad</h1>
              </div>
              <p class="text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>