<script setup>
import { getCategories, getProducts } from "@/services";
import { useRoute, useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import Product from "@/pages/category/Product.vue";
import { reactive, ref, watch } from "vue";
import Footer from "@/components/Footer.vue";
import FooterEnd from "@/components/FooterEnd.vue";
import LoadMore from "@/components/LoadMore.vue";
import Filter from "./Filter.vue";

const route = useRoute();
const { order, keyword, orderBy } = route.query;

const products = reactive({
  data: [],
  pagination: {},
});
const loading = ref(false);

const getData = async () => {
  loading.value = true;
  const resp = await getProducts({
    name_like: keyword,
    _sort: orderBy,
    _order: order | "desc",
    _limit: 10,
  });
  products.data = resp.data;
  products.pagination = resp.pagination;
  loading.value = false;
};

getData();

watch(
  () => route.query,
  async (newVal) => {
    const { orderBy, order, keyword } = newVal;
    const resp = await getProducts({
      _limit: 10,
      name_like: keyword,
      _sort: orderBy,
      _order: order || "desc",
    });
    products.data = resp.data;
    products.pagination = resp.pagination;
  }
);

const loadingLoadMore = ref(false);
const handleLoadMore = async () => {
  loadingLoadMore.value = true;

  const resp = await getProducts({
    name_like: route.query.keyword,
    ...(route.query.orderBy && { _orderBy: route.query.orderBy }),
    _order: route.query.order | "desc",
    _limit: 10,
    _page: products.pagination._nextPage,
  });

  products.data = [...products.data, ...resp.data];
  products.pagination = resp.pagination;
  loadingLoadMore.value = false;
};
</script>

<template>
  <loading v-if="loading" />
  <div class="main">
    <div class="grid__row app__content">
      <div class="grid__column-12">
        <Filter v-if="products.data.length > 0" />
        <div class="home-product">
          <div class="grid__row">
            <Product :data="product" v-for="product in products.data" />
          </div>
        </div>

        <LoadMore
          :loading="loadingLoadMore"
          :handleLoadMore="handleLoadMore"
          v-if="
            products.pagination._nextPage !== products.pagination._totalPage
          "
        />
        <div class="gach__footer"></div>
      </div>
    </div>
  </div>

  <Footer>
    <FooterEnd />
  </Footer>
</template>

<style>
@import "@/css/form_genre.css";
</style>
