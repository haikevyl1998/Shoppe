<script setup>
import { defineProps } from "vue";

defineProps({
  category: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="danhmuc-ti-one">
    <div class="main">
      <router-link :to="{ name: 'Category', params: { slug: category.slug } }"
        >{{ category.name }}
      </router-link>
    </div>
    <div class="main-one">
      <div v-for="(tag, idx) in category.tags">
        <router-link :to="{ name: 'Category', params: { slug: category.slug } }"
          >{{ tag.name }}
        </router-link>
        ><span v-if="idx < category.tags.length - 1">&nbsp;|&nbsp;</span>
      </div>
    </div>
  </div>
</template>
