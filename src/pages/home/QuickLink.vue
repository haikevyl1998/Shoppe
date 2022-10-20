<script setup>
const quickLinks = [
  { name: "Khung giờ săn sale" },
  { name: "Gì cũng rẻ - Mua là freeship" },
  { name: "Miễn phí vận chuyển" },
  { name: "oàn Xu 6% - Lên Đến 200K" },
  { name: "Hàng hiệu giá tốt" },
  { name: "àng quốc tế" },
  { name: "Nạp thẻ, hóa đơn & phim" },
  { name: "Deal sốc từ 1k" },
];
</script>

<template>
  <div class="grid__row quick-links">
    <router-link
      class="quick-link-container grid__column-1-5"
      v-for="(it, idx) in quickLinks"
      :key="idx"
      to="/"
    >
      <div class="quick-link-item">
        <img
          :src="`images/quicklink${idx + 1}.png`"
          alt=""
          class="quick-link-img"
        />
      </div>
      <p>{{ it.name }}</p>
    </router-link>
  </div>
</template>

<style scoped>
.quick-links {
  padding-top: 30px;
}
.quick-link-container {
  text-decoration: none;
}
.quick-link-item {
  margin: auto 40px;
}
.quick-link-img {
  width: 100%;
  justify-content: center;
}
.quick-link-container p {
  font-size: 14px;
  text-align: center;
  color: #111;
}
</style>
