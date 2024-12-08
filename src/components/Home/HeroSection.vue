<template>
  <section
    id="home"
    class="pt-36 bg-white dark:bg-bitdark h-screen flex justify-center items-center"
  >
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="relative mb-10 lg:mt-9 lg:right-0">
            <img
              v-motion-slide-visible-once-right
              class="w-60 mx-auto rounded-lg relative z-10"
              src="../../assets/fosanlogo_new.png"
              alt="fosan logo"
            />
            <span
              class="absolute top-0 left-1/4 -translate-x-1/2 md:scale-125"
              v-motion-slide-visible-once-left
            >
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#e69b23"
                  d="M63.1,-29C66.8,-9.2,44.4,10.6,23.5,23.7C2.6,36.9,-16.9,43.5,-33.4,34.2C-50,25,-63.6,0,-57.5,-23.1C-51.4,-46.2,-25.7,-67.3,2,-68C29.7,-68.6,59.4,-48.8,63.1,-29Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>

        <div
          class="w-full self-center px-4 lg:w-1/2 text-center sm:text-left"
          v-motion-fade-visible-once
        >
          <h1
            class="text-base font-semibold text-primary mb-5 lg:text-xl dark:text-secondary"
          >
            fosan.id
            <span
              class="block font-bold font-serif text-secondary text-4xl mt-1 md:text-5xl dark:text-lightone"
            >
              Become a
              <span class="text-primary dark:text-secondary">
                Professional Developer
              </span>
              <!-- & Ready to Work -->
            </span>
          </h1>
          <div class="mb-5 flex justify-center">
            <div class="grid grid-cols-4 items-center justify-center">
              <a
                :href="icon.link"
                target="_blank"
                v-for="(icon, indexIcon) in iconLogo"
              >
                <img
                  :src="icon.img"
                  :alt="icon.name + 'Logo'"
                  :class="[iconClass, icon.name === 'VueJS' ? 'h-14' : 'h-16']"
                />
              </a>
            </div>
          </div>
          <p
            class="font-medium text-primary mb-10 leading-relaxed dark:text-secondary"
          >
            <span class="text-secondary dark:text-lightone"
              >Fosan Coding Academy</span
            >
            is a coding bootcamp in Semarang with an intensive program to become
            a Full Stack Developer for 16 weeks. Our curriculum is aimed at
            beginners and focuses on current industry needs, so our graduates
            are immediately job ready.
          </p>

          <a href="#contact" class="btn-one dark:btn-dark hover:scale-110">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import JavascriptLogo from "../../assets/Logo/JavaScript-logo.png";
import HTMLLogo from "../../assets/Logo/HTML5_logo.png";
import CSSLogo from "../../assets/Logo/CSS3_logo.png";
import NodeJSLogo from "../../assets/Logo/Node.js.png";
import ExpressJSLogo from "../../assets/Logo/Expressjs.png";
import VueJSLogo from "../../assets/Logo/Vue.js.png";
import GolangLogo from "../../assets/Logo/Go_Logo.png";
import PostgresqlLogo from "../../assets/Logo/Postgresql.png";

const iconLogo = reactive([
  {
    name: "Javascript",
    img: JavascriptLogo,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML",
    img: HTMLLogo,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    img: CSSLogo,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "NodeJS", img: NodeJSLogo, link: "https://nodejs.org/ene" },
  { name: "ExpressJS", img: ExpressJSLogo, link: "https://expressjs.com/" },
  { name: "VueJS", img: VueJSLogo, link: "https://vuejs.org/" },
  { name: "Golang", img: GolangLogo, link: "https://go.dev/" },
  {
    name: "Postgresql",
    img: PostgresqlLogo,
    link: "https://www.postgresql.org/",
  },
]);

const iconClass = ref("mx-auto my-3 object-contain hover:scale-110");
</script>
<style scoped></style>
