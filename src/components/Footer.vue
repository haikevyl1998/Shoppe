<template>
  <div class="footer">
    <div class="mid">
      <slot />
    </div>
  </div>
</template>

<style>
.footer {
  min-width: 1200px;
  border-top: 4px solid rgb(247, 167, 109);
}
.mid {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}

.footer {
  min-width: 1200px;
  border-top: 4px solid rgb(247, 167, 109);
}

.footer-one {
  margin-top: 60px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}
.mid {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.chuot {
  cursor: pointer;
}
.h1-footer {
  font-size: 14px;
  color: #000000;
  margin: 0;
  line-height: 1.7;
  font-weight: 700;
}
.h1-footer p {
  display: block;
  margin-block-start: 16px;
  margin-block-end: 16px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.section-footer {
  padding-bottom: 30px;
}
.p-footer {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  line-height: 1.4;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #000000;
}
.h2-footer {
  margin: 0;
  line-height: 1.7;
  font-size: 14px;
  font-weight: 700;
}
.h2-footer span {
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
.p2-footer {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  line-height: 1.4;
  margin: 10px 0 0;
}
.span1-footer {
  line-height: 1.4;
  margin: 10px 0 0;
  color: #000000;
}
.nut {
  align-items: center;
  display: flex;
  justify-content: center;
  color: #ee4d2d;
  background: none;
  border: 0;
  outline: none;
  padding: 0;
}
.see-one-le {
  stroke: currentColor;
  fill: currentColor;
  width: 16px;
  height: 16px;
}
.see-one {
  margin-right: 10px;
}

.main {
  font-weight: 700;
  margin: 10px 0 2px;
  padding: 2px 0;
  text-transform: uppercase;
}
.main a {
}
.main-one {
  width: 100%;
  margin-bottom: 10px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
}
.footer-end {
  width: 1200px;
}
.footer-end-one {
}
.beginning-end-one {
  display: flex;
  margin: 0 -5px;
  width: 100%;
  align-items: flex-start;
  text-decoration: none;
}
.beginning-end-one,
.bachduong {
  padding: 5px;
}
.beginning-end-one :hover {
  color: rgb(216, 78, 24);
}
.bachduong {
  width: 20%;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  color: rgba(0, 0, 0, 0.54);
  list-style-type: none;
  margin: 0 0 25px;
  padding: 0;
  text-decoration: none;
}
.chamsoc {
  font-size: 12px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 20px;
  margin-top: 40px;
}
.list1 {
}
.list1 ul {
  margin-block-start: 16px;
  margin-block-end: 16px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.li-me {
  font-size: 12px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 20px;
  margin-top: 40px;
}
.me1 {
  text-transform: uppercase;
}
.list-me {
  font-size: 12px;
  margin-bottom: 12px;
  align-content: center;
  display: flex;
  text-decoration: none;
}
.list-icon {
  width: 55px;
  height: 29px;
  margin-bottom: 8px;
  margin-right: 8px;
  overflow: hidden;
  justify-content: center;
}
/* icon visa .... */
.icon1 {
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/3ce17addcf90b8cd3952b8ae0ffc1299.png);
}
.iconvisa {
  background-size: 1203.6363636363637% 1194.4444444444443%;
  background-position: 100% 44.16243654822335%;
}
.iconmarter {
  background-size: 1203.6363636363637% 741.3793103448276%;
  background-position: 63.26194398682043% 54.83870967741935%;
}
.iconjgb {
  background-size: 1203.6363636363637% 934.7826086956521%;
  background-position: 63.26194398682043% 30.729166666666668%;
}
.iconcard {
  background-size: 1324% 977.2727272727273%;
  background-position: 1.6339869281045751% 5.181347150259067%;
}
.iconcod {
  background-size: 1324% 741.3793103448276%;
  background-position: 99.50980392156863% 5.376344086021505%;
}
.icontg {
  background-size: 1203.6363636363637% 741.3793103448276%;
  background-position: 100% 67.20430107526882%;
}
.iconpay {
  background-size: 472.85714285714283% 377.1929824561403%;
  background-position: 86.01532567049809% 6.329113924050633%;
}
/* icon2 */
.iconex {
  background-size: 596.3963963963964% 1194.4444444444443%;
  background-position: 20.689655172413794% 66.49746192893402%;
}
.icona {
  background-size: 1203.6363636363637% 1194.4444444444443%;
  background-position: 42.33937397034597% 41.6243654822335%;
}
.iconb {
  background-size: 1203.6363636363637% 741.3793103448276%;
  background-position: 29.9835255354201% 44.086021505376344%;
}
.iconc {
  background-size: 517.1875% 167.96875%;
  background-position: 85.95505617977528% 100%;
}
.icond {
  background-size: 1203.6363636363637% 796.2962962962963%;
  background-position: 40.362438220757824% 88.29787234042553%;
}
.icone {
  background-size: 1203.6363636363637% 1343.75%;
  background-position: 55.518945634266885% 75.87939698492463%;
}
.iconf {
  background-size: 494.02985074626866% 741.3793103448276%;
  background-position: 57.765151515151516% 5.376344086021505%;
}
.icong {
  background-size: 1103.3333333333333% 826.9230769230769%;
  background-position: 42.691029900332225% 63.492063492063494%;
}
.iconh {
  background-size: 711.8279569892474% 413.46153846153845%;
  background-position: 33.74340949033392% 6.134969325153374%;
}
.icont {
  background-size: 919.4444444444445% 298.6111111111111%;
  background-position: 15.254237288135593% 6.993006993006993%;
}
.timo {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  align-content: center;
  display: flex;
}
.list2 {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0 0 17px;
  flex-wrap: wrap;
}
.list3 {
  margin: 10px 10px;
  flex-wrap: wrap;
}
.ciy {
  width: 190px;
}
.me-one {
  list-style-type: none;
  margin: 0 0 17px;
}
.ti {
  align-content: center;
  display: flex;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
}
.can {
  margin-left: 10px;
}
.one-meme {
  width: 100%;
}
/* begining tow */
.footer-end-tow {
}
.beginning-end-tow {
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.54);
  padding: 40px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  align-items: flex-start;
}
.beginning-end-tow,
.khuvu {
  display: flex;
}
.baoluu {
}
.khuvu {
  flex-wrap: wrap;
  justify-content: center;
  color: rgba(0, 0, 0, 0.54);
}
.khuvu div {
  padding: 0 5px;
  text-decoration: none;
}
.padong:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
/* footer end tow */
.footer-end-tow {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
  padding: 42px 0 37px;
  background: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
}
.tail {
  width: 1200px;
  margin: 0 auto;
  text-decoration: none;
}
.tail-off {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.tail-off div {
}
.tail1 {
  padding: 0 25px;
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  text-transform: uppercase;
  font-size: 12px;
}
/* icon ft */
.citymi {
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/3ce17addcf90b8cd3952b8ae0ffc1299.png);
}
.mihna {
  background-size: 551.6666666666666% 477.77777777777777%;
  background-position: 14.391143911439114% 99.41176470588235%;
}

.jeaJPZ {
  width: 120px;
  height: 45px;
}

.tai-off1 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 0;
}
.minhi {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 20px;
}
.cty {
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 8px;
}
.ssq {
  margin-bottom: 25px;
}
</style>
