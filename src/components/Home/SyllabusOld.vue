<template>
  <section
    id="syllabus"
    class="pt-64 pb-16 relative h-screen w-screen flex flex-col justify-center items-center"
  >
    <div class="absolute top-36 w-full text-center px-4">
      <h1 class="section-title">From Code to Cloud</h1>
      <h2 class="section-subtitle">
        Unravel the mysteries of frontend finesse and backend brilliance, the
        essentials of data and collaboration.
      </h2>
    </div>

    <!-- <div>
      <div
        class="flex flex-col items-center justify-between h-full w-full px-4"
      >
        <div class="flex justify-center space-x-8">
          <div
            v-for="(item, index) in topItems"
            :key="index"
            class="text-center w-48 p-4 bg-white shadow-lg rounded-lg"
          >
            <h3 class="text-lg font-bold">{{ item.title }}</h3>
            <p class="text-sm">{{ item.description }}</p>
          </div>
        </div>

        <div class="relative flex justify-center">
          <img
            :src="computerPerson"
            alt="Person at Computer"
            class="w-48 h-48"
          />
        </div>

        <div class="flex justify-center space-x-8 flex-wrap">
          <div
            v-for="(item, index) in bottomItems"
            :key="index"
            class="text-center w-48 p-4 bg-white shadow-lg rounded-lg"
          >
            <h3 class="text-lg font-bold">{{ item.title }}</h3>
            <p class="text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Centered Image -->
    <div class="relative top-3/4">
      <img :src="computerPerson" alt="Person at Computer" class="w-48 h-48" />
    </div>

    <!-- Circular Text -->
    <!-- <div class="absolute w-[500px] h-[500px] md:w-1/2">
      <div
        v-for="(item, index) in items"
        :key="index"
        :style="getPosition(index, items.length)"
        class="absolute text-center w-48 sm:w-60 md:w-96 sm:m-4 p-4 bg-white shadow-lg rounded-full"
      >
        <div class="flex">
          <div class="flex items-center">
            <img
              :src="item.src"
              :alt="`${item.title} image`"
              class="w-24"
            />
          </div>
          <div class="text-left ml-4">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-md">{{ item.description }}</p>
          </div>
        </div>


      </div>
    </div> -->

    <!-- <div id="ellipse" class="relative w-fit h-fit mx-auto"> -->
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div id="ellipse" class="relative top-0">
          <div
            v-for="(item, index) in items"
            :key="index"
            :class="[
              'absolute',
              'flex',
              'items-center',
              'justify-center',
              'text-center',
              'rounded-full',
              'transition-transform',
              'hover:scale-110',
              'cursor-pointer',
              'bg-white',
              'shadow-lg',
              'p-2',
              'border',
              'border-gray-200',
            ]"
            :style="getStyle(index)"
          >
          <div>
            <img :src="item.src" alt="" class="w-12 mx-4" />
          </div>
          <div class="text-left ml-5 flex flex-col">
            <strong class="text-yellow-600 text-lg">{{ item.title }}</strong>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import computerPerson from "../../assets/Syllabus/computer-person.png";

import frontend from "../../assets/Syllabus/frontend.png";
import backend from "../../assets/Syllabus/backend.png";
import database from "../../assets/Syllabus/database.png";
import datascience from "../../assets/Syllabus/datascience.png";
import teamwork from "../../assets/Syllabus/teamwork.png";

const items = ref([
  {
    title: "Front-End",
    description:
      "Learn how to implement UI/UX with frameworks like React, Vue, etc.",
    src: frontend,
  },
  {
    title: "Back-End",
    description: "Learn to build server-side with Node.js or Go.",
    src: backend,
  },
  {
    title: "Database",
    description: "Learn PostgreSQL & MongoDB for database management.",
    src: database,
  },
  {
    title: "Data Science Basic",
    description:
      "Learn basic data science, visualization, and simple machine learning.",
    src: datascience,
  },
  {
    title: "Deployment & Teamwork",
    description:
      "Learn CI/CD and teamwork which are important for modern programming.",
    src: teamwork,
  },
]);

const topItems = ref([
  {
    title: "Front-End",
    description:
      "Anda akan mempelajari cara mengimplementasikan UI/UX dengan framework seperti React, Vue, dll.",
  },
  {
    title: "Back-End",
    description:
      "Anda akan mempelajari membangun server-side dengan Node.js atau Go.",
  },
]);

const bottomItems = ref([
  {
    title: "Database",
    description:
      "Anda akan mempelajari PostgreSQL & MongoDB untuk pengelolaan database.",
  },
  {
    title: "Data Science Basic",
    description:
      "Pelajari data science dasar, visualisasi, dan machine learning sederhana.",
  },
  {
    title: "Deployment & Teamwork",
    description:
      "Pelajari CI/CD dan teamwork yang penting untuk programming modern.",
  },
]);

const getPosition = (index, total) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 250;
  const x = Math.cos(angle) * radius + 450; // Adjust center position
  const y = Math.sin(angle) * radius + 225;
  return `transform: translate(-50%, -50%); top: ${y}px; left: ${x}px;`;
};

/*
Usage: Position.ellipse(n, rx, ry, so, wh, idd, cls, cw);

where n = number of divs,
      rx = radius along X-axis,
      ry = radius along Y-axis,
      so = startOffset,
      wh = width/height of divs,
      idd = id of main div(ellipse),
      cls = className of divs;
      cw = clockwise(true/false)
*/

const ellipseConfig = {
  n: items.value.length,
  rx: 325,
  ry: 250,
  so: 0,
  clockwise: true,
};

const getStyle = (index) => {
  const angle = (360 / ellipseConfig.n) * (index + ellipseConfig.so);
  const radian = (Math.PI / 180) * angle;
  const x = ellipseConfig.rx * (ellipseConfig.clockwise ? Math.sin(radian) : -Math.sin(radian));
  const y = -ellipseConfig.ry * Math.cos(radian);
  return {
    transform: `translate(${x}px, ${y}px)`,
    width: "350px",
    height: "auto",
  };
};
</script>

<style scoped></style>
