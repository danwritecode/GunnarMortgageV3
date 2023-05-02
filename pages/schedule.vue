<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-10">
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate lg:text-4xl">Schedule a call with Gunnar</h2>
        <p class="text-zinc-500">Select a day on the right hand calendar to view Gunnar's availability, then click Add Event to pick your time.</p>
      </div>
    </div>
    <div class="mt-5 flex h-full flex-col max-h-[70vh]">
      <header class="relative z-20 flex flex-none items-center justify-between border-b border-gray-200 py-4">
        <div>
          <h1 class="text-lg font-semibold leading-6 text-gray-900">
            <time datetime="2022-01-22" class="sm:hidden">Jan 22, 2022</time>
            <time datetime="2022-01-22" class="hidden sm:inline">January 22, 2022</time>
          </h1>
          <p class="mt-1 text-sm text-gray-500">Saturday</p>
        </div>
        <div class="flex items-center">
          <div class="flex items-center rounded-md shadow-sm md:items-stretch">
            <button type="button" class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
              <span class="sr-only">Previous month</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block">Today</button>
            <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button type="button" class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
              <span class="sr-only">Next month</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" class="relative">
              <MenuButton type="button" class="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                Day view
                <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              </MenuButton>

              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Day view</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Week view</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Month view</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Year view</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <div class="ml-6 h-6 w-px bg-gray-300" />
            <button type="button" class="ml-6 rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">Schedule call</button>
          </div>
          <Menu as="div" class="relative ml-6 md:hidden">
            <MenuButton class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Open menu</span>
              <DotsHorizontalIcon class="h-5 w-5" aria-hidden="true" />
            </MenuButton>

            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Create event</a>
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Go to today</a>
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Day view</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Week view</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Month view</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Year view</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </header>
      <div class="flex flex-auto overflow-hidden bg-white">
        <div ref="container" class="flex flex-auto flex-col overflow-auto">
          <div ref="containerNav" class="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden">
            <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
              <span>W</span>
              <!-- Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-lime-600", Today (Selected): "bg-lime-600 text-white" -->
              <span class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">19</span>
            </button>
            <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
              <span>T</span>
              <span class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-lime-600">20</span>
            </button>
            <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
              <span>F</span>
              <span class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">21</span>
            </button>
            <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
              <span>S</span>
              <span class="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">22</span>
            </button>
            <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
              <span>S</span>
              <span class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">23</span>
            </button>
            <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
              <span>M</span>
              <span class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">24</span>
            </button>
            <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
              <span>T</span>
              <span class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">25</span>
            </button>
          </div>
          <div class="flex w-full flex-auto">
            <div class="w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div class="grid flex-auto grid-cols-1 grid-rows-1">
              <!-- Horizontal lines -->
              <div class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100" style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))">
                <div ref="containerOffset" class="row-end-1 h-7"></div>
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">12AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">1AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">2AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">3AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">4AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">5AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">6AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">7AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">8AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">9AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">10AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">11AM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">12PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">1PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">2PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">3PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">4PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">5PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">6PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">7PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">8PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">9PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">10PM</div>
                </div>
                <div />
                <div>
                  <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">11PM</div>
                </div>
                <div />
              </div>

              <!-- Events -->
              <ol class="col-start-1 col-end-2 row-start-1 grid grid-cols-1" style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto">
                <li class="relative mt-px flex" style="grid-row: 1 / span 110">
                  <span class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-zinc-100 p-2 text-xs leading-5">
                    <p class="order-1 font-semibold text-gray-700">Out of Office</p>
                  </span>
                </li>
                <li class="relative mt-px flex" style="grid-row: 229 / span 60">
                  <span href="#" class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-zinc-100 p-2 text-xs leading-5">
                    <p class="order-1 font-semibold text-gray-700">Out of Office</p>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="hidden w-1/2 max-w-md flex-none border-l border-gray-100 py-10 px-8 md:block">
          <div class="flex items-center text-center text-gray-900">
            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Previous month</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            <div class="flex-auto font-semibold">January 2022</div>
            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Next month</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            <button v-for="(day, dayIdx) in days" :key="day.date" type="button" :class="['py-1.5 hover:bg-gray-100 focus:z-10', day.isCurrentMonth ? 'bg-white' : 'bg-gray-50', (day.isSelected || day.isToday) && 'font-semibold', day.isSelected && 'text-white', !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900', !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400', day.isToday && !day.isSelected && 'text-lime-600', dayIdx === 0 && 'rounded-tl-lg', dayIdx === 6 && 'rounded-tr-lg', dayIdx === days.length - 7 && 'rounded-bl-lg', dayIdx === days.length - 1 && 'rounded-br-lg']">
              <time :datetime="day.date" :class="['mx-auto flex h-7 w-7 items-center justify-center rounded-full', day.isSelected && day.isToday && 'bg-lime-600', day.isSelected && !day.isToday && 'bg-gray-900']">{{ day.date.split('-').pop().replace(/^0/, '') }}</time>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

definePageMeta({
  background: null,
  rails: true
})

const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true, isToday: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]

const container = ref(null)
const containerNav = ref(null)
const containerOffset = ref(null)

onMounted(() => {
  // Set the container scroll position based on the current time.
  const currentMinute = new Date().getHours() * 60
  container.value.scrollTop =
    ((container.value.scrollHeight - containerNav.value.offsetHeight - containerOffset.value.offsetHeight) *
      currentMinute) /
    1440
})
</script>