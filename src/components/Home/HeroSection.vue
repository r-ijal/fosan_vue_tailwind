<template>
  <section
    id="home"
    class="pt-36 dark:bg-dark h-screen flex justify-center items-center"
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
                  fill="#b8b4b4"
                  d="M63.1,-29C66.8,-9.2,44.4,10.6,23.5,23.7C2.6,36.9,-16.9,43.5,-33.4,34.2C-50,25,-63.6,0,-57.5,-23.1C-51.4,-46.2,-25.7,-67.3,2,-68C29.7,-68.6,59.4,-48.8,63.1,-29Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>

        <div
          class="w-full self-center px-4 lg:w-1/2"
          v-motion-fade-visible-once
        >
          <h1 class="text-base font-semibold text-secondary mb-5 lg:text-xl">
            fosan.id
            <span
              class="block font-bold text-primary text-4xl mt-1 md:text-5xl dark:text-primary"
            >
              Become a
              <span class="text-dark dark:text-secondary">
                Professional Developer
              </span>
              & Ready to Work
            </span>
          </h1>
          <!-- <h2 class="font-medium text-secondary text-lg mb-5 lg:text-2xl">
            Mentor |
            <span class="text-dark dark:text-white">Frontend Developer</span>
          </h2> -->
          <p class="font-medium text-secondary mb-10 leading-relaxed">
            Fosan is a coding bootcamp in Semarang with an intensive program to become a Full Stack Developer for 16 weeks. Our curriculum is aimed at beginners and focuses on current industry needs, so our graduates are immediately job ready.
          </p>

          <a
            href="#"
            class="text-base font-semibold bg-primary py-3 px-8 text-white rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
<style scoped></style>
