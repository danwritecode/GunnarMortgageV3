<template>
  <div class="relative bg-white">
    <div class="hidden lg:flex absolute inset-x-0 bottom-0 h-1/2 bg-[url('~/assets/img/cartographer.webp')]"></div>
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-10 min-h-[100vh] xl:min-h-[125vh] 2xl:min-h-[100vh] max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative lg:static flex items-center justify-center lg:justify-start bg-white lg:col-span-2 py-40 lg:py-0">
        <div class="lg:hidden absolute inset-x-0 bottom-0 h-1/2 bg-[url('~/assets/img/cartographer.webp')] -mx-4 sm:-mx-6 lg:-mx-8"></div>
        <h1 class="left-8 top-10 font-black text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white mix-blend-difference text-center max-w-xs">So who is Gunnar really?</h1>
      </div>
      <div class="grid grid-cols-1 gap-14 lg:gap-0 2xl:ml-16 lg:col-span-4">
        <div class="relative lg:flex lg:items-center">
          <div class="lg:absolute grid lg:grid-cols-6 gap-6 lg:gap-12 place-items-center">
            <div class="relative bg-red-500 h-32 w-32 md:h-56 md:w-56 2xl:h-64 2xl:w-64 rounded-full col-span-2">
              <img src="~/assets/img/GunnarHeadshot.jpg" alt="" class="absolute -left-2 -top-2 rounded-full h-32 w-32 md:h-56 md:w-56 2xl:h-64 2xl:w-64 object-cover">
            </div>
            <dl class="space-y-3 2xl:space-y-10 col-span-4">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center pt-1">
                    <div class="relative bg-red-500 h-10 w-10 2xl:h-12 2xl:w-12 rounded-md">
                      <div class="absolute flex items-center justify-center h-10 w-10 2xl:h-12 2xl:w-12 rounded-md bg-zinc-800 text-red-500 left-1 bottom-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="ml-16 2xl:text-lg leading-6 font-medium text-zinc-900">Graduated from xyz</p>
                </dt>
                <dd class="2xl:mt-2 ml-16 text-base text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center pt-1">
                    <div class="relative bg-red-500 h-10 w-10 2xl:h-12 2xl:w-12 rounded-md">
                      <div class="absolute flex items-center justify-center h-10 w-10 2xl:h-12 2xl:w-12 rounded-md bg-zinc-800 text-red-500 left-1 bottom-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="ml-16 2xl:text-lg leading-6 font-medium text-zinc-900">Been in business for xyz years</p>
                </dt>
                <dd class="2xl:mt-2 ml-16 text-base text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center pt-1">
                    <div class="relative bg-red-500 h-10 w-10 2xl:h-12 2xl:w-12 rounded-md">
                      <div class="absolute flex items-center justify-center h-10 w-10 2xl:h-12 2xl:w-12 rounded-md bg-zinc-800 text-red-500 left-1 bottom-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="ml-16 2xl:text-lg leading-6 font-medium text-zinc-900">Been in real estate for xyz years</p>
                </dt>
                <dd class="2xl:mt-2 ml-16 text-base text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>
            </dl>
          </div>
        </div>

        <div class="relative lg:flex lg:items-center pt-5">
          <div class="lg:hidden absolute inset-x-0 bottom-0 h-full bg-[url('~/assets/img/cartographer.webp')] -mx-4 sm:-mx-6 lg:-mx-8"></div>
          <div class="lg:absolute grid lg:grid-cols-6 gap-6 lg:gap-12 place-items-center">
            <div class="relative bg-turq-500 h-32 w-32 md:h-56 md:w-56 2xl:h-64 2xl:w-64 rounded-full col-span-2">
              <img src="~/assets/img/GunFlamethrower.jpg" alt="" class="absolute -left-2 -top-2 rounded-full h-32 w-32 md:h-56 md:w-56 2xl:h-64 2xl:w-64 object-cover">
            </div>
            <dl class="space-y-3 2xl:space-y-10 col-span-4">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center pt-1">
                    <div class="relative bg-turq-500 h-10 w-10 2xl:h-12 2xl:w-12 rounded-md">
                      <div class="absolute flex items-center justify-center h-10 w-10 2xl:h-12 2xl:w-12 rounded-md bg-red-500 text-turq-500 left-1 bottom-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821" />
                            <ellipse transform="rotate(45 8.025 16.475)" cx="8.025" cy="16.475" rx="7" ry="3" />
                          <path d="M7.5 16l1 1" />
                          <path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="ml-16 2xl:text-lg leading-6 font-medium text-zinc-100">Eating tons of food</p>
                </dt>
                <dd class="2xl:mt-2 ml-16 text-base text-zinc-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center pt-1">
                    <div class="relative bg-turq-500 h-10 w-10 2xl:h-12 2xl:w-12 rounded-md">
                      <div class="absolute flex items-center justify-center h-10 w-10 2xl:h-12 2xl:w-12 rounded-md bg-red-500 text-turq-500 left-1 bottom-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <circle cx="5" cy="18" r="3" />
                          <circle cx="19" cy="18" r="3" />
                          <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                          <circle cx="17" cy="5" r="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="ml-16 2xl:text-lg leading-6 font-medium text-zinc-100">Riding bikes</p>
                </dt>
                <dd class="2xl:mt-2 ml-16 text-base text-zinc-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center pt-1">
                    <div class="relative bg-turq-500 h-10 w-10 2xl:h-12 2xl:w-12 rounded-md">
                      <div class="absolute flex items-center justify-center h-10 w-10 2xl:h-12 2xl:w-12 rounded-md bg-red-500 text-turq-500 left-1 bottom-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="2" />
                          <line x1="12" y1="14" x2="12" y2="21" />
                          <line x1="10" y1="12" x2="3.25" y2="10" />
                          <line x1="14" y1="12" x2="20.75" y2="10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="ml-16 2xl:text-lg leading-6 font-medium text-zinc-100">Cars are cool</p>
                </dt>
                <dd class="2xl:mt-2 ml-16 text-base text-zinc-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>