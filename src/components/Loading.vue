<script setup></script>

<template>
  <div id="loader">
    <div class="loader__container">
      <div class="loader__item"><span></span></div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: whitesmoke;
  transition: all 0.2s;
  opacity: 1;
  visibility: visible;
}

#loader.hide {
  opacity: 0;
  visibility: hidden;
}

#loader .loader__container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-reflect: below 1px linear-gradient(#fffcfc, #fff0f0);
}
#loader .loader__container .loader__item {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(245, 164, 164, 0.233);
  animation: animate 2s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#loader .loader__container .loader__item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to top, transparent, rgba(194, 89, 89, 0.856));
  background-size: 100px 180px;
  background-repeat: no-repeat;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

#loader .loader__container .loader__item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: rgb(255, 71, 71);
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 10px rgb(255, 71, 71), 0 0 20px rgb(255, 71, 71),
    0 0 30px rgb(255, 71, 71), 0 0 40px rgb(255, 71, 71),
    0 0 50px rgb(255, 71, 71), 0 0 60px rgb(255, 71, 71),
    0 0 70px rgb(255, 71, 71), 0 0 80px rgb(255, 71, 71),
    0 0 90px rgb(255, 71, 71), 0 0 100px rgb(255, 71, 71);
}

#loader .loader__container .loader__item span {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: whitesmoke;
  border-radius: 50%;
}
</style>
