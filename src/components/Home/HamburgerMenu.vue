<template>
  <button
    id="hamburger"
    name="hamburger"
    type="button"
    class="block absolute right-4 lg:hidden"
    @click="menuClicked"
    :class="{ 'hamburger-active': hamburger_state }"
  >
    <!-- <span
      v-for="i in 3"
      :key="i"
      class="hamburger-line "
    ></span> -->
    <span class="hamburger-line transition duration-300 origin-top-left"></span>
    <span class="hamburger-line transition duration-300"></span>
    <span
      class="hamburger-line transition duration-300 origin-bottom-left"
    ></span>
  </button>

  <nav  id="nav-menu" class="absolute py-5 bg-tertiary shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-700 lg:dark:bg-transparent" :class="{ 'hidden': !hamburger_state }">
    <ul class="block lg:flex">
      <li class="group">
        <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Home</a>
      </li>
      <li class="group">
        <a href="#about" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Why Us</a>
      </li>
      <li class="group">
        <a href="#syllabus" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Syllabus</a>
      </li>
      <li class="group">
        <a href="#partners" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Partners</a>
      </li>
      <li class="group">
        <a href="#testimonies" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Testimonies</a>
      </li>
      <li class="group">
        <a href="#contact" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Join Now</a>
      </li>
      <li class="flex items-center pl-8 mt-3 mr-3 lg:mt-0" @click="themeStore.checkToggler">
        <div class="flex">
          <span v-if="themeStore.dark_toggle" v-motion-slide-left class=" text-sm text-black">
            <MoonIcon class="size-6" />
          </span>
          <!-- <input type="checkbox" class="hidden" id="dark-toggle" v-model="themeStore.dark_toggle" @click="themeStore.checkToggler">
          <label for="dark-toggle">
            <div class="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
              <div class="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
            </div>
          </label> -->
          <span v-else v-motion-slide-right class="text-sm text-white">
            <SunIcon class="size-6" />
          </span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
const hamburger_state = ref(false);
const menuClicked = () => {
  hamburger_state.value = !hamburger_state.value;
};

// Darkmode toggle
import { useThemeStore } from "../../stores/theme.js";
const themeStore = useThemeStore()
</script>
<style scoped></style>
