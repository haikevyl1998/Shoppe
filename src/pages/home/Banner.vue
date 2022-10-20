<script setup>
import { onMounted } from "vue";

const sliders = [
  { image: "slice1.png" },
  { image: "slice1-1.png" },
  { image: "slice1-2.png" },
  { image: "slice1-3.png" },
];

onMounted(() => {
  $(".banner-left").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    prevArrow:
      '<button class="fa-solid fa-chevron-left" style="position: absolute; top:calc(50% - 30px); left:0; height:60px; width: 30px; border:none;background-color: rgba(0,0,0, 0.2);color: #fff; font-size: 14px; z-index: 1; display:none"></button>',
    nextArrow:
      '<button class="fa-solid fa-chevron-right" style="position: absolute; top:calc(50% - 30px); right:0; height:60px; width: 30px; border:none;background-color: rgba(0,0,0, 0.2);color: #fff; font-size: 14px; display:none"></button>',
  });
});
</script>

<template>
  <div class="grid__row banner">
    <div class="banner-left grid__column-8">
      <img
        v-for="(it, idx) in sliders"
        :key="idx"
        :src="`images/${it.image}`"
        class="banner-left-img"
        alt=""
      />
    </div>
    <div class="banner-right grid__column-4">
      <div class="banner-right-top">
        <img
          src="@/assets/images/sliceright1.png"
          alt=""
          class="banner-right-img"
        />
      </div>
      <div class="banner-right-bottom">
        <img
          src="@/assets/images/sliceright2.png"
          alt=""
          class="banner-right-img"
        />
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  padding-top: 15px;
}
.banner-left-img {
  width: 100%;
  height: 100%;
}

.slick-dots {
  position: absolute;
  top: 90%;
}

.banner-right-img {
  width: 100%;
  height: 50%;
}
.banner-arrow {
  font-size: 10px;
}
</style>
