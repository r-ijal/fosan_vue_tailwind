<template>
  <section
    id="testimonies"
    class="pt-28 pb-16 h-screen flex flex-col justify-center items-center bg-black"
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

import faizal from "../../assets/Testimonies/faizal.png"
import faisal from "../../assets/Testimonies/faisal.jpg"
import fitra from "../../assets/Testimonies/fitra.jpg"

const testi_list = reactive([
  {
    img: faisal,
    name: "Faisal Rahman",
    work: "Backend Engineer LinkAja",
    testimony:
      "Fosan hadir sebagai solusi baru untuk memulai karir sebagai Software Engineer. Dengan materi yang sangat lengkap sebagai dasar bagi peserta untuk masuk ke industri IT seperti startup digital. Fosan's got you covered.",
  },
  {
    img: faizal,
    name: "Faizal Ditya",
    work: "Frontend Engineer DynEd International",
    testimony:
      "Bootcamp yang berbasis di Semarang yang berfokus pada fullstack developer, mengajarkan fundamental sebagai seorang programmer dan menggunakan bahasa pemrograman yang banyak digunakan oleh perusahaan-perusahaan besar saat ini.",
  },
  {
    img: fitra,
    name: "Akbar Fitra",
    work: "Senior Programmer Bank Central Asia",
    testimony:
      "Fosan sangat menyenangkan materi-materi yang di berikan sangat menantang, berawal dari tidak mengerti tentang dunia web development sekarang jadi mudah membuat sebuah website sendiri , terima kasih fosan :))",
  },
]);
</script>
<style scoped></style>
