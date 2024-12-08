<template>
  <div class="slider">
    <div class="list">
      <div v-for="(item, index) in testimonies" :key="`slider_${index}`" class="item" :class="getActiveClass(index)">
        <img
          :src="`https://picsum.photos/1200/900?random=${index + 1}`"
          :alt="`random image ${index + 1}`"
          @click="setIndex(index)"
        />
        <div class="content">
          <p>{{ item.work }}</p>
          <h2>{{ item.name }}</h2>
          <p>
            {{ item.testimony }}
          </p>
        </div>
      </div>
    </div>

    <div class="arrows">
      <button id="prev" @click="prev"><</button>
      <button id="next" @click="next">></button>
    </div>

    <div class="thumbnail">
      <div v-for="(item, index) in testimonies" :key="`thumbnail_${index}`" class="item" :class="getActiveClass(index)">
        <img
          :src="`https://picsum.photos/1200/900?random=${index + 1}`"
          :alt="`random image ${index + 1}`"
        />
        <div class="content">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps(["testimonies"])

const getActiveClass = (item) => {
  console.log(item, "item");
  console.log(activeIndex.value, "active");
  if (item === activeIndex.value) {
      return "active"
  }
};
const activeIndex = ref(0)
let interval = null

const totalItems = computed(() => props.testimonies.length)
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
<style scoped>
.slider {
  height: 75vh;
  margin-top: 0;
  position: relative;
}

.slider .list .item {
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
}

.slider .list .item img {
  width: 100%;
  object-fit: cover;
}

.slider .list .item::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(#000 10%, transparent, #000 80%);
}

.slider .list .item .content {
  position: absolute;
  left: 10%;
  top: 20%;
  width: 500px;
  max-width: 80%;
  z-index: 1;
}

.slider .list .item .content p:nth-child(1) {
  text-transform: uppercase;
  letter-spacing: 10px;
}

.slider .list .item .content h2 {
  font-size: 50px;
  margin: 0;
}

.slider .list .item.active {
  opacity: 1;
  z-index: 10;
}

@keyframes showContent {
  to {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}

.slider .list .item.active p:nth-child(1),
.slider .list .item.active h2,
.slider .list .item.active p:nth-child(3) {
  transform: translateY(30px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent 0.5s 0.7s ease-in-out 1 forwards;
}

.slider .list .item.active h2 {
  animation-delay: 1s;
}

.slider .list .item.active p:nth-child(3) {
  animation-duration: 1.3s;
}

.arrows {
  position: absolute;
  top: 30%;
  right: 50px;
  z-index: 100;
}

.arrows button {
  background-color: #eee5;
  border: none;
  font-family: monospace;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: x-large;
  color: #eee;
  transition: 0.5s;
  margin: 3px;
}

.arrows button:hover {
  background-color: #eee;
  color: black;
}

.thumbnail {
    position: absolute;
    bottom: 50px;
    z-index: 11;
    display: flex;
    gap: 10px;
    width: 100%;
    height: 250px;
    padding: 0 50px;
    box-sizing: border-box;
    overflow: auto;
    justify-content: center;
}
.thumbnail::-webkit-scrollbar {
    width: 0;
}
.thumbnail .item {
    width: 150px;
    height: 220px;
    filter: brightness(.5);
    transition: .5s;
    flex-shrink: 0;
}
.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.thumbnail .item.active {
    filter: brightness(1);
}
.thumbnail .item .content {
    position: absolute;
    inset: auto 10px 10px 10px;
}

@media screen and (max-width: 678px) {
    .thumbnail {
        justify-content: start;
    }
    .slider .list .item .content h2 {
        font-size: 30px;
    }
    .arrows {
        top: 10%;
    }
}
</style>
