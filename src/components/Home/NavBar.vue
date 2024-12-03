<template>
    <header
      class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10" :class="{ 'navbar-fixed': scrollerStore.isScrolled }"
    >
      <div class="w-full">
        <div class="flex items-center justify-between relative">
          <div class="px-4">
            <a href="#home" class="font-bold text-lg text-primary block py-6"
              >fosan.id</a
            >
          </div>
          <div class="flex items-center px-4">

            <HamburgerMenu />
  
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { onBeforeUnmount, onMounted, ref } from "vue";
  import HamburgerMenu from "./HamburgerMenu.vue";
  import { useScrollerStore } from "../../stores/scroller";
  
  const scrollerStore = useScrollerStore()
  const onScrolling = () => {
    if (window.scrollY > 0 && !scrollerStore.isScrolled) {
      scrollerStore.isScrolled = true
    } else if (scrollerStore.isScrolled && window.scrollY === 0) {
      scrollerStore.isScrolled = false
    }
  };
  
  onMounted(() => {
    window.addEventListener("scroll", onScrolling);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScrolling);
  });
  </script>
  <style scoped></style>
  