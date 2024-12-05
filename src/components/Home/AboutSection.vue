<template>
  <section id="about" class="pt-36 pb-16 h-screen flex justify-center dark:bg-bitlight">
    <div class="about-bg"></div>
    <div class="about-ctx w-full">
      <div class="w-full h-full px-4">
        <div class="max-w-xl mx-auto text-center">
          <h1 class="section-title">Why Us</h1>
          <h2 class="section-subtitle">
            We strive to develop the potential of learners in order to develop
            reliable information technology in the business.
          </h2>
        </div>

        <div id="carousel" class="relative w-5/6 h-[90%] mx-auto mt-10">
          <div
            id="carousel-inner"
            class="relative h-[90%] flex items-center justify-center overflow-hidden"
            @mouseenter="pauseAutoSlide"
            @mouseleave="startAutoSlide"
          >
            <div
              v-for="(item, index) in carouselItems"
              :key="index"
              :class="[
                'absolute top-0 transition-all duration-500 ease-in-out',
                getClass(index),
              ]"
            >
              <img
                :src="item.src"
                :alt="item.caption"
                class="rounded-lg w-60 object-cover"
                @click="setIndex(index)"
              />
            </div>

            <div
              :class="[
                'absolute transition-all duration-300 ease-in-out p-3 rounded-lg mt-20',
                activeIndex === index
                  ? 'opacity-100 bg-lightone shadow-md dark:bg-darkone'
                  : 'opacity-20',
                getClassText(index),
              ]"
              v-for="(item, index) in carouselItems"
              :key="`caption-${index}`"
            >
              <div class="text-center text-secondary text-xl font-bold mt-4">
                {{ item.title }}
              </div>
              <div
                class="text-center mt-2 mb-4 text-md font-semibold dark:text-lightone"
              >
                {{ item.caption }}
              </div>
            </div>
          </div>

          <button
            @click="prev"
            class="absolute z-50 top-1/2 left-4 -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md focus:outline-none hover:bg-gray-200"
          >
            <ChevronLeftIcon class="size-6" />
          </button>
          <button
            @click="next"
            class="absolute z-50 top-1/2 right-4 -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md focus:outline-none hover:bg-gray-200"
          >
            <ChevronRightIcon class="size-6" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import FullStackCurriculum from "../../assets/About/FullStackCurriculum.png";
import HighLevels from "../../assets/About/HighLevels.png";
import Portofolio from "../../assets/About/Portofolio.png";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";

// import Carousel from "./Carousel.vue";
// import CarouselSlide from "./CarouselSlide.vue";

const carouselItems = ref([
  {
    src: FullStackCurriculum,
    title: "Hybrid Curriculum",
    caption:
      "Our curriculum focuses on building web, Android and iOS applications using technology that is currently widely used in the industrial world",
  },
  {
    src: HighLevels,
    title: "High Levels of Learning",
    caption:
      "The 16-week immersive teaching and learning method guarantees that graduates from Fosan are qualified and work-ready",
  },
  {
    src: Portofolio,
    title: "Portofolio",
    caption:
      "In the final stage, each student must develop an application which will later become their portfolio. After graduating, we will immediately connect students with our hiring partners.",
  },
]);

const activeIndex = ref(0);
let interval = null;

const totalItems = computed(() => carouselItems.value.length);

const getClass = (index) => {
  const distance =
    (index - activeIndex.value + totalItems.value) % totalItems.value;

  if (distance === 0) {
    return "left-1/2 transform -translate-x-1/2 scale-100 z-20 rotate-0";
  } else if (distance === 1) {
    return "left-3/4 transform -translate-x-1/2 scale-75 z-10 rotate-6";
  } else if (distance === totalItems.value - 1) {
    return "left-1/4 transform -translate-x-1/2 scale-75 z-10 -rotate-6";
  } else {
    return "hidden";
  }
};

const getClassText = (index) => {
  const distance =
    (index - activeIndex.value + totalItems.value) % totalItems.value;

  if (distance === 0) {
    return "left-1/2 transform -translate-x-1/2 z-20";
  } else if (distance === 1) {
    return "left-3/4 transform -translate-x-1/2 z-10";
  } else if (distance === totalItems.value - 1) {
    return "left-1/4 transform -translate-x-1/2 z-10";
  } else {
    return "hidden";
  }
};

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % totalItems.value;
};

const prev = () => {
  activeIndex.value =
    (activeIndex.value - 1 + totalItems.value) % totalItems.value;
};

const setIndex = (index) => {
    activeIndex.value = index
}

const startAutoSlide = () => {
  interval = setInterval(next, 5000);
};

const pauseAutoSlide = () => {
  clearInterval(interval);
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  pauseAutoSlide();
});
</script>
<style scoped></style>
