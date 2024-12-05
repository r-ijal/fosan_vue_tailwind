<template>
  <section
    id="syllabus"
    class="pt-28 pb-16 relative h-screen w-screen flex flex-col"
  >
    <div class="w-full text-center px-4">
      <h1 class="section-title">From Code to Cloud</h1>
      <h2 class="section-subtitle">
        Unravel the mysteries of frontend finesse and backend brilliance
      </h2>
    </div>

    <div class="mx-auto px-8 flex flex-row">
      <div class=" basis-2/5 my-auto mx-4 hidden md:block">
        <img :src="computerPerson" alt="Person at Computer" class="md:w-72 lg:w-[400px]" />
      </div>

      <div class="md:basis-3/5 md:mx-12 lg:mx-0">
        <div v-for="item in items" class="flex my-6 py-4 bg-lightone rounded-full hover:scale-110">
          <div class="basis-1/5 px-4">
            <img :src="item.src" alt="Person at Computer" class=" w-24" />
          </div>
          <div class="basis-4/5 flex flex-col justify-center mx-2 px-2">
            <div class="text-lg font-bold text-secondary">{{ item.title }}</div>
            <div>
              <p class="text-base font-semibold">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
    description: "Learn to build a powerful server-side application with Node.js or Go.",
    src: backend,
  },
  {
    title: "Database",
    description: "Learn SQL Database & No-SQL for database management with PostgreSQL an MongoDB.",
    src: database,
  },
  {
    title: "Data Science Basic",
    description:
      "Learn basic data science which will be useful for data visualization, and simple machine learning.",
    src: datascience,
  },
  {
    title: "Deployment & Teamwork",
    description:
      "Learn CI/CD for a better application deployment and teamwork which are important for modern programming.",
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
