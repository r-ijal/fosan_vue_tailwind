<template>
  <section class="pt-20 pb-16">
    <div class="flex flex-col gap-4 justify-center items-center text-center text-base font-semibold">
      <div class="flex items-center gap-2">
        <img src="../../assets/fosanlogo_small.png" alt="logo fosan" class="w-auto h-10" />
        <div class=" text-3xl font-bold tracking-widest">FOSAN</div>
      </div>
      <div class="text-center text-base font-semibold">
        <p class="mb-2">Jl. Karangrejo Raya No. 60, Banyumanik, Semarang</p>
        <div class="flex justify-center mb-2">
          <PhoneIcon class="size-6 hover:text-secondary mx-2" />
          <p>+62-8222-747-0-745</p>
        </div>
        <div class="flex justify-center mb-2">
          <EnvelopeIcon class="size-6 hover:text-secondary mx-2" />
          <p>belajar@fosan.id</p>
        </div>
      </div>
      <div class="border border-secondary w-5/6"></div>
      <div>
        <div>Copyright &#169; 2024 CV MIB Labs</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/solid";
</script>
<style scoped></style>
