<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import Loading from "@/components/Loading.vue";
import { getProducts } from "@/services";
import Footer from "@/components/Footer.vue";
import FooterEnd from "@/components/FooterEnd.vue";
import Map from "./Map.vue";
import Info from "./Info.vue";
import Shop from "./Shop.vue";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

if (!slug) {
  router.push({ name: "Home" });
}

const loading = ref(false);
const product = ref({});
const count = ref(1);

const fetchData = async () => {
  loading.value = true;
  const resp = await getProducts({ slug });
  if (resp.data.length === 0) {
    loading.value = false;
    router.push({ name: "Home" });
    return;
  }
  product.value = resp.data[0];
  loading.value = false;
};

fetchData();

const formatPrice = (price) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    price
  );

const formatNumber = (val) =>
  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const increment = () => {
  const val = parseInt(count.value) || 1;
  count.value = val + 1;
};

const decrement = () => {
  const val = parseInt(count.value);
  count.value = val > 2 ? val - 1 : 1;
};

const currentImage = ref("");
</script>

<template>
  <Loading v-if="loading" />

  <div class="mid">
    <div class="main">
      <div class="main-img card">
        <div class="img-one">
          <div class="flex flex-colum">
            <div class="img-sad">
              <div class="r70">
                <div class="img-main" style="display: none">
                  <div class="shopee-image-placeholder nL+0W5"></div>
                </div>
                <div class="Mzs0kz">
                  <div
                    class="GZ2Hvh _8akja2"
                    style="
                      background-size: contain;
                      background-repeat: no-repeat;
                    "
                    :style="`background-image: url(${
                      currentImage || product?.images?.[0]
                    });`"
                  ></div>
                </div>
              </div>
            </div>
            <div class="bachs" id="product-slider">
              <div
                class="p23-x"
                v-for="it in product.images.slice(0, 4)"
                @click="currentImage = it"
                style="cursor: pointer"
              >
                <div class="p231z">
                  <div class="dygass">
                    <div
                      class="agPpyA _8akja2"
                      style="
                        background-size: contain;
                        background-repeat: no-repeat;
                      "
                      :style="` background-image: url(${it});`"
                    ></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex ustify-center items-center hilo"
            style="margin-top: 15px"
          >
            <div class="flex items-center carda">
              <div class="chise">
                <iframe
                  src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2F127.0.0.1%3A5500%2Fshoppe%2Findex.html&amp;width=100px&amp;layout=button&amp;action=like&amp;size=large&amp;share=true&amp;height=65&amp;appId"
                  width="200px"
                  height="65"
                  style="border: none; overflow: hidden"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
            <div class="flex items-center">
              <button class="YmlR4M" tabindex="0">
                <svg width="24" height="20" class="cxDz6S">
                  <path
                    d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                    stroke="#FF424F"
                    stroke-width="1.5"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div class="M2OH5B">Đã thích (7,6k)</div>
              </button>
            </div>
          </div>
        </div>

        <div class="img-tow flex">
          <div class="div-mainchinh">
            <di class="lvd1">
              <span>{{ product.name }}</span>
            </di>
            <di class="flex lvd2">
              <div class="flex hes">
                <div class="ti2 me2">4.8</div>
                <div class="c41">
                  <div class="c42">
                    <div
                      class="c43 shopee-rating-stars__lit"
                      style="margin-left: 10px"
                    >
                      <div
                        class="c43"
                        style="color: red"
                        v-for="i in 5"
                        :key="i"
                      >
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex hes">
                <div class="MrYJVA">2,2k</div>
                <div class="Wz7RdC">đánh giá</div>
              </div>
              <div class="flex spMDOA">
                <div class="_45NQT5">
                  {{ formatNumber(product.quantity_sold) }}
                </div>
                <div class="Cv8D6q">đã bán</div>
                <div class="shopee-drawer" id="pc-drawer-id-0" tabindex="0">
                  <i class="noha ti-help-alt"></i>
                </div>
              </div>
            </di>
            <div class="lvd3" style="margin-top: 20px">
              <div class="flex flex-colum">
                <div class="flex flex-colum_adsd">
                  <div class="flex items-center">
                    <div class="flex items-center xota">
                      <div class="CDN0wz">{{ formatPrice(product.price) }}</div>
                      <div class="flex items-center tin-one">
                        <div class="pmmxKx">
                          {{ formatPrice(product.salePrice) }}
                        </div>
                        <div class="lTuS3S">47% giảm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lvd4" style="margin-top: 1.5625rem; padding: 0 1.25rem">
              <div class="flex flex-colum">
                <div
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="miniVoucherPopoverLabel"
                  class="hInOdW kdggnA j2OcJN"
                  tabindex="0"
                  style="position: relative"
                >
                  <div class="mini-vouchers bkN-VQ">
                    <div class="mini-vouchers__label">Mã giảm giá của Shop</div>
                    <div
                      class="mini-vouchers__wrapper flex flex-auto flex-no-overflow"
                    >
                      <div
                        class="mini-vouchers__vouchers flex flex-auto flex-no-overflow"
                      >
                        <div
                          class="voucher-ticket voucher-ticket--VN voucher-ticket--seller-mini-solid mini-voucher-with-popover"
                        >
                          <div class="">
                            <span
                              class="voucher-promo-value voucher-promo-value--percent"
                              >10</span
                            ><span
                              class="voucher-promo-label voucher-promo-label--percent"
                              >%</span
                            ><span
                              class="voucher-promo-label voucher-promo-label--off"
                              >GIẢM</span
                            >
                          </div>
                        </div>
                        <div class="mini-vouchers__mask"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hInOdW">
                  <label class="_0b8hHE">Deal Sốc</label>
                  <div class="FGl5oN">Mua Kèm Deal Sốc</div>
                </div>
                <div class="flex hInOdW">
                  <label class="_0b8hHE" style="margin-bottom: 60px"
                    >Vận chuyển</label
                  >
                  <div class="houdsh outtrinh">
                    <div class="hah21">
                      <div class="imgg">
                        <img
                          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/1cdd37339544d858f4d0ade5723cd477.png"
                          width="25"
                          height="15"
                          class="JuqEed"
                        />
                        Miễn phí vận chuyển
                      </div>
                      <div class="texts2">
                        Miễn phí vận chuyển cho đơn hàng trên ₫50.000 và nhiều
                        ưu đãi đặc biệt cơ hôi nhận ducati 1299 lên đến 99% hãy
                        mau nhận quà
                      </div>
                    </div>
                    <div class="flex flex-row">
                      <div class="jc4ja">
                        <div class="anhoto">
                          <img src="@/assets/images/oto.jpg" alt="" />
                        </div>
                      </div>
                      <div class="flex flex-colum">
                        <div class="flex items-center d08RAT1">
                          <div class="ggsag">Vận chuyển tới</div>
                          <div class="flex items-center">
                            <div class="UgGeSU">
                              <div class="flex items-center">
                                <span class="P7z5VV"
                                  >Xã Minh Thanh, Huyện Sơn Dương</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="uhasj">
                          <div class="NPdOlf">phí vận chuyển</div>
                          <div
                            class="shopee-drawer"
                            id="pc-drawer-id-2"
                            tabindex="0"
                          >
                            <div class="flex items-center _3AWhy3">₫0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pilo flex hInOdW">
                  <div class="flex flex-colum" style="flex: 1">
                    <div
                      class="flex items-center adda"
                      style="margin-top: 8px; flex: 1"
                    >
                      <div class="_0b8hHE">Số lượng</div>
                      <div class="flex items-center" style="flex: 1">
                        <div style="margin-right: 15px">
                          <div class="_8cX-em shopee-input-quantity">
                            <button
                              class="btn-reduce margin2icon ti-minus"
                              style="
                                color: #fff;
                                position: relative;
                                overflow: visible;
                                outline: 0;
                                background: #f05d40;
                                border: 0;
                                font-size: 24px;
                                height: 32px;
                                cursor: pointer;
                                padding: 0 12px;
                                display: block;
                              "
                              @click="decrement"
                            >
                              -
                            </button>
                            <input
                              class="quantity"
                              type="text"
                              v-model="count"
                              style="
                                width: 120px;
                                height: 32px;
                                font-size: 16px;
                              "
                            />
                            <button
                              class="btn-increase margin2icon ti-plus"
                              style="
                                color: #fff;
                                position: relative;
                                overflow: visible;
                                outline: 0;
                                background: #f05d40;
                                border: 0;
                                font-size: 24px;
                                height: 32px;
                                cursor: pointer;
                                padding: 0 12px;
                                display: block;
                              "
                              @click="increment"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <di class="lvd5">
              <div class="flex hesa">
                <button
                  type="button"
                  class="btn-add-product btn btn-tinted btn--l GfiOwy RT2b7v"
                  aria-disabled="false"
                >
                  <i class="heuas fa-solid fa-cart-plus"></i
                  ><span>thêm vào giỏ hàng</span>
                </button>
                <button
                  type="button"
                  class="btn btn-solid-primary btn--l GfiOwy"
                  aria-disabled="false"
                  style="flex: 1"
                >
                  Mua ngay
                </button>
              </div>
            </di>
          </div>
        </div>
      </div>

      <!--  -->
      <Shop />
      <Info />
    </div>

    <Map />

    <Footer>
      <FooterEnd />
    </Footer>
  </div>
</template>

<style>
@import "@/css/form_detail1.css";
</style>
