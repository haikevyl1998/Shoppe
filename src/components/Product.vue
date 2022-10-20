<script setup>
import { defineProps } from "vue";

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const formatPrice = (price) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    price
  );

const getSalePercent = (price, salePrice) => `${Math.ceil(salePrice / price)}%`;

const formatNumber = (val) =>
  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
</script>

<template>
  <router-link
    :to="{ name: 'Product', params: { slug: data.slug } }"
    class="home-product-item"
  >
    <div
      class="home-product-item__img"
      :style="`background-image: url('${data.images[0]}')`"
    ></div>
    <h4 class="home-product-item__name">{{ data.name }}</h4>
    <div class="home-product-item__price">
      <span class="home-product-item__price-current">
        {{ formatPrice(data.salePrice) }}
      </span>
      <span class="home-product-item-sold"
        >{{ formatNumber(data.quantity_sold) }} đã bán</span
      >
    </div>
    <div class="home-product-item-favourite">
      <i class="fas fa-check"></i>
      <span>Yêu thích</span>
    </div>
    <div class="home-product-item-sale-off" v-if="data.salePrice">
      <span class="home-product-item-sale-off-percent">
        {{ getSalePercent(data.price, data.salePrice) }}
      </span>
      <span class="home-product-item-sale-off-label">Giảm</span>
    </div>
  </router-link>
</template>

<style>
.home-product {
  margin-bottom: 10px;
}
.home-product-item {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  background-color: var(--white-color);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  display: block;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  transition: transform ease 0.1s;
  cursor: pointer;
}

.home-product-item:hover {
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

.home-product-item__img {
  padding-top: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.home-product-item__name {
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text-color);
  margin: 10px 10px 5px;
  line-height: 1.8rem;
  height: 3.6rem;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}

.home-product-item__price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: space-between;
}
.home-product-item-sold {
  margin-right: 10px;
}

.home-product-item__price-current {
  font-size: 1.6rem;
  color: var(--primary-color);
  margin-left: 10px;
}

.home-product-item-action {
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 0;
  align-items: center;
}

.home-product-item-like {
  font-size: 1.3rem;
}

i.home-product-item-like-fill {
  color: #f63d30;
  display: none;
}

.home-product-item-like--liked .home-product-item-like-empty {
  display: none;
}

.home-product-item-like--liked .home-product-item-like-fill {
  display: block;
}

.home-product-item-star--gold {
  color: var(--star-gold-color);
}

.home-product-item-favourite {
  position: absolute;
  top: 10px;
  left: -4px;
  color: var(--primary-color);
  background-color: currentColor;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  padding-right: 4px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.home-product-item-favourite::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  border-top: 3px currentColor solid;
  border-left: 3px transparent solid;
  filter: brightness(60%);
}

.home-product-item-favourite span {
  color: var(--white-color);
}

.home-product-item-favourite i {
  color: var(--white-color);
  font-size: 0.9rem;
  margin-left: 4px;
}

.home-product-item-sale-off {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  color: rgba(255, 216, 64, 0.94);
  background-color: rgba(255, 216, 64, 0.94);
  text-align: center;
  padding-top: 4px;
}

.home-product-item-sale-off::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -4px;
  border-width: 0 20px 4px;
  border-style: solid;
  border-color: transparent currentColor transparent;
}

.home-product-item-sale-off-percent {
  color: #f48232;
  font-weight: 600;
  font-size: 1.3rem;
}

.home-product-item-sale-off-label {
  color: var(--white-color);
  font-size: 1.3rem;
  font-weight: 600;
}

.home-product-item-sale-off {
  display: flex;
  flex-direction: column;
}
.home-product-item-sale-off-percent,
.home-product-item-sale-off-label {
  font-size: 1.8 !important;
  flex: 1;
}
</style>
