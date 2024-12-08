<template>
  <section
    id="testimonies"
    class="pt-28 pb-16 h-screen flex flex-col justify-center items-center dark:bg-bitlight"
  >
    <div class="text-center mb-8">
      <h1 class="section-title">Testimonies</h1>
    </div>

    <div class="w-screen">
      <Carousel :testimonies="testi_list" />
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import Carousel from "./Carousel.vue";

const testi_list = reactive([
  {
    img: "person 1",
    name: "Faisal Rahman",
    work: "Backend Engineer LinkAja",
    testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quae vel hic ipsum. Dolores, ducimus ipsa. Distinctio assumenda modi omnis.",
  },
  {
    img: "person 2",
    name: "Faizal Ditya",
    work: "Frontend Engineer DynEd International",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam iure ipsa, obcaecati quis repellendus!",
  },
  {
    img: "person 3",
    name: "Akbar Fitra",
    work: "Senior Programmer Bank Central Asia",
    testimony:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatum sit asperiores doloribus, doloremque necessitatibus nam suscipit magnam ullam! Dignissimos nostrum ipsum error veniam in atque facere, nihil deserunt voluptatum.",
  },
]);
</script>
<style scoped></style>
