<template>
  <section
    id="partners"
    class="pt-28 pb-16 px-12 h-screen flex flex-col justify-center items-center dark:bg-bitlight"
  >
    <MotionGroup preset="slideVisibleRight" :duration="600">
      <div class="text-center mb-8">
        <h1 class="section-title">Hiring Partner</h1>
        <h2 class="section-subtitle">
          Hiring partners is a very important part of advancing the IT ecosystem
          in Indonesia,
          <br />
          several hiring partners who have worked with us:
        </h2>
      </div>
    </MotionGroup>

    <MotionGroup preset="slideVisibleLeft" :duration="800">
      <div class="flex justify-center items-center flex-wrap">
        <div
          v-for="item in partner_list"
          :key="`partner_${item.no}`"
          class="my-6 mx-16"
        >
          <img
            :src="item.img"
            :alt="item.name"
            class="h-16 md:h-24 lg:h-32 object-cover rounded-xl"
          />
        </div>
      </div>

      <!-- <div
          v-motion
          :initial="{
            scale: 1,
          }"
          :enter="{
            scale: 2,
            transition: {
              delay: 1000,
            },
          }"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse corrupti accusantium expedita omnis quia ab, cupiditate iusto fuga placeat.</div> -->
    </MotionGroup>

    <Motion class="mt-8 pt-8" preset="slideVisibleBottom" :duration="800">
        <button class="btn-one dark:btn-dark">Become Our Partner</button>
    </Motion>

  </section>
</template>

<script setup>
import gmedia from "../../assets/Partner/logo_gmedia.png";
import points from "../../assets/Partner/Logo_poiNTS.png";
import finix76 from "../../assets/Partner/finix76.jpeg";
import azura_labs from "../../assets/Partner/azura_labs.png";
import Group_1 from "../../assets/Partner/Group_1.png";
import vantura from "../../assets/Partner/vantura.png";
import rapier from "../../assets/Partner/rapier.jpeg";

import { reactive } from "vue";

const partner_list = reactive([
  { no: 1, name: "Gmedia", img: gmedia },
  { no: 2, name: "PoiNTS", img: points },
  { no: 3, name: "finix76", img: finix76 },
  { no: 4, name: "Vantura", img: vantura },
  { no: 5, name: "Group 1", img: Group_1 },
  { no: 6, name: "Azura Labs", img: azura_labs },
  { no: 7, name: "Rapier", img: rapier },
]);
</script>
<style scoped></style>
