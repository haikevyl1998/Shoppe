<script setup>
import { defineProps, onMounted } from "vue";

defineProps({
  items: {
    type: Array,
    required: true,
    default: [],
  },
});
const chunkArr = (arr = [], size = 2) => {
  return arr.length
    ? arr.reduce(
        (t, v) => (
          t[t.length - 1].length === size
            ? t.push([v])
            : t[t.length - 1].push(v),
          t
        ),
        [[]]
      )
    : [];
};

$(".genre-container").slick({
  slidesToShow: 8,
  slidesToScroll: 2,
  dots: true,
  autoplay: true,
  prevArrow:
    '<button class="fa-solid fa-chevron-left" style="position: absolute; top:calc(50% - 25px); left:0; height:50px; width: 30px; border:none;background-color: #d2d2d2; border-radius: 50%; z-index: 1;"></button>',
  nextArrow:
    '<button class="fa-solid fa-chevron-right" style="position: absolute; top:calc(50% - 25px); right:0; height:50px; width: 30px; border:none;background-color: #d2d2d2; border-radius: 50%;"></button>',
});

const getUrl = (slug) => `${import.meta.env.VITE_API_URL}/${slug}`;
</script>

<template>
  <div class="genre">
    <p class="genre-text">DANH MỤC</p>
    <div class="grid__row genre-container">
      <div
        class="grid__column-1-2 none-padding"
        v-for="(its, idx) in chunkArr(items)"
        :key="idx"
      >
        <router-link
          v-for="it in its"
          :to="{ name: 'Category', params: { slug: it.slug } }"
          :key="it.slug"
        >
          <div class="genre-item">
            <div class="genre-item-img">
              <img :src="getUrl(it.image)" alt="" />
            </div>
            <p>{{ it.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-newbie {
  padding: 20px 0;
}

.genre {
  background-color: #fff;
}
.genre-text {
  font-size: 19px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 400;
  padding: 19px 0 0 19px;
}
.genre-item {
  border: 1px solid #f5f5f5;
  min-height: 200px;
  /* border-top: none; */
}

.genre-item:hover {
  border: 1px solid #cccccc;
}

.genre-item-img {
  padding: 10px 20px;
}

.genre-item-img img {
  width: 100%;
}

.genre-item p {
  text-align: center;
  font-size: 14px;
  padding: 0 5px;
}
</style>
