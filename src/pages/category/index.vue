<script setup>
import { getCategories, getProducts } from "@/services";
import { useRoute, useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import FilterTop from "./FilterTop.vue";
import Product from "./Product.vue";
import { reactive, ref, watch, onMounted } from "vue";
import Footer from "@/components/Footer.vue";
import FooterEnd from "@/components/FooterEnd.vue";
import LoadMore from "@/components/LoadMore.vue";
import Banner from "./Banner.vue";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const category = ref({});
const products = reactive({
  data: [],
  pagination: {},
});
const loading = ref(false);

const fetchProduct = async () => {
  const { orderBy, order } = route.query;
  const productsData = await getProducts({
    categoryId: category.value.id,
    _limit: 10,
    ...(orderBy && {
      _sort: orderBy,
      _order: order || "desc",
      _page: products.pagination._nextPage || 1,
    }),
  });
  products.data = [...products.data, ...productsData.data];
  products.pagination = productsData.pagination;
};

const getCategory = async (slug) => {
  loading.value = true;
  const categoryData = await getCategories({ slug });
  if (categoryData.data[0]) {
    category.value = categoryData.data[0];
    await fetchProduct();
    loading.value = false;
    return;
  }
  loading.value = false;
  router.push({ name: "Home" });
};

slug && getCategory(slug);

watch(
  () => route.query,
  async (newVal) => {
    const { orderBy, order } = newVal;
    const resp = await getProducts({
      categoryId: category.value.id,
      _limit: 10,
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
  await fetchProduct();
  loadingLoadMore.value = false;
};
</script>

<template>
  <loading v-if="loading" />
  <div class="main">
    <Banner :banners="category.banners" />

    <div class="grid__row app__content">
      <!-- <div class="grid__column-2">
        <CategoriesList />
        <Filter />
      </div> -->
      <div class="grid__column-12">
        <FilterTop
          :pagination="products.pagination"
          v-if="products.data.length > 0"
        />
        <div class="home-product">
          <div class="grid__row">
            <Product :data="product" v-for="product in products.data" />
          </div>
        </div>

        <LoadMore
          :loading="loadingLoadMore"
          :handleLoadMore="handleLoadMore"
          v-if="products.pagination._nextPage"
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
