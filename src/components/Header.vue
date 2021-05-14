<template>
  <Popover open="true" class="relative bg-nicolaudie-first">
    <div class="mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="https://www.nicolaudie.com/fr/include/css/assets/logos/nicolaudie-architectural-logo-web.svg" alt="" />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-nicolaudie-first rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-nicolaudie-first focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nicolaudie-first">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div as="nav" class="hidden md:flex space-x-10">
          <router-link :to="{ path: 'medias' }" class="text-base font-medium text-nicolaudie-second hover:text-white">
            Medias
          </router-link>
          <router-link :to="{ path: 'meteo' }" class="text-base font-medium text-nicolaudie-second hover:text-white">
            Météo
          </router-link>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-nicolaudie-first border-2 border-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://www.nicolaudie.com/fr/include/css/assets/logos/nicolaudie-architectural-logo-web.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-nicolaudie-first rounded-md p-2 inline-flex items-center justify-center text-white hover:text-nicolaudie-first hover:bg-nicolaudie-first focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nicolaudie-first">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link v-for="item in solutions" :key="item.name" :to="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-nicolaudie-second" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-white">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  HomeIcon,
  AnnotationIcon,
  GlobeIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const solutions = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Médias',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/medias',
    icon: AnnotationIcon,
  },
  {
    name: 'Météo',
    description: "Your customers' data will be safe and secure.",
    href: '/meteo',
    icon: GlobeIcon
  },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
    }
  },
}
</script>
