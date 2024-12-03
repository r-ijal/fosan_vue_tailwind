import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createPinia } from "pinia";
const pinia = createPinia();

import router from "./router/index";
import { MotionPlugin } from "@vueuse/motion";


createApp(App).use(pinia).use(router).use(MotionPlugin).mount("#app");
