<template>
  <section
    id="contact"
    class="pt-28 pb-16 h-screen flex flex-col justify-center items-center dark:bg-bitlight"
  >
    <div class="text-center mb-8">
      <h1 class="section-title">Join Us!</h1>
    </div>

    <div class="relative overflow-x-auto p-4">
      <table
        class="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center "
        >
          <th
            v-for="(head, headIndex) in headers"
            :key="headIndex"
            class="px-6 py-3"
          >
            {{ head.title }}
          </th>
        </thead>
        <tbody>
          <template
            v-for="(item, itemIndex) in items"
            :key="`item_${itemIndex}`"
          >
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <template
                v-for="(head, headIndex) in headers"
                :key="`head_${headIndex}`"
              >
                <th
                  v-if="headIndex === 0"
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ item[head.key] }}
                </th>
                <td v-else-if="head.key === 'option'" class="text-center">
                  <div>
                    <button v-if="item[head.key]" class="font-semibold bg-secondary text-primary rounded-full hover:shadow-lg hover:bg-primary/80 hover:text-secondary transition duration-300 ease-in-out text-sm py-1.5 px-4">
                      Daftar
                    </button>
                    <div v-else>-</div>
                  </div>
                </td>
                <td v-else>
                    {{ item[head.key] }}
                </td>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const headers = reactive([
  { title: "Class", key: "class" },
  { title: "Batch", key: "batch" },
  { title: "Schedule", key: "schedule" },
  { title: "Methods", key: "methods" },
  { title: "In depth", key: "indepth" },
  { title: "Pricing", key: "pricing" },
  { title: "Option", key: "option" },
]);

const items = reactive([
  {
    class: "Fullstack Javascript FOSAN",
    batch: 14,
    schedule: "2024-08-30",
    methods: "Offline",
    indepth: 48,
    pricing: "Berbayar",
    option: true,
  },
  {
    class: "Fullstack Javascript FOSAN x UNDIP",
    batch: 3,
    schedule: "2024-06-03",
    methods: "Offline",
    indepth: 48,
    pricing: "Berbayar & Gratis",
    option: true,
  },
  {
    class: "Fullstack Javascript FOSAN",
    batch: 13,
    schedule: "2024-01-12",
    methods: "Offline",
    indepth: 48,
    pricing: "Berbayar & Gratis",
    option: false,
  },
  {
    class: "Backend Go Lang",
    batch: 1,
    schedule: "2024-05-28",
    methods: "Offline",
    indepth: 24,
    pricing: "Rp 1.000.000,-",
    option: false,
  },
]);
</script>
<style scoped></style>
