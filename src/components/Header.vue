<script setup>
import Logo from "../svg/logo.svg?component";
</script>

<template>
  <header class="header">
    <div class="header-child">
      <div class="grid">
        <nav class="navbar">
          <ul class="navbar-list">
            <li class="navbar-list-item navbar-list-item--separate">
              Kênh Người Bán
            </li>
            <li class="navbar-list-item navbar-list-item--separate">
              Trở Thành Người Bán Shopee
            </li>
            <li
              class="navbar-list-item navbar-list-item--qr navbar-list-item--separate"
            >
              Tải Ứng Dụng
              <div class="header_qr">
                <img
                  src="@/assets/images/qrcode.png"
                  alt="qr_code"
                  class="qr_img"
                />
                <div class="header_qr-app">
                  <a href="" class="header_qr-link">
                    <img
                      src="@/assets/images/appstore.png"
                      alt="app_store"
                      class="header_qr-download"
                    />
                  </a>
                  <a href="" class="header_qr-link">
                    <img
                      src="@/assets/images/ggplay.png"
                      alt="gg_play"
                      class="header_qr-download"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li class="navbar-list-item">
              <span class="connection">Kết Nối</span>
              <a href="" class="icon-face-ins">
                <i class="icon fa-brands fa-facebook"></i>
              </a>
              <a href="" class="icon-face-ins">
                <i class="icon fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>

          <ul class="navbar-list nav-an">
            <li class="navbar-list-item navbar-list-item-has">
              <a href="" class="list-link liss__login">
                <i class="icon fas fa-bell"></i>Thông Báo
              </a>
              <div class="header__notify">
                <span class="login-noti">Đăng nhập để xem thông báo</span>
                <div class="noti-not-logged-in">
                  <a>Đăng Ký</a>
                  <a>Đăng Nhập</a>
                </div>
              </div>
            </li>
            <li class="navbar-list-item">
              <a href="" class="list-link">
                <i class="icon far fa-question-circle"></i>
                Hỗ Trợ
              </a>
            </li>
            <li class="navbar-list-item navbar-list-item-langue">
              <a href="" class="list-link list-link__more">
                <i class="icon fa-solid fa-globe"></i>
                Tiếng Việt
                <i class="icon fa-solid fa-angle-down"></i>
              </a>
              <ul class="more">
                <li class="more_langue">
                  <span>Tiếng Việt</span>
                </li>
                <li class="more_langue">
                  <span>English</span>
                </li>
              </ul>
            </li>
            <li
              class="navbar-list-item navbar-list-item--strong navbar-list-item--separate"
            >
              <a href="./form_reg.html" class="">Đăng Kí</a>
            </li>
            <li class="navbar-list-item navbar-list-item--strong">
              <a href="./form_log.html" class="">Đăng Nhập</a>
            </li>
          </ul>

          <label for="nav-input" class="nav-bars">
            <i class="fa-solid fa-bars"></i>
          </label>
          <input
            type="checkbox"
            hidden
            name=""
            class="nav__input-respon"
            id="nav-input"
          />
          <label for="nav-input" class="nav-overlay"></label>
          <div class="nav-textres">
            <div class="respon-colose">
              <label for="nav-input" class="fa-solid fa-square-xmark"></label>
            </div>
            <ul class="nav-text1">
              <div class="flex-respon">
                <i class="fa-regular fa-bell"></i>
                <li class="nav-tabmotext">
                  <a href="">Thông báo</a>
                </li>
              </div>
              <div class="flex-respon">
                <i class="fa-regular fa-circle-question"></i>
                <li class="nav-tabmotext">
                  <a href="">Hỗ trợ</a>
                </li>
              </div>
              <div class="flex-respon">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                <li class="nav-tabmotext">
                  <a href="./form_reg.html">Đăng Ký</a>
                </li>
              </div>
              <div class="flex-respon">
                <i class="fa-solid fa-registered"></i>
                <li class="nav-tabmotext">
                  <a href="./form_log.html">Đăng nhập</a>
                </li>
              </div>
              <div class="flex-respon">
                <i class="fa-solid fa-globe"></i>
                <li class="nav-tabmotext"><a href="">Tiếng việt</a></li>
              </div>
            </ul>
          </div>
        </nav>
        <!-- test -->
        <div class="header-with-seacrh">
          <label class="moblie-search" for="mobile-input-search">
            <i class="iconserach fa-solid fa-magnifying-glass"></i>
          </label>
          <!--  -->
          <router-link to="/">
            <div class="header__logo">
              <logo />
            </div>
          </router-link>

          <input
            type="checkbox"
            hidden
            id="mobile-input-search"
            class="header__search-innput"
          />

          <div class="header__search">
            <div class="header__search-input-wrap">
              <input
                type="text"
                class="header__search-input"
                placeholder="Đăng ký và nhận voucher bạn mới đến 70k!"
              />
              <div class="header__search-history">
                <ul class="history__list">
                  <li class="login__list">
                    Đăng ký và nhận voucher bạn mới đến 70k!
                  </li>
                  <li class="item__icon">
                    <img src="@/assets/images/km.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <button class="header__search-btn">
              <i class="header__search-icon fas fa-search"></i>
            </button>
          </div>
          <div class="header__cart">
            <i class="header__cart-icon fas fa-shopping-cart"></i>
            <div class="header__cart-list">
              <img
                src="@/assets/images/cart.png"
                alt=""
                class="header__cart-no-cart-img"
              />
              <span class="header__cart--no-cart-msg">Chưa có sản phẩm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <label class="grid ben">
      <ul class="heder__sort-bar">
        <li class="heder__sort-item">
          <a href="/form_detail.html" class="sort__link">Liên Quan</a>
        </li>
        <li class="heder__sort-item">
          <a href="#respon-tablet" class="sort__link">Mới Nhất</a>
        </li>
        <li class="heder__sort-item">
          <a href="" class="sort__link">Bán chạy</a>
        </li>
        <li class="heder__sort-item">
          <a href="" class="sort__link">Giá</a>
        </li>
      </ul>
    </label>
  </header>
</template>

<style scoped>
@import "@/css/header.css";
</style>
