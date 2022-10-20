<script setup>
import { defineProps } from "vue";

defineProps(["handleLoadMore", "loading"]);
</script>

<template>
  <div class="load-more">
    <button
      :disabled="loading"
      :class="loading ? 'disabled' : ''"
      @click="handleLoadMore"
    >
      Xem thêm
    </button>
  </div>
</template>

<style>
.load-more {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}
.load-more button {
  display: block;
  min-width: 200px;
  background-color: #fe6433;
  border: 1px solid transparent;
  color: #fff;
  font-size: 20px;
  line-height: 2;
  border-radius: 12px;
  transition: all 0.12s;
  opacity: 0.85;
  cursor: pointer;
}
.load-more button:hover {
  opacity: 1;
}
.load-more button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
