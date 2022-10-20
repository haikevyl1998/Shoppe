<script setup>
import { ref, watch, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const { orderBy, order, keyword } = route.query;
const router = useRouter();

const currentOrderBy = ref(orderBy);
const currentOrder = ref(order);

watch(
  () => route.query,
  (newVal) => {
    if (newVal.orderBy) {
      currentOrderBy.value = newVal.orderBy;
    }
    if (newVal.order) {
      currentOrder.value = newVal.oder;
    }
  }
);

const handle = (orderBy, _orderBy) => {
  router.push({
    name: "Search",
    query: {
      orderBy,
      keyword,
      ...(order && { order }),
      ...(_orderBy && { order: _orderBy }),
    },
  });
};
</script>

<template>
  <div class="home-filter">
    <span class="home-filter__label">Sắp xếp theo</span>
    <button
      class="home-filter__btn btn"
      :class="currentOrderBy === 'views' ? 'btn--primary' : ''"
      @click="
        () => {
          currentOrderBy !== 'views' && handle('views');
        }
      "
    >
      Phổ biến
    </button>
    <button
      class="home-filter__btn btn"
      :class="
        currentOrderBy === 'createdAt' || !currentOrderBy ? 'btn--primary' : ''
      "
      @click="
        () => {
          currentOrderBy !== 'createdAt' && handle('createdAt');
        }
      "
    >
      Mới nhất
    </button>
    <button
      class="home-filter__btn btn"
      :class="currentOrderBy === 'quantity_sold' ? 'btn--primary' : ''"
      @click="
        () => {
          currentOrderBy !== 'quantity_sold' && handle('quantity_sold');
        }
      "
    >
      Bán chạy
    </button>

    <div class="select__input--btn">
      <span class="select-input__label">Giá</span>
      <i class="select-input__icon fas fa-chevron-down"></i>

      <!-- list option -->
      <ul class="select-input__list">
        <li class="select-input__item">
          <a class="select-input__link" @click.prevent="handle('price', 'desc')"
            >Giá: từ cao đến thấp</a
          >
        </li>
        <li class="select-input__item">
          <a class="select-input__link" @click.prevent="handle('price', 'asc')"
            >Giá: từ thấp đến cao</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.select__input--btn {
  width: 180px;
  height: 34px;
  padding: 0 12px;
  border-radius: 2px;
  background-color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.select-input__list {
  position: absolute;
  top: 35px;
  left: 0;
  min-width: 230px;
  border-radius: 2px;
  background-color: var(--white-color);
  padding: 8px 16px;
  list-style: none;
  box-shadow: 0 0 1px #999;
  display: none;
  animation: fadeIn ease-in 0.3;
}

.select__input--btn:hover .select-input__list {
  display: block;
}

.select-input__label {
  font-size: 1.4rem;
}

.select-input__icon {
  font-size: 1.4rem;
  color: rgb(131, 131, 131);
  position: relative;
  top: 1px;
}

.select-input__list::before {
  content: "";
  position: absolute;
  height: 5px;
  top: -1px;
  right: 0;
  width: 100%;
  /* background-color: #000; */
}

.select-input:hover .select-input__list {
  display: block;
}

.select-input__link {
  display: block;
  color: var(--text-color);
  font-size: 1.4rem;
  padding: 8px 0px;
}

.select-input__link:hover {
  color: var(--primary-color);
  cursor: pointer;
}

.select-input__link:hover {
  background-color: #999;
}

.home-filter {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.09);
  padding: 12px 22px;
  border-radius: 2px;
}

.home-filter__label {
  font-size: 1.4rem;
  color: #555;
  margin-right: 16px;
}

.home-filter__btn {
  min-width: 90px;
  margin-right: 12px;
  height: 34px;
}

.home-filter__page {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.home-filter__page-num {
  font-size: 1.5rem;
}

.home-filter__page-current {
  color: var(--primary-color);
}

.home-filter__page-control {
  width: 72px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  background-color: var(--white-color);
  display: flex;
  margin-left: 12px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.05);
}

.home-filter__page-btn {
  flex: 1;
  text-decoration: none;
  display: flex;
}

.home-filter__page-btn:first-child {
  border-right: 1px solid #f2f2f2;
}

.home-filter__page-icon {
  margin: auto;
}

.home-filter__page-btn-disable {
  background-color: #f9f9f9;
  cursor: default;
}

.home-filter__page-btn-disable .home-filter__page-icon {
  color: #ccc;
}
</style>
