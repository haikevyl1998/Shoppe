<script setup>
import Header from "./components/Header.vue";
import FooterEnd from "./components/FooterEnd.vue";
import Footer from "./components/Footer.vue";
import FooterOne from "./components/FooterOne.vue";
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
