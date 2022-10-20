<script setup>
import Footer from "../../components/Footer.vue";
import FooterOne from "../../components/FooterOne.vue";
import FooterEnd from "../../components/FooterEnd.vue";
import Loading from "../../components/Loading.vue";
import Banner from "./Banner.vue";
import QuickLink from "./QuickLink.vue";
import Categories from "./Categories.vue";
import { reactive, ref } from "vue";
import { getCategories, getFooters, getProducts } from "../../services";
import FooterTwo from "../../components/FooterTwo.vue";
import Product from "../../components/Product.vue";

const loading = ref(true);
const categories = ref({});
const footers = ref({});
const products = reactive({
  data: {},
  pagination: {},
});

const getData = async () => {
  categories.value = await getCategories();
  footers.value = await getFooters();
  const resp = await getProducts();
  products.data = resp.data;
  products.pagination = resp.pagination;
  console.log(products);
  loading.value = false;
};

getData();

const loadingLoadMore = ref(false);
const loadMore = async () => {
  loadingLoadMore.value = true;
  const resp = await getProducts({
    _page: products.pagination._nextPage,
  });
  products.data = [...products.data, ...resp.data];
  products.pagination = resp.pagination;
  loadingLoadMore.value = false;
};
</script>

<template>
  <Loading v-if="loading" />
  <div class="main-banner">
    <div class="grid">
      <Banner />
      <QuickLink />
    </div>
  </div>

  <div class="app__container">
    <div class="grid">
      <div class="banner-newbie">
        <img src="@/assets/images/banner_newbie.png" alt="" />
      </div>

      <Categories :items="categories.data" />

      <div class="section_recommend_product">
        <div class="recomnend-text">GỢI Ý HÔM NAY</div>
      </div>

      <div class="home-product">
        <div class="grid__row">
          <div
            class="grid__column-2 cl-2 mobile-ps gird-respon-tablet-inter"
            v-for="product in products.data"
          >
            <Product :data="product" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="load-more" v-if="!!products.pagination._nextPage">
    <button :class="loadingLoadMore ? 'disabled' : ''" @click="loadMore">
      Xem thêm
    </button>
  </div>

  <Footer>
    <FooterOne />
    <FooterTwo :footers="footers.data" :categories="categories.data" />
    <FooterEnd />
  </Footer>
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
.section_recommend_product {
  padding: 30px 0;
}
.recomnend-text {
  height: 45px;
  background-color: #fff;
  color: var(--primary-color);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid;
}
.app__container {
  background-color: #f5f5f5;
}
</style>
