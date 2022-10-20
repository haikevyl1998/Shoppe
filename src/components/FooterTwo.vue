<script setup>
import { defineProps } from "vue";
import Category from "./Category.vue";

defineProps({
  footers: {
    type: Array,
    default: [],
  },
  categories: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div class="category">
    <div class="danhmuc">Danh Mục</div>
    <div class="directory-block">
      <div class="danhmuc-ti" v-for="(footer, idx) in footers" :key="idx">
        <Category
          v-for="categoryId in footer.categories"
          :category="categories.find((it) => it.id == categoryId)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.category {
  padding-top: 30px;
  width: 1200px;
  margin: 60px auto 10px;
  padding-bottom: 60px;
}
.category :hover {
  color: #cf5209;
}
.danhmuc {
  font-weight: 700;
}
.directory-block {
  display: flex;
  margin: 0 -5px;
}
.danhmuc-ti {
  width: 20%;
  padding: 5px;
  box-sizing: border-box;
}
.danhmuc-ti-one {
  font-size: 12px;
}
.danhmuc-ti-one a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
}
</style>
