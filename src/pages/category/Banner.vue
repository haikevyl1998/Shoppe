<script setup>
defineProps(["banners"]);
</script>

<template>
  <div class="banner" id="category-banner">
    <img
      class="banner-img"
      :src="banners && banners[Math.floor(Math.random() * banners.length)]"
      alt=""
    />
  </div>
</template>
