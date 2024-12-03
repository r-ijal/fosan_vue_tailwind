<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "./stores/theme";

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.checkTheme();
});
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
