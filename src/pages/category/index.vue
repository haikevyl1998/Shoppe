<script setup>
import { getCategories, getProducts } from "@/services";
import { useRoute, useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import CategoriesList from "./CategoriesList.vue";
import Filter from "./Filter.vue";
import FilterTop from "./FilterTop.vue";
import Pagination from "../../components/Pagination.vue";
import Product from "./Product.vue";
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import FooterEnd from "@/components/FooterEnd.vue";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const category = ref({});
const products = ref({});
const loading = ref(false);

const getCategory = async (slug) => {
  loading.value = true;
  const categoryData = await getCategories({ slug });
  if (categoryData.data[0]) {
    category.value = categoryData.data[0];
    const productsData = await getProducts({
      categoryId: category.value.id,
      _limit: 10,
    });
    products.value = productsData;
    loading.value = false;
    return;
  }
  loading.value = false;
  router.push({ name: "Home" });
};

slug && getCategory(slug);
</script>

<template>
  <loading v-if="loading" />
  <div class="main" id="form-genre">
    <div class="grid__row app__content">
      <div class="grid__column-2">
        <CategoriesList />
        <Filter />
      </div>
      <div class="grid__column-10">
        <FilterTop />
        <div class="home-product">
          <div class="grid__row">
            <Product :data="product" v-for="product in products.data" />
          </div>
        </div>
        <Pagination />
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
